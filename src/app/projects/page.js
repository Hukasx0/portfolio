"use client";

import { useSearchParams } from "next/navigation";

import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SearchProject } from "@/components/SearchProject";
import ProjectsList from "@/components/ProjectsList";


export default function Projects() {
  const techParam = useSearchParams().get("tech");
    return (
      <main>
        <Header />
        <div className="max-container">
          <h1>Tech: <SearchProject selectedTech={null} /></h1>
          {/* projects display with search function */}
          <div className="mb-10">
            <ProjectsList />
          </div>
          <hr />
          <CallToAction />
        </div>
        <Footer />
      </main>
    )
  }
  