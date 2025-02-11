"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useState, useEffect, useRef } from "react";
import GibberishText from "./ui/animata/text/gibberish-text";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const themeToggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        event.target instanceof Element &&
        event.target.closest(".theme-dropdown-content")
      ) {
        return;
      }
      if (
        menuRef.current?.contains(target) ||
        toggleButtonRef.current?.contains(target) ||
        navbarRef.current?.contains(target) ||
        themeToggleRef.current?.contains(target)
      ) {
        return;
      }

      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 250);
    return () => clearTimeout(timeout);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (isAnimating) return;
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    if (isMenuOpen && !isAnimating) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-0 z-40 w-screen border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto" aria-label="Main navigation" ref={navbarRef}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-foreground font-bold text-2xl" onClick={closeMenu}>
              <GibberishText text="Hubert Kasperek" />
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
              <a
                href="https://github.com/Hukasx0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <ThemeToggle />
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <div ref={themeToggleRef}>
                <ThemeToggle />
              </div>
              <Button
                ref={toggleButtonRef}
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                disabled={isAnimating}
                className="relative"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={`absolute top-0 left-0 w-6 h-6 transition-transform duration-200 ${
                      isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                    }`}
                  />
                  <X
                    className={`absolute top-0 left-0 w-6 h-6 transition-transform duration-200 ${
                      isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                    }`}
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div
          ref={menuRef}
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          role="menu"
          aria-label="Mobile menu"
        >
          <div
            className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-y-0" : "-translate-y-5"
            }`}
          >
            <Link
              href="#about"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
              role="menuitem"
            >
              About
            </Link>
            <Link
              href="#projects"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
              role="menuitem"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
              role="menuitem"
            >
              Contact
            </Link>
            <a
              href="https://github.com/Hukasx0"
              onClick={closeMenu}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
              role="menuitem"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
