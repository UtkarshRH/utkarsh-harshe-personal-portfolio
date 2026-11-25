"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/portfolio";

const NAV_LINKS = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const Navigation: React.FC = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActiveSection(pathname.startsWith("/work") ? "work" : "");
      return;
    }

    const observers: IntersectionObserver[] = [];
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(id);
          });
        },
        { rootMargin: "-35% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome, pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    setMobileOpen(false);
    if (isHome) {
      const target = document.getElementById(sectionId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", `#${sectionId}`);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200 ${
        isScrolled
          ? "bg-[#111318]/92 backdrop-blur-md border-[#2A2E37]"
          : "bg-[#111318]/75 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <div className="h-16 sm:h-[72px] flex items-center justify-between gap-6">
          <Link
            href="/"
            className="font-heading text-sm sm:text-[15px] font-semibold tracking-[0.1em] text-[#F5F5F6] hover:text-white transition-colors whitespace-nowrap"
          >
            {SITE_CONFIG.wordmark}
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-3.5 py-2 text-sm transition-colors ${
                    isActive
                      ? "text-[#F5F5F6]"
                      : "text-[#A1A7B3] hover:text-[#F5F5F6]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute left-3.5 right-3.5 bottom-0 h-[1.5px] bg-[#6685FF]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.resumePath}
              download="Utkarsh_Harshe_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-sm text-[#F5F5F6] bg-[#181B21] hover:bg-[#1E222A] border border-[#2A2E37] hover:border-[#3c4250] rounded-md transition-colors"
            >
              <span>Résumé</span>
              <ArrowDownToLine className="w-3.5 h-3.5 text-[#6685FF]" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-[#2A2E37] bg-[#181B21] text-[#F5F5F6] rounded-md"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-t border-[#2A2E37] bg-[#111318]"
        >
          <nav
            aria-label="Mobile navigation"
            className="max-w-[1160px] mx-auto px-5 py-5 flex flex-col"
          >
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center justify-between py-3.5 text-base border-b border-[#2A2E37]/60 transition-colors ${
                    isActive ? "text-[#F5F5F6]" : "text-[#A1A7B3] hover:text-[#F5F5F6]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6685FF]" />
                  )}
                </Link>
              );
            })}

            <a
              href={SITE_CONFIG.resumePath}
              download="Utkarsh_Harshe_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-5 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm text-[#F5F5F6] bg-[#181B21] border border-[#2A2E37] rounded-md"
            >
              <span>Download Résumé (PDF)</span>
              <ArrowDownToLine className="w-4 h-4 text-[#6685FF]" aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
