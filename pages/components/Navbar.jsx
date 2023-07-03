import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/Logo.png'

const Navbar = () => {
    return (
        <div className='flex justify-center'>
            <div className='w-[1400px] flex justify-between items-center p-3 px-0 font-medium' id='container' >
                <div className='flex text-center gap-14' id='links'>
                    <div id='logo'>
                        <Image src={logo} alt='' height={100} width={100} />
                    </div>
                    <ul className='flex gap-5 items-center'>
                        <li className='transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300'><Link href='/'>Home</Link></li>
                        <li className='transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300'><Link href='/#about'>Who we are</Link></li>
                        <li className='transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300'><Link href='/#creators'>Our Creators</Link></li>
                    </ul>
                </div>
                <div id='icons'>
                    <button className='w-[110px] p-[8px] bg-[#da4ea2] text-white border-none rounded-[5px] cursor-pointer transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300'>Contact us</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar