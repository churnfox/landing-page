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
    'Online Reputation Monitoring',
    'Competitor Analysis',
  ]

  return <div className="relative overflow-hidden bg-black pt-32 pb-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-col items-center justify-between gap-12">
        {/* Left Content */}
        <div className="text-sm inline-flex border border-purple-900 px-3 py-1 rounded-lg tracking-tight">
          <strong className='text-pink-200'>
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
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Customers are talking!
            <span className="block text-purple-600">Are you listening?</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            Your AI copilot for customer insights. Capture and analyze every
            conversation, from social media to support tickets, automatically.
          </p>
          <div className="sm:flex-row gap-4">
            <a
              href="#waitlist"
              className="inline-flex justify-center items-center px-8 py-4 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-600 transition-colors"
            >
              Join Waitlist Now
            </a>
          </div>
        </div>

        {/* Right Decorative Illustration
           <div className="relative w-28 h-28 md:w-20 md:h-20">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 rounded-lg blur-xl opacity-50 animate-pulse transform rotate-45" />
            <div className="absolute inset-4 bg-gradient-to-tr from-yellow-600 via-pink-600 to-purple-600 rounded-lg transform rotate-45" />
          </div> */}
      </div>
    </div>

    {/* Background Overlay */}
    {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603665301175-57ba46f392bf')] opacity-20" />     */}
  </div>
};
