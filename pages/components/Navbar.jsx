import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/logo.png'

const Navbar = () => {
    return (
        <div className='flex justify-center'>
            <div className='w-[1400px] flex justify-between items-center p-3 px-0 font-medium' id='container' >
                <div className='flex text-center gap-14' id='links'>
                    <div id='logo'>
                        <Image src={logo} alt='' height={50} width={50} />
                    </div>
                    <ul className='flex gap-5 items-center'>
                        <li><Link href=''>Home</Link></li>
                        <li><Link href=''>Who we are</Link></li>
                        <li><Link href=''>Our Creators</Link></li>
                    </ul>
                </div>
                <div id='icons'>
                    <button className='w-[110px] p-[8px] bg-[#da4ea2] text-white border-none rounded-[5px] cursor-pointer '>Contact us</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar