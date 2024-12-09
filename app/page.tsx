import { Footer } from '~components/footer'
import Header from '~components/header'
import Hero from '~components/hero'
import PreRegister from '~components/pre-register'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <section id='tickets'>
        <PreRegister />
      </section>
      <section>
        <Footer />
      </section>
    </>
  )
}
