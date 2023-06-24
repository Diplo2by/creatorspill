import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'



const Hero = () => {
    return (
        <div className='h-screen snap-center flex flex-col items-center'>
            <Navbar />
            <div id='container' className='h-screen snap-center w-[1400px] flex justify-between'>
                <div id='left' className='w-[2/5] flex flex-col justify-center gap-5'>
                    <h1 className='text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600'>Creators, Clients and More.</h1>
                    <div id='subtitle' className='text-[#da4ea2]'>
                        <h2 className='text-xl font-semibold'>in that order</h2>
                    </div>
                    <p id='description' className='text-[22px] font-semibold text-gray-300 '>Talent Management Services for People that make a difference</p>
                </div>
                <div id='right' className='w-[3/5]'>
                    <div className='top-0 right-0 bottom-0 left-0 m-auto animate-anime'>
                        <Image src='/images/game2.png' width={800} height={600} alt='Game Controller Image' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero