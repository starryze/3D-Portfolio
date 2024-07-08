import { Html, useProgess } from 'react-three/drei';

const Loader = () => {
  const { progress } =useProgess();

  return (
    <Html>
      <span className='canvas-load'></span>
      <p
      style></p>
    </Html>
  )
}

export default Loader