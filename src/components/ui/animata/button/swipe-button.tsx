"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { CodeXml } from "lucide-react";

interface SwipeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  firstText: string;
  secondText: any;
  className?: string;
  firstClass?: string;
  secondClass?: string;
}

export default function SwipeButton({
  className = "",
  secondText = "Get access",
  firstText = "Get access",
  firstClass = "bg-orange-500 text-white",
  secondClass = "bg-black text-white",
  ...props
}: SwipeButtonProps) {
  const common = "block px-4 py-2 text-md duration-300 ease-in-out";
  return (
    <button
      {...props}
      className={cn("group relative w-full overflow-hidden rounded-md", className)}
    >
      <span
        className={cn(
          "absolute inset-0 translate-y-full group-hover:translate-y-0",
          common,
          secondClass,
        )}
      >
        {secondText}
      </span>
      <span
        className={cn(
          "group-hover:-translate-y-full flex items-center justify-center",
          common,
          firstClass
        )}
      >
        <span className="flex items-center justify-center">
          {firstText} <CodeXml className="w-4 h-4 ml-2 mt-1" />
        </span>
      </span>
    </button>
  );
}
