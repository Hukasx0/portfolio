"use client";

import { useSearchParams } from "next/navigation";

import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Projects() {
  const techParam = useSearchParams().get("tech");
    return (
      <main>
        <Header />
        <div className="max-container">
          <h1>Tech: {techParam}</h1>
          {/* projects display with search function */}
          <hr />
          <CallToAction />
        </div>
        <Footer />
      </main>
    )
  }
  