import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/portfolio";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#303540] bg-[#111318]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs font-mono text-[#A3AAB6]">
          <span className="text-[#F4F5F7] font-medium tracking-[0.08em]">
            {SITE_CONFIG.wordmark}
          </span>
          <span className="hidden sm:inline text-[#303540]">/</span>
          <span>
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-[#A3AAB6]">
          <Link href="/#work" className="hover:text-[#F4F5F7] transition-colors">
            Selected Work
          </Link>
          <a
            href={SITE_CONFIG.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4F5F7] transition-colors"
          >
            Résumé
          </a>
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4F5F7] transition-colors"
          >
            GitHub
          </a>
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4F5F7] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
