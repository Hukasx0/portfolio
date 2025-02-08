"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useState, useEffect, useRef } from "react";
import GibberishText from "./ui/animata/text/gibberish-text";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);


  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        toggleButtonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="fixed top-0 z-40 w-screen border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto" aria-label="Main navigation">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-foreground font-bold text-2xl" onClick={closeMenu}>
              <GibberishText text="Hubert Kasperek" />
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
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
            <div className="md:hidden flex items-center">
              <ThemeToggle />
              <Button
                ref={toggleButtonRef}
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="ml-2 relative"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {!mounted ? (
                  <Menu className="h-6 w-6" />
                ) : (
                  <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-6 w-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-6 w-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </Button>
            </div>
          </div>
        </div>
        <AnimatePresence>
        {isMenuOpen && (
            <motion.div
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            role="menu"
            aria-label="Mobile menu"
            >
            <motion.div 
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
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
            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
