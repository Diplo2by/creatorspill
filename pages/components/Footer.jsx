import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-col  items-center w-screen mt-40 snap-start min-[2000px]:mt-0">
            <hr className='w-[80%]' />
            <div className="flex justify-center mx-auto">
                <p className=" my-4 text-center text-gray-200 font-semibold lg:text-xl">
                    LvL up creators &copy; 2023. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer