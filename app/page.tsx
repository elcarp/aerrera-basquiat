import FAQSection from '~components/faq'
import { Footer } from '~components/footer'
import Header from '~components/header'
import Hero from '~components/hero'
import ScrollingCards from '~components/scrolling_cards'
import StickyScrollSection from '~components/sticky-scroll'

export default function Home() {
  const testimonials = [
    {
      quote:
        'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
      name: 'Charles Dickens',
      title: 'A Tale of Two Cities',
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: 'William Shakespeare',
      title: 'Hamlet',
    },
    {
      quote: 'All that we see or seem is but a dream within a dream.',
      name: 'Edgar Allan Poe',
      title: 'A Dream Within a Dream',
    },
    {
      quote:
        'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
      name: 'Jane Austen',
      title: 'Pride and Prejudice',
    },
    {
      quote:
        'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
      name: 'Herman Melville',
      title: 'Moby-Dick',
    },
  ]

  return (
    <>
      <Header />
      <Hero />
      <section
        className='font-[family-name:var(--font-geist-sans)] flex items-center bg-[#6adcc5]'
        // style={{
        //   backgroundImage: `url('/images/background.png')`,
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundPosition: 'center -400px',
        // }}
      >
        <div className='mx-auto p-20'>
          <h2 className='text-center text-4xl font-medium tracking-tight text-neutral-600 dark:text-neutral-50 md:text-5xl pb-5'>
            Show Highlights
          </h2>
          <div className='h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
            <ScrollingCards
              items={testimonials}
              direction='left'
              speed='slow'
            />
          </div>
          <button className='block mx-auto px-4 py-2 rounded-sm bg-yellow-400 w-full sm:w-auto font-bold text-black text-base hover:[transform:rotateX(10deg)] transition duration-200 origin-left hover:shadow-lg'>
            View Press Release
          </button>
        </div>
      </section>
      <section>
        <StickyScrollSection />
      </section>
      <section>
        <FAQSection />
      </section>
      <section>
        <Footer />
      </section>
    </>
  )
}
