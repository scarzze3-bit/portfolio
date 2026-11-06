"use client";

import React from "react";
import { Terminal, Database, Shield, Box } from "lucide-react";
import { portfolioData, TechStackCategory } from "@/data/portfolioData";

export default function TechMatrix() {
  const { techMatrix } = portfolioData;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      case "Web & Backend":
        return <Database className="w-4 h-4 text-blue-400" />;
      case "Blockchain & Web3":
        return <Box className="w-4 h-4 text-purple-400" />;
      case "Security & DevOps":
        return <Shield className="w-4 h-4 text-emerald-400" />;
      default:
        return <Terminal className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="stack" className="py-24 border-b border-[#27272a] bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#121215] border border-[#27272a] text-xs font-mono text-[#a1a1aa]">
            <span>[ 04 // TECHNICAL DIRECTORY & TOOLING MATRIX ]</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#fafafa]">
            Hardened Tooling & Environments
          </h2>
          <p className="text-[#a1a1aa] max-w-2xl text-sm sm:text-base">
            Carefully curated, memory-safe, and high-throughput engineering dependencies.
            No deprecated libraries; only active, battle-tested tooling.
          </p>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techMatrix.map((cat: TechStackCategory) => (
            <div
              key={cat.category}
              className="bg-[#121215] border border-[#27272a] hover:border-[#3f3f46] rounded-sm p-6 flex flex-col justify-between transition-colors duration-200"
            >
              <div>
                {/* Column Header */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-1.5 rounded-sm bg-[#18181b] border border-[#27272a]">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="text-base font-bold text-[#fafafa] tracking-tight">
                    {cat.category}
                  </h3>
                </div>

                <p className="text-xs text-[#a1a1aa] leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Skills List */}
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-sm bg-[#16161a] border border-[#27272a] hover:border-[#3f3f46] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-semibold text-[#fafafa]">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.2 rounded ${
                            skill.level === "Expert"
                              ? "bg-emerald-950/70 text-emerald-400 border border-emerald-500/30"
                              : "bg-[#1f1f23] text-[#a1a1aa] border border-[#27272a]"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#71717a] leading-tight">
                        {skill.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column Footer */}
              <div className="pt-6 border-t border-[#27272a] mt-6 flex items-center justify-between text-[10px] font-mono text-[#71717a]">
                <span>TOTAL: {cat.skills.length} INSTRUMENTS</span>
                <span className="text-emerald-400">HARDENED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}