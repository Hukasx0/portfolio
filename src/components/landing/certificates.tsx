import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

const certificates = [
    {
        name: "INF.03 Professional Qualification",
        issuer: "Central Examination Board of Poland",
        date: "Obtained in 2023",
        description: "A state-certified qualification for the profession of Software Developer Technician. This official Polish government certification validates proficiency in designing and developing websites, web applications, and databases. It's a crucial part of the vocational education system, recognized nationally by employers and educational institutions. The exam covers practical skills in front-end and back-end development, as well as database management, aligning with industry standards and practices.",
        logo: "",
        link: ""
    },
];

export default function Certificates() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <Balancer>
          <h2 className="text-3xl font-bold mb-6">Certificates</h2>
          <div className="space-y-8">
            {certificates.map((cert, index) => (
              <div key={index} className="flex">
                <div className="mr-4 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary dark:bg-primary overflow-hidden">
                    <Image
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h3 className="text-lg font-semibold">{cert.name}</h3>
                    <span className="text-sm text-muted-foreground">{cert.date}</span>
                  </div>
                  <p className="text-base font-medium mb-1">
                    <Link href={cert.link} target="_blank" className="text-primary hover:underline">
                      {cert.issuer}
                    </Link>
                  </p>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Balancer>
      </CardContent>
    </Card>
  );
}
