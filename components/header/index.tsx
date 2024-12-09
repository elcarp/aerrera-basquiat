'use client'
import { cn } from '~lib/utils'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '~public/images/AE_logo.png'

interface NavItem {
  name: string
  link: string
}

interface NavProps {
  navItems: NavItem[]
}

export default function Header() {
  return (
    <div className='w-full dark:bg-neutral-900 py-2 px-2'>
      <Navbar />
    </div>
  )
}

const Navbar = () => {
  const navItems: NavItem[] = [
    { name: 'Plan Your Visit', link: '#' },
    { name: 'Get Tickets', link: '/#tickets' },
    { name: 'Alexandre Errera', link: 'https://alexandreerrera.com/' },
  ]

  return (
    <div className='w-full'>
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </div>
  )
}

const DesktopNav: React.FC<NavProps> = ({ navItems }) => {
  const [hovered, setHovered] = useState<number | null>(null)
  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null)
      }}
      className={cn(
        'hidden lg:flex flex-row self-start bg-white dark:bg-neutral-950 items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-sm relative z-[60] w-full',
        'sticky top-40 inset-x-0'
      )}>
      <Logo />
      <div className='lg:flex flex-row flex-1 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200'>
        {navItems.map((navItem, idx) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            className='text-neutral-600 dark:text-neutral-300 relative px-4 py-2'
            key={`link-${idx}`}
            href={navItem.link}>
            {hovered === idx && (
              <motion.div
                layoutId='hovered'
                className='w-full h-full absolute inset-0 bg-gray-100 dark:bg-neutral-800 rounded-sm'
              />
            )}
            <span className='relative z-20'>{navItem.name}</span>
          </Link>
        ))}
      </div>
      <Link
        href='/#tickets'
        className='hidden md:block px-8 py-2 text-sm font-bold rounded-sm bg-black dark:bg-white dark:text-black  text-white shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.4)_inset]'>
        Tickets
      </Link>
    </motion.div>
  )
}

const MobileNav: React.FC<NavProps> = ({ navItems }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.div
        animate={{
          borderRadius: open ? '4px' : '2rem',
        }}
        key={String(open)}
        className='flex relative flex-col lg:hidden w-full justify-between items-center bg-white dark:bg-neutral-950  max-w-[calc(100vw-2rem)] mx-auto px-4 py-2'>
        <div className='flex flex-row justify-between items-center w-full'>
          <Logo />
          {open ? (
            <IconX
              className='text-black dark:text-white'
              onClick={() => setOpen(!open)}
            />
          ) : (
            <IconMenu2
              className='text-black dark:text-white'
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='flex rounded-sm absolute top-16 bg-white dark:bg-neutral-950 inset-x-0 z-20 flex-col items-start justify-start gap-4 w-full px-4 py-8'>
              {navItems.map((navItem, idx) => (
                <Link
                  key={`link-${idx}`}
                  href={navItem.link}
                  className='relative text-neutral-600 dark:text-neutral-300'>
                  <motion.span className='block'>{navItem.name} </motion.span>
                </Link>
              ))}
              <button className='px-8 py-2 w-full rounded-sm bg-black dark:bg-white dark:text-black font-medium text-white shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.4)_inset]'>
                Book a call
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

const Logo = () => {
  return (
    <Link
      href='/'
      className='font-normal flex space-x-2 items-center text-sm text-black px-2 py-1  relative z-20'>
      <Image src={logo} alt='logo' width={100} height={100} />
    </Link>
  )
}
