import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about'>
      <div className='h-screen snap-center w-[1400px] flex items-center mx-auto max-sm:w-screen max-sm:flex-col-reverse'>
        <div id='left' className='w-[1/2] flex items-center p-10 max-sm:w-screen max-sm:mx-6 max-sm:px-4 max-sm:text-lg'>
          <p className='w-[600px] justify-center text-xl max-sm:text-center'>
            Welcome to LvL up Creators, where trust, transparency and reliability reign supreme!
            <br />
            <br />
            We&apos;re not your average agency; we&apos;re a quirky bunch of influencer matchmakers here to shake things up.
            <br />
            <br />
            We&apos;re all about creating influencer-powered awesomeness that delivers powerful collaborations that leave a lasting impression.

          </p>
        </div>
        <div id='right' className='flex flex-col justify-center gap-5 max-sm:w-screen max-sm:mx-6 max-sm:px-4 max-sm:items-center max-sm:text-center'>
          <div className='text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600 max-sm:text-4xl'>Trust. Transparency. Reliability.</div>
          <div id='subtitle' className='text-[#da4ea2]'>
            <h2 className='text-xl font-semibold max-sm:text-lg'>Harnessing the Power of Influencers</h2>
          </div>
          <p id='description' className='text-[22px] font-semibold text-gray-300 max-sm:text-[18px] '>Connecting Extraordinary Influencers with Awesome Brands</p>
          <Link href='/#creators'> <button className='w-[160px] px-0 p-[8px] bg-[#da4ea2] text-white border-none rounded-[5px] cursor-pointer transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 text-l font-bold'>Meet Our Talents</button> </Link>
        </div>
      </div>
    </div>
  )
}

export default About