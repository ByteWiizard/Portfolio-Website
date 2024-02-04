import React from 'react'
import { Html } from '@react-three/drei'

const Loader = () => {
    return (
        <Html>
            {/* Html used for rendering 2d  in 3d objects so that it can be rendered correctly*/}
            <div className='flex justify-center items-center'>
                <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'>

                </div>
            </div>
        </Html>
    )
}

export default Loader
