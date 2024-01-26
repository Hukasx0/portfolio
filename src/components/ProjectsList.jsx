import { projects } from '@/const';
import { AnimatedProjectCard } from './ProjectCard';
import { github } from "../assets/logos/index";

const ProjectsList = () => {
  return (
    <div className='mt-20 flex flex-wrap gap-7 justify-center'>
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
                    currentlyWorkingOn={project.currentlyWorkingOn}
                    websitePreview={project.websitePreview}
                />
            );
        })}
    </div>
  )
}

export default ProjectsList