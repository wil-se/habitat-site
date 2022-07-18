import { useFrame, useThree, useLoader } from 'react-three-fiber'
import * as THREE from 'three'
import { useEffect, useMemo } from 'react'
import {
  EffectComposer,
  RenderPass,
  EffectPass,
  BloomEffect,
  BlendFunction,
  GammaCorrectionEffect,
  OverrideMaterialManager,
  SMAAImageLoader,
  SMAAEffect,
  SSAOEffect,
  NormalPass,
  PredicationMode,
  TextureEffect
} from 'postprocessing'

function usePostprocessing() {
  const { gl, scene, size, camera } = useThree()
  const smaa = useLoader(SMAAImageLoader)

  const [composer] = useMemo(() => {
    OverrideMaterialManager.workaroundEnabled = true
    const composer = new EffectComposer(gl, {
      frameBufferType: THREE.HalfFloatType,
      multisampling: 0
    })
    const renderPass = new RenderPass(scene, camera)
    const normalPass = new NormalPass(scene, camera)

    const SMAA = new SMAAEffect(...smaa)
    SMAA.edgeDetectionMaterial.setEdgeDetectionThreshold(0.05)
    SMAA.edgeDetectionMaterial.setPredicationMode(PredicationMode.DEPTH)
    SMAA.edgeDetectionMaterial.setPredicationThreshold(0.002)
    SMAA.edgeDetectionMaterial.setPredicationScale(1.0)
    const edgesTextureEffect = new TextureEffect({
      blendFunction: BlendFunction.SKIP,
      texture: SMAA.renderTargetEdges.texture
    })
    const weightsTextureEffect = new TextureEffect({
      blendFunction: BlendFunction.SKIP,
      texture: SMAA.renderTargetWeights.texture
    })
    // END ANTIALIAS

    const aOconfig = {
      blendFunction: BlendFunction.MULTIPLY,
      samples: 4, // May get away with less samples
      rings: 3, // Just make sure this isn't a multiple of samples
      distanceThreshold: 1,
      distanceFalloff: 1,
      rangeThreshold: 0.5, // Controls sensitivity based on camera view distance **
      rangeFalloff: 0.5,
      luminanceInfluence: 1,
      radius: 1.1, // Spread range
      intensity: 0.8,
      bias: 0.1
    }

    const AO = new SSAOEffect(camera, normalPass.renderTarget.texture, aOconfig)
    const BLOOM = new BloomEffect({
      luminanceThreshold: 0.88,
      luminanceSmoothing: 0.2
    })

    const effectPass = new EffectPass(camera, SMAA, edgesTextureEffect, weightsTextureEffect, AO, BLOOM)
    const renderEffectPass = new EffectPass(camera, new GammaCorrectionEffect({ gamma: 0.3 }))
    renderEffectPass.encodeOutput = false // Prevent potential bugs.
    composer.addPass(renderPass)
    composer.addPass(normalPass)
    composer.addPass(effectPass)
    composer.addPass(renderEffectPass)
    return [composer]
  }, [gl, scene, camera, smaa])

  useEffect(() => void composer.setSize(size.width, size.height), [composer, size])
  useFrame((_, delta) => void composer.render(delta), -1)
}

export default usePostprocessing
