import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Problem } from '@/components/problem'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { About } from '@/components/about'
import { Team } from '@/components/team'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export const dynamic = 'force-static'
export const revalidate = 3600

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Problem />
      <Services />
      <Process />
      <About />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}
