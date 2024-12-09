import { Footer } from '~components/footer'
import Header from '~components/header'
import Hero from '~components/hero'
import PreRegister from '~components/pre-register'
import { Spectral } from 'next/font/google'
import Image from 'next/image'
import placeholder from '~public/images/placeholder.png'

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <section id='tickets'>
        <PreRegister />
      </section>
      <section>
        <div className='container mx-auto px-10 py-20'>
          <h2 className={`${spectral.className} text-6xl text-center`}>
            Exhibition Details
          </h2>
          <p className='text-center mt-8'>
            A little bit about the Basquiat Exhibition
          </p>
          <div className='lg:flex mt-10 items-center'>
            <div className='w-full lg:w-1/2 relative h-[50vh]'>
              <Image
                alt='exhibition'
                src={placeholder}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className='w-full lg:w-1/2 px-10 mt-10 lg:mt-0'>
              Jean-Michel Basquiat: The Sacred Eight will trace Basquiat&apos;s
              unique artistic oeuvre that renewed the concept of art with 60
              paintings and 30 works on paper from renowned international
              museums and private collections. In eight chapters, the exhibition
              explores key aspects of his remarkable oeuvre, including his
              striking depictions of warriors, sportsmen, heroes and saints; his
              mask-like heads; the urban milieu of 1980s New York; his
              idiosyncratic cut-and-paste sampling from his surroundings; his
              complex system of signs and symbols; and his masterful
              draughtsmanship, which reveals his singular energetic line. The
              works will be supplemented by historic documents, photographs, and
              films, giving the viewer a unique insight into the art and life of
              this extraordinary artist. The exhibition is supported by the
              Basquiat Estate.
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  )
}
