import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.")

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"></hemisphereLight>
      <pointLight intensity={1}></pointLight>
    </mesh>>
  )
}

export default Computers