import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three'; // Import THREE

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf")

  useEffect(() => {
    if (computer && computer.scene) {
      console.log("GLTF model loaded:", computer);

      // Adjust scale and position if necessary
      computer.scene.scale.set(1, 1, 1); // Adjust this value if needed
      computer.scene.position.set(0, 0, 0);

      // Log the scene graph for debugging
      computer.scene.traverse((node) => {
        console.log(node);
        if (node.isMesh) {
          node.material.side = THREE.DoubleSide; // Ensure materials are double-sided
        }
      });
    } else {
      console.error("Failed to load GLTF model");
    }
  }, [computer]);


  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black">
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