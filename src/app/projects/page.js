import dynamic from 'next/dynamic'

import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
const Header = dynamic(() => import('@/components/Header'), {
  ssr: true
});
import ProjectsList from "@/components/ProjectsList";
import Link from "next/link";

export const metadata = {
  title: 'Projects | Hubert Kasperek\'s portfolio website',
  description: 'Hubert \'Hukasx0\' Kasperek\'s portfolio website (project list)',
  keywords: ["portfolio", "Hubert Kasperek", "projects", "projects list", "skills", "contact", "Hukasx0", "fullstack developer", "backend developer", "frontend developer", "github",
            "Fuwa", "character factory", "ai companion", "aichar", "aichar python library", "rogger", "zsp2wagrowiec", "zsp2wagrowiec strona", "home middleman", "halm assembler", "maybe sharp"]
};

export default function Projects() {
    return (
      <main>
        <div className='inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'>
          <Header />
          <div className="max-container">
          <div className='sm:py-10 flex flex-col gap-5 xs:gap-7 sm:gap-10 md:gap-15 md:gap-10 xl:gap-14'>
            <h1 className='lg:text-[70px] sm:text-[65px] xs:text-[70px] text-[50px] lg:leading-[70px] text-center text-transparent bg-clip-text bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient py-2'>My projects</h1>
            <h2 className='text-muted-foreground text-sm sm:text-base xl:text-lg mx-5 xs:mx-10 sm:mx-20 md:mx-36 xl:mx-20'>I take great inspiration from <span className='text-primary'>creating projects that solve problems</span>, which demand a combination of <span className='text-primary'>creativity, planning, discipline, and execution</span>. With each project, I broaden my knowledge and find joy in knowing that <span className='text-primary'>hundreds, even tens of thousands of people have benefited from them.</span> Most of my projects are open source and free, allowing everyone to access, modify, and contribute to them.</h2>
          </div>
            <div className="my-4">
              <ProjectsList />
            </div>
            <div className="py-10 flex flex-col gap-5">
              <h3 className="font-medium text-center lg:text-[25px] sm:text-[25px] xs:text-[25px] text-[25px] lg:leading-[20px]">And many other projects carried out as a part of</h3>
              <h4 className="lg:text-[20px] text-center sm:text-[20px] xs:text-[20px] text-[20px] lg:leading-[15px]">
                <Link className="hover:text-muted-foreground text-stroke dark:no-stroke bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.100),theme(colors.pink.300),theme(colors.orange.400),theme(colors.pink.300),theme(colors.purple.100),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient" href="https://github.com/Hukasx0?tab=repositories" target="_blank">Github contributions</Link>, professional practice, school tasks and practical tests at school</h4>
            </div>
            <hr />
            <CallToAction />
          </div>
        </div>
        <Footer />
      </main>
    )
  }
  