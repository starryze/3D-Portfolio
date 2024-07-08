import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = () => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 })

  return (
    <group>
      <Points 
      ref={ref} 
      positions={sphere} 
      stride={3} 
      frustumCulled 
      {...props}
      >
        <PointMaterial
          transparent
          color=''
        >

        </PointMaterial>
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-full absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <Stars></Stars>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Stars