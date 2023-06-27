import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, GradientTexture,GradientType } from "@react-three/drei";


const Hero = () => {
    return (
        <div className='h-screen snap-center flex flex-col items-center justify-between overflow-hidden '>
            <Navbar />
            <div id='container' className='h-screen snap-center w-[1400px] flex justify-between'>
                <div id='left' className='w-[2/5] flex flex-col justify-center gap-5'>
                    <h1 className='text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600'>Creators, Clients and More.</h1>
                    <div id='subtitle' className='text-[#da4ea2]'>
                        <h2 className='text-xl font-semibold'>in that order</h2>
                    </div>
                    <p id='description' className='text-[22px] font-semibold text-gray-300 '>Managing Talents that make a difference</p>
                </div>
                <div id='right' className='w-[3/5] relative flex items-center'>
                    <div className='h-[600px] w-[800px] absolute object-contain pr-10'>
                        <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                            <OrbitControls enableZoom={false} />
                            <ambientLight intensity={1} />
                            <directionalLight position={[3, 2, 1]} />
                            <Sphere args={[1, 100, 200]} scale={1.5}>
                                <MeshDistortMaterial
                                    attach="material"
                                    distort={0.5}
                                    speed={2}>
                                    <GradientTexture stops={[0, 0.1,1]} colors={['#ED2C52', '#db2777','#d8b4fe']} size={1000} type={GradientType.Radial} />
                                </MeshDistortMaterial>
                            </Sphere>
                        </Canvas>
                    </div>
                    <div className='object-contain top-0 right-0 bottom-0 left-0 m-auto animate-anime'>
                        <Image src='/images/game2.png' width={800} height={600} alt='Game Controller Image' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
