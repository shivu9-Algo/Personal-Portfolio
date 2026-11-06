"use client";

import { portfolioData } from "@/data/portfolioData";
import {
  Briefcase,
  Users,
  Terminal,
  Trophy,
  Calendar,
  Sparkles,
  Layers,
  PlusCircle,
  ExternalLink,
} from "lucide-react";

export default function Experience() {
  const { items, note } = portfolioData.experienceAndActivities;

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-brand-sky font-mono text-xs mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>05 // EXPERIENCE & ACTIVITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Workshops, hackathons & technical activities.
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            {note} Focus on student-led initiatives, team hackathons, and collaborative engineering.
          </p>
        </div>

        {/* Timeline / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => {
            const isPlaceholder = item.isPlaceholder;

            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 sm:p-7 relative transition-all duration-300 flex flex-col justify-between ${
                  isPlaceholder
                    ? "border border-dashed border-white/20 bg-white/[0.01] hover:border-white/30"
                    : "glass-card glass-card-hover border border-white/[0.08]"
                }`}
              >
                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                        isPlaceholder
                          ? "bg-slate-800/50 text-slate-400 border-white/10"
                          : item.category === "Hackathon"
                          ? "bg-purple-500/10 text-purple-300 border-purple-500/30"
                          : "bg-brand-sky/10 text-brand-sky border-brand-sky/30"
                      }`}
                    >
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {item.period}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3
                    className={`text-lg font-bold mb-1 ${
                      isPlaceholder ? "text-slate-400 italic" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mb-4">
                    {item.organization}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tags & Status */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-surface-50 border border-white/5 text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {isPlaceholder && (
                    <div className="mt-3 text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                      <PlusCircle className="w-3.5 h-3.5 text-slate-500" />
                      <span>Ready to customize in portfolioData.js</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Internship Readiness */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0b0e17] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-surface-50 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Seeking Summer & Technical Internship Opportunities
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Ready to contribute with core computer science foundations, modern web development skills, and a strong learning velocity.
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-mono transition-colors shrink-0"
          >
            Connect for Roles
          </a>
        </div>
      </div>
    </section>
  );
}
