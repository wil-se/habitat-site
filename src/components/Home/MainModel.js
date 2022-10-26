import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from 'react'
import { Model } from "./Poltrona";

export default function MainModel(props) {
  const { scene } = useGLTF("/armandone_nazionale.glb");
  return <>

    <Canvas camera={{ position: [0, 0, 400], fov: 25 }}>
      <ambientLight intensity={1} />
      <spotLight intensity={1} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>

  </>;
}

