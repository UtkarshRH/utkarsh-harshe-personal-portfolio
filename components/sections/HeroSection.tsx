"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownToLine, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/portfolio";

const HeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const workEl = document.getElementById("work");
    if (workEl) {
      e.preventDefault();
      workEl.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
      window.history.replaceState(null, "", "#work");
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="pt-32 pb-20 sm:pt-44 sm:pb-28 border-b border-[#2A2E37]"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end"
        >
          {/* Left Column: Core Identity & Editorial Statement */}
          <div className="lg:col-span-8 space-y-7">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#A1A7B3]">
              <span className="inline-flex items-center gap-2 text-[#F5F5F6] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6685FF]" />
                {SITE_CONFIG.role}
              </span>
              <span className="text-[#2A2E37]">/</span>
              <span>{SITE_CONFIG.location}</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[62px] font-semibold tracking-[-0.03em] leading-[1.06] text-[#F5F5F6]">
              {SITE_CONFIG.headline}
            </h1>

            <p className="text-lg sm:text-xl text-[#A1A7B3] max-w-2xl leading-[1.65]">
              {SITE_CONFIG.supportingIntro}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 pt-2">
              <a
                href="#work"
                onClick={scrollToWork}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#111318] bg-[#F5F5F6] hover:bg-white rounded-md transition-colors"
              >
                <span>Explore work</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={SITE_CONFIG.resumePath}
                download="Utkarsh_Harshe_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#F5F5F6] bg-[#181B21] hover:bg-[#1E222A] border border-[#2A2E37] hover:border-[#3c4250] rounded-md transition-colors"
              >
                <ArrowDownToLine className="w-4 h-4 text-[#6685FF]" aria-hidden="true" />
                <span>Download résumé</span>
              </a>
            </div>
          </div>

          {/* Right Column: Minimal Typography-Led Summary */}
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#2A2E37] pt-8 lg:pt-0 lg:pl-10 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-[0.08em] text-[#A1A7B3]">
                Focus
              </div>
              <div className="mt-1.5 text-sm sm:text-base text-[#F5F5F6]">
                Frontend architecture, dealer platforms & retail PWAs
              </div>
            </div>

            <div className="pt-5 border-t border-[#2A2E37]/70">
              <div className="text-xs uppercase tracking-[0.08em] text-[#A1A7B3]">
                Core Stack
              </div>
              <div className="mt-1.5 text-sm sm:text-base text-[#F5F5F6]">
                React, Next.js, TypeScript, Java, Node.js, FastAPI
              </div>
            </div>

            <div className="pt-5 border-t border-[#2A2E37]/70">
              <div className="text-xs uppercase tracking-[0.08em] text-[#A1A7B3]">
                Experience
              </div>
              <div className="mt-1.5 text-sm sm:text-base text-[#F5F5F6]">
                Ola Electric · TBP CODOT LLP · SmartLeaven
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
