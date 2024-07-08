import { Html, useProgess } from 'react-three/drei';

const Loader = () => {
  const { progress } =useProgess();

  return (
    <Html>
      <span className='canvas'></span>
    </Html>
  )
}

export default Loader