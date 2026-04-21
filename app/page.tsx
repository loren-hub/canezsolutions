import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Problem } from '@/components/problem'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { About } from '@/components/about'
import { Team } from '@/components/team'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Process />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
