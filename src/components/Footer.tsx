"use client";

import React from "react";
import Link from "next/link";
import { Terminal, ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, TwitterXIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Footer() {
  const { meta } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#09090b] border-t border-[#27272a] py-16 text-[#a1a1aa] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#27272a]">
          {/* Brand & Studio Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-sm bg-[#18181b] border border-[#27272a] flex items-center justify-center text-emerald-400">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-sm tracking-tight text-[#fafafa]">
                {meta.studioName}
              </span>
            </div>

            <p className="text-[#a1a1aa] text-xs leading-relaxed max-w-sm">
              Engineering resilient Web3 protocols, formally verified smart contracts, and high-throughput zero-trust architectures.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-[#71717a]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-emerald" />
              <span>{meta.statusDetail}</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[#fafafa] font-semibold uppercase tracking-wider text-[11px]">
              Architecture
            </div>
            <ul className="space-y-2 text-[#a1a1aa]">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Core Engineering Pillars
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-emerald-400 transition-colors">
                  Case Studies & Specs
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-emerald-400 transition-colors">
                  Security Methodology
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-emerald-400 transition-colors">
                  Tooling Directory
                </a>
              </li>
            </ul>
          </div>

          {/* Engagement & Security */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[#fafafa] font-semibold uppercase tracking-wider text-[11px]">
              Security & Audit
            </div>
            <p className="text-[11px] text-[#71717a] leading-relaxed">
              We practice responsible vulnerability disclosure and maintain a 24-hour SLA on critical protocol assessments.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={meta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[#121215] border border-[#27272a] hover:border-[#3f3f46] hover:text-[#fafafa] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={meta.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[#121215] border border-[#27272a] hover:border-[#3f3f46] hover:text-[#fafafa] transition-colors"
                aria-label="Twitter / X"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a
                href={meta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[#121215] border border-[#27272a] hover:border-[#3f3f46] hover:text-[#fafafa] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#71717a]">
          <div>
            © {meta.foundedYear}–2026 {meta.studioName}. All technical architectures and codebases reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>COMMIT: 0x9b7f14c</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#fafafa] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}