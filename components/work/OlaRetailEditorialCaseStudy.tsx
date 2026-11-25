"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AmbientDepthBackground from "@/components/layout/AmbientDepthBackground";
import OlaRetailShowcase from "@/components/work/OlaRetailShowcase";
import ArchitectureDiagram from "@/components/work/ArchitectureDiagram";
import ProjectMockup from "@/components/work/ProjectMockup";
import type { CaseStudyProject } from "@/types/project";

interface OlaRetailEditorialCaseStudyProps {
  project: CaseStudyProject;
  prev: CaseStudyProject | null;
  next: CaseStudyProject | null;
}

const ENGINEERING_AREAS = [
  {
    title: "Frontend architecture",
    detail:
      "Built modular operational views in Next.js, React, and TypeScript, structured around distinct retail workflows so store teams can move smoothly between logistics, quality checks, registration, and finance.",
  },
  {
    title: "State management",
    detail:
      "Used Zustand for predictable client-side session and Partner Mode state alongside React component state for focused multi-step operational forms.",
  },
  {
    title: "API integration",
    detail:
      "Integrated Java REST APIs through TanStack Query for structured data fetching, query caching, background synchronization, and resilient retry handling.",
  },
  {
    title: "IndexedDB persistence",
    detail:
      "Implemented Dexie-backed IndexedDB draft autosave inside Quality Control audit screens so long multi-field inspection progress persists locally across refreshes and unstable store networks.",
  },
  {
    title: "PWA release management",
    detail:
      "Implemented a forced-update flow at the Progressive Web App shell level to detect newly published versions and prompt operators to update before continuing tasks.",
  },
  {
    title: "AWS S3 integrations",
    detail:
      "Connected media, registration documents, and store collateral workflows to AWS S3 across both standard mobile browsers and embedded Android WebView environments.",
  },
  {
    title: "Role-based access control",
    detail:
      "Integrated Casbin role-based access rules and Partner Mode authentication to enforce clear permission boundaries between internal store teams and external dealer partners.",
  },
  {
    title: "Monitoring",
    detail:
      "Integrated CubeAPM monitoring to surface frontend performance, request latency, and production operational errors across live store workflows.",
  },
];

const STACK_GROUPS = [
  {
    label: "Frontend & PWA",
    items: ["Next.js", "React", "TypeScript", "PWA", "Tailwind CSS"],
  },
  {
    label: "State & Offline Storage",
    items: ["Zustand", "TanStack Query", "Dexie (IndexedDB)"],
  },
  {
    label: "Backend & Access Control",
    items: ["Java", "REST APIs", "Casbin RBAC", "Partner Mode"],
  },
  {
    label: "Cloud & Observability",
    items: ["AWS S3", "Android WebView", "CubeAPM"],
  },
];

