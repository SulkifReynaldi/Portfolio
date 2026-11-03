import React from "react"; 
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Experience } from "@/components/sections/Experience";
import { Workflow } from "@/components/sections/Workflow";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#252827] text-[#F3F3EF]">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Workflow />
        <Achievements />
        <Contact />
      </main>

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}
