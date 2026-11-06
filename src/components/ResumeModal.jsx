"use client";

import { useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  X,
  Printer,
  Download,
  Mail,
  MapPin,
  ExternalLink,
  GraduationCap,
  Code2,
  CheckCircle2,
  FolderGit2,
} from "lucide-react";

export default function ResumeModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadFile = () => {
    // If a PDF is hosted at /resume.pdf, download it; otherwise provide a clean print trigger
    if (portfolioData.personalInfo.hasCustomResumeFile) {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = portfolioData.personalInfo.resumeFileName;
      link.click();
    } else {
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0f18] border border-white/10 rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#080a11]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-sky" />
            <span className="text-sm font-mono text-slate-200 font-semibold">
              Curriculum Vitae Preview • {portfolioData.personalInfo.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-50 hover:bg-surface-100 text-xs font-mono text-slate-300 hover:text-white border border-white/10 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>

            <button
              onClick={handleDownloadFile}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-sky/20 hover:bg-brand-sky/30 text-xs font-mono text-brand-sky border border-brand-sky/40 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-200 font-sans print:bg-white print:text-black print:p-0">
          {/* Header Block */}
          <div className="border-b border-white/10 pb-6 print:border-black/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white print:text-black">
                  {portfolioData.personalInfo.name}
                </h1>
                <p className="text-sm font-medium text-brand-sky print:text-blue-700 mt-1">
                  {portfolioData.personalInfo.title}
                </p>
                <p className="text-xs text-slate-400 print:text-gray-600 mt-0.5">
                  {portfolioData.personalInfo.collegeShort}
                </p>
              </div>

              <div className="text-xs font-mono text-slate-400 print:text-gray-700 space-y-1 sm:text-right">
                <div>{portfolioData.personalInfo.location}</div>
                <div>{portfolioData.personalInfo.email}</div>
                <div>github.com/shivu9-Algo</div>
                <div>linkedin.com/in/shivu-kumar-749211280</div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-brand-sky print:text-blue-700 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              {portfolioData.personalInfo.aboutShort}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-brand-sky print:text-blue-700 font-bold mb-3">
              Education
            </h2>
            <div className="p-4 rounded-xl bg-surface-100/50 border border-white/5 print:bg-transparent print:border-black/10 print:p-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="font-semibold text-white print:text-black text-sm">
                  {portfolioData.education.institution}
                </span>
                <span className="text-xs font-mono text-slate-400 print:text-gray-600">
                  {portfolioData.education.duration}
                </span>
              </div>
              <div className="text-xs text-brand-sky print:text-blue-800 mt-0.5">
                {portfolioData.education.degree} — {portfolioData.education.field}
              </div>
              <div className="text-xs text-slate-400 print:text-gray-600 mt-0.5">
                {portfolioData.education.currentStatus}
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {portfolioData.education.coursework.map((c, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-50 border border-white/5 text-slate-300 print:bg-gray-100 print:text-black print:border-gray-300"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-brand-sky print:text-blue-700 font-bold mb-3">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {portfolioData.technicalSkills.categories.map((cat) => (
                <div
                  key={cat.id}
                  className="p-3 rounded-xl bg-surface-100/50 border border-white/5 print:border-black/10 print:bg-transparent"
                >
                  <div className="text-xs font-semibold text-slate-200 print:text-black mb-1.5">
                    {cat.name}
                  </div>
                  <div className="text-xs text-slate-300 print:text-gray-800 leading-relaxed">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-brand-sky print:text-blue-700 font-bold mb-3">
              Selected Engineering Projects
            </h2>
            <div className="space-y-4">
              {portfolioData.projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-xl bg-surface-100/50 border border-white/5 print:border-black/10 print:bg-transparent"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <div className="font-semibold text-white print:text-black text-sm">
                      {proj.title}
                    </div>
                    <span className="text-xs font-mono text-brand-sky print:text-blue-700">
                      {proj.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-gray-800 leading-relaxed mb-2">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-400 print:text-gray-600">
                    <span className="text-slate-500">Tech:</span>
                    {proj.technologies.join(" • ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities & Collaborative Initiatives */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-brand-sky print:text-blue-700 font-bold mb-3">
              Activities & Technical Forums
            </h2>
            <div className="space-y-2">
              {portfolioData.experienceAndActivities.items
                .filter((item) => !item.isPlaceholder)
                .map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs text-slate-300 print:text-gray-800"
                  >
                    <span className="text-brand-sky print:text-blue-700 mt-0.5">•</span>
                    <div>
                      <span className="font-semibold text-slate-200 print:text-black">
                        {item.title} ({item.organization}):{" "}
                      </span>
                      <span>{item.description}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
