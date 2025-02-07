import { IconType } from "react-icons";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiSqlite, SiAuth0, SiTurso, SiShadcnui, SiTrpc, SiDrizzle, SiCloudflarepages, SiCloudflareworkers, SiCsharp, SiDotnet, SiAngular } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface Skill {
    name: string;
    icon: IconType;
}

const skills: Skill[] = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "T3 Stack", icon: TbBrandReactNative },
    { name: "React", icon: FaReact },
    { name: "Angular", icon: SiAngular},
    { name: "OAuth2", icon: SiAuth0 },
    { name: "Shadcn ui", icon: SiShadcnui },
    { name: "tRPC", icon: SiTrpc },
    { name: "Turso db", icon: SiTurso },
    { name: "libsql/sqlite", icon: SiSqlite },
    { name: "Postgres", icon: SiPostgresql },
    { name: "Git", icon: FaGitAlt },
    { name: "Drizzle ORM", icon: SiDrizzle },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Cloudflare Pages", icon: SiCloudflarepages},
    { name: "Workers", icon: SiCloudflareworkers},
    { name: "C#", icon: SiCsharp },
    { name: ".NET", icon: SiDotnet }
];

const skillLinks: { [key: string]: string } = {
  "Next.js": "https://nextjs.org",
  "TypeScript": "https://www.typescriptlang.org",
  "T3 Stack": "https://create.t3.gg",
  "React": "https://reactjs.org",
  "Angular": "https://angular.dev/",
  "OAuth2": "https://oauth.net/2/",
  "Shadcn ui": "https://ui.shadcn.com",
  "tRPC": "https://trpc.io",
  "Turso db": "https://turso.tech",
  "libsql/sqlite": "https://github.com/libsql/libsql",
  "Postgres": "https://www.postgresql.org",
  "Git": "https://git-scm.com",
  "Drizzle ORM": "https://orm.drizzle.team",
  "Tailwind CSS": "https://tailwindcss.com",
  "Cloudflare Pages": "https://pages.cloudflare.com/",
  "Workers": "https://workers.cloudflare.com/",
  "C#": "https://docs.microsoft.com/en-us/dotnet/csharp/",
  ".NET": "https://dotnet.microsoft.com/"
};

export default function Skills() {
    return (
        <Card className="w-full">
            <CardContent className="p-6">
                    <h2 className="text-3xl font-bold mb-6">My primary tech stack</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {skills.map((skill, index) => (
                            <Link
                                key={index}
                                href={skillLinks[skill.name] || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 p-2 rounded-md bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                            >
                                <skill.icon className="text-xl" />
                                <span className="text-sm font-medium">{skill.name}</span>
                            </Link>
                        ))}
                    </div>
            </CardContent>
        </Card>
    )
}
