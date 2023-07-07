import React from 'react'
import { BsTwitch, BsTwitter, BsYoutube } from 'react-icons/bs'
import Image from 'next/image'

const Member = ({ name, picture, twitch, twitter, youtube }) => {
    return (
        <div className='mb-6 lg:mb-0'>
            <div
                className="block rounded-lg bg-[#df10a9] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#df10a9]">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <Image alt={name} src={picture} className="w-full rounded-t-lg h-64" height={500} width={500} />
                    <svg className="absolute text-white dark:text-neutral-700 left-0 bottom-0" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320">
                        <path fill="#df10a9"
                            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        </path>
                    </svg>
                </div>
                <div className="p-6">
                    <div className="mb-4 text-2xl font-bold">{name}</div>
                    <p className="mb-4 text-neutral-500 dark:text-neutral-300"></p>
                    <ul className="mx-auto flex list-inside justify-center gap-5">
                        <a href={twitch} target='blank'>
                            <BsTwitch />
                        </a>
                        <a href={twitter} target='blank'>
                            <BsTwitter />
                        </a>
                        <a href={youtube} target='blank'>
                            <BsYoutube />
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Member