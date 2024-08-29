import { Card, CardContent } from "@/components/ui/card";
import { BsBriefcase } from "react-icons/bs";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const experiences = [
    {
      title: "Founder & Full Stack Developer",
      company: "Blitzy (blitzyapp.com)",
      period: "2024 - Present",
      description: "Leading the development of Blitzy, a SaaS platform with a no-code editor for rapid idea validation. Utilizing Next.js, TypeScript, and Tailwind CSS to create a robust and user-friendly application.",
      link: "https://blitzyapp.com/"
    },
    {
      title: "Open source developer",
      company: "GitHub",
      period: "2022 - Present",
      description: "Contributing to various open-source projects, including AI Companion, Character Factory, and Aichar. Developing innovative solutions using technologies such as Next.js, Rust, Python, and SQLite to create AI-powered applications and libraries.",
      link: "https://github.com/Hukasx0"
    },
  ];

export default function Experience() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <Balancer>
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="flex flex-col items-center">
            <div className="space-y-8 max-w-2xl">
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
                      <Link href={exp.link} target="_blank" className="text-primary hover:underline">
                        {exp.company}
                      </Link>
                    </p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Balancer>
      </CardContent>
    </Card>
  );
}

