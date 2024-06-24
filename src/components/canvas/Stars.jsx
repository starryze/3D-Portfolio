import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const generateSpherePositions = (numPoints, radius) => {
  const positions = new Float32Array(numPoints * 3);

  for (let i = 0; i < numPoints; i++) {
    let x, y, z;
    do {
      x = Math.random() * 2 - 1;
      y = Math.random() * 2 - 1;
      z = Math.random() * 2 - 1;
    } while (x * x + y * y + z * z > 1);

    positions[i * 3] = x * radius;
    positions[i * 3 + 1] = y * radius;
    positions[i * 3 + 2] = z * radius;
  }

  return positions;
};

const Stars = (props) => {
  const ref = useRef();

  // Use custom data generation
  const sphere = generateSpherePositions(5000, 1.2);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  // Validate position data
  for (let i = 0; i < sphere.length; i += 3) {
    const x = sphere[i];
    const y = sphere[i + 1];
    const z = sphere[i + 2];

    if (isNaN(x) || isNaN(y) || isNaN(z)) {
      console.error(`NaN value found at index ${i / 3}: x=${x}, y=${y}, z=${z}`);
    }
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