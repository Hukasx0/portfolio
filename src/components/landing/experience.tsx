import { Card, CardContent } from "@/components/ui/card";
import { BsBriefcase } from "react-icons/bs";
import Link from "next/link";

const experiences = [
  {
    title: "Founder & Full Stack Developer",
    company: "Blitzy",
    period: "2024 - Present",
    description: [
      "Built SaaS no-code platform from scratch using Next.js, TypeScript and Tailwind CSS",
      "Implemented visual editor, authentication system and database integrations",
      "Empowering startups to validate ideas in hours instead of weeks"
    ],
    link: "https://blitzyapp.com/"
  },
  {
    title: "Open Source Contributor",
    company: "GitHub Projects",
    period: "2022 - Present",
    description: [
      "AI Companion: Offline AI chatbot backend with webui, CUDA/Metal support",
      "Character Factory: Full-stack studio with Stable Diffusion + LLM pipelines",
      "And many more"
    ],
    link: "https://github.com/Hukasx0"
  },
];

export default function Experience() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="flex flex-col">
            <div className="space-y-8 w-full">
              {experiences.map((exp, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                      <BsBriefcase className="text-primary-foreground w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-base font-medium mb-1">
                      <Link
                        href={exp.link}
                        target="_blank"
                        className="text-primary hover:underline"
                      >
                        {exp.company}
                      </Link>
                    </p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      {exp.description.map((item, i) => (
                        <div key={i}>{item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </CardContent>
    </Card>
  );
}
