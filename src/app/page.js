import dynamic from 'next/dynamic'

import CallToAction from '@/components/CallToAction'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
const Header = dynamic(() => import('@/components/Header'), {
  ssr: true
});
import Hero from '@/components/Hero'
const ProjectsCarousel = dynamic(() => import('@/components/ProjectsCarousel'), {
  ssr: true
})
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main>
      <Header />
      <div className='max-container'>
        <Hero />
        <div className='py-10 sm:mt-5 flex flex-col'>
          <h2 className='font-medium lg:text-[30px] sm:text-[30px] xs:text-[30px] text-[25px] lg:leading-[30px]'>Known technologies</h2>
          <Skills />
        </div>
        <div className='py-10 flex flex-col gap-5'>
          <h2 className='font-medium lg:text-[30px] sm:text-[30px] xs:text-[30px] text-[25px] lg:leading-[30px] pb-5'>Preview of my projects</h2>
          <ProjectsCarousel />
        </div>
        <div className='py-10 flex flex-col'>
          <h2 className='font-medium lg:text-[30px] sm:text-[30px] xs:text-[30px] text-[25px] lg:leading-[30px]'>My experience</h2>
          <Experience />
        </div>
        <hr />
        <CallToAction />
      </div>
      <Footer />
    </main>
  )
}
