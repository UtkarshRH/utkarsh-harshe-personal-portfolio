"use client";

import React from "react";
import { ArrowDown, ArrowDownToLine, ArrowRight, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/data/portfolio";

const HeroSection: React.FC = () => {
  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const workEl = document.getElementById("work");
    if (workEl) {
      e.preventDefault();
      workEl.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", "#work");
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:min-h-[94vh] lg:flex lg:items-center border-b border-[#303540]/80 bg-transparent"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Editorial Copy Column */}
          <div className="lg:col-span-7 space-y-7">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-[0.12em] uppercase text-[#A3AAB6]">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1B1E25]/85 backdrop-blur-sm border border-[#303540] rounded-sm text-[#F4F5F7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6685FF]" />
                {SITE_CONFIG.role}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1B1E25]/70 backdrop-blur-sm border border-[#303540] rounded-sm">
                <MapPin className="w-3.5 h-3.5 text-[#A3AAB6]" aria-hidden="true" />
                {SITE_CONFIG.location}
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[64px] font-semibold tracking-[-0.03em] leading-[1.05] text-[#F4F5F7]">
              {SITE_CONFIG.headline}
            </h1>

            <p className="text-lg sm:text-xl text-[#A3AAB6] max-w-xl leading-relaxed font-sans">
              {SITE_CONFIG.supportingIntro}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 pt-2">
              <a
                href="#work"
                onClick={scrollToWork}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#111318] bg-[#F4F5F7] hover:bg-white rounded-sm transition-colors"
              >
                <span>Explore my work</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={SITE_CONFIG.resumePath}
                download="Utkarsh_Harshe_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#F4F5F7] bg-[#1B1E25]/90 hover:bg-[#232731] backdrop-blur-sm border border-[#303540] hover:border-[#6685FF]/60 rounded-sm transition-colors"
              >
                <ArrowDownToLine className="w-4 h-4 text-[#6685FF]" aria-hidden="true" />
                <span>Download résumé</span>
              </a>
            </div>

            {/* Quiet engineering spec strip */}
            <div className="pt-6 border-t border-[#303540]/80 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#A3AAB6]">
                  Current Focus
                </div>
                <div className="mt-1 text-sm text-[#F4F5F7] font-medium">
                  Dealer & Retail Systems
                </div>
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#A3AAB6]">
                  Core Stack
                </div>
                <div className="mt-1 text-sm text-[#F4F5F7] font-medium">
                  React, Next.js, TypeScript
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#A3AAB6]">
                  Backend & Data
                </div>
                <div className="mt-1 text-sm text-[#F4F5F7] font-medium">
                  Java, Node.js, FastAPI
                </div>
              </div>
            </div>
          </div>

          {/* Right side opens directly onto the 3-tier 3D system architecture in the background */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-end justify-end pb-2 pointer-events-none select-none">
            <div className="border border-[#303540]/80 bg-[#111318]/65 backdrop-blur-sm rounded-sm px-4 py-3 space-y-1.5 text-right">
              <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#6685FF]">
                3-TIER SYSTEM TOPOLOGY
              </div>
              <div className="text-[11px] font-mono text-[#A3AAB6]">
                01 Client UI · 02 API & Services · 03 Data & Cache
              </div>
            </div>
          </div>
        </div>

        {/* Tasteful Scroll Indicator */}
        <div className="hidden lg:flex items-center justify-between pt-14 mt-10 border-t border-[#303540]/50 text-xs font-mono text-[#A3AAB6]">
          <span>SCROLL TO EXPLORE SYSTEM ARCHITECTURE & CASE STUDIES</span>
          <a
            href="#about"
            onClick={(e) => {
              const aboutEl = document.getElementById("about");
              if (aboutEl) {
                e.preventDefault();
                aboutEl.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 hover:text-[#F4F5F7] transition-colors"
          >
            <span>01 / ABOUT</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#6685FF]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
