"use client";

import * as React from "react"

import { github } from "../assets/logos/index";

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

export function ProjectsCarousel() {
  const [api, setApi] = React.useState()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
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
         plugins={[plugin.current]}>
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <div className="bg-secondary p-5 rounded-2xl sm:w-[360px] w-full">
                <ProjectCard
                    name={project.name}
                    desc={project.description}
                    techs={project.technologies}
                    img={github}
                    githubLink={project.githubLink}
                    currentlyWorkingOn={project.currentlyWorkingOn}
                />
                </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Project preview {current} of {count}
      </div>
      <p>more projects <Link href="/projects">here</Link></p>
    </div>
  )
}
