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
          <h3 className='font-medium lg:text-[30px] sm:text-[30px] xs:text-[30px] text-[25px] lg:leading-[30px]'>Known technologies</h3>
          <Skills />
        </div>
        <div className='py-10 flex flex-col gap-5'>
          <h3 className='font-medium lg:text-[30px] sm:text-[30px] xs:text-[30px] text-[25px] lg:leading-[30px]'>Preview of my projects</h3>
          <ProjectsCarousel />
        </div>
        <div className='py-10 flex flex-col'>
          <h3 className='font-medium lg:text-[30px] sm:text-[30px] xs:text-[30px] text-[25px] lg:leading-[30px]'>My experience</h3>
          <Experience />
        </div>
        <hr />
        <CallToAction />
      </div>
      <Footer />
    </main>
  )
}
