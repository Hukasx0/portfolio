"use client";

import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectsList from "@/components/ProjectsList";


export default function Projects() {
    return (
      <main>
        <Header />
        <div className="max-container">
        <div className='py-10 flex flex-col'>
          <h3 className='font-medium lg:text-[35px] sm:text-[35px] xs:text-[35px] text-[35px] lg:leading-[30px]'>My projects</h3>
        </div>
          {/* projects display with search function */}
          <div className="mb-10">
            <ProjectsList />
          </div>
          <h3>And many other smaller projects carried out as part of:</h3>
          <h4>professional practice, school tasks, practical tests at school</h4>
          <hr />
          <CallToAction />
        </div>
        <Footer />
      </main>
    )
  }
  