import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/portfolio";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2A2E37] bg-[#111318]">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-sm text-[#A1A7B3]">
          <span className="text-[#F5F5F6] font-medium">{SITE_CONFIG.name}</span>
          <span className="mx-2 text-[#2A2E37]">·</span>
          <span>© {currentYear}</span>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-[#A1A7B3]">
          <Link href="/#work" className="hover:text-[#F5F5F6] transition-colors">
            Work
          </Link>
          <a
            href={SITE_CONFIG.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5F5F6] transition-colors"
          >
            Résumé
          </a>
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5F5F6] transition-colors"
          >
            GitHub
          </a>
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5F5F6] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
