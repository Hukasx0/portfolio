"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { skills } from "@/const"

const AnimatedTooltip = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {skills.map((item, idx) => (
        <div
          className="relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/8 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-card z-50 shadow-xl px-4 py-2 border border-border"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-violet-500 to-transparent h-px " />
                <div className="font-bold text-dark dark:text-white relative z-30 text-base">
                  {item.name}
                </div>
                <div className="text-dark dark:text-white text-xs">{item.type}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="block-container w-20 h-20">
            <div className="btn-front bg-secondary rounded-xl flex justify-center items-center">
              <Image 
                onMouseMove={handleMouseMove}
                src={item.imageUrl.src} 
                alt={item.name} 
                width={item.imageUrl.width}
                height={item.imageUrl.height}
                className={`w-1/2 h-1/2 object-contain ${item.darkModeInvert ? "dark:invert" : null}`}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnimatedTooltip;
