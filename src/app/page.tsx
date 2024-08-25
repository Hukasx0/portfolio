import Footer from "@/components/footer";
import About from "@/components/landing/about";
import Contact from "@/components/landing/contact";
import CTA from "@/components/landing/cta";
import Education from "@/components/landing/education";
import Experience from "@/components/landing/experience";
import Hero from "@/components/landing/hero";
import Projects from "@/components/landing/projects";
import Skills from "@/components/landing/skills";
import Navbar from "@/components/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="hero-container">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <CTA />
      <Contact />
      <Footer />
    </div>
    </>
  );
}
