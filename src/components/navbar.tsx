"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed md:sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="mx-auto" aria-label="Main navigation">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="text-foreground font-bold text-2xl">
                            Hubert Kasperek
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
                            <a href="https://github.com/Hukasx0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                GitHub
                            </a>
                            <ThemeToggle />
                        </div>
                        <div className="md:hidden flex items-center">
                            <ThemeToggle />
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleMenu}
                                className="ml-2"
                                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isMenuOpen}
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden" role="menu" aria-label="Mobile menu">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors" role="menuitem">
                                About
                            </Link>
                            <Link href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors" role="menuitem">
                                Projects
                            </Link>
                            <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors" role="menuitem">
                                Contact
                            </Link>
                            <a href="https://github.com/Hukasx0" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors" role="menuitem">
                                GitHub
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}
