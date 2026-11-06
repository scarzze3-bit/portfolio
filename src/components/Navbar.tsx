"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon } from "@/components/SocialIcons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Architecture & Work", href: "#work" },
    { name: "Security Standard", href: "#methodology" },
    { name: "Stack", href: "#stack" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? "bg-[#09090b]/90 backdrop-blur-md border-[#27272a] shadow-lg shadow-black/40"
          : "bg-[#09090b]/70 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand & Status */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 group text-[#fafafa] focus:outline-none"
            >
              <div className="w-8 h-8 rounded-sm bg-[#18181b] border border-[#27272a] flex items-center justify-center font-mono text-xs font-semibold text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
                <Terminal className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-sm font-bold tracking-tight text-[#fafafa] group-hover:text-emerald-400 transition-colors">
                  {portfolioData.meta.studioName}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-[#71717a] uppercase">
                  ENGINEERING
                </span>
              </div>
            </Link>

            {/* Operational Status Pill */}
            <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#121215] border border-[#27272a] text-[11px] font-mono text-[#a1a1aa]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[#fafafa] font-medium">{portfolioData.meta.systemStatus}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono text-[#a1a1aa] hover:text-[#fafafa] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:bg-emerald-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs & GitHub */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={portfolioData.meta.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="p-2 rounded-sm text-[#a1a1aa] hover:text-[#fafafa] bg-[#121215] border border-[#27272a] hover:border-[#3f3f46] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-[#09090b] bg-emerald-400 hover:bg-emerald-300 rounded-sm transition-colors shadow-sm shadow-emerald-500/20"
            >
              Initiate Project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={portfolioData.meta.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="p-2 text-[#a1a1aa] hover:text-[#fafafa]"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#a1a1aa] hover:text-[#fafafa] focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#09090b] border-b border-[#27272a] px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-[#121215] border border-[#27272a] text-xs font-mono text-[#a1a1aa] mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-emerald" />
            <span>{portfolioData.meta.systemStatus}</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-2 text-sm font-mono text-[#a1a1aa] hover:text-[#fafafa] hover:bg-[#121215] rounded transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono font-medium text-[#09090b] bg-emerald-400 hover:bg-emerald-300 rounded transition-colors"
            >
              Initiate Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}