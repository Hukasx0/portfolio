"use client"
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { BsCodeSlash } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

export default function Home() {
  return (
    <>
      <main className="py-12 xl:py-24 h-[84vh] xl:pt-28">
          <div className="container mx-auto">
            <div className="">
              <div className="text-center">
                <div className="text-sm uppercase font-semibold mv-4 text-primary tracking-[4px]">Fullstack Developer</div>
                <h1 className="lg:text-[80px] sm:text-[80px] xs:text-[80px] text-[64px] lg:leading-[80px]">Hi there!
                  <span className="wave lg:text-[65px] sm:text-[65px] xs:text-[65px] text-[64px] lg:leading-[80px] pl-5">👋</span>
                </h1>
                <div className="text-muted-foreground font-medium lg:text-[40px] sm:text-[40px] xs:text-[40px] text-[32px] lg:leading-[40px]">
                  <span className="font-semibold drop-shadow">my name is Hubert Kasperek</span>
              </div>
              <Link href='/contact'>
                <Button variant="default">Contact me <CiMail/></Button>
              </Link>
              <Link href='/projects'>
                <Button variant="secondary">Check my projects <BsCodeSlash/></Button>
              </Link>
              </div>
              <ProjectsCarousel />
            </div>
            <ExperienceTimeline />
          </div>
      </main>
    </>
  )
}
