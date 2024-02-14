"use client";

import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";

import Autoplay from "embla-carousel-autoplay"

import { projects } from "@/const";
import { ProjectCard } from "./ProjectCard";

export default function ProjectsCarousel() {
  const [api, setApi] = React.useState()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 470px)").matches)

    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="flex flex-col items-center">
      <Carousel 
         setApi={setApi}
         className="w-full max-w-xs"
         plugins={[plugin.current]}
         onMouseEnter={plugin.current.stop}
         onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <div className="bg-secondary p-5 rounded-2xl w-full h-full">
                <ProjectCard
                    name={project.name}
                    desc={project.description}
                    techs={project.technologies}
                    img={project.imageUrl}
                    githubLink={project.githubLink}
                    currentlyWorkingOn={project.currentlyWorkingOn}
                    websitePreview={project.websitePreview}
                />
                </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {!isMobile ? <> <CarouselPrevious /> <CarouselNext /> </> : null}
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Project preview {current} of {count}
      </div>
      <span className="hover:text-muted-foreground text-foreground font-semibold mt-5">
        <Link href="/projects">
          <button className="px-4 py-2 backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200">
            Click for more projects
          </button>
        </Link>
      </span>
    </div>
  )
}
