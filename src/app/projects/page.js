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
        <Header />
        <div className="max-container">
        <div className='sm:py-10 flex flex-col'>
          <h1 className='lg:text-[70px] sm:text-[65px] xs:text-[70px] text-[50px] lg:leading-[70px] text-center text-transparent bg-clip-text bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient py-2'>My projects</h1>
        </div>
          <div className="my-4">
            <ProjectsList />
          </div>
          <div className="py-10 flex flex-col gap-5">
            <h3 className="font-medium text-center lg:text-[25px] sm:text-[25px] xs:text-[25px] text-[25px] lg:leading-[20px]">And many other projects carried out as part of</h3>
            <h4 className="lg:text-[20px] text-center sm:text-[20px] xs:text-[20px] text-[20px] lg:leading-[15px]">
              <Link className="hover:text-muted-foreground text-foreground font-semibold" href="https://github.com/Hukasx0?tab=repositories" target="_blank">Github contributions</Link>, professional practice, school tasks and practical tests at school</h4>
          </div>
          <hr />
          <CallToAction />
        </div>
        <Footer />
      </main>
    )
  }
  