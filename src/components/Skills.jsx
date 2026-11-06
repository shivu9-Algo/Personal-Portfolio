"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Code,
  Terminal,
  Cpu,
  Coffee,
  FileCode,
  Palette,
  Sparkles,
  Atom,
  Layers,
  Wind,
  TerminalSquare,
  GitBranch,
  Cloud,
  CheckCircle2,
  Wrench,
  SlidersHorizontal,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const iconMap = {
    Terminal: Terminal,
    Cpu: Cpu,
    Coffee: Coffee,
    FileCode: FileCode,
    Code: Code,
    Palette: Palette,
    Sparkles: Sparkles,
    Atom: Atom,
    Layers: Layers,
    Wind: Wind,
    TerminalSquare: TerminalSquare,
    GitBranch: GitBranch,
    Github: GithubIcon,
    Cloud: Cloud,
  };

  const categories = portfolioData.technicalSkills.categories;

  const allSkills = categories.flatMap((cat) =>
    cat.skills.map((skill) => ({
      ...skill,
      categoryName: cat.name,
      categoryId: cat.id,
    }))
  );

  const displayedSkills =
    selectedCategory === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.categoryId === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#07080c]/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-brand-sky font-mono text-xs mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>02 // TECHNICAL SKILLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Tools, languages & technologies.
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-2xl">
              Foundational languages, frontend frameworks, and developer workflows I use to build robust software.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2 bg-surface-100 p-1.5 rounded-2xl border border-white/10">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-brand-sky/20 text-brand-sky border border-brand-sky/40 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All ({allSkills.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-brand-sky/20 text-brand-sky border border-brand-sky/40 shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.name.split(" ")[0]} ({cat.skills.length})
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayedSkills.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-xl p-5 border border-white/[0.07] group relative overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle Glow on top right */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/0 group-hover:bg-sky-500/10 rounded-full blur-2xl transition-all duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-surface-50 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-brand-sky group-hover:border-brand-sky/30 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 border border-white/5">
                      {skill.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-white group-hover:text-brand-sky transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">
                    {skill.categoryName}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Breakdown Sections (Grouped Overview) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/[0.08]">
          {categories.map((cat) => (
            <div key={cat.id} className="p-5 rounded-2xl bg-[#0b0e17] border border-white/[0.06]">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-slate-200">{cat.name}</h4>
                <span className="text-xs font-mono text-brand-sky">{cat.skills.length} items</span>
              </div>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-surface-50 border border-white/5 text-slate-300"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Transparency note */}
        <div className="mt-8 text-center">
          <p className="text-xs font-mono text-slate-400">
            Note: All technical skills are actively used in coursework and projects without inflated artificial metrics.
          </p>
        </div>
      </div>
    </section>
  );
}
