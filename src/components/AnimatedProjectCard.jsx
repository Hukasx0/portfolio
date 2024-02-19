import { ProjectCard } from './ProjectCard';
import BackgroundGradient from './ui/background-gradient';

export const AnimatedProjectCard = ({ id, name, desc, techs, img, githubLink, currentlyWorkingOn, websitePreview}) => {
    return (
      <BackgroundGradient className="p-5 bg-secondary rounded-2xl sm:w-[360px] w-full h-full sm:p-10">
        <ProjectCard  name={name} desc={desc} techs={techs} img={img} githubLink={githubLink} currentlyWorkingOn={currentlyWorkingOn} websitePreview={websitePreview} />
      </BackgroundGradient>
    );
};
