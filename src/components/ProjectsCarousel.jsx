"use client";

import * as React from "react"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import Link from "next/link";

import Autoplay from "embla-carousel-autoplay"

import { projects } from "@/const";

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
              <Card>
                {project.currentlyWorkingOn && (
                  <p className="text-center bg-secondary">Currently working on</p>
                )}
                <CardContent className="flex aspect-square items-center justify-center p-6">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                </CardContent>
              </Card>
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
