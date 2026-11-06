"use client";

import { portfolioData } from "@/data/portfolioData";
import {
  Code2,
  Cpu,
  Globe,
  Binary,
  Brain,
  Layers,
  Sparkles,
  MapPin,
  GraduationCap,
  Calendar,
  Compass,
} from "lucide-react";

export default function About() {
  const iconMap = {
    Code2: Code2,
    Cpu: Cpu,
    Globe: Globe,
    Binary: Binary,
    Brain: Brain,
    Layers: Layers,
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-brand-sky font-mono text-xs mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering with curiosity and purpose.
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            A look into my background, academic journey, and what drives my passion for software development.
          </p>
        </div>

        {/* Main About Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-sky" />
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Engineering Philosophy
                </span>
              </div>

              {/* Core Quote */}
              <blockquote className="text-lg sm:text-xl font-medium text-slate-100 leading-relaxed mb-6 pl-4 border-l-2 border-brand-sky/60 italic">
                "{portfolioData.personalInfo.aboutShort}"
              </blockquote>

              {/* Extended Paragraphs */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {portfolioData.personalInfo.aboutExtended.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Bottom Meta Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/[0.08]">
              <div>
                <div className="text-xs font-mono text-slate-400">Institution</div>
                <div className="text-sm font-semibold text-slate-100 mt-1">Sahyadri College</div>
                <div className="text-[11px] text-slate-400">Mangalore, Karnataka</div>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Current Phase</div>
                <div className="text-sm font-semibold text-slate-100 mt-1">Second Year</div>
                <div className="text-[11px] text-brand-sky">B.E. Computer Science</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-xs font-mono text-slate-400">Status</div>
                <div className="text-sm font-semibold text-emerald-400 mt-1">Open for Internships</div>
                <div className="text-[11px] text-slate-400">Projects & Hackathons</div>
              </div>
            </div>
          </div>

          {/* Quick Info & Engineering Snapshot */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-brand-sky" />
                <span>Academic & Location Snapshot</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="p-2 rounded-lg bg-surface-50 text-brand-sky mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">College & Degree</div>
                    <div className="text-sm font-medium text-slate-100 mt-0.5">
                      {portfolioData.personalInfo.collegeShort}
                    </div>
                    <div className="text-xs text-slate-400">
                      B.E. in Computer Science & Engineering (2nd Year)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="p-2 rounded-lg bg-surface-50 text-indigo-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Location</div>
                    <div className="text-sm font-medium text-slate-100 mt-0.5">
                      Mangalore, Karnataka, India
                    </div>
                    <div className="text-xs text-slate-400">
                      Available for on-site & remote internships
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="p-2 rounded-lg bg-surface-50 text-emerald-400 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Primary Focus</div>
                    <div className="text-sm font-medium text-slate-100 mt-0.5">
                      Applied Software Development
                    </div>
                    <div className="text-xs text-slate-400">
                      Web apps, AI prototyping & core algorithmic logic
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat / Philosophy Banner */}
            <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-surface-100 to-[#121624] border border-white/10">
              <div className="text-xs font-mono text-slate-400 mb-2">My North Star</div>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                "Theory without building is fragile. I strive to validate computational concepts by writing clean, functional software that real people can use."
              </p>
            </div>
          </div>
        </div>

        {/* Career Interests Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Core Career Interests</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">
                  {portfolioData.careerInterests.length} Areas
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fields where I actively invest time through coursework, side projects, and self-directed study.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioData.careerInterests.map((interest, idx) => {
              const IconComp = iconMap[interest.icon] || Code2;
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-hover rounded-xl p-5 border border-white/[0.06] flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-surface-50 border border-white/5 text-brand-sky group-hover:text-white group-hover:bg-brand-sky/20 transition-all shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-100 group-hover:text-brand-sky transition-colors">
                      {interest.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
