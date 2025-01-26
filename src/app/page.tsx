import Footer from "@/components/footer";
import About from "@/components/landing/about";
import Certificates from "@/components/landing/certificates";
import Contact from "@/components/landing/contact";
import CTA from "@/components/landing/cta";
import Education from "@/components/landing/education";
import Experience from "@/components/landing/experience";
import Hero from "@/components/landing/hero";
import Projects from "@/components/landing/projects";
import Skills from "@/components/landing/skills";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden">
      <div className="hero-container">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        {/*<Certificates />*/}
        <Projects />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
