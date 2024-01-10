import CallToAction from '@/components/CallToAction'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { ProjectsCarousel } from '@/components/ProjectsCarousel'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Skills />
      <ProjectsCarousel />
      <Experience />
      <hr />
      <CallToAction />
      <Footer />
    </main>
  )
}
