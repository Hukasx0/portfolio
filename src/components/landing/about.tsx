import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function About() {
    return (
        <div id="about" className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <Balancer>
                <h2 className="text-3xl font-bold mb-4">A little about me</h2>
                <div className="space-y-4">
                    <p className="text-muted-foreground">
                        I mainly program in <Link className="text-primary hover:underline" target="_blank" href="https://nextjs.org/">Next.js</Link> using <Link className="text-primary hover:underline" target="_blank" href="https://create.t3.gg/">T3 Stack</Link>, although I also experiment with other technologies (as you can see from <Link className="text-primary hover:underline" target="_blank" href="https://github.com/Hukasx0">my GitHub account</Link>)
                    </p>
                    <p className="text-muted-foreground">
                        Creator of <Link className="text-primary hover:underline" target="_blank" href="https://blitzyapp.com/">blitzyapp.com</Link>, <Link className="text-primary hover:underline" target="_blank" href="https://github.com/Hukasx0/ai-companion">AI-Companion</Link> and <Link className="text-primary hover:underline" target="_blank" href="https://github.com/Hukasx0/character-factory">Character Factory</Link>
                    </p>
                    <p className="text-muted-foreground">
                        I have the appropriate skills to create a <span className="text-primary">Software as a Service (SaaS) application</span> or a <span className="text-primary">micro SaaS application myself (or in a team)</span> from start to finish, regardless of whether it is hosted on VPS or Serverless.
                    </p>
                </div>
            </Balancer>
        </div>
    )
}