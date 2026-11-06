"use client";

import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Calendar, MapPin, BookOpen, Award, CheckCircle2 } from "lucide-react";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#07080c]/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-brand-sky font-mono text-xs mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>04 // EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Academic foundation & coursework.
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Pursuing a comprehensive curriculum in Computer Science and Engineering, building core computational problem-solving and software design principles.
          </p>
        </div>

        {/* Main Education Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Degree & Institution Details */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-brand-sky/10 text-brand-sky border border-brand-sky/30">
                  {education.currentStatus}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {education.duration}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                {education.degree}
              </h3>
              <div className="text-base font-medium text-brand-sky mb-4">
                {education.field}
              </div>

              <div className="p-4 rounded-xl bg-surface-50 border border-white/[0.06] mb-6">
                <div className="text-sm font-semibold text-slate-100">
                  {education.institution}
                </div>
                <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{education.location}</span>
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Award className="w-4 h-4 text-indigo-400" />
                  <span>Academic Focus & Highlights</span>
                </div>
                <div className="space-y-2">
                  {education.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-slate-400">
              Department of Computer Science & Engineering • Affiliated to VTU
            </div>
          </div>

          {/* Key Coursework Modules */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden flex-1">
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand-sky" />
                <span>Foundational Coursework</span>
              </h4>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Core engineering and computer science subjects actively studied across academic semesters:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {education.coursework.map((course, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3 rounded-xl bg-surface-50 border border-white/5 text-xs font-mono text-slate-200 flex items-center gap-2 hover:border-brand-sky/30 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-sky" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="text-xs font-semibold text-slate-200">
                  Continuous Learning & Application
                </div>
                <div className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  Classroom algorithms and data structures are actively paired with independent software projects to reinforce practical understanding.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
