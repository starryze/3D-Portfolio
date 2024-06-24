import React, { Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <div>Ball</div>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false} 
        >
        </OrbitControls>
        <Computers isMobile={isMobile}></Computers>
      </Suspense>

      <Preload all></Preload>
    </Canvas>
  )
} 
export default Ball