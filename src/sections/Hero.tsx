'use client'

import ArrowIcon from '@/assets/arrow-right.svg'
import Image from 'next/image';
import cogImage from '@/assets/graph.png';
import cylinderImage from '@/assets/cylinder.png';
import noodleImage from '@/assets/noodle.png';
import Typewriter from 'typewriter-effect';

const handleJoinWaitlistClick = () => {
  window.open("https://docs.google.com/forms/d/e/1FAIpQLSeYGyRhyOUBlay63K-shFmf7hM9tZSiRzm-9FrJlBA1V_y-Qg/viewform?usp=dialog", "_blank");
}

export const Hero = () => {
  const textOptions = [
    'Digital Presence Tracking',
    'Brand Mention Analytics',
    'Online Reputation Monitoring'
  ]

  return <section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#CD88FF,#EAEEFE_100%)] overflow-x-clip'>
    <div className="container">
      <div className='md:flex items-center'>
        <div className='md:w-auto'>
          <div className='flex items-center justify-center'>
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              <strong className='text-purple-700'>
                <Typewriter
                  options={{
                    strings: textOptions,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 20,
                    delay: 50,
                    // @ts-ignore
                    pauseFor: 750
                  }}
                />
              </strong>
            </div>
          </div>
          <h1 className="text-5xl md:text-5xl text-center font-bold tracking-tighter py-2 bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Track, Analyze, and Optimize Your Brand Reputation</h1>
          {/* Smarter decisions powered by AI */}
          <p className="text-lg text-[#010D3E] tracking-tight text-center mt-6">Our advanced social listening and AI-powered review monitoring tool captures customer feedback, analyzes brand mentions, and delivers actionable insights from social media and online conversations.</p>
          <div className="flex gap-1 items-center justify-center mt-[30px]">
            <button className="btn">
              <a href="#waitlist">Join Waitlist</a>
            </button>
            {/* <button className="btn btn-text gap-1">
              <span>Learn more</span>
              <ArrowIcon className="h-5 w-5" />
            </button> */}
          </div>
        </div>
        {/* <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
          <Image src={cogImage} alt='Cog image' className='hidden md:block md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0' />
          <Image src={noodleImage} width={220} alt="noodle image" className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]' />
        </div> */}
      </div>
    </div>
  </section>
};
