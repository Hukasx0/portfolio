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
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden bg-background relative">
      <div className="fixed z-0 inset-0 bg-grid-light dark:bg-grid-dark opacity-75 dark:opacity-60 bg-[length:22px_22px] pointer-events-none" />
      <Navbar />
      <div className="hero-container relative z-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
        <Projects />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
