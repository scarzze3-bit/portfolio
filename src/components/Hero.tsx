"use client";

import React, { useState } from "react";
import { ArrowRight, ShieldCheck, Activity, Terminal, CheckCircle2, ChevronRight, Copy, Check } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { badge, headline, subheadline, ctas, systemCapabilities } = portfolioData.hero;
  const [activeTab, setActiveTab] = useState(0);
  const [copiedFingerprint, setCopiedFingerprint] = useState(false);

  const handleCopyPgp = () => {
    navigator.clipboard.writeText(portfolioData.meta.pgpFingerprint);
    setCopiedFingerprint(true);
    setTimeout(() => setCopiedFingerprint(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-[#27272a] bg-[#09090b]">
      {/* Subtle Swiss Grid Background */}
      <div className="absolute inset-0 swiss-grid opacity-40 pointer-events-none" />

      {/* Subtle radial accent gradient to avoid flat void, strictly restrained */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/[0.03] blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[300px] bg-blue-500/[0.02] blur-[100px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Technical Narrative & Authority */}
          <div className="lg:col-span-7 space-y-6">
            {/* Monospace Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#121215] border border-[#27272a] text-xs font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-emerald" />
              <span>{badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold tracking-tight text-[#fafafa] leading-[1.15]">
              {headline}
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-2xl font-normal">
              {subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={ctas.primary.href}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-mono font-medium text-[#09090b] bg-emerald-400 hover:bg-emerald-300 rounded-sm transition-all shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/25"
              >
                <span>{ctas.primary.text}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={ctas.secondary.href}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-mono text-[#fafafa] bg-[#121215] hover:bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] rounded-sm transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{ctas.secondary.text}</span>
              </a>
            </div>

            {/* Micro Invariants Indicator */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#71717a]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Formal Invariant Testing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>EVM Bytecode Hardened</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero-Trust API Spec</span>
              </div>
            </div>
          </div>

          {/* Right Column: System Capability Card (Monospace & Technical Authority) */}
          <div className="lg:col-span-5">
            <div className="bg-[#121215] border border-[#27272a] rounded-sm shadow-2xl overflow-hidden font-mono text-xs">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#18181b] border-b border-[#27272a]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27272a] border border-[#3f3f46]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27272a] border border-[#3f3f46]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27272a] border border-[#3f3f46]" />
                  <span className="text-[#a1a1aa] text-[11px] ml-2 font-mono">
                    sys.telemetry://whybh-core.v1
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                  <Activity className="w-3 h-3" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Sub-header System Spec */}
              <div className="px-4 py-2.5 bg-[#0e0e11] border-b border-[#27272a] flex items-center justify-between text-[11px] text-[#71717a]">
                <span>CORE PILLARS STATUS</span>
                <span className="text-[#a1a1aa]">UPDATED: REAL-TIME</span>
              </div>

              {/* Capability Tabs */}
              <div className="p-4 space-y-3">
                {systemCapabilities.map((cap, idx) => {
                  const isSelected = activeTab === idx;
                  return (
                    <div
                      key={cap.id}
                      onClick={() => setActiveTab(idx)}
                      className={`p-3 rounded-sm border cursor-pointer transition-all ${
                        isSelected
                          ? "bg-[#18181b] border-emerald-500/50 shadow-sm"
                          : "bg-[#141418] border-[#27272a] hover:border-[#3f3f46]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isSelected ? "bg-emerald-400 pulse-emerald" : "bg-[#71717a]"
                            }`}
                          />
                          <span className="font-semibold text-[#fafafa]">{cap.label}</span>
                        </div>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1f1f23] text-emerald-400 border border-[#27272a]">
                          {cap.badge}
                        </span>
                      </div>

                      <div className="mt-2 flex items-center justify-between text-[#a1a1aa] text-[11px]">
                        <span>{cap.status}</span>
                        <span className="text-[#fafafa] font-bold">{cap.metric}</span>
                      </div>

                      {isSelected && (
                        <div className="mt-2 pt-2 border-t border-[#27272a] text-[11px] text-[#71717a] flex items-center justify-between">
                          <span>{cap.detail}</span>
                          <span className="text-emerald-400">ACTIVE</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* PGP Security Fingerprint Bar */}
              <div className="px-4 py-3 bg-[#16161a] border-t border-[#27272a] flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-[10px] text-[#71717a] truncate">
                  <span className="text-emerald-400">PGP:</span>
                  <span className="truncate">{portfolioData.meta.pgpFingerprint}</span>
                </div>
                <button
                  onClick={handleCopyPgp}
                  className="shrink-0 p-1 rounded hover:bg-[#27272a] text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
                  title="Copy PGP Fingerprint"
                >
                  {copiedFingerprint ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}