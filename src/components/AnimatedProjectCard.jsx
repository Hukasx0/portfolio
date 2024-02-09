import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { ProjectCard } from './ProjectCard';

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
};
