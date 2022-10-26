import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from 'react'
import { Model } from "./Poltrona";

export default function MainModel(props) {
  return <>

    <Canvas style={{cursor: 'pointer'}} camera={{ position: [0, 0, 400], fov: 25 }}>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls autoRotate enableZoom={true} />
    </Canvas>

  </>;
}

