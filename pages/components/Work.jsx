import React from 'react'
import Member from './Member'

const Work = () => {
  return (
    <div className='h-screen snap-center mx-auto' id='creators'>
      <div className="container my-24 md:px-6">
        <section className="mb-32 text-center">
          <h2 className="mb-12 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600">
            Who we work <u className="text-primary dark:text-primary-400">with</u>
          </h2>
          <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
            <Member
              twitch="https://www.twitch.tv/"
              name="Sandy Plays"
              picture='/images/streamer3.jpg'
            />
            <Member
              name="Gamer Dinesh"
              picture='/images/streamer1.jpg'
            />
            <Member
            name='Chris Makise'
            picture='/images/streamer2.jpg'
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Work