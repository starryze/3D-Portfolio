import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

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
    <>
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} position={[10, 10, 10]} />
        {computer && computer.scene && (
          <primitive object={computer.scene} />
        )}
      </mesh>
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [10, 10, 10], fov: 25 }} // Adjusted camera position
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={true} // Enable zoom for better inspection
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
