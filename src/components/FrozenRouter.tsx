"use client";

import { PropsWithChildren, useContext } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

export default function Layout(props: PropsWithChildren<{}>) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode='wait'>
        <motion.div key={pathname}>
            {props.children}
      <motion.div
        className='slide-in'
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
        <motion.div
          className='slide-out'
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
          </motion.div>
    </AnimatePresence>
  );
}
