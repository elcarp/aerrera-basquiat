import { Footer } from '~components/footer'
import Header from '~components/header'
import Hero from '~components/hero'
import PreRegister from '~components/pre-register'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <section>
        <PreRegister />
      </section>
      <section>
        <Footer />
      </section>
    </>
  )
}
