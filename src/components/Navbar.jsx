"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from 'framer-motion';
import { routes } from "@/const";


const Navbar = ({ containerStyles, linkStyles, linkUnderlineStyles }) => {
  const currentPath = usePathname();
  return (
    <motion.nav className={`${containerStyles}`}>
        {routes.map((url, i) => {
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
    </motion.nav>
  )
}

export default Navbar
