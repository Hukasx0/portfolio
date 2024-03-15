"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-muted-foreground mt-4 mb-0 pb-0 text-center font-medium lg:text-[24px] sm:text-[18px] xs:text-[10px] text-[12px] lg:leading-[30px] italic opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" text-muted-foreground mt-4 mb-0 pb-0 text-center font-medium lg:text-[24px] sm:text-[18px] xs:text-[10px] text-[12px] lg:leading-[30px] italic leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
