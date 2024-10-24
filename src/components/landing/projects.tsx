import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiReact, SiRust, SiPython, SiSqlite, SiPostgresql, SiJupyter, SiTurso, SiTrpc, SiCsharp, SiDotnet, SiCloudflare, SiVercel, SiPypi, SiGooglecolab } from "react-icons/si";
import Balancer from "react-wrap-balancer";

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
    description: "<strong>Fullstack SaaS application</strong> with <strong>no-code editor</strong> created to make idea validation way faster",
    image: "/portfolio/blitzy.webp",
    link: "https://blitzyapp.com",
    technologies: [SiNextdotjs, SiReact, SiTrpc, SiTypescript, SiTailwindcss, SiTurso, SiCloudflare],
  },
  {
    title: "AssistlyApp",
    description: "Web app created during a <strong>3-hour Hackathon</strong> (\"Hacknarok\") at ZSP2 Wągrowiec Highschool in 2024. Helps students <strong>manage and track their study notes in the cloud</strong>.",
    image: "/portfolio/assistly.webp",
    link: "https://hacknarock-2024.pages.dev/",
    technologies: [SiNextdotjs, SiReact, SiTrpc, SiTypescript, SiTailwindcss, SiTurso, SiCloudflare],
  },
  {
    title: "Character Factory",
    description: "Web app for <strong>creating AI characters with custom personalities</strong> using Stable Diffusion and LLM. <strong>Tens of thousands of people use this project monthly</strong>.",
    image: "/portfolio/character-factory.webp",
    github: "https://github.com/Hukasx0/character-factory",
    technologies: [SiPython, SiJupyter, SiGooglecolab],
  },
  {
    title: "AI Companion",
    description: "AI chatbot API and webui with <strong>customizable personalities</strong> and <strong>short-term and long-term memory</strong>.",
    image: "/portfolio/ai-companion.webp",
    github: "https://github.com/Hukasx0/ai-companion",
    technologies: [SiReact, SiTypescript, SiTailwindcss, SiRust, SiSqlite],
  },
  {
    title: "Aichar",
    description: "A Python library for <strong>creating/transporting/parsing AI characters</strong> between different frontends (TavernAI, SillyTavern, TextGenerationWebUI, AI-companion, Pygmalion). This library averages <strong>5,000-25,000 downloads per month (159,000 on record)</strong> on PyPI (pip install).",
    image: "/portfolio/aichar.webp",
    link: "https://pypi.org/project/aichar/",
    github: "https://github.com/Hukasx0/aichar",
    technologies: [SiRust, SiPython, SiPypi],
  },
  {
    title: "Todist",
    description: "Project created as a result of a challenge - <strong>write a simple Fullstack application with authentication in 1 day</strong>",
    image: "/portfolio/todist.webp",
    link: "https://todistapp.vercel.app/",
    github: "https://github.com/Hukasx0/todist",
    technologies: [SiNextdotjs, SiReact, SiTrpc, SiTypescript, SiPostgresql, SiVercel],
  },
  {
    title: "egzamin-inf04-rozwiazania",
    description: "<strong>Comprehensive solution guide</strong> for practical C# tasks from previous years' INF.04 exams. <strong>Invaluable resource for Polish IT students</strong> preparing for their professional certification.",
    image: "/portfolio/egzamin-inf04-rozwiazania.webp",
    github: "https://github.com/Hukasx0/egzamin-inf04-rozwiazania",
    technologies: [SiCsharp, SiDotnet],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
    <AnimatedCard key={index}>
      <Card className="overflow-hidden h-full flex flex-col">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <CardContent className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 flex-grow" dangerouslySetInnerHTML={{ __html: project.description }}></p>
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
  );

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
            <Link href="https://github.com/Hukasx0?tab=repositories" target="_blank" className="flex items-center hover:underline">
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
