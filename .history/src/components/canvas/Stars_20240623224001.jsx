import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const validatePositions = (positions) => {
  for (let i = 0; i < positions.length; i++) {
    if (isNaN(positions[i])) {
      console.error(`NaN value found in positions at index ${i}`);
      return false;
    }
  }
  return true;
};

const Stars = (props) => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });
  // Validate position data
  const validatePositions = (positions) => {
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) {
        console.error(`NaN value found in positions at index ${i}`);
        return false;
      }
    }
    return true;
  };

  if (!validatePositions(sphere)) {
    console.error("Invalid position data detected in Stars component.");
  }

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points 
      ref={ref} 
      positions={sphere} 
      stride={3} 
      frustumCulled 
      {...props}
      >
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        >
        </PointMaterial>
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <Stars> 
            <Preload all />
          </Stars>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas