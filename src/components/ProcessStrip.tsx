"use client";

import React from "react";
import { Check, ShieldAlert, GitCommit, Search, Rocket } from "lucide-react";
import { portfolioData, ProcessStep } from "@/data/portfolioData";

export default function ProcessStrip() {
  const { methodology } = portfolioData;

  const getStepIcon = (step: string) => {
    switch (step) {
      case "01":
        return <ShieldAlert className="w-4 h-4 text-emerald-400" />;
      case "02":
        return <GitCommit className="w-4 h-4 text-blue-400" />;
      case "03":
        return <Search className="w-4 h-4 text-emerald-400" />;
      case "04":
        return <Rocket className="w-4 h-4 text-purple-400" />;
      default:
        return <Check className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="methodology" className="py-24 border-b border-[#27272a] bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#121215] border border-[#27272a] text-xs font-mono text-[#a1a1aa]">
            <span>[ 03 // ENGINEERING METHODOLOGY & SECURITY STANDARD ]</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#fafafa]">
            Deterministic Delivery Lifecycle
          </h2>
          <p className="text-[#a1a1aa] max-w-2xl text-sm sm:text-base">
            How whybh labs moves from mathematical modeling and threat discovery to hardened production
            deployment without unexpected regressions or critical security failures.
          </p>
        </div>

        {/* 4-Step Horizontal Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {methodology.map((item: ProcessStep, idx: number) => (
            <div
              key={item.step}
              className="relative bg-[#121215] border border-[#27272a] hover:border-[#3f3f46] rounded-sm p-6 flex flex-col justify-between transition-colors duration-200"
            >
              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-sm bg-[#18181b] border border-[#27272a]">
                      {getStepIcon(item.step)}
                    </div>
                    <span className="font-mono text-sm font-bold text-emerald-400">
                      // {item.step}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#71717a]">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="text-base font-bold text-[#fafafa] tracking-tight mb-1">
                  {item.title}
                </h3>
                <div className="font-mono text-[11px] text-[#a1a1aa] mb-4">
                  {item.subtitle}
                </div>

                {/* Description */}
                <p className="text-xs text-[#a1a1aa] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="pt-4 border-t border-[#27272a] space-y-2">
                <div className="font-mono text-[10px] text-[#71717a] uppercase">
                  Phase Outputs:
                </div>
                {item.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-[#d4d4d8]">
                    <span className="text-emerald-400 font-mono select-none">›</span>
                    <span className="leading-snug text-[11px]">{del}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}