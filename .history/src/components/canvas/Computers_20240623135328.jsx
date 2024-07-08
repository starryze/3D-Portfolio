import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { PointLightHelper } from "three";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const ref = useRef();
  const pointLightRef = useRef();

  useEffect(() => {
    let frameId;
    const targetRotation = -0.9599; 
    const rotationSpeed = -0.0025; 

    const rotate = () => {
      if (ref.current) {
        ref.current.rotation.y += rotationSpeed;
        if (ref.current.rotation.y > targetRotation) {
          frameId = requestAnimationFrame(rotate);
        } else {
          ref.current.rotation.y = targetRotation;
          cancelAnimationFrame(frameId);
        }
      }
    };

    frameId = requestAnimationFrame(rotate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <mesh ref={ref}>
      <hemisphereLight intensity={2} groundColor='black' />
      <pointLight 
        intensity={1.5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, .75, -0.1]}
      />
    </mesh>
  );
};


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the inital value of the isMobile state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        >
        </OrbitControls>
        <Computers isMobile={isMobile}></Computers>
      </Suspense>

      <Preload all></Preload>
    </Canvas>
  );
};

export default ComputersCanvas