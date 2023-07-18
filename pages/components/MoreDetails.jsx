import React from 'react'
import Link from 'next/link'
const MoreDetails = () => {
    return (
        <div>
            <div className='text-center text-xl snap-start mt-0 my-1 max-sm:text-lg max-sm:my-4'>
                Have More Queries? <Link href={'mailto:sayhi@lvlupCreators.com'}> <span className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600'>Write to us.</span>  </Link>
            </div>
        </div>
    )
}

export default MoreDetails