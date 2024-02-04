import React, { useEffect } from 'react'
import PlaneScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from "@react-three/drei";
import {useRef} from 'react'

const Plane = ({isRotating, ...props}) => {
    const ref = useRef();
    const {scene,animations} = useGLTF(PlaneScene);
    const {actions} = useAnimations(animations,ref);

    useEffect((()=>{
      // console.log(isRotating)
      if(isRotating) {
        actions['Take 001'].play();
      }
      // else{
      //   actions['Take 001'].stop();
      // }
    }),[actions,isRotating])

  return (
    // {/* by adding the ref={ref} we have access to the actions */}
    <mesh {...props} ref={ref}> 
        <primitive object={scene} />
    </mesh> 
  )
}

export default Plane
