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
    github, zs2Wagrowiec, matrix, discord, mail
} from "../assets/logos";

import {
    characterFactory,
    aiCompanion,
    homeMiddleman,
    rogger,
    zsp2wagrowiecWebsite,
    blog,
    personalWebsite,
    aichar,
    halmAssembler,
    maybeSharp,
    fuwa,
    portfolio
} from "../assets/projects";

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
            "I learned how to use Git and GitHub at an advanced level, the concept of contributions, branches, merge, push, commit, etc.",
            "I created, designed and managed personal projects, from the first lines of code to operations on other branches, writing documentation, testing and releasing stable versions",
            "I learned how to help others by contributing to other people's repositories, reading their code, reading documentation, following their rules for contributing and writing code.",
            "I experimented and learned: Rust, C#, ASP .NET, Node.js, TypeScript, React, JavaScript, Angular, Tailwind, Haskell, Python, Gradio, Go, LLM's, Stable Diffusion, Docker and more"
        ]
    },
    {
        title: "High school (programmer major)",
        company_name: "Zespół Szkół nr 2 im. ppłk. dr. Stanisława Kulińskiego w Wągrowcu (school)",
        icon: zs2Wagrowiec,
        iconBg: "#5c76c3",
        date: "September 2020 - now",
        points: [
            "Learning frontend, backend, desktop and mobile applications programming",
            "Learning how to create, design and manage databases",
            "2 months of professional experience as part of an apprenticeship",
            "HTML5, CSS3, PHP, SQL, JavaScript, TypeScript, Python, Angular, JQuery, Node.js, C#, .NET, Xamarin",
            "Git, algorithms, application design, basic computer science"
        ]
    }
];

export const projects = [
    {
        currentlyWorkingOn: true,
        imageUrl: fuwa,
        name: "Fuwa",
        description: "Free and open source platform for sharing code snippets, asking questions and solving problems together",
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
                name: "RxJS",
                iconUrl: rxjs
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
        imageUrl: characterFactory,
        name: "Character factory",
        description: "Python script with Gradio WebUI to automate/help create characters for SillyTavern, TavernAI, TextGenerationWebUI using artificial intelligence (Large Language Models and Stable Diffusion). This project also uses the aichar library I wrote earlier for Python in the Rust language to create, parse and export AI characters/character files in different formats",
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
        imageUrl: aiCompanion,
        name: "AI Companion",
        description: "Backend + API + Frontend for running large language models of artificial intelligence on the local computer, with the addition of short-term memory, long-term memory, ai learning by chatting with the user and the ability to add your own custom data. Can be used as a easy to use and fast chat interface with AI chatbots or can be used as an API/Backend to other projects",
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
        imageUrl: aichar,
        name: "Aichar",
        description: "Python library for creating/transporting/parsing AI characters between different interfaces (TavernAI, SillyTavern, TextGenerationWebUI, AI-companion, Pygmalion), my other project - Character Factory - uses it. The library recorded a record 7,000 monthly downloads on PyPi (pip). The library allows you to solve problems related to AI characters in a simple, safe and fast way.",
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
        githubLink: "https://github.com/Hukasx0/aichar",
        websitePreview: "https://pypi.org/project/aichar/"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: rogger,
        name: "Rogger",
        description: "Very lightweight, efficient, secure and easy to use Fullstack Blog Content Management System (CMS)",
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
            },
            {
                name: "Docker",
                iconUrl: docker
            }
        ],
        githubLink: "https://github.com/Hukasx0/rogger"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: portfolio,
        name: "Portfolio",
        description: "My portfolio written in Next.js and JavaScript. You are currently on it.",
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
        githubLink: "https://github.com/Hukasx0/portfolio",
        websitePreview: "https://hukasx0.github.io/portfolio"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: zsp2wagrowiecWebsite,
        name: "ZSP2 Wagrowiec website",
        description: "The website that won the school contest, the website automatically fetches the latest data from the school backend Rest API",
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
        githubLink: "https://github.com/Hukasx0/zsp2wagrowiec-strona",
        websitePreview: "https://hukasx0.github.io/zsp2wagrowiec-strona/"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: homeMiddleman,
        name: "Home Middleman",
        description: "A fullstack application that I wrote in Node.js to manage cyclic boring server tasks in your browser in a few clicks",
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
        imageUrl: halmAssembler,
        name: "HALM Assembler",
        description: "the main assumption of halm assembler, as the name suggests, is assembly, which is compiled into binary code. But halm also has a built-in interpreted language, which was originally intended to better manage code, files, and simple calculations. However, this language has grown to a level where you can write much more complex scripts in it than I expected when writing the first lines of code for this project.",
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
        imageUrl: maybeSharp,
        name: "Maybe sharp",
        description: "A simple header only library for C# that allows you to use Monads similar to programming languages such as Rust or Haskell.",
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
        imageUrl: personalWebsite,
        name: "Personal website",
        description: "My personal website written in React and TypeScript, the website is designed to imitate Windows 95 with its functionality and aesthetics.",
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
        githubLink: "https://github.com/Hukasx0/hukasx0.github.io",
        websitePreview: "https://hukasx0.github.io/"
    },
    {
        currentlyWorkingOn: false,
        imageUrl: blog,
        name: "Blog",
        description: "My blog written in Astro framework using Tailwind and View Transitions API for smooth transitions between pages.",
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
        githubLink: "https://github.com/Hukasx0/blog",
        websitePreview: "https://hukasx0.github.io/blog/"
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

export const contactTypes = [
    {
        name: "Discord",
        iconUrl: discord,
        link: "https://discordapp.com/users/1107028721573056614"
    },
    {
        name: "e-mail",
        iconUrl: mail,
        link: "mailto:hubertkasp13@gmail.com"
    },
    {
        name: "Matrix",
        iconUrl: matrix,
        link: "https://matrix.to/#/@hukasx0:matrix.org"
    }
]

export const routes = [
    { path: "/", name: "Home" },
    { path: "/projects/", name: "Projects" },
    { path: "/contact/", name: "Contact" }
]