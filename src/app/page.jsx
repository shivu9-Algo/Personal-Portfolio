"use client";

import { useState } from "react";
import BackgroundEffect from "@/components/BackgroundEffect";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#07080c] text-slate-100 overflow-hidden">
      {/* Dynamic Ambient Background Effect */}
      <BackgroundEffect />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Sections */}
      <Hero onOpenResume={() => setResumeModalOpen(true)} />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Achievements />
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Preview & Print Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </main>
  );
}
