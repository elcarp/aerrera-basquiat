import FAQSection from '~components/faq'
import { Footer } from '~components/footer'
import Header from '~components/header'
import Hero from '~components/hero'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <section
        className='font-[family-name:var(--font-geist-sans)] flex items-center bg-[#02b7f1]'
        // style={{
        //   backgroundImage: `url('/images/background.png')`,
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundPosition: 'center -400px',
        // }}
      >
        <div className='max-w-2xl mx-auto p-20'>
          <h2 className='text-center text-4xl font-medium tracking-tight text-neutral-600 dark:text-neutral-50 md:text-5xl pb-5'>
            Lorem Ipsum
          </h2>
          <p className='text-center pb-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className='block mx-auto px-4 py-2 rounded-lg bg-yellow-400 w-full sm:w-auto font-bold text-black text-base hover:[transform:rotateX(10deg)] transition duration-200 origin-left hover:shadow-lg'>
            Book your visit
          </button>
        </div>
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
