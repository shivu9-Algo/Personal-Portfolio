"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  ArrowRight,
  Download,
  Mail,
  Terminal,
  MapPin,
  GraduationCap,
  Sparkles,
  Copy,
  Check,
  Code2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState("profile");
  const [copied, setCopied] = useState(false);

  const copyCloneCmd = () => {
    navigator.clipboard.writeText("git clone https://github.com/shivu9-Algo/Lightfield-CRM.git");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-100/90 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300">
                {portfolioData.personalInfo.availabilityBadge}
              </span>
              <span className="text-slate-600 font-mono text-xs">|</span>
              <span className="text-[11px] font-mono text-brand-sky">Sahyadri College</span>
            </div>

            {/* Greeting and Identity */}
            <div className="space-y-2 mb-4">
              <div className="text-sm sm:text-base font-mono text-brand-sky font-medium tracking-wide flex items-center gap-2">
                <span className="w-6 h-[1px] bg-brand-sky inline-block"></span>
                {portfolioData.personalInfo.heroGreeting}
              </div>
              <h2 className="text-xs sm:text-sm uppercase tracking-wider text-slate-400 font-mono font-medium">
                {portfolioData.personalInfo.heroSubRole}
              </h2>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.12]">
              Building ideas into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400">
                meaningful digital
              </span>{" "}
              experiences.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              {portfolioData.personalInfo.heroSupportingText}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium text-sm shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface-100/90 hover:bg-surface-50 text-slate-200 hover:text-white border border-white/10 hover:border-white/20 font-medium text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm backdrop-blur-sm"
              >
                <Download className="w-4 h-4 text-brand-sky" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links & Meta Info */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/[0.08] w-full text-slate-400 text-xs">
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-100 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4 text-slate-200" />
                  <span className="font-mono">GitHub</span>
                </a>

                <a
                  href={portfolioData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-100 hover:bg-white/10 text-slate-300 hover:text-brand-sky border border-white/10 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-400" />
                  <span className="font-mono">LinkedIn</span>
                </a>

                <a
                  href={portfolioData.socialLinks.email}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-100 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  aria-label="Send an Email"
                >
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span className="font-mono">Email</span>
                </a>
              </div>

              <div className="flex items-center gap-2 font-mono text-slate-400 text-xs">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{portfolioData.personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Interactive Developer Terminal / Card */}
          <div className="lg:col-span-5 relative z-10 w-full max-w-lg mx-auto lg:max-w-none">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

            <div className="relative rounded-2xl bg-[#0b0e17] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#080a11] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-brand-sky" />
                    shivakumara@engineer: ~
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                      activeTab === "profile"
                        ? "bg-white/10 text-white font-medium"
                        : "text-slate-400 hover:text-slate-300"
                    }`}
                  >
                    profile.json
                  </button>
                  <button
                    onClick={() => setActiveTab("stack")}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                      activeTab === "stack"
                        ? "bg-white/10 text-white font-medium"
                        : "text-slate-400 hover:text-slate-300"
                    }`}
                  >
                    skills.sh
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[300px]">
                {activeTab === "profile" ? (
                  <div className="space-y-1 text-slate-300">
                    <div className="text-slate-500">// Computer Science Engineering Student Profile</div>
                    <div>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-sky-300">developer</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">name:</span>{" "}
                      <span className="text-amber-300">"{portfolioData.personalInfo.name}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">academicStanding:</span>{" "}
                      <span className="text-emerald-300">"Second Year (B.E. CSE)"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">college:</span>{" "}
                      <span className="text-amber-300">"Sahyadri College of Eng. & Mgmt"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">location:</span>{" "}
                      <span className="text-amber-300">"Mangalore, Karnataka, India"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">coreInterests:</span> [
                    </div>
                    <div className="pl-8 text-sky-300">
                      "Software Engineering", "AI & LLM Tools", "Web Systems", "DSA"
                    </div>
                    <div className="pl-4">],</div>
                    <div className="pl-4">
                      <span className="text-slate-400">currentProjects:</span> [
                    </div>
                    <div className="pl-8 text-emerald-300">
                      "Lightfield-CRM", "AI-Agent-Safety"
                    </div>
                    <div className="pl-4">],</div>
                    <div className="pl-4">
                      <span className="text-slate-400">mindset:</span>{" "}
                      <span className="text-violet-300">"Learn by building & practical problem-solving"</span>
                    </div>
                    <div>&#125;;</div>
                    <div className="pt-2 text-slate-500 flex items-center gap-2">
                      <span className="text-emerald-400">➜</span>
                      <span>status: ready for collaborative opportunities</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 text-slate-300">
                    <div className="text-slate-500"># Primary Tooling & Language Environment</div>
                    <div className="text-slate-400">
                      <span className="text-brand-sky">LANGUAGES</span>=( "C" "C++" "Java" "Python" )
                    </div>
                    <div className="text-slate-400">
                      <span className="text-brand-sky">FRONTEND</span>=( "HTML5" "CSS3" "JavaScript" "React.js" "Next.js" "TailwindCSS" )
                    </div>
                    <div className="text-slate-400">
                      <span className="text-brand-sky">PLATFORMS</span>=( "VS Code" "Git" "GitHub" "Vercel" )
                    </div>
                    <div className="pt-3 border-t border-white/[0.08]">
                      <div className="text-slate-500"># Clone latest featured project:</div>
                      <div className="flex items-center justify-between gap-2 bg-black/40 p-2 rounded-lg border border-white/5 mt-1">
                        <span className="text-slate-300 text-[11px] truncate">
                          git clone https://github.com/shivu9-Algo/Lightfield-CRM.git
                        </span>
                        <button
                          onClick={copyCloneCmd}
                          className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                          title="Copy command"
                        >
                          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Footer Bar */}
              <div className="px-4 py-2.5 bg-[#080a11] border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Node.js v24 Environment</span>
                </div>
                <span className="text-slate-500">UTF-8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
