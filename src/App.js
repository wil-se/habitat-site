import * as THREE from 'three'
import React, { useState, useRef, Suspense, useEffect, useCallback } from 'react'
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber'
import { RoundedBoxBufferGeometry } from 'three/examples/jsm/geometries/RoundedBoxBufferGeometry'
import perlin3 from './perlin'
import usePostprocessing from './use-postprocessing'
import lerp from 'lerp'
import Logo from "./logo_black.png"

extend({ RoundedBoxBufferGeometry })

const p3 = (time, threshold) => (a, b, c) =>
  perlin3(
    Math.abs(((a + 0.5) / (NUM / 2)) * time * threshold),
    Math.abs(((b + 0.5) / (NUM / 2)) * time * threshold),
    Math.abs(((c + 0.5) / (NUM / 2)) * time * threshold)
  )
const NUM = 5
const TOT = NUM * NUM * NUM
function Cubes() {
  const instance = useRef()
  const { clock } = useThree()
  const [objects] = useState(() => [...new Array(TOT)].map(() => new THREE.Object3D()))
  const [vec] = useState(() => new THREE.Vector3())

  const update = useCallback(
    (count) => {
      const positions = []
      const time = clock.getElapsedTime() * (1 + 60 * Math.random())
      const threshold = 0.05 + 0.05 * Math.random()
      for (let z = -NUM / 2; z < NUM / 2; z += 1) {
        for (let y = -NUM / 2; y < NUM / 2; y += 1) {
          for (let x = -NUM / 2; x < NUM / 2; x += 1) {
            const fn = p3(time, threshold)
            const noise = fn(x, y, z) + fn(y, z, x) + fn(z, x, y)
            positions.push(noise > 1.5 - threshold && noise < threshold + 1.5 ? 1 : 0)
          }
        }
      }
      return [count, positions]
    },
    [clock]
  )
  const [[, positions], set] = useState(() => update(0))

  useEffect(() => {
    const id = setInterval(() => set(([count]) => update(count + 1)), 2000)
    return () => clearInterval(id)
  }, [update])

  useFrame(() => {
    let id = 0
    for (let z = -NUM / 2; z < NUM / 2; z += 1) {
      for (let y = -NUM / 2; y < NUM / 2; y += 1) {
        for (let x = -NUM / 2; x < NUM / 2; x += 1) {
          const sign = (y > 0 ? -1 : 1) * (x > 0 ? -1 : 1)
          const s = positions[id]
          objects[id].position.set(x, y, z)
          objects[id].scale.lerp(vec.set(s, s, s), 0.1)
          objects[id].rotation.x = lerp(objects[id].rotation.x, sign * (1 - s), 0.08)
          objects[id].rotation.y = lerp(objects[id].rotation.y, sign * (1 - s), 0.08)
          objects[id].rotation.z = lerp(objects[id].rotation.z, sign * (1 - s), 0.08)
          objects[id].updateMatrix()
          instance.current.setMatrixAt(id, objects[id++].matrix)
        }
      }
    }
    instance.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh position={[0.5, 0.5, 0.5]} receiveShadow castShadow ref={instance} args={[null, null, TOT]}>
      <roundedBoxBufferGeometry args={[1, 1, 1, 1, 0.05]} />
      <meshStandardMaterial color="dimgray" metalness={0} roughness={0} />
    </instancedMesh>
  )
}

function Efx() {
  usePostprocessing()
  return null
}

export default function App() {
  return (
    <>
    <div style={{textAlign: "center"}}>
      <div style={{height: "15vw"}}>
    <img alt="Logo" src={Logo} style={{width:"40%",}}/>
    </div>
    <div style={{position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1}}>
    <Canvas
      concurrent
      shadowMap
      colorManagement
      orthographic
      pixelRatio={[1, 2]}
      gl={{ powerPreference: 'high-performance', antialias: false, stencil: false, depth: false, alpha: false }}
      camera={{ position: [0, 0, 10], near: 0.1, far: 100, zoom: 40 }}>
      <color attach="background" args={['snow3']} />
      <ambientLight intensity={0.5} />
      <spotLight
        color="white"
        position={[0, 12, 20]}
        intensity={10}
        angle={Math.PI / 4}
        castShadow
        distance={40}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        penumbra={1}
      />
      <Suspense fallback={null}>
        <Efx />
        <group rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <Cubes />
        </group>
      </Suspense>
    </Canvas>
    </div>
    <div style={{position: "fixed", bottom: "0%", alignContent: "center", width: "100%", height: "200px"}}>
      <button style={{backgroundColor: "white",
  color: "black",
  borderRadius: "5px",
  fontSize: "30px",
  marginBottom: "100px",
  padding: "10px 60px",
  cursor: "pointer"}}>Enter</button>
    </div>
    </div>
    </>
  )
}