const OlaRetailEditorialCaseStudy: React.FC<OlaRetailEditorialCaseStudyProps> = ({
  project,
  prev,
  next,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen bg-[#111318] text-[#F5F5F6] flex flex-col">
      <AmbientDepthBackground />
      <Navigation />

      <main className="relative z-10 flex-1 pt-28 pb-24 sm:pt-36 sm:pb-32 overflow-x-hidden">
        <article>
          {/* ============================================================
              SECTION 1 — PROJECT HERO
             ============================================================ */}
          <header className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 pb-16 sm:pb-24">
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-10"
            >
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-sm text-[#A1A7B3] hover:text-[#F5F5F6] transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-[#6685FF]" aria-hidden="true" />
                <span>Selected Work</span>
              </Link>

              <div className="space-y-6 max-w-4xl">
                <h1 className="font-heading text-4xl sm:text-6xl lg:text-[72px] font-semibold tracking-[-0.035em] leading-[1.04] text-[#F5F5F6]">
                  Ola Retail App
                </h1>
                <p className="text-xl sm:text-2xl text-[#A1A7B3] leading-[1.55]">
                  A production Progressive Web App for retail and fulfilment operations.
                </p>
              </div>

              {/* Clean Horizontal Metadata Strip */}
              <div className="pt-8 border-t border-b border-[#2A2E37] pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <div className="text-sm text-[#A1A7B3]">Context</div>
                  <div className="mt-1.5 text-base font-medium text-[#F5F5F6]">
                    Company Work · Ola Electric
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[#A1A7B3]">My Role</div>
                  <div className="mt-1.5 text-base font-medium text-[#F5F5F6]">
                    Software Development Engineer I
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[#A1A7B3]">Timeline</div>
                  <div className="mt-1.5 text-base font-medium text-[#F5F5F6]">
                    December 2025 – Present
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[#A1A7B3]">Main Stack</div>
                  <div className="mt-1.5 text-base font-medium text-[#F5F5F6]">
                    Next.js, React, TypeScript, PWA, Java, AWS S3
                  </div>
                </div>
              </div>
            </motion.div>
          </header>

          {/* ============================================================
              SECTION 2 — PRODUCT SHOWCASE
             ============================================================ */}
          <section
            aria-label="Product showcase"
            className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 pb-20 sm:pb-28"
          >
            <OlaRetailShowcase />
          </section>

          {/* ============================================================
              SECTION 3 — PROJECT OVERVIEW
             ============================================================ */}
          <section className="border-t border-[#2A2E37] py-20 sm:py-28">
            <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-sm font-medium text-[#6685FF]">Overview</span>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-[-0.025em] leading-[1.15] text-[#F5F5F6]">
                  One operational surface for store, logistics, and dealer teams.
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#A1A7B3] leading-[1.75]">
                <p className="text-[#F5F5F6]/95">
                  Ola Retail App is an installable Progressive Web App built to run day-to-day
                  store and hub operations across vehicle fulfilment, logistics, registration,
                  quality checks, dealer administration, and finance.
                </p>
                <p>
                  Operating across standard web browsers and embedded Android WebViews, the
                  application brings together field-critical workflows—from truck inwarding and
                  VIN scanning to offline-resilient quality audits and dealer finance
                  reconciliation—under unified role-based access control.
                </p>
              </div>
            </div>
          </section>

          {/* ============================================================
              SECTION 4 — MY CONTRIBUTIONS (Varied Editorial Layouts)
             ============================================================ */}
          <section className="border-t border-[#2A2E37] py-20 sm:py-28">
            <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 space-y-16">
              <div className="max-w-2xl space-y-3">
                <span className="text-sm font-medium text-[#6685FF]">
                  Contributions
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#F5F5F6]">
                  Operational workflows built and shipped to production.
                </h2>
              </div>

              {/* Layout A: Featured 2-Column Lead Pair */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 pb-12 border-b border-[#2A2E37]">
                <div className="space-y-3">
                  <h3 className="font-heading text-2xl font-semibold text-[#F5F5F6]">
                    Vehicle fulfilment and logistics
                  </h3>
                  <p className="text-base sm:text-lg text-[#A1A7B3] leading-[1.75]">
                    Built the Ola Retail App as a Progressive Web App supporting core store
                    fulfilment and logistics operations, improving operational search, reporting,
                    and document workflows across daily store activity.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading text-2xl font-semibold text-[#F5F5F6]">
                    VIN scanning and outwarding
                  </h3>
                  <p className="text-base sm:text-lg text-[#A1A7B3] leading-[1.75]">
                    Delivered truck and VIN scanning, outwarding flows, delivery notes, document
                    submission, and customer delivery OTP verification workflows for accurate
                    unit tracking through handover.
                  </p>
                </div>
              </div>

              {/* Layout B: Editorial Horizontal Rows */}
              <div className="divide-y divide-[#2A2E37]">
                {[
                  {
                    title: "Registration Hub and bulk upload",
                    body: "Developed Registration Hub capabilities covering task search, document management, bulk uploads, and CSV exports to streamline high-volume vehicle registration operations.",
                  },
                  {
                    title: "Quality Control and audit workflows",
                    body: "Implemented Quality Control audits with Dexie-based IndexedDB draft autosave, alongside Part Master features and IQC correction tools so inspection work is preserved reliably.",
                  },
                  {
                    title: "Dealer finance and payments",
                    body: "Built dealer finance workflows for e-voucher PDFs, virtual accounts, account statements, ledger entries, and UTR-based sale-order lookup.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="py-9 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-baseline"
                  >
                    <h3 className="lg:col-span-5 font-heading text-xl sm:text-2xl font-semibold text-[#F5F5F6]">
                      {item.title}
                    </h3>
                    <p className="lg:col-span-7 text-base sm:text-lg text-[#A1A7B3] leading-[1.75]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Layout C: Subtle 2-Column Highlighted Closing Pair */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="pl-6 border-l-2 border-[#6685FF] space-y-2.5">
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#F5F5F6]">
                    Access control and partner mode
                  </h3>
                  <p className="text-base text-[#A1A7B3] leading-[1.75]">
                    Integrated Casbin role-based access and Partner Mode authentication, together
                    with dealer dashboards and media/collateral workflows using AWS S3 and Android
                    WebView.
                  </p>
                </div>

                <div className="pl-6 border-l-2 border-[#2A2E37] space-y-2.5">
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#F5F5F6]">
                    PWA release and forced app updates
                  </h3>
                  <p className="text-base text-[#A1A7B3] leading-[1.75]">
                    Implemented a forced-update flow that detects newly published builds and prompts
                    field users to update the app when a new release is available.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================
              SECTION 5 — ENGINEERING IMPLEMENTATION
             ============================================================ */}
          <section className="border-t border-[#2A2E37] py-20 sm:py-28">
            <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 space-y-14">
              <div className="max-w-2xl space-y-3">
                <span className="text-sm font-medium text-[#6685FF]">
                  Engineering Implementation
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#F5F5F6]">
                  Architecture, persistence, and production reliability.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
                {ENGINEERING_AREAS.map((area) => (
                  <div
                    key={area.title}
                    className="pt-6 border-t border-[#2A2E37] space-y-2.5"
                  >
                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#F5F5F6]">
                      {area.title}
                    </h3>
                    <p className="text-base text-[#A1A7B3] leading-[1.7]">
                      {area.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <ArchitectureDiagram
                  nodes={project.architectureNodes}
                  summary={project.architectureSummary}
                />
              </div>
            </div>
          </section>

          {/* ============================================================
              SECTION 6 — CHALLENGES AND SOLUTIONS
             ============================================================ */}
          <section className="border-t border-[#2A2E37] py-20 sm:py-28">
            <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 space-y-12">
              <div className="max-w-2xl space-y-3">
                <span className="text-sm font-medium text-[#6685FF]">
                  Challenges & Solutions
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#F5F5F6]">
                  Solving real constraints in store operations.
                </h2>
              </div>

              <div className="divide-y divide-[#2A2E37] border-t border-b border-[#2A2E37]">
                {project.challenges.map((entry, idx) => (
                  <div
                    key={idx}
                    className="py-9 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12"
                  >
                    <div className="md:col-span-5 space-y-2">
                      <div className="text-sm text-[#A1A7B3]">Challenge</div>
                      <p className="text-lg font-medium text-[#F5F5F6] leading-relaxed">
                        {entry.challenge}
                      </p>
                    </div>
                    <div className="md:col-span-7 space-y-2">
                      <div className="text-sm text-[#6685FF]">Engineering Solution</div>
                      <p className="text-base sm:text-lg text-[#A1A7B3] leading-[1.75]">
                        {entry.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============================================================
              SECTION 7 — OUTCOMES & SECTION 8 — TECHNOLOGY STACK
             ============================================================ */}
          <section className="border-t border-[#2A2E37] py-20 sm:py-28">
            <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 space-y-20">
              {/* Section 7: Outcomes */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                <div className="lg:col-span-5 space-y-3">
                  <span className="text-sm font-medium text-[#6685FF]">Outcomes</span>
                  <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#F5F5F6]">
                    Verified features shipped to production.
                  </h2>
                </div>

                <ul className="lg:col-span-7 space-y-4">
                  {project.verifiedOutcomes.map((outcome, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3.5 text-base sm:text-lg text-[#F5F5F6]/90 leading-[1.7]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-3 w-1.5 h-1.5 rounded-full bg-[#6685FF] flex-shrink-0"
                      />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 8: Technology Stack */}
              <div className="pt-16 border-t border-[#2A2E37] space-y-10">
                <div className="space-y-2">
                  <span className="text-sm font-medium text-[#6685FF]">
                    Technology Stack
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#F5F5F6]">
                    Tools and platforms used in production.
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {STACK_GROUPS.map((group) => (
                    <div key={group.label} className="space-y-3">
                      <h3 className="text-sm font-medium text-[#A1A7B3] pb-2 border-b border-[#2A2E37]">
                        {group.label}
                      </h3>
                      <ul className="space-y-1.5 text-base text-[#F5F5F6]">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================
              SECTION 9 — NEXT PROJECT
             ============================================================ */}
          <section className="border-t border-[#2A2E37] pt-20 sm:pt-28">
            <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 space-y-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-sm font-medium text-[#6685FF]">
                  Next Project
                </span>
                {prev ? (
                  <Link
                    href={`/work/${prev.slug}`}
                    className="text-sm text-[#A1A7B3] hover:text-[#F5F5F6] transition-colors"
                  >
                    ← Previous: {prev.title}
                  </Link>
                ) : (
                  <Link
                    href="/#work"
                    className="text-sm text-[#A1A7B3] hover:text-[#F5F5F6] transition-colors"
                  >
                    ← All Selected Work
                  </Link>
                )}
              </div>

              {next && (
                <div className="border border-[#2A2E37] bg-[#181B21] rounded-lg p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-6 space-y-4">
                    <div className="text-sm text-[#A1A7B3]">
                      {next.ownership} · {next.category}
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-[#F5F5F6]">
                      {next.title}
                    </h2>
                    <p className="text-base text-[#A1A7B3] leading-[1.7]">
                      {next.overview}
                    </p>
                    <div className="pt-2">
                      <Link
                        href={`/work/${next.slug}`}
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#111318] bg-[#F5F5F6] hover:bg-white rounded-md transition-colors"
                      >
                        <span>View {next.title}</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <ProjectMockup variant={next.mockupVariant} title={next.title} />
                  </div>
                </div>
              )}
            </div>
          </section>
        </article>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default OlaRetailEditorialCaseStudy;
