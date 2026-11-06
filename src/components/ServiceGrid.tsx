"use client";

import React, { useState } from "react";
import { Cpu, Network, ShieldCheck, Layers, CheckCircle, Code2, ArrowUpRight } from "lucide-react";
import { portfolioData, ServicePillar } from "@/data/portfolioData";

export default function ServiceGrid() {
  const { pillars } = portfolioData;
  const [activeCodePillar, setActiveCodePillar] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case "Cpu":
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case "Network":
        return <Network className="w-5 h-5 text-blue-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-indigo-400" />;
      default:
        return <Cpu className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="services" className="py-24 border-b border-[#27272a] bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#121215] border border-[#27272a] text-xs font-mono text-[#a1a1aa]">
              <span>[ 01 // CORE ENGINEERING PILLARS ]</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#fafafa]">
              Specialized Engineering Domains
            </h2>
            <p className="text-[#a1a1aa] max-w-2xl text-sm sm:text-base">
              Direct, deterministic engineering capabilities. We do not provide generic consulting;
              we design, write, verify, and deploy mission-critical systems.
            </p>
          </div>

          <div className="font-mono text-xs text-[#71717a] border-l border-[#27272a] pl-4 hidden md:block">
            <div>AUDIT GUARANTEE: ZERO COMPROMISE</div>
            <div>VERIFICATION: MATHEMATICAL INVARIANTS</div>
          </div>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar: ServicePillar) => {
            const isCodeOpen = activeCodePillar === pillar.id;

            return (
              <div
                key={pillar.id}
                className="group relative bg-[#121215] border border-[#27272a] hover:border-[#3f3f46] rounded-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-200"
              >
                <div>
                  {/* Top Bar: Icon, Title & Metric */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-sm bg-[#18181b] border border-[#27272a] group-hover:border-emerald-500/40 transition-colors">
                        {getIcon(pillar.iconName)}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#fafafa] tracking-tight group-hover:text-emerald-300 transition-colors">
                          {pillar.title}
                        </h3>
                        <span className="font-mono text-[11px] text-emerald-400">
                          {pillar.highlightMetric}
                        </span>
                      </div>
                    </div>

                    {/* Code Snippet Toggle */}
                    <button
                      onClick={() => setActiveCodePillar(isCodeOpen ? null : pillar.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono border transition-colors ${
                        isCodeOpen
                          ? "bg-emerald-950/60 border-emerald-500/50 text-emerald-300"
                          : "bg-[#18181b] border-[#27272a] text-[#a1a1aa] hover:text-[#fafafa] hover:border-[#3f3f46]"
                      }`}
                      title="Inspect implementation code"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>{isCodeOpen ? "Hide Spec" : "View Spec"}</span>
                    </button>
                  </div>

                  {/* Executive Summary */}
                  <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6">
                    {pillar.summary}
                  </p>

                  {/* Code Snippet Drawer if Active */}
                  {isCodeOpen && (
                    <div className="mb-6 p-4 rounded bg-[#09090b] border border-[#27272a] font-mono text-xs overflow-x-auto">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#27272a] text-[10px] text-[#71717a]">
                        <span>LANG: {pillar.codeLang.toUpperCase()}</span>
                        <span>PRODUCTION-TESTED PATTERN</span>
                      </div>
                      <pre className="text-emerald-400/90 leading-relaxed">
                        <code>{pillar.codeSnippet}</code>
                      </pre>
                    </div>
                  )}

                  {/* Deliverables Bullet List */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-mono text-[#71717a] uppercase tracking-wider">
                      Technical Deliverables:
                    </div>
                    {pillar.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d4d4d8]">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-normal">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tooling Pills */}
                <div className="pt-6 border-t border-[#27272a] mt-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {pillar.tooling.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded-sm bg-[#18181b] border border-[#27272a] text-[11px] font-mono text-[#a1a1aa]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}