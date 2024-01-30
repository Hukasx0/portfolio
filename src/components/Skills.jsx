"use client";

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
    <section className="mt-16 flex flex-wrap gap-12 justify-center">
              {skills.map((skill) => (
                <TooltipProvider key={skill.name}>
                  <Tooltip>
                    <TooltipTrigger className='cursor-default'>
                        <div className="block-container w-20 h-20">
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
