"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, FileText, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Navbar({ onOpenResume }) {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "skills", "projects", "education", "experience", "achievements", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Achievements", href: "#achievements", id: "achievements" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07080c]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Back to top"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-surface-100 border border-white/10 group-hover:border-brand-sky/40 transition-colors shadow-inner">
              <span className="font-mono font-bold text-sm text-slate-100 group-hover:text-brand-sky transition-colors">
                {portfolioData.personalInfo.monogram}
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#07080c]" />
            </div>
            <div className="hidden sm:block">
              <div className="font-medium text-sm text-slate-100 group-hover:text-white transition-colors">
                {portfolioData.personalInfo.name}
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                CSE Student
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#10131d]/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/[0.06]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/10 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-surface-100 hover:bg-surface-50 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all shadow-sm"
              title="View & Download Resume"
            >
              <FileText className="w-3.5 h-3.5 text-brand-sky" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-brand-sky border border-sky-500/30 hover:border-sky-500/50 transition-all shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenResume}
              className="sm:hidden inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg bg-surface-100 text-slate-300 border border-white/10"
              title="Resume"
            >
              <FileText className="w-3.5 h-3.5 text-brand-sky" />
              <span>Resume</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-surface-100 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#0e111a] border border-white/10 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-brand-sky bg-brand-sky/10 border border-brand-sky/20"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium bg-surface-50 text-slate-200 border border-white/10"
              >
                <FileText className="w-4 h-4 text-brand-sky" />
                <span>View & Download Resume</span>
              </button>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium bg-brand-sky/15 text-brand-sky border border-brand-sky/30"
              >
                <Send className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>

            <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-around text-slate-400">
              <a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-white/10">|</span>
              <a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs hover:text-brand-sky transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
