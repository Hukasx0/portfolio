import Image from 'next/image';
import { github, githubLight } from "../assets/logos/index";
import websiteSvg from "../assets/tools/website-preview.svg";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Status } from '@/const';

export const ProjectCard = ({ name, desc, techs, img, githubLink, status, websitePreview, lightIcon }) => {
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
                        <TooltipProvider delayDuration={0}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Image
                                        src={lightIcon ? githubLight : github}
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
                                <TooltipProvider delayDuration={0}>
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
                    {(() => {
                        switch (status) {
                            case Status.currentlyWorkingOn:
                                return <p className="text-center bg-secondary">Currently working on</p>;
                            case Status.Suspended:
                                return <p className="text-center bg-destructive">Project suspended</p>;
                            case Status.Rewriting:
                                return <p className="text-center bg-primary">Rewriting project code</p>;
                            default:
                                return <br />;
                        }
                    })()}
                    <h2 className='font-bold text-[24px]'>{name}</h2>
                    <p className='mt-2 text-[14px]'>{desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {techs.map((tech) => {
                            return (
                                <TooltipProvider key={tech.name} delayDuration={0}>
                                    <Tooltip>
                                        <TooltipTrigger className='cursor-default'>
                                            <Image
                                                key={tech.name}
                                                src={tech.iconUrl}
                                                width={25}
                                                height={25}
                                                alt={tech.name}
                                                className={`${tech.darkModeInvert ? "dark:invert" : null}`}
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
