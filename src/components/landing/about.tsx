import Link from "next/link";

export default function About() {
    return (
        <div id="about" className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h2 className="text-3xl font-bold mb-4">A little about me</h2>
            <div className="space-y-4">
            <p className="text-muted-foreground">
                As a <span className="text-primary">full-stack developer</span>, I combine modern technologies like 
                <span className="text-primary"> Next.js</span> and the <span className="text-primary">T3 Stack </span> 
                with proven <span className="text-primary"> React and .NET</span> solutions, specializing in full stack web end-to-end applications 
                <span className="text-primary"> (from UI design → business logic → database architecture → deployment)</span>.
            </p>
                
                <div className="text-muted-foreground">
                    Over the past few years, I{'\''}ve built:
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                            <Link className="text-primary hover:underline font-bold" target="_blank" href="https://blitzyapp.com/">
                                BlitzyApp
                            </Link> - no-code platform for rapid idea validation with <span className="text-primary">waitlist integration</span> and <span className="text-primary">static site export</span>
                        </li>
                        <li>
                            <Link className="text-primary hover:underline font-bold" target="_blank" href="https://github.com/Hukasx0/aichar">
                                Aichar
                            </Link> - Python library written in Rust with <Link className="text-primary hover:underline" target="_blank" href="https://pypi.org/project/aichar/">738k+ PyPI downloads</Link>
                        </li>
                        <li>
                            <Link className="text-primary hover:underline font-bold" target="_blank" href="https://github.com/Hukasx0/ai-companion">
                                AI Companion
                            </Link> - offline chatbot with long-term memory, ability to learn and even ability to be time aware
                        </li>
                        <li>
                            <Link className="text-primary hover:underline font-bold" target="_blank" href="https://github.com/Hukasx0/character-factory">
                                Character Factory
                            </Link> - AI studio with Stable Diffusion + LLMs
                        </li>
                    </ul>
                </div>

                <p className="text-muted-foreground">
                    I thrive on solving diverse technical challenges and constantly experiment with new technologies – 
                    from exploring functional programming concepts in <span className="text-primary">Haskell</span> to 
                    optimizing low-level code in <span className="text-primary">Rust</span>, and even 
                    dabbling in <span className="text-primary">AMD64 Assembly</span> to better understand 
                    computer architecture fundamentals.
                </p>

                <p className="text-muted-foreground">
                    Beyond coding, I mentored my peers helping them prepare for <span className="text-primary">INF.03/INF.04 exams </span> 
                    (Polish national IT certifications), focusing on algorithms, <span className="text-primary">HTML5, CSS3, JavaScript, C#, .NET, Angular</span>, 
                    and <span className="text-primary">DevOps practices</span>.
                </p>
            </div>
        </div>
    )
}
