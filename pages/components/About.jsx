import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about'>
      <div className='h-screen snap-center w-[1400px] flex items-center mx-auto'>
        <div id='left' className='w-[1/2] flex items-center p-10'>
          <p className='w-[600px] justify-center text-lg'>
          Elevate your gaming career to new heights with Level Up Creators, 
          where we connect you with opportunities, sponsorships, and a vibrant community of fellow gaming enthusiasts. 
          Our agency understands the unique challenges and demands of the gaming industry, and we&apos;re committed to helping you navigate through them. 
          Whether you&apos;re seeking brand partnerships, tournament sponsorships, or content creation collaborations, our network and expertise will ensure you have the tools and resources you need to succeed.
          </p>
        </div>
        <div id='right' className='w-[1/] flex flex-col justify-center gap-5 '>
          <h1 className='text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600'>Think. Outside. The Box</h1>
          <div id='subtitle' className='text-[#da4ea2]'>
            <h2 className='text-xl font-semibold'>Explore the Unkown</h2>
          </div>
          <p id='description' className='text-[22px] font-semibold text-gray-300 '>Creating Personalized experiences</p>
          <Link href='/#creators'> <button className='w-[160px] px-0 p-[8px] bg-[#da4ea2] text-white border-none rounded-[5px] cursor-pointer transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 text-l font-bold'>Meet Our Talents</button> </Link>
        </div>
      </div>
    </div>
  )
}

export default About