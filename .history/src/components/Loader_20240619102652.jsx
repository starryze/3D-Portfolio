import { Html, useProgess } from 'react-three/drei';

const Loader = () => {
  const { progress } =useProgess();

  return (
    <Html>
      <span className=''></span>
    </Html>
  )
}

export default Loader