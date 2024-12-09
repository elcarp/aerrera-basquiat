'use client'
import { Spectral } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import { Label } from '~components/ui/label'
import { Input } from '~components/ui/input'
import { cn } from '~lib/utils'

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function PreRegister() {
  const [showModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    if (showModal == true) {
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }
  }, [showModal])

  const BottomGradient = () => {
    return (
      <>
        <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
        <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
      </>
    )
  }

  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode
    className?: string
  }) => {
    return (
      <div className={cn('flex flex-col space-y-2 w-full', className)}>
        {children}
      </div>
    )
  }

  return (
    <>
      <div
        onClick={() => setShowModal(false)}
        className={`modal-overlay ${
          showModal == true ? 'fixed' : 'hidden'
        }  bg-black opacity-50 w-full h-full top-0 cursor-pointer`}
      />
      <div
        className={`modal ${
          showModal == true ? 'block' : 'hidden'
        } bg-white p-10 absolute left-0 right-0 z-50 w-1/2 mx-auto`}>
        <form className='my-8'>
          <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
            <LabelInputContainer>
              <Label htmlFor='firstname'>First name</Label>
              <Input id='firstname' placeholder='Your given name' type='text' />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor='lastname'>Last name</Label>
              <Input id='lastname' placeholder='Your surname' type='text' />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className='mb-4'>
            <Label htmlFor='email'>Email Address</Label>
            <Input id='email' placeholder='Your email address' type='email' />
          </LabelInputContainer>
          <button
            className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
            type='submit'>
            Sign up &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
      <div className='container mx-auto px-10 lg:px-6 py-10'>
        <h2 className={`${spectral.className} text-6xl text-center mx-auto`}>
          Pre-register
        </h2>
        <p className='text-center max-w-lg mx-auto mt-8'>
          Register to be among the first to get updates on the exhibition
        </p>
        <button
          onClick={() => setShowModal(true)}
          className='mx-auto block mt-8 px-8 py-2 text-sm font-bold rounded-sm bg-black dark:bg-white dark:text-black  text-white shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.4)_inset]'>
          Register
        </button>
      </div>
    </>
  )
}
