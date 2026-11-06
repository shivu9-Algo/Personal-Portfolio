"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  FolderGit2,
  ExternalLink,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  ArrowUpRight,
  Info,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-brand-sky font-mono text-xs mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 // FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured engineering projects.
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Selected applications and prototypes demonstrating practical software engineering, UI design, and artificial intelligence safety exploration.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((project) => {
            const isAIProject = project.id === "ai-agent-safety";
            const isExpanded = expandedProject === project.id;

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-[#0b0e17] border border-white/[0.08] hover:border-brand-sky/40 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
              >
                {/* Ambient glow header */}
                <div
                  className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-opacity duration-300 ${
                    isAIProject
                      ? "bg-purple-600/5 group-hover:bg-purple-600/10"
                      : "bg-sky-500/5 group-hover:bg-sky-500/10"
                  }`}
                />

                <div className="p-6 sm:p-8 relative z-10">
                  {/* Top Meta: Category & Status */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-sky" />
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                          isAIProject
                            ? "bg-purple-500/10 text-purple-300 border-purple-500/30"
                            : "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Title & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-sky transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* AI Disclaimer Callout (For Project 2) */}
                  {project.disclaimer && (
                    <div className="mb-6 p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-purple-200/90 leading-relaxed flex items-start gap-3">
                      <Info className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-purple-300">Prototype Scope: </span>
                        {project.disclaimer}
                      </div>
                    </div>
                  )}

                  {/* Key Features List */}
                  <div className="mb-6 space-y-2">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Key Capabilities & Architecture
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2.5 text-xs text-slate-300 bg-white/[0.02] p-2 rounded-lg border border-white/[0.04]"
                        >
                          <CheckCircle2
                            className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                              isAIProject ? "text-purple-400" : "text-brand-sky"
                            }`}
                          />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Architecture Highlights */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-white/[0.08] animate-in fade-in duration-200">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Design Highlights
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300 pl-4 list-disc">
                        {project.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="leading-relaxed">
                            {hl}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer Bar: Tech Badges & Action Buttons */}
                <div className="p-6 sm:p-8 pt-0 relative z-10 mt-auto">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-surface-50 border border-white/5 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Buttons */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white border border-white/10 hover:border-white/20 text-xs font-mono font-medium transition-all group/btn"
                    >
                      <GithubIcon className="w-4 h-4 text-slate-200" />
                      <span>View GitHub Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>

                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    >
                      <span>{isExpanded ? "Less Details" : "Architecture"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Organization / More Repos Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-surface-100 to-[#0e121d] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-surface-50 border border-white/10 flex items-center justify-center text-slate-200">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Looking for more code repositories and experiments?
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Explore algorithmic solutions, coursework projects, and experiments on my GitHub profile.
              </div>
            </div>
          </div>

          <a
            href={portfolioData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-sky/10 hover:bg-brand-sky/20 text-brand-sky border border-brand-sky/30 text-xs font-mono font-medium transition-colors shrink-0"
          >
            <span>Visit GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
