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
          <h3 className='font-medium lg:text-[35px] sm:text-[35px] xs:text-[35px] text-[35px] lg:leading-[30px]'>Known technologies</h3>
        </div>
        <Skills />
        <div className='py-10 flex flex-col'>
          <h3 className='font-medium lg:text-[35px] sm:text-[35px] xs:text-[35px] text-[35px] lg:leading-[30px]'>Preview of my projects</h3>
        </div>
        <ProjectsCarousel />
        <div className='py-10 flex flex-col'>
          <h3 className='font-medium lg:text-[35px] sm:text-[35px] xs:text-[35px] text-[35px] lg:leading-[30px]'>My experience</h3>
        </div>
        <Experience />
        <hr />
        <CallToAction />
      </div>
      <Footer />
    </main>
  )
}
