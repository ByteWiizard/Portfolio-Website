import { React, Suspense, useState,useEffect,useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../Components/Loader'
import HomeBase from '../models/island'
import Sky from '../models/sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../Components/HomeInfo'
import Sound from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'

const Home = () => {
  const audioRef = useRef(new Audio(Sound));
  audioRef.current.volume=0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPLayingMusic, setIsPLayingMusic] = useState(false);

  useEffect(() => {
    if(isPLayingMusic){
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    }
  })
  const adjustIslandForScreenSize = () => {
    let ScreenScale;
    let ScreenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0]

    if (window.innerWidth < 768) {
      ScreenScale = [0.9, 0.9, 0.9];
    }
    else {
      ScreenScale = [1, 1, 1];
    }

    return [ScreenScale, ScreenPosition, rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let ScreenScale, ScreenPosition;

    let rotation = [0.1, 4.7, 0]

    if (window.innerWidth < 768) {
      ScreenScale = [1.5, 1.5, 1.5];
      ScreenPosition = [0, -1.5, 0]
    }
    else {
      ScreenScale = [3, 3, 3];
      ScreenPosition = [0, -4, -4]
    }

    return [ScreenScale, ScreenPosition];
  }





  const [isLandScale, isLandPosition, isLandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className='w-full h-screen relative'>

      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
          {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ?
        'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        {/* Canvas acts as the root component which sets the 3d scene  all 3d objects render in this canvas*/}

        <Suspense fallback={<Loader />}>
          {/* 3d model will take some time to load so in the mean time loader will  be shown to give some loading effects */}
          {/* Used as wrapper , used for rendering loading screen*/}


          <directionalLight
            position={[1, 1, 1]}
            intensity={2}
          />
          {/* simulates distant light coming from distant source like sun*/}


          <ambientLight intensity={0.5} />
          {/* illuminate all objects in scene equally without casting shadows so position is not required*/}


          {/* <pointLight /> */}
          {/* emitts light in all dir from single point (like a bulb) we wont need it coz we are outside we have sun, ambient light so removed it */}



          {/* <spotLight /> */}
          {/* similar to point light but in shape of cone providing light we wont need it again */}


          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
          {/* it illuminate the scene with the gradient  */}

          <Bird
            isRotating={isRotating}
          />
          <Sky
            isRotating={isRotating}
          />
          <HomeBase
            position={isLandPosition}
            scale={isLandScale}
            rotation={isLandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img src={!isPLayingMusic ? soundon : soundoff}
        alt='sound'
        className='w-10 h-10 cursor-pointer object-contain'
        onClick={()=>{
          setIsPLayingMusic(!isPLayingMusic)
        }}
        />
      
      </div>
    </section>
  )
}

export default Home
