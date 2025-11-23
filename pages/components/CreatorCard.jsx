import React from 'react'
import Image from 'next/image'
import { BsTwitch, BsTwitter, BsYoutube } from 'react-icons/bs'

const CreatorCard = ({ name, picture, twitch, twitter, youtube }) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative h-80 w-full overflow-hidden">
                <Image
                    src={picture}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                <h3 className="mb-1 text-2xl font-bold tracking-tight">{name}</h3>
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 mb-4" />
                <div className="flex gap-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 delay-75">
                    {twitch && (
                        <a
                            href={twitch}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-[#9146FF] transition-colors transform hover:scale-110"
                            aria-label={`${name}'s Twitch`}
                        >
                            <BsTwitch size={24} />
                        </a>
                    )}
                    {youtube && (
                        <a
                            href={youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-[#FF0000] transition-colors transform hover:scale-110"
                            aria-label={`${name}'s YouTube`}
                        >
                            <BsYoutube size={24} />
                        </a>
                    )}
                    {twitter && (
                        <a
                            href={twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-[#1DA1F2] transition-colors transform hover:scale-110"
                            aria-label={`${name}'s Twitter`}
                        >
                            <BsTwitter size={24} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CreatorCard
