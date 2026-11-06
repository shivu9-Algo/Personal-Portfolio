"use client";

import { portfolioData } from "@/data/portfolioData";
import { Trophy, Code2, GraduationCap, PlusCircle, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function Achievements() {
  const { items, note } = portfolioData.achievements;

  const iconMap = {
    Trophy: Trophy,
    Code2: Code2,
    GraduationCap: GraduationCap,
    PlusCircle: PlusCircle,
  };

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#07080c]/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-brand-sky font-mono text-xs mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>06 // ACHIEVEMENTS & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Milestones, hackathons & certifications.
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            {note} Authentic representation of academic progress and completed technical deliverables.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Trophy;
            const isPlaceholder = item.isPlaceholder;

            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 relative transition-all duration-300 flex flex-col justify-between ${
                  isPlaceholder
                    ? "border border-dashed border-white/20 bg-white/[0.01] hover:border-white/30"
                    : "glass-card glass-card-hover border border-white/[0.08]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center ${
                        isPlaceholder
                          ? "bg-surface-100 border-white/10 text-slate-500"
                          : "bg-surface-50 border-white/10 text-brand-sky"
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/5">
                      {item.category}
                    </span>
                  </div>

                  <h3
                    className={`text-base font-bold mb-2 ${
                      isPlaceholder ? "text-slate-400 italic" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    {!isPlaceholder && <ShieldCheck className="w-3.5 h-3.5" />}
                    {item.status}
                  </span>
                  {isPlaceholder && (
                    <span className="text-[10px] font-mono text-slate-400">
                      Editable in portfolioData.js
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrity Pledge Card */}
        <div className="mt-12 p-5 rounded-2xl bg-[#0b0e17] border border-white/[0.06] flex items-center gap-4 text-xs font-mono text-slate-400">
          <ShieldCheck className="w-5 h-5 text-brand-sky shrink-0" />
          <div>
            <span className="text-slate-300 font-semibold">Integrity Notice: </span>
            This portfolio strictly features real coursework, authentic hackathon prototypes, and verified repositories.
            No automated or exaggerated certifications are included.
          </div>
        </div>
      </div>
    </section>
  );
}
