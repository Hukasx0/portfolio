"use client";

import * as React from "react";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false)
  const [shouldRotate, setShouldRotate] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const prevTheme = React.useRef(resolvedTheme);
  React.useEffect(() => {
    if (prevTheme.current !== resolvedTheme) {
      setShouldRotate(true);
      const timeout = setTimeout(() => setShouldRotate(false), 300);
      prevTheme.current = resolvedTheme;
      return () => clearTimeout(timeout);
    }
  }, [resolvedTheme]);

  return (
    <DropdownMenu modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className={`relative ${!mounted ? "text-background pointer-events-none" : ""}`}>
          {!mounted ? (
            <Sun className="w-6 h-6" />
          ) : (
            <div className={`relative w-6 h-6 ${shouldRotate ? "animate-rotateIcon" : ""}`}>
              <div
                className={`absolute inset-0 transition-transform duration-200 ${
                  isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                }`}
              >
                {resolvedTheme === "dark" ? (
                  <Moon className="w-6 h-6" />
                ) : (
                  <Sun className="w-6 h-6" />
                )}
              </div>
              <div
                className={`absolute inset-0 transition-transform duration-200 ${
                  isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                }`}
              >
                {resolvedTheme === "dark" ? (
                  <Moon className="w-6 h-6" />
                ) : (
                  <Sun className="w-6 h-6" />
                )}
              </div>
            </div>
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount className="theme-dropdown-content">
        <div className="animate-fadeInScale" style={{ animationDuration: "0.2s" }}>
          <DropdownMenuItem
            onClick={() => {
              setTheme("light");
              setIsOpen(false);
            }}
            className="cursor-pointer"
          >
            <Sun className="w-4 h-4 mr-2" />
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setTheme("dark");
              setIsOpen(false);
            }}
            className="cursor-pointer"
          >
            <Moon className="w-4 h-4 mr-2" />
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setTheme("system");
              setIsOpen(false);
            }}
            className="cursor-pointer"
          >
            <span className="w-4 h-4 mr-2 flex items-center justify-center">
              <Laptop />
            </span>
            System
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
