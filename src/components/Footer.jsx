"use client";

import { portfolioData } from "@/data/portfolioData";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#050609] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-surface-100 border border-white/10 text-white font-mono font-bold text-sm">
                {portfolioData.personalInfo.monogram}
              </div>
              <div>
                <span className="font-bold text-base text-white">
                  {portfolioData.personalInfo.name}
                </span>
                <p className="text-xs font-mono text-slate-400">
                  {portfolioData.personalInfo.heroSubRole}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Student at Sahyadri College of Engineering & Management, exploring software engineering, artificial intelligence, and modern web systems.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-surface-50 hover:bg-surface-100 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-surface-50 hover:bg-surface-100 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-sky transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.socialLinks.email}
                className="w-8 h-8 rounded-lg bg-surface-50 hover:bg-surface-100 border border-white/10 flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Sections
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li>
                <a href="#about" className="hover:text-brand-sky transition-colors">
                  01 // About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-brand-sky transition-colors">
                  02 // Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brand-sky transition-colors">
                  03 // Projects
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-brand-sky transition-colors">
                  04 // Education
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-brand-sky transition-colors">
                  05 // Experience
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-brand-sky transition-colors">
                  06 // Achievements
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-sky transition-colors">
                  07 // Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stack & Status */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Architecture
            </h4>
            <div className="p-3.5 rounded-xl bg-surface-100/50 border border-white/5 space-y-1.5 text-xs font-mono text-slate-400">
              <div>Framework: <span className="text-slate-200">Next.js 14 (App Router)</span></div>
              <div>Library: <span className="text-slate-200">React 18</span></div>
              <div>Styling: <span className="text-slate-200">Tailwind CSS 3.4</span></div>
              <div>Icons: <span className="text-slate-200">Lucide React</span></div>
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Hosted with Vercel edge deployment
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {currentYear} {portfolioData.personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Mangalore, Karnataka, India</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
