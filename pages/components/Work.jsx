import React from 'react'
import Member from './Member'
import YtMember from './YtMember'

const Work = () => {
  return (
    <div className='h-screen snap-center mx-auto' id='creators'>
      <div className="container my-24 md:px-6 lg:mx-auto">
        <section className="mb-32 text-center snap-end">
          <h2 className="mb-12 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600">
            Who we work <u className="text-primary dark:text-primary-400">with</u>
          </h2>
          <div className="w-[90%] mx-auto grid gap-7 md:grid-cols-3 lg:gap-x-12">
            <Member
              twitch="https://www.twitch.tv/xcaliburye/"
              name="Xcalibur Ye"
              picture='/images/creators/xcali2.jpg'
              youtube = 'https://www.youtube.com/c/xcaliburye'
              twitter = 'https://twitter.com/XcaliburYe'

            />
            <Member
              name="Rezone Games"
              picture='/images/creators/rezone.jpg'
              twitch={'https://www.twitch.tv/rezonegames'}
              youtube={'https://www.youtube.com/channel/UCtEuxAdDjHzFhq6QL0rgSRw'}
              twitter={'https://twitter.com/RezoneGAMES'}
            />
            <Member
              name='AttackerDota'
              picture='/images/creators/attacker.avif'
              twitch={'https://www.twitch.tv/attacker'}
              youtube={'https://www.youtube.com/@Attackerdota/'}
              twitter={'https://twitter.com/attackerdota'}
            />
            <YtMember
              name='Fady'
              picture='/images/creators/fady3.jpg'
              youtube={'https://www.youtube.com/@FadyOfficial'}
              twitter={'https://twitter.com/FadyYT'}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Work