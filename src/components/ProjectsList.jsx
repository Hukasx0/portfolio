import { projects } from '@/const';
import ProjectCard from './ProjectCard';
import { github } from "../assets/logos/index";

const ProjectsList = () => {
  return (
    <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, i) => {
            return (
                <ProjectCard
                    key={i}
                    id={i}
                    name={project.name}
                    desc={project.description}
                    techs={project.technologies}
                    img={github}
                    githubLink={project.githubLink}
                    currentlyWorkingOn={project.currentlyWorkingOn}
                />
            );
        })}
    </div>
  )
}

export default ProjectsList