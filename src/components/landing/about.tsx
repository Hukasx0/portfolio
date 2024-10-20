import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function About() {
    return (
        <div id="about" className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <Balancer>
                <h2 className="text-3xl font-bold mb-4">A little about me</h2>
                <div className="space-y-4">
                    <p className="text-muted-foreground">
                        As a <span className="text-primary">versatile developer</span>, I primarily focus on <span className="text-primary">Next.js</span> and the <span className="text-primary">T3 Stack</span> for web development, while also being proficient in <span className="text-primary">C# and .NET</span> for creating robust solutions across various platforms.
                    </p>
                    <p className="text-muted-foreground">
                        I have successfully built <span className="text-primary">complex web applications</span> and <span className="text-primary">SaaS solutions</span>, including <Link className="text-primary hover:underline font-bold" target="_blank" href="https://blitzyapp.com/">BlitzyApp.com</Link>, <Link className="text-primary hover:underline font-bold" target="_blank" href="https://github.com/Hukasx0/ai-companion">AI-Companion</Link>, and <Link className="text-primary hover:underline font-bold" target="_blank" href="https://github.com/Hukasx0/character-factory">Character Factory</Link>.
                    </p>
                    <p className="text-muted-foreground">
                        In addition to my development work, I <span className="text-primary">mentored fellow classmates</span>, preparing them for <span className="text-primary">INF.03 and INF.04 exams</span> (Polish <span className="text-primary">national exams</span> for the title of programming technician, covering web development, databases, and software engineering) in web development, C# .NET, and algorithms, which showcases my <span className="text-primary">strong understanding of the material</span> and <span className="text-primary">effective communication skills</span>.
                    </p>
                </div>
            </Balancer>
        </div>
    )
}
