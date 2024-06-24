import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  // Detailed logging for position values
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