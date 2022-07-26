import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from 'react'


export default function MainModel(props) {
    const { scene } = useGLTF("/armandone_nazionale.glb");
    return <> 
    
    <Canvas camera={{ position: [100, 0, 400], fov: 50 }}>
  <ambientLight intensity={1} />
    <Suspense fallback={null}>
    <primitive object={scene} />
    </Suspense>
  <OrbitControls autoRotate enableZoom={window.innerWidth > 600 ? false : true}/>
</Canvas>

</>;
  }

