"use client";

import { projects } from '@/const';
import { AnimatedProjectCard } from './AnimatedProjectCard';

const ProjectsList = () => {
  return (
    <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {projects.map((project, i) => {
            return (
                <AnimatedProjectCard
                    key={i}
                    id={i}
                    name={project.name}
                    desc={project.description}
                    techs={project.technologies}
                    img={project.imageUrl}
                    githubLink={project.githubLink}
                    status={project.status}
                    websitePreview={project.websitePreview}
                    lightIcon={project.lightIcon}
                />
            );
        })}
    </div>
  )
}

export default ProjectsList