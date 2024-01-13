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
      <div className='max-container'>
        <Hero />
        <div className='py-10 flex flex-col'>
          <h3 className='font-medium lg:text-[25px] sm:text-[25px] xs:text-[25px] text-[25px] lg:leading-[20px]'>Known technologies</h3>
        </div>
        <Skills />
        <div className='py-10 flex flex-col'>
          <h3 className='font-medium lg:text-[25px] sm:text-[25px] xs:text-[25px] text-[25px] lg:leading-[20px]'>Preview of my projects</h3>
        </div>
        <ProjectsCarousel />
        <div className='py-10 flex flex-col'>
          <h3 className='font-medium lg:text-[25px] sm:text-[25px] xs:text-[25px] text-[25px] lg:leading-[20px]'>My experience</h3>
        </div>
        <Experience />
        <hr />
        <CallToAction />
      </div>
      <Footer />
    </main>
  )
}
