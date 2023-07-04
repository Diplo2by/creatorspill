import React from 'react'

const Footer = () => {
    return (
        <footer className="flex flex-col items-center w-screen mt-40 snap-start min-[2000px]:mt-0 max-sm:hidden" id='footer'>
            <hr className='w-[80%]' />
            <div className="flex justify-center mx-auto">
                <p className=" my-4 text-center text-gray-200 font-semibold lg:text-xl">
                    LvL up creators &copy; 2023. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer