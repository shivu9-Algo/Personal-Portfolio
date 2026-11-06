"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Mail,
  Send,
  MapPin,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject.";
    if (!formData.message.trim()) {
      errs.message = "Please write a message.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Submission failed");
      }

      setSubmitted(true);
    } catch (err) {
      console.warn("API route notice, activating transparent mailto fallback:", err);
      // Fallback to client submission state
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openMailto = () => {
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Shivakumara,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:${portfolioData.personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-100 border border-white/10 text-brand-sky font-mono text-xs mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>07 // CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's start a conversation.
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Whether you have an internship opportunity, a project collaboration, or simply want to connect, I would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                Direct channels to reach me for professional inquiries, technical projects, or student collaborations.
              </p>

              {/* Direct Email Card with 1-Click Copy */}
              <div className="p-4 rounded-xl bg-surface-50 border border-white/[0.08] mb-4">
                <div className="text-xs font-mono text-slate-400 mb-1 flex items-center justify-between">
                  <span>Direct Email</span>
                  {copiedEmail && (
                    <span className="text-emerald-400 text-[11px] font-sans flex items-center gap-1">
                      <Check className="w-3 h-3" /> Copied to clipboard!
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <a
                    href={`mailto:${portfolioData.personalInfo.email}`}
                    className="text-sm font-mono text-brand-sky hover:underline truncate"
                  >
                    {portfolioData.personalInfo.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-surface-50 border border-white/[0.08] mb-6">
                <div className="text-xs font-mono text-slate-400 mb-1">Location</div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{portfolioData.personalInfo.location}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Sahyadri College of Engineering & Management, Adyar
                </div>
              </div>

              {/* Social Profiles */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Professional Profiles
                </div>
                <div className="space-y-2.5">
                  <a
                    href={portfolioData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-brand-sky/30 transition-all text-xs font-mono text-slate-200 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4 text-sky-400" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                  </a>

                  <a
                    href={portfolioData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-brand-sky/30 transition-all text-xs font-mono text-slate-200 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4 text-slate-200" />
                      <span>GitHub Profile</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Availability Card */}
            <div className="p-5 rounded-2xl bg-[#0b0e17] border border-white/[0.06] text-xs leading-relaxed text-slate-400 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-200 font-semibold">Response Time: </span>
                I typically respond within 24 hours during working days for all academic, internship, and project queries.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below. Messages are validated client-side and can be dispatched immediately to my inbox.
              </p>

              {submitted ? (
                /* Honest, clear submission feedback state */
                <div className="py-8 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">
                    Message Prepared Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-6">
                    Thank you, <span className="font-semibold text-brand-sky">{formData.name}</span>.
                    To ensure 100% direct delivery without relying on an unverified third-party relay, you can send this directly via your email client:
                  </p>

                  <div className="p-4 rounded-xl bg-surface-50 border border-white/[0.08] max-w-md mx-auto text-left mb-6 text-xs font-mono text-slate-300 space-y-1">
                    <div><span className="text-slate-500">To:</span> {portfolioData.personalInfo.email}</div>
                    <div><span className="text-slate-500">Subject:</span> [Portfolio Inquiry] {formData.subject}</div>
                    <div className="text-slate-400 pt-2 border-t border-white/5 truncate">
                      <span className="text-slate-500">Preview:</span> "{formData.message}"
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={openMailto}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium text-xs font-mono shadow-lg hover:shadow-sky-500/30 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email Client (Send Direct)</span>
                    </button>
                    <button
                      onClick={resetForm}
                      className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono transition-colors"
                    >
                      Write Another Note
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono text-slate-300 mb-2"
                      >
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Mercer"
                        className={`w-full px-4 py-3 rounded-xl bg-surface-50 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.name
                            ? "border-rose-500/60 focus:border-rose-500"
                            : "border-white/10 focus:border-brand-sky/60"
                        }`}
                      />
                      {errors.name && (
                        <div className="mt-1.5 text-[11px] font-mono text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono text-slate-300 mb-2"
                      >
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@domain.com"
                        className={`w-full px-4 py-3 rounded-xl bg-surface-50 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email
                            ? "border-rose-500/60 focus:border-rose-500"
                            : "border-white/10 focus:border-brand-sky/60"
                        }`}
                      />
                      {errors.email && (
                        <div className="mt-1.5 text-[11px] font-mono text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono text-slate-300 mb-2"
                    >
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Internship opportunity / Project collaboration"
                      className={`w-full px-4 py-3 rounded-xl bg-surface-50 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.subject
                          ? "border-rose-500/60 focus:border-rose-500"
                          : "border-white/10 focus:border-brand-sky/60"
                      }`}
                    />
                    {errors.subject && (
                      <div className="mt-1.5 text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-slate-300 mb-2"
                    >
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Shivakumara, I came across your portfolio and would like to discuss..."
                      className={`w-full px-4 py-3 rounded-xl bg-surface-50 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? "border-rose-500/60 focus:border-rose-500"
                          : "border-white/10 focus:border-brand-sky/60"
                      }`}
                    />
                    {errors.message && (
                      <div className="mt-1.5 text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium text-xs font-mono shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Prepare & Dispatch Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
