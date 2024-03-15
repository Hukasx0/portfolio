import dynamic from 'next/dynamic'

import CallToAction from '@/components/CallToAction'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
const Header = dynamic(() => import('@/components/Header'), {
  ssr: true
});
const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: true
});
const ProjectsCarousel = dynamic(() => import('@/components/ProjectsCarousel'), {
  ssr: true
});
import Skills from '@/components/Skills';
import About from '@/components/About';

export default function Home() {
  return (
    <main>
      <div className='inset-0 -z-10 h-full pb-10 w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'>
        <Header />
        <div className='hero-container'>
          <Hero />
          <div className='py-10 sm:mt-5 flex flex-col'>
            <h2 className='font-medium lg:text-[30px] sm:text-[30px] xs:text-[30px] text-[25px] lg:leading-[30px]'>Known technologies</h2>
            <Skills />
          </div>
          <div className='py-10 flex flex-col gap-5'>
            <h2 className='font-medium lg:text-[30px] sm:text-[30px] xs:text-[30px] text-[25px] lg:leading-[30px] pb-5 md:pb-10'>Preview of my projects</h2>
            <ProjectsCarousel />
          </div>
          <div className='py-10 flex flex-col'>
            <h2 className='font-medium lg:text-[30px] sm:text-[30px] xs:text-[30px] text-[25px] lg:leading-[30px]'>My experience</h2>
            <Experience />
          </div>
          <div className='py-10 flex flex-col'>
            <h2 className='font-medium lg:text-[30px] sm:text-[30px] xs:text-[30px] text-[25px] lg:leading-[30px]'>About me</h2>
            <About />
          </div>
          <hr />
          <CallToAction />
        </div>
      </div>
      <Footer />
    </main>
  )
}
