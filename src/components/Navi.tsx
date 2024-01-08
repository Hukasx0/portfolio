import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from 'framer-motion';

interface NaviProps {
    containerStyles: string,
    linkStyles: string,
    linkUnderlineStyles: string,
}

const urls = [
    { path: "/", name: "Home" },
    { path: "/skills", name: "Skills" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" }
];

const Navi: React.FC<NaviProps> = ({ containerStyles, linkStyles, linkUnderlineStyles }) => {
  const currentPath = usePathname();
  return (
    <nav className={`${containerStyles}`}>
        {urls.map((url, i) => {
            return (
            <Link 
                href={url.path}
                key={i}
                className={`capitalize ${linkStyles}`}
            >
                {url.path === currentPath && (
                    <motion.span 
                        initial={{y: '-100%'}}
                        animate={{y: 0}}
                        transition={{type: 'tween'}}
                        layoutId='underline' 
                        className={`${linkUnderlineStyles}`}
                    />
                )}
                {url.name}
            </Link>)
        })}
    </nav>
  )
}

export default Navi