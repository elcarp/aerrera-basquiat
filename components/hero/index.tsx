'use client'
import { Spectral } from 'next/font/google'
import React from 'react'
import placeholder from '~public/images/placeholder.png'
import Image from 'next/image'

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Hero() {
  return (
    <>
      <div className='container mx-auto lg:flex px-10 lg:px-6'>
        <div className='w-full lg:w-1/2 py-10'>
          <h1 className={`${spectral.className} text-6xl`}>
            Jean-Michel Basquiat: The Sacred Eight
          </h1>
        </div>
        <div className='w-full lg:w-1/2 py-10'>
          <p>
            Join us for an unforgettable journey through the iconic works of
            Jean-Michel Basquiat. The exhibition runs from March 24 to May 5,
            2025, at The Henderson in Central, Hong Kong. Public opening March
            28, 2025.
          </p>
          <div className='flex mt-5'>
            <button className='hidden md:block px-8 py-2 text-sm font-bold rounded-sm bg-black dark:bg-white dark:text-black  text-white shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.4)_inset]'>
              Tickets
            </button>
            <button className='ml-3 hidden md:block px-8 py-2 text-sm font-bold rounded-sm bg-white border border-black dark:bg-white dark:text-black  text-black shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.4)_inset]'>
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className='w-full container mx-auto relative h-[75vh] mb-20'>
        <Image src={placeholder} layout='fill' objectFit='cover' alt='hero' />
      </div>
    </>
  )
}
