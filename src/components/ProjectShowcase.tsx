"use client";

import React, { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp, Layers, ShieldAlert, Cpu } from "lucide-react";
import { portfolioData, ProjectCaseStudy } from "@/data/portfolioData";
import { GithubIcon } from "@/components/SocialIcons";

export default function ProjectShowcase() {
  const { projects } = portfolioData;
  const categories = ["All", "Web3 & Blockchain", "Cybersecurity", "Web Development"] as const;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 border-b border-[#27272a] bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#121215] border border-[#27272a] text-xs font-mono text-[#a1a1aa]">
              <span>[ 02 // CASE STUDIES & ARCHITECTURE ]</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#fafafa]">
              Proven Engineering Deployments
            </h2>
            <p className="text-[#a1a1aa] max-w-2xl text-sm sm:text-base">
              Concrete case studies demonstrating formal verification, high-concurrency event routing,
              and gas-optimized smart contract protocols in production.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#121215] border border-[#27272a] rounded-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono rounded-sm transition-all ${
                  selectedCategory === cat
                    ? "bg-[#18181b] text-[#fafafa] border border-[#3f3f46] shadow-sm"
                    : "text-[#a1a1aa] hover:text-[#fafafa] border border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project: ProjectCaseStudy) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <div
                key={project.id}
                className="bg-[#121215] border border-[#27272a] hover:border-[#3f3f46] rounded-sm p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200"
              >
                <div>
                  {/* Category Pill & Links */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-sm bg-[#18181b] border border-[#27272a] text-[11px] font-mono text-emerald-400">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-mono text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
                          title="View Source on GitHub"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                      {project.docUrl && (
                        <a
                          href={project.docUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors ml-2"
                          title="View Architecture Specification"
                        >
                          <span>Doc</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#fafafa] tracking-tight mb-4">
                    {project.title}
                  </h3>

                  {/* Highlight Metric Monospace Pill */}
                  <div className="mb-6 p-3 rounded-sm bg-[#16161a] border border-[#27272a] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#71717a] uppercase">Key Impact:</span>
                    <span className="font-mono text-xs font-bold text-emerald-400">
                      {project.impactMetric}
                    </span>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 text-xs sm:text-sm leading-relaxed mb-6">
                    <div>
                      <span className="font-mono text-xs font-semibold text-[#a1a1aa] uppercase tracking-wide block mb-1">
                        The Challenge
                      </span>
                      <p className="text-[#a1a1aa]">{project.challenge}</p>
                    </div>

                    <div>
                      <span className="font-mono text-xs font-semibold text-[#fafafa] uppercase tracking-wide block mb-1">
                        Architecture & Solution
                      </span>
                      <p className="text-[#d4d4d8]">{project.solution}</p>
                    </div>
                  </div>

                  {/* Deep-Dive Expandable Architecture Spec */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#27272a] space-y-4 text-xs">
                      <div>
                        <div className="font-mono text-[11px] text-[#71717a] uppercase mb-2">
                          Engineering Deep-Dive:
                        </div>
                        <ul className="space-y-1.5 text-[#a1a1aa]">
                          {project.architectureDetails.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-emerald-400 font-mono select-none">›</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="font-mono text-[11px] text-[#71717a] uppercase mb-2">
                          Delivered Artifacts:
                        </div>
                        <ul className="space-y-1.5 text-[#a1a1aa]">
                          {project.deliverableArtifacts.map((artifact, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-blue-400 font-mono select-none">✓</span>
                              <span>{artifact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer: Tech Badges & Expand Trigger */}
                <div className="pt-6 border-t border-[#27272a] mt-4 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-sm bg-[#18181b] border border-[#27272a] text-[10px] font-mono text-[#a1a1aa]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setExpandedProjectId(isExpanded ? null : project.id)}
                    className="shrink-0 flex items-center gap-1 text-xs font-mono text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
                  >
                    <span>{isExpanded ? "Less" : "Details"}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}