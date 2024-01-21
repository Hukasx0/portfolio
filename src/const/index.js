import {
    dotnet, actix, express, nextjs, mysql, nodejs, postgres, redis, astro
} from "../assets/backend";

import {
    angular, reactsvg, svelte, rxjs, redux, sass, tailwind, html5, css3, gradio, jquery, bootstrap
} from "../assets/frontend";

import {
    csharp, javascript, typescript, python, rust, go, haskell
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
        name: "CSharp",
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
        imageUrl: html5,
        name: "HTML5",
        type: "Frontend"
    },
    {
        imageUrl: css3,
        name: "CSS3",
        type: "Frontend"
    },
    {
        imageUrl: gradio,
        name: "Gradio",
        type: "Frontend"
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
        currentlyWorkingOn: true,
        imageUrl: "https://raw.githubusercontent.com/Hukasx0/hukasx0.github.io/main/src/assets/projects_imgs/character-factory.png",
        name: "Fuwa",
        description: "xyz",
        technologies: [
            {
                name: "C#",
                iconUrl: csharp
            },
            {
                name: ".NET",
                iconUrl: dotnet
            },
            {
                name: "TypeScript",
                iconUrl: typescript
            },
            {
                name: "Angular",
                iconUrl: angular
            },
            {
                name: "Postgres",
                iconUrl: postgres
            }
        ],
        githubLink: "https://github.com/Hukasx0/Fuwa"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: "https://raw.githubusercontent.com/Hukasx0/hukasx0.github.io/main/src/assets/projects_imgs/character-factory.png",
        name: "Character factory",
        description: "xyz",
        technologies: [
            {
                name: "Python",
                iconUrl: python
            },
            {
                name: "Gradio",
                iconUrl: gradio
            }
        ],
        githubLink: "https://github.com/Hukasx0/character-factory"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: "https://raw.githubusercontent.com/Hukasx0/hukasx0.github.io/main/src/assets/projects_imgs/character-factory.png",
        name: "AI Companion",
        description: "xyz",
        technologies: [
            {
                name: "Rust",
                iconUrl: rust
            },
            {
                name: "Actix",
                iconUrl: actix
            },
            {
                name: "TypeScript",
                iconUrl: typescript
            },
            {
                name: "React",
                iconUrl: reactsvg
            }
        ],
        githubLink: "https://github.com/Hukasx0/ai-companion"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: "https://raw.githubusercontent.com/Hukasx0/hukasx0.github.io/main/src/assets/projects_imgs/character-factory.png",
        name: "Aichar",
        description: "xyz",
        technologies: [
            {
                name: "Rust",
                iconUrl: rust
            },
            {
                name: "Python",
                iconUrl: python
            }
        ],
        githubLink: "https://github.com/Hukasx0/aichar"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: "https://raw.githubusercontent.com/Hukasx0/hukasx0.github.io/main/src/assets/projects_imgs/character-factory.png",
        name: "Rogger",
        description: "xyz",
        technologies: [
            {
                name: "Rust",
                iconUrl: rust
            },
            {
                name: "Actix",
                iconUrl: actix
            },
            {
                name: "JavaScript",
                iconUrl: javascript
            },
            {
                name: "Redis",
                iconUrl: redis
            }
        ],
        githubLink: "https://github.com/Hukasx0/rogger"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: "https://raw.githubusercontent.com/Hukasx0/hukasx0.github.io/main/src/assets/projects_imgs/character-factory.png",
        name: "Portfolio",
        description: "xyz",
        technologies: [
            {
                name: "Next.js",
                iconUrl: nextjs
            },
            {
                name: "React",
                iconUrl: reactsvg
            },
            {
                name: "JavaScript",
                iconUrl: javascript
            },
            {
                name: "Tailwind",
                iconUrl: tailwind
            }
        ],
        githubLink: "https://github.com/Hukasx0/portfolio"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: "https://raw.githubusercontent.com/Hukasx0/hukasx0.github.io/main/src/assets/projects_imgs/character-factory.png",
        name: "ZSP2 Wagrowiec website",
        description: "xyz",
        technologies: [
            {
                name: "HTML5",
                iconUrl: html5
            },
            {
                name: "CSS3",
                iconUrl: css3
            },
            {
                name: "JavaScript",
                iconUrl: javascript
            },
            {
                name: "JQuery",
                iconUrl: jquery
            },
            {
                name: "Bootstrap",
                iconUrl: bootstrap
            }
        ],
        githubLink: "https://github.com/Hukasx0/zsp2wagrowiec-strona"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: "https://raw.githubusercontent.com/Hukasx0/hukasx0.github.io/main/src/assets/projects_imgs/character-factory.png",
        name: "Home Middleman",
        description: "xyz",
        technologies: [
            {
                name: "Node.js",
                iconUrl: nodejs
            },
            {
                name: "JavaScript",
                iconUrl: javascript
            },
            {
                name: "Bootstrap",
                iconUrl: bootstrap
            },
            {
                name: "Python",
                iconUrl: python
            },
        ],
        githubLink: "https://github.com/Hukasx0/Home_Middleman"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: "https://raw.githubusercontent.com/Hukasx0/hukasx0.github.io/main/src/assets/projects_imgs/character-factory.png",
        name: "HALM Assembler",
        description: "xyz",
        technologies: [
            {
                name: "Haskell",
                iconUrl: haskell
            }
        ],
        githubLink: "https://github.com/Hukasx0/HALM-Assembler"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: "https://raw.githubusercontent.com/Hukasx0/hukasx0.github.io/main/src/assets/projects_imgs/character-factory.png",
        name: "Maybe sharp",
        description: "xyz",
        technologies: [
            {
                name: "C#",
                iconUrl: csharp
            }
        ],
        githubLink: "https://github.com/Hukasx0/maybe-sharp"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: "https://raw.githubusercontent.com/Hukasx0/hukasx0.github.io/main/src/assets/projects_imgs/character-factory.png",
        name: "Personal website",
        description: "xyz",
        technologies: [
            {
                name: "React",
                iconUrl: reactsvg
            },
            {
                name: "TypeScript",
                iconUrl: typescript
            }
        ],
        githubLink: "https://github.com/Hukasx0/hukasx0.github.io"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: "https://raw.githubusercontent.com/Hukasx0/hukasx0.github.io/main/src/assets/projects_imgs/character-factory.png",
        name: "Blog",
        description: "xyz",
        technologies: [
            {
                name: "Astro",
                iconUrl: astro
            },
            {
                name: "Tailwind",
                iconUrl: tailwind
            }
        ],
        githubLink: "https://github.com/Hukasx0/blog"
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