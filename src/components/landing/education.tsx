import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import Balancer from "react-wrap-balancer";

const educations = [
  {
    school: "ZSP2 Wągrowiec Highschool",
    degree: "Programmer Major",
    period: "2020 - 2025",
    description: "Focused on computer science and programming fundamentals, preparing for a career in software development.",
    logo: "/zsp2wagrowiec.svg"
  },
];

export default function Education() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <Balancer>
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="space-y-8">
            {educations.map((edu, index) => (
              <div key={index} className="flex">
                <div className="mr-4 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary overflow-hidden">
                    <Image
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h3 className="text-lg font-semibold">{edu.school}</h3>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-base font-medium mb-1">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Balancer>
      </CardContent>
    </Card>
  );
}
