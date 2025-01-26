"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiReact, SiRust, SiPython, SiSqlite, SiPostgresql, SiJupyter, SiTurso, SiTrpc, SiCsharp, SiDotnet, SiCloudflare, SiVercel, SiPypi, SiGooglecolab, SiAngular, SiBootstrap } from "react-icons/si";
import Balancer from "react-wrap-balancer";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const ImageModal = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute top-4 right-4 text-white hover:bg-white/20 z-[60]"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>
      
      <img
        src={src}
        alt={alt}
        className="max-w-[90%] max-h-[90vh] object-contain mx-auto my-auto"
        style={{
          position: 'relative',
          transform: 'none',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

const AnimatedCard = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="transition-transform duration-300 ease-in-out hover:scale-105">
        {children}
      </div>
    );
  };

  const projects = [
    {
      title: "Blitzy",
      description: "<strong>SaaS platform solving the problem of slow idea validation</strong> through visual no-code prototyping. Reduces time-to-market from weeks to hours by enabling <strong>no-code creation of basic website MVPs</strong> with <strong>built-in waitlist functionality</strong>",
      image: "/portfolio/blitzy.webp",
      link: "https://blitzyapp.com",
      technologies: [SiNextdotjs, SiReact, SiTrpc, SiTypescript, SiTailwindcss, SiTurso, SiCloudflare],
    },
    {
      title: "Character Factory",
      description: "<strong>AI persona engineering studio</strong> addressing character consistency challenges in generative AI. Combines Stable Diffusion with LLMs to enable <strong>cross-platform personality persistence</strong>, used by 25k+ monthly users for creation of roleplay characters and AI research.",
      image: "/portfolio/character-factory.webp",
      github: "https://github.com/Hukasx0/character-factory",
      technologies: [SiPython, SiJupyter, SiGooglecolab],
    },
    {
      title: "Aichar",
      description: "<strong>Python character management library</strong> for cross-platform AI personas. Enables <strong>creation/editing/export</strong> of characters across TavernAI, SillyTavern, Pygmalion and other frontends. Supports JSON/YAML/card formats with <strong>way faster processing</strong> via Rust core. <strong>738k+ PyPI downloads.</strong>",
      image: "/portfolio/aichar.webp",
      link: "https://pypi.org/project/aichar/",
      github: "https://github.com/Hukasx0/aichar",
      technologies: [SiRust, SiPython, SiPypi],
    },
    {
      title: "AI Companion",
      description: "<strong>Self-hosted AI chatbot engine</strong> with offline execution (CPU/GPU), support for Llama 2/Mistral models (.gguf), and CUDA/Metal acceleration. Features roleplay syntax (*actions*), dual memory system (short/long-term), and real-time learning. Packaged as 26MB Rust binary with web UI.",
      image: "/portfolio/ai-companion.webp",
      github: "https://github.com/Hukasx0/ai-companion",
      technologies: [SiReact, SiTypescript, SiTailwindcss, SiRust, SiSqlite],
    },
    {
      title: "AssistlyApp",
      description: "<strong>Rapid prototyping exercise</strong> demonstrating product development under time constraints. Delivered cloud note management POC in 3 hours during hackathon, <strong>solving immediate need for centralized student resources</strong>.",
      image: "/portfolio/assistly.webp",
      link: "https://hacknarock-2024.pages.dev/",
      technologies: [SiNextdotjs, SiReact, SiTrpc, SiTypescript, SiTailwindcss, SiTurso, SiCloudflare],
    },
    {
      title: "Todist",
      description: "<strong>Fullstack technical showcase</strong> proving ability to ship production-ready apps rapidly. Implemented secure task management with auth and PostgreSQL in 24h, <strong>emphasizing clean architecture patterns</strong>.",
      image: "/portfolio/todist.webp",
      link: "https://todistapp.vercel.app/",
      github: "https://github.com/Hukasx0/todist",
      technologies: [SiNextdotjs, SiReact, SiTrpc, SiTypescript, SiPostgresql, SiVercel],
    },
    {
      title: "Sharp Scheduler",
      description: "Web application for <strong>task scheduling and terminal command automation</strong> with simple and clean admin interface. Enables users to <strong>schedule, manage, and monitor system commands</strong> using advanced cron expressions and provides comprehensive execution logging.",
      image: "/portfolio/sharp-scheduler-screenshot.webp", 
      github: "https://github.com/Hukasx0/sharp-scheduler",
      technologies: [SiAngular, SiTypescript, SiDotnet, SiCsharp, SiPostgresql, SiBootstrap],
    },
    {
      title: "Backup Database Application",
      description: "Full-stack web application that <strong>automates database backups</strong> for PostgreSQL. Features include <strong>automated backups on a configurable schedule</strong>, detailed logging, and a basic dashboard.",
      image: "/portfolio/backup-db-tool.webp",
      github: "https://github.com/Hukasx0/dotnet-angular-postgres-backup-tool",
      technologies: [SiAngular, SiTypescript, SiDotnet, SiCsharp, SiBootstrap, SiPostgresql],
    },
    {
      title: "egzamin-inf04-rozwiazania",
      description: "<strong>Comprehensive solution guide</strong> for practical C# tasks from previous years' INF.04 exams. <strong>Invaluable resource for Polish IT students</strong> preparing for their professional certification.",
      image: "/portfolio/egzamin-inf04-rozwiazania.webp",
      github: "https://github.com/Hukasx0/egzamin-inf04-rozwiazania",
      technologies: [SiCsharp, SiDotnet],
    },
  ];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <>
    <AnimatedCard key={index}>
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative cursor-pointer" onClick={() => setIsImageModalOpen(true)}>
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover transition-transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0" />
        </div>
        <CardContent className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p 
            className="text-sm text-muted-foreground mb-4 flex-grow" 
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
          <div className="flex space-x-2 mb-4">
            {project.technologies.map((Tech, i) => (
              <Tech key={i} className="text-primary w-6 h-6" />
            ))}
          </div>
          <div className="flex space-x-2">
            {project.link && (
              <Button asChild variant="outline" size="sm">
                <Link href={project.link} target="_blank">Visit Site</Link>
              </Button>
            )}
            {project.github && (
              <Button asChild variant="outline" size="sm">
                <Link href={project.github} target="_blank">
                  <FaGithub className="mr-2" />
                  GitHub
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </AnimatedCard>
    {isImageModalOpen && (
      <ImageModal
        src={project.image}
        alt={project.title}
        onClose={() => setIsImageModalOpen(false)}
      />
    )}
    </>
  );
};


export default function Projects() {
  return (
    <Card id="projects" className="w-full">
      <CardContent className="p-6">
        <Balancer>
          <h2 className="text-3xl font-bold mb-6">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </Balancer>
        <div className="mt-8 text-center">
          <Button asChild variant="link" size="lg">
            <Balancer>
            <Link href="https://github.com/Hukasx0" target="_blank" className="flex items-center hover:underline">
              <FaGithub className="mr-2" />
              More projects available on my GitHub
            </Link>
            </Balancer>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
