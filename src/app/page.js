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
      <div className='py-10 flex flex-col'>
        <h3>Known technologies</h3>
      </div>
      <Skills />
      <div className='py-10 flex flex-col'>
        <h3>Preview of my projects</h3>
      </div>
      <ProjectsCarousel />
      <div className='py-10 flex flex-col'>
        <h3>My experience</h3>
      </div>
      <Experience />
      <hr />
      <CallToAction />
      <Footer />
    </main>
  )
}
