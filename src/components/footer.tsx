"use client";

import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Footer() {
  const { toast } = useToast();
  const [email] = useState("hubertkasp13@gmail.com");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      toast({
        title: "Email copied!",
        description: "The email address has been copied to your clipboard.",
      });
    });
  };

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} <b>Hubert Kasperek</b>
            </p>
          </div>
          <nav className="flex space-x-4">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://github.com/Hukasx0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="My GitHub account">
                <FaGithub className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com/Hukasx0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="My Twitter/X account">
                <FaTwitter className="w-5 h-5" />
            </Link>
            <button onClick={handleCopyEmail} className="text-muted-foreground hover:text-foreground transition-colors" value={"copy e-mail address to clipboard"} aria-label="Copy my e-mail address to clipboard">
                <MdEmail className="w-5 h-5" />
            </button>
            <Link href="https://www.producthunt.com/@Hukasx0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="My Product Hunt account">
                <FaProductHunt className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

