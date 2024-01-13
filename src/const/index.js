import {
    dotnet, actix, express, nextjs, mysql, nodejs, postgres, redis
} from "../assets/backend";

import {
    angular, reactsvg, svelte, rxjs, redux, sass, tailwind
} from "../assets/frontend";

import {
    csharp, javascript, typescript, python, rust, go
} from "../assets/programming_languages";

import {
    github, zs2Wagrowiec, matrix, discord
} from "../assets/logos";

import git from "../assets/tools/git.svg";
import docker from "../assets/tools/docker.svg";

export const skills = [
    {
        imageUrl: reactsvg,
        name: "React",
        type: "Frontend"
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend"
    },
    {
        imageUrl: svelte,
        name: "Svelte",
        type: "Frontend"
    },
    {
        imageUrl: rxjs,
        name: "RxJS",
        type: "Frontend"
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "Frontend"
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Language"
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Language"
    },
    {
        imageUrl: dotnet,
        name: "Dotnet",
        type: "Backend"
    },
    {
        imageUrl: actix,
        name: "Actix",
        type: "Backend"
    },
    {
        imageUrl: express,
        name: "Express.js",
        type: "Backend"
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Backend"
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Language"
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend"
    },
    {
        imageUrl: rust,
        name: "Rust",
        type: "Language"
    },
    {
        imageUrl: go,
        name: "Go",
        type: "Language"
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Language"
    },
    {
        imageUrl: sass,
        name: "Scss",
        type: "Design"
    },
    {
        imageUrl: tailwind,
        name: "Tailwind",
        type: "Design"
    },
    {
        imageUrl: postgres,
        name: "PostgreSQL",
        type: "Database"
    },
    {
        imageUrl: redis,
        name: "Redis",
        type: "Database"
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database"
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Tool"
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Tool"
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Tool"
    },
];

export const experiences = [
    {
        title: "Open Source Developer",
        company_name: "Github",
        icon: github,
        iconBg: "#E8E8E8",
        date: "October 2022 - now",
        points: [
            "",
            "",
            ""
        ]
    },
    {
        title: "High school (programmer major)",
        company_name: "ZSP2 Wagrowiec (school)",
        icon: zs2Wagrowiec,
        iconBg: "#5c76c3",
        date: "September 2020 - now",
        points: [
            "Learning frontend, backend, desktop and mobile applications programming",
            "Learning how to create, design and manage databases",
            "2 months of professional experience as part of an apprenticeship",
            "HTML5, CSS3, PHP, SQL, JavaScript, TypeScript, Python, Angular, JQuery, Node.js, C#, .net, Xamarin",
            "Git, algorithms, application design, basic computer science"
        ]
    }
];

export const projects = [
    {
        currentlyWorkingOn: false,
        imageUrl: "https://raw.githubusercontent.com/Hukasx0/hukasx0.github.io/main/src/assets/projects_imgs/character-factory.png",
        name: "Character factory",
        description: "xyz",
        link: "abc",
        technologies: [
            {
                name: "Python",
                iconUrl: "/abc"
            }
        ],
        githubLink: "xyz"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: "https://raw.githubusercontent.com/Hukasx0/hukasx0.github.io/main/src/assets/projects_imgs/character-factory.png",
        name: "AI Companion",
        description: "xyz",
        link: "abc",
        technologies: [
            {
                name: "Python",
                iconUrl: "/abc"
            }
        ],
        githubLink: "xyz"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: "https://raw.githubusercontent.com/Hukasx0/hukasx0.github.io/main/src/assets/projects_imgs/character-factory.png",
        name: "Aichar",
        description: "xyz",
        link: "abc",
        technologies: [
            {
                name: "Python",
                iconUrl: "/abc"
            }
        ],
        githubLink: "xyz"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: "https://raw.githubusercontent.com/Hukasx0/hukasx0.github.io/main/src/assets/projects_imgs/character-factory.png",
        name: "Rogger",
        description: "xyz",
        link: "abc",
        technologies: [
            {
                name: "Python",
                iconUrl: "/abc"
            }
        ],
        githubLink: "xyz"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: "https://raw.githubusercontent.com/Hukasx0/hukasx0.github.io/main/src/assets/projects_imgs/character-factory.png",
        name: "ZSP2 Wagrowiec website",
        description: "xyz",
        link: "abc",
        technologies: [
            {
                name: "Python",
                iconUrl: "/abc"
            }
        ],
        githubLink: "xyz"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: "https://raw.githubusercontent.com/Hukasx0/hukasx0.github.io/main/src/assets/projects_imgs/character-factory.png",
        name: "Home Middleman",
        description: "xyz",
        link: "abc",
        technologies: [
            {
                name: "Python",
                iconUrl: "/abc"
            }
        ],
        githubLink: "xyz"
    }
];

export const socials = [
    {
        name: "GitHub",
        iconUrl: github,
        link: "https://github.com/Hukasx0"
    },
    {
        name: "Matrix",
        iconUrl: matrix,
        link: "https://matrix.to/#/@hukasx0:matrix.org"
    },
    {
        name: "Discord",
        iconUrl: discord,
        link: "https://discordapp.com/users/1107028721573056614"
    },
];


export const routes = [
    { path: "/", name: "Home" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" }
]