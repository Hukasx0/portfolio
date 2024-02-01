import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectsList from "@/components/ProjectsList";
import Link from "next/link";

export const metadata = {
  title: 'Projects | Hubert Kasperek\'s portfolio website',
  description: 'Hubert \'Hukasx0\' Kasperek\'s portfolio website (project list)',
  keywords: ["portfolio", "Hubert Kasperek", "projects", "projects list", "skills", "contact", "Hukasx0", "fullstack developer", "backend developer", "frontend developer"]
};

export default function Projects() {
    return (
      <main>
        <Header />
        <div className="max-container">
        <div className='sm:py-10 flex flex-col'>
          <h3 className='font-medium lg:text-[35px] sm:text-[35px] xs:text-[35px] text-[35px] lg:leading-[30px]'>My projects</h3>
        </div>
          <div className="mb-10">
            <ProjectsList />
          </div>
          <div className="py-10 flex flex-col gap-5">
            <h3 className="font-medium text-center lg:text-[25px] sm:text-[25px] xs:text-[25px] text-[25px] lg:leading-[20px]">And many other projects carried out as part of</h3>
            <h4 className="lg:text-[20px] text-center sm:text-[20px] xs:text-[20px] text-[20px] lg:leading-[15px]">
              <Link className="hover:text-muted-foreground text-foreground font-semibold" href="https://github.com/Hukasx0?tab=repositories" target="_blank">Github contributions</Link>, professional practice, school tasks, practical tests at school</h4>
          </div>
          <hr />
          <CallToAction />
        </div>
        <Footer />
      </main>
    )
  }
  