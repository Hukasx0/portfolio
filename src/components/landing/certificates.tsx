import { Card, CardContent } from "@/components/ui/card";
import { BsAward } from "react-icons/bs";
import Link from "next/link";

const certificates = [
  {
    name: "INF.03 Professional Qualification",
    issuer: "Central Examination Board of Poland",
    date: "Obtained in 2023",
    description: [
      "State-certified qualification for Programmer Technician",
      "Validates proficiency in web development and database management",
      "Covers front-end (HTML5, CSS3, JavaScript) and back-end (PHP) development",
      "Includes practical database design and implementation tasks",
      "Consists of both theoretical knowledge and practical skills assessment"
    ],
    link: ""
  },
  {
    name: "INF.04 Professional Qualification",
    issuer: "Central Examination Board of Poland",
    date: "Obtained in 2025",
    description: [
      "State-certified qualification for Programmer Technician",
      "Focuses on application development using C#, .NET, TypeScript and Angular",
      "Covers development of console, desktop, web, and mobile applications",
      "Includes object-oriented programming and algorithm implementation",
      "Consists of both theoretical knowledge and practical skills assessment"
    ],
    link: ""
  }
];

export default function Certificates() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
          <h2 className="text-3xl font-bold mb-6">Certificates</h2>
          <div className="flex flex-col space-y-8">
            {certificates.reverse().map((cert, index) => (
              <div key={index} className="flex w-full">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary dark:bg-primary">
                    <BsAward className="w-4 h-4 text-primary dark:text-secondary" />
                  </div>
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h3 className="text-lg font-semibold">{cert.name}</h3>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{cert.date}</span>
                  </div>
                  <p className="text-base font-medium mb-1">
                    {cert.link ? (
                      <Link href={cert.link} target="_blank" className="text-primary hover:underline">
                        {cert.issuer}
                      </Link>
                    ) : (
                      <span className="text-foreground">{cert.issuer}</span>
                    )}
                  </p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    {cert.description.map((item, i) => (
                      <div key={i}>{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
      </CardContent>
    </Card>
  );
}