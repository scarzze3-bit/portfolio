"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Shield, ArrowRight, Clock, AlertCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, TwitterXIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function ContactSection() {
  const { meta, contact } = portfolioData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPgp, setCopiedPgp] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState(contact.serviceOptions[0]);
  const [selectedTimeline, setSelectedTimeline] = useState(contact.timelineOptions[0]);
  const [projectBrief, setProjectBrief] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(meta.email);
    setCopiedEmail(true);
    showToast("Email address copied to clipboard.");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPgp = () => {
    navigator.clipboard.writeText(meta.pgpFingerprint);
    setCopiedPgp(true);
    showToast("PGP Public Fingerprint copied to clipboard.");
    setTimeout(() => setCopiedPgp(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!fullName.trim() || !email.trim() || !projectBrief.trim()) {
      setFormError("Please fill out all required fields before transmitting.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setFormError("Please enter a valid engineering contact email.");
      return;
    }

    setIsSubmitting(true);

    // Simulate deterministic network dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      showToast("Inquiry transmitted successfully. Scoping response within 24 hours.");
    }, 900);
  };

  return (
    <section id="contact" className="py-24 border-b border-[#27272a] bg-[#09090b] relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#18181b] border border-emerald-500/50 text-[#fafafa] px-4 py-3 rounded-sm shadow-xl font-mono text-xs flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-emerald" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#121215] border border-[#27272a] text-xs font-mono text-[#a1a1aa]">
            <span>[ 05 // PROJECT SCOPING & ENGAGEMENT ]</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#fafafa]">
            Initiate Architectural Engagement
          </h2>
          <p className="text-[#a1a1aa] max-w-2xl text-sm sm:text-base">
            Direct access to senior engineering leadership. Reach out for smart contract audits,
            core protocol architecture, or high-concurrency full-stack development.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Coordinates & Status */}
          <div className="lg:col-span-5 space-y-6">
            {/* Availability Card */}
            <div className="p-6 bg-[#121215] border border-[#27272a] rounded-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#fafafa]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-emerald" />
                <span className="font-semibold uppercase tracking-wider">Engagement Status</span>
              </div>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                {meta.availability}
              </p>
              <div className="pt-3 border-t border-[#27272a] flex items-center gap-2 text-xs font-mono text-[#71717a]">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>{contact.slaGuarantee}</span>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 bg-[#121215] border border-[#27272a] rounded-sm space-y-3">
              <div className="text-xs font-mono text-[#71717a] uppercase">
                Primary Transmit Channel
              </div>
              <div className="flex items-center justify-between gap-3 p-3 bg-[#18181b] border border-[#27272a] rounded-sm font-mono text-xs">
                <div className="flex items-center gap-2 text-[#fafafa] truncate">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">{meta.email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded bg-[#27272a] hover:bg-[#3f3f46] text-[#fafafa] text-[11px] transition-colors"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* PGP Card */}
            <div className="p-6 bg-[#121215] border border-[#27272a] rounded-sm space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#71717a] uppercase">
                <span>PGP Encrypted Inquiries</span>
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <p className="text-xs text-[#a1a1aa]">
                For confidential zero-day vulnerability disclosures or sensitive pre-launch audits:
              </p>
              <div className="p-2.5 bg-[#18181b] border border-[#27272a] rounded-sm font-mono text-[11px] text-[#71717a] flex items-center justify-between gap-2">
                <span className="truncate">{meta.pgpFingerprint}</span>
                <button
                  onClick={handleCopyPgp}
                  className="p-1 text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
                  title="Copy PGP Fingerprint"
                >
                  {copiedPgp ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>

            {/* Social & Git Links */}
            <div className="p-6 bg-[#121215] border border-[#27272a] rounded-sm flex items-center justify-between">
              <span className="text-xs font-mono text-[#71717a] uppercase">Network Nodes:</span>
              <div className="flex items-center gap-3">
                <a
                  href={meta.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded bg-[#18181b] border border-[#27272a] text-[#a1a1aa] hover:text-[#fafafa] hover:border-[#3f3f46] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={meta.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="p-2 rounded bg-[#18181b] border border-[#27272a] text-[#a1a1aa] hover:text-[#fafafa] hover:border-[#3f3f46] transition-colors"
                >
                  <TwitterXIcon className="w-4 h-4" />
                </a>
                <a
                  href={meta.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded bg-[#18181b] border border-[#27272a] text-[#a1a1aa] hover:text-[#fafafa] hover:border-[#3f3f46] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-[#121215] border border-[#27272a] rounded-sm">
              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#fafafa]">
                    Transmission Received
                  </h3>
                  <p className="text-sm text-[#a1a1aa] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#fafafa] font-semibold">{fullName}</span>. Your brief has been securely queued. A Principal Engineer will reply to <span className="text-emerald-400">{email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFullName("");
                      setEmail("");
                      setProjectBrief("");
                    }}
                    className="mt-4 px-4 py-2 text-xs font-mono text-[#a1a1aa] hover:text-[#fafafa] border border-[#27272a] hover:border-[#3f3f46] rounded transition-colors"
                  >
                    Transmit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[#27272a] pb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#fafafa] tracking-tight">
                        Scope Inquiry Dispatch
                      </h3>
                      <p className="text-xs text-[#a1a1aa]">
                        Define technical requirements and engagement targets.
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 border border-emerald-500/30 rounded">
                      DIRECT ENGINEER REVIEW
                    </span>
                  </div>

                  {formError && (
                    <div className="p-3 bg-red-950/40 border border-red-500/40 rounded text-xs font-mono text-red-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#a1a1aa] uppercase mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Satoshi Nakamoto"
                        className="w-full px-3.5 py-2.5 bg-[#18181b] border border-[#27272a] focus:border-emerald-500 focus:outline-none rounded-sm text-sm text-[#fafafa] placeholder:text-[#71717a] font-mono transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#a1a1aa] uppercase mb-1.5">
                        Work / Engineer Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sat@protocol.network"
                        className="w-full px-3.5 py-2.5 bg-[#18181b] border border-[#27272a] focus:border-emerald-500 focus:outline-none rounded-sm text-sm text-[#fafafa] placeholder:text-[#71717a] font-mono transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Required Pill Selector */}
                  <div>
                    <label className="block text-xs font-mono text-[#a1a1aa] uppercase mb-2">
                      Domain / Service Required *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {contact.serviceOptions.map((serv) => (
                        <button
                          type="button"
                          key={serv}
                          onClick={() => setSelectedService(serv)}
                          className={`p-2 text-xs font-mono rounded-sm border text-center transition-all ${
                            selectedService === serv
                              ? "bg-[#1f1f24] border-emerald-500/70 text-emerald-400 font-semibold"
                              : "bg-[#18181b] border-[#27272a] text-[#a1a1aa] hover:text-[#fafafa] hover:border-[#3f3f46]"
                          }`}
                        >
                          {serv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline Required Selector */}
                  <div>
                    <label className="block text-xs font-mono text-[#a1a1aa] uppercase mb-2">
                      Target Timeline
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {contact.timelineOptions.map((time) => (
                        <button
                          type="button"
                          key={time}
                          onClick={() => setSelectedTimeline(time)}
                          className={`p-2 text-xs font-mono rounded-sm border text-center transition-all ${
                            selectedTimeline === time
                              ? "bg-[#1f1f24] border-blue-500/70 text-blue-400 font-semibold"
                              : "bg-[#18181b] border-[#27272a] text-[#a1a1aa] hover:text-[#fafafa] hover:border-[#3f3f46]"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Brief */}
                  <div>
                    <label className="block text-xs font-mono text-[#a1a1aa] uppercase mb-1.5">
                      Project Specifications & Scope *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={projectBrief}
                      onChange={(e) => setProjectBrief(e.target.value)}
                      placeholder="Outline your protocol architecture, repository status, target deployment date, or audit requirements..."
                      className="w-full px-3.5 py-2.5 bg-[#18181b] border border-[#27272a] focus:border-emerald-500 focus:outline-none rounded-sm text-sm text-[#fafafa] placeholder:text-[#71717a] font-mono transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-sm bg-emerald-400 hover:bg-emerald-300 disabled:opacity-60 text-[#09090b] font-mono font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/25 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#09090b] border-t-transparent rounded-full animate-spin" />
                          <span>Encrypting & Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Inquiry</span>
                          <ArrowRight className="w-4 h-4" />
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