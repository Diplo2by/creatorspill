import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about'>
      <div className='h-screen snap-center w-[1400px] flex items-center mx-auto'>
        <div id='left' className='w-[1/2] flex items-center p-10'>
          <p className='w-[600px] justify-center text-xl '>
            Welcome to LvL up Creators, where trust, transparency and reliability reign supreme!
            <br />
            <br />
            We&apos;re not your average agency; we&apos;re a quirky bunch of influencer matchmakers here to shake things up.
            <br />
            <br />
            We&apos;re all about creating influencer-powered awesomeness that delivers powerful collaborations that leave a lasting impression.

          </p>
        </div>
        <div id='right' className='w-[1/] flex flex-col justify-center gap-5 '>
          <h1 className='text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600'>Trust. Transparency. Reliability.</h1>
          <div id='subtitle' className='text-[#da4ea2]'>
            <h2 className='text-xl font-semibold'>Harnessing the Power of Influencers</h2>
          </div>
          <p id='description' className='text-[22px] font-semibold text-gray-300 '>Connecting Extraordinary Influencers with Awesome Brands</p>
          <Link href='/#creators'> <button className='w-[160px] px-0 p-[8px] bg-[#da4ea2] text-white border-none rounded-[5px] cursor-pointer transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 text-l font-bold'>Meet Our Talents</button> </Link>
        </div>
      </div>
    </div>
  )
}

export default About