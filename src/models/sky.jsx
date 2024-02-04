import React from 'react'
import SkyScene from '../assets/3d/sky.glb'
import { useGLTF } from "@react-three/drei";
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';


const sky = ({ isRotating }) => {
  const skyRef = useRef();
  const sky = useGLTF(SkyScene);

  useFrame((_,delta) => {
    skyRef.current.rotation.x += 0.001;
    skyRef.current.rotation.y += 0.15*delta;
  });
  return (
    <mesh ref={skyRef}>
      {/* using div or section we will not work mesh is required 
        we will use something known as primitive element our island was not a primitive element it was created with lot of meshes that together created island
        so all 3d model will be in mesh single 
        */}
      <primitive object={sky.scene} />
    </mesh>
  )
}

export default sky
