import dynamic from 'next/dynamic';

const CardHoverEffect = dynamic(() => import('./ui/card-hover-effect'), {
  ssr: true
});

const About = () => {
    return (
      <section className="mt-10 text-sm sm:text-base lg:text-xl text-start">
        <p className="leading-loose tracking-wide">
          As a seasoned full-stack developer with expertise across various stacks,
        </p>
        <p className="leading-loose tracking-wide">
          I&apos;m committed to delivering exceptional results and providing
          unparalleled support.
        </p>
        <div className="my-5 h-3"></div>
        <h3 className="sm:text-xl xl:text-2xl text-lg">My favorite programming stacks:</h3>
        <CardHoverEffect items={stacks} />
        <p className="leading-loose tracking-wide text-muted-foreground">
          My meticulous planning and attention to detail enable me to manage
          projects from inception to completion while making informed decisions
          based on specific needs.
        </p>
        <div className="my-5"></div>
        <p className="leading-loose tracking-wide text-muted-foreground">
          I&apos;m adaptable and flexible, capable of pivoting and adjusting my approach
          as required, ensuring that your development goals are accomplished
          efficiently and effectively.
        </p>
      </section>
    )
  }
  
  export const stacks = [
    {
      title: "T3 Stack",
      description:
        "I prefer to use T3 stack (Next.js, TypeScript, Tailwind, tRPC, Prisma) for developing web applications that are flexible and quick to deploy.",
      link: "https://create.t3.gg/en/introduction",
      cardTitleClassName: "text-transparent bg-clip-text bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto]",
    },
    {
      title: "ASP .NET + Angular",
      description:
        "When it comes to building enterprise-grade solutions, C# .NET, Angular, RxJS, and Tailwind are my go-to stack.",
      link: "https://asp.net",
      cardTitleClassName: "bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.100),theme(colors.pink.300),theme(colors.orange.400),theme(colors.pink.300),theme(colors.purple.100),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient",
    },
    {
      title: "Actix + React",
      description:
        "When it comes to speed, security, and concurrency, Rust, Actix, React, TypeScript and Tailwind are my top picks.",
      link: "https://actix.rs",
      cardTitleClassName: "bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient",
    },
    {
      title: "Other",
      description: "I can also work in any combination of any technologies that I provided above in the 'Known technologies' section (for example: Python, Go, Gradio, Haskell, Node.js), or learn new ones on an ongoing basis. I am open to continuous self-improvement and learning.",
      link: "https://github.com/Hukasx0?tab=repositories",
    },
  ];
  
  export default About;
  