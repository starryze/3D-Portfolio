import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf")

  return (
    <mesh>
      <HemisphereLight intensity={0.15} groundcolor="black">
      </hemisphereLight>
      <pointLight intensity={1}>
      </pointLight>
      <primitive
        object={computer.scene}
      >
      </primitive>
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader></CanvasLoader>}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        >
        </OrbitControls>
        <Computers></Computers>
      </Suspense>

      <Preload all></Preload>
    </Canvas>
  )
}

export default Computers