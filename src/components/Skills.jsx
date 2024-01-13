"use client";

import Link from 'next/link';
import Image from 'next/image';
import { skills } from "@/const"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Skills = () => {
  return (
    <section className="mt-16 flex flex-wrap gap-12">
              {skills.map((skill) => (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link href={`/projects/?tech=${skill.name}`}>
                        <div className="block-container w-20 h-20">
                          <div className="btn-back rounded-xl" />
                          <div className="btn-front rounded-xl flex justify-center items-center">
                            <Image 
                              src={skill.imageUrl.src} 
                              alt={skill.name} 
                              width={skill.imageUrl.width}
                              height={skill.imageUrl.height}
                              className="w-1/2 h-1/2 object-contain"
                              />
                          </div>
                        </div>
                      </Link>
                  </TooltipTrigger>
                <TooltipContent>
                <p>{skill.name}</p>
                </TooltipContent>
               </Tooltip>
              </TooltipProvider>
              )) }
    </section>
  )
}

export default Skills;
