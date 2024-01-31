import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import Image from 'next/image';
import { github } from "../assets/logos/index";
import websiteSvg from "../assets/tools/website-preview.svg";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

export const ProjectCard = ({ name, desc, techs, img, githubLink, currentlyWorkingOn, websitePreview }) => {
    return (
        <div>
                <div className="relative w-full h-[230px]">
                    <Image
                        src={img}
                        alt={name}
                        width={500}
                        height={500}
                        className='w-full h-full object-cover rounded-2xl'
                        />
                    <div className="absolute inset-0 flex justify-end m-3 gap-2">
                        <div
                            onClick={() => window.open(githubLink, "_blank")}
                            className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Image
                                        src={github}
                                        alt={`${name} GitHub url`}
                                        className='w-full h-full object-cover rounded-2xl z-10'
                                    />
                                </TooltipTrigger>
                            <TooltipContent className="z-100">
                                <p className='z-100'>{`Check ${name} on GitHub!`}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                        </div>
                        {websitePreview && (
                            <div
                            onClick={() => window.open(websitePreview, "_blank")}
                            className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                            >
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Image
                                                src={websiteSvg}
                                                alt={`${name} website preview`}
                                                className='w-full h-full object-cover rounded-2xl z-10'
                                            />
                                        </TooltipTrigger>
                                        <TooltipContent className="z-100">
                                            <p className='z-100'>{`Check ${name} preview!`}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        )
                        }
                    </div>
                </div>
                <div className="mt-5">
                    {currentlyWorkingOn ? (
                        <p className="text-center bg-secondary">Currently working on</p>
                     )
                     : (
                        <br />
                     )
                    }
                    <h3 className='text-primary font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-primary text-[14px]'>{desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {techs.map((tech) => {
                            return (
                                <TooltipProvider key={tech.name}>
                                    <Tooltip>
                                        <TooltipTrigger className='cursor-default'>
                                            <Image
                                                key={tech.name}
                                                src={tech.iconUrl}
                                                width={25}
                                                height={25}
                                                alt={tech.name}
                                            />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{tech.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            )
                        })}
                    </div>
                </div>
            </div>
    )
};

export const AnimatedProjectCard = ({ id, name, desc, techs, img, githubLink, currentlyWorkingOn, websitePreview}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", id * 0.5, 0.75)}>
            <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            className="bg-secondary p-5 rounded-2xl sm:w-[360px] w-full h-full">
                <ProjectCard  name={name} desc={desc} techs={techs} img={img} githubLink={githubLink} currentlyWorkingOn={currentlyWorkingOn} websitePreview={websitePreview} />
            </Tilt>
            </motion.div>
    );
}
