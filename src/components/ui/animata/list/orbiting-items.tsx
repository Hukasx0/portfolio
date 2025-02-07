import { cn } from "@/lib/utils";
import Image from "next/image";
import { SiDrizzle, SiNextdotjs, SiReact, SiTailwindcss, SiTurso, SiTypescript } from "react-icons/si";

export const testOrbitingItems = [
  <SiNextdotjs key="nextjs" className="h-6 w-6" />,
  <SiReact key="react" className="h-6 w-6" />,
  <SiTypescript key="typescript" className="h-6 w-6" />,
  <SiTailwindcss key="tailwind" className="h-6 w-6" />,
  <SiTurso key="turso" className="h-6 w-6" />,
  <SiDrizzle key="drizzle" className="h-6 w-6" />,
];

interface OrbitingItemsProps {
  /**
   * The radius of the circle in percentage, relative to the container.
   */
  radius: number;

  /**
   * The items to orbit around the center of the parent element.
   */
  items: React.ReactNode[];

  /**
   * Pause the animation when the parent element is hovered.
   */
  pauseOnHover?: boolean;

  /**
   * Class name for the background element.
   */
  backgroundClassName?: string;

  /**
   * Class name for the container element.
   */
  containerClassName?: string;

  /**
   * Additional classes for the item container.
   */
  className?: string;
}

const calculateItemStyle = ({
  index,
  radius,
  totalItems,
}: {
  radius: number;
  index: number;
  totalItems: number;
}) => {
  const angle = (index / totalItems) * 360;
  const radians = (angle * Math.PI) / 180;
  const x = radius * Math.cos(radians);
  const y = radius * Math.sin(radians);
  return {
    left: `${50 + x}%`,
    top: `${50 + y}%`,
    transform: "translate(-50%, -50%)",
  };
};

export default function OrbitingItems({
  radius = 50,
  items = testOrbitingItems,
  pauseOnHover,
  backgroundClassName,
  containerClassName,
  className,
}: OrbitingItemsProps) {
  // The idea is to distribute the items in a circle around the center of the parent element.
  // Then the whole parent element rotates around its center.
  // The items rotate in the opposite direction to the parent element so they appear to be stationary.

  const reverse = cn(
    "animate-[rotate-full_45s] transition-transform ease-linear direction-reverse repeat-infinite",
    {
      "group-hover:[animation-play-state:paused]": pauseOnHover,
    },
  );

  return (
    <div
      className={cn(
        "storybook-fix group flex items-center justify-center py-10",
        containerClassName,
      )}
    >
      <div
        className={cn(
          "relative flex h-64 w-64 animate-[rotate-full_45s] items-center justify-center ease-linear repeat-infinite",
          {
            "group-hover:[animation-play-state:paused]": pauseOnHover,
          },
          className,
        )}
      >
        <div className="absolute h-full w-full rounded-full border border-border" />
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="absolute flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-secondary/80 backdrop-blur-sm"
              style={calculateItemStyle({
                index,
                radius,
                totalItems: items.length,
              })}
            >
              <div className={reverse}>{item}</div>
            </div>
          );
        })}

        <div className={cn("absolute h-24 w-24 md:h-28 md:w-28 rounded-full", reverse)}>
          <Image
            src="/portfolio/avatar.webp"
            alt="Hubert"
            width={112}
            height={112}
            className="rounded-full border-2 border-border/40 animate-pulse-light"
          />
        </div>
      </div>
    </div>
  );
}
