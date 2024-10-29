import Image from 'next/image'
import Header from '~components/header'
import Hero from '~components/hero'

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <section className='h-screen font-[family-name:var(--font-geist-sans)]'></section>
    </>
  )
}
