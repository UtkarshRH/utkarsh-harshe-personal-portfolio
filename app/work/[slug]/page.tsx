import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ProjectMockup from "@/components/work/ProjectMockup";
import ArchitectureDiagram from "@/components/work/ArchitectureDiagram";
import {
  SELECTED_PROJECTS,
  SITE_CONFIG,
  getAdjacentProjects,
  getProjectBySlug,
} from "@/data/portfolio";

interface CaseStudyPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return SELECTED_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: `Case Study Not Found | ${SITE_CONFIG.name}`,
    };
  }

  const title = `${project.title} — Case Study | ${SITE_CONFIG.name}`;
  const description = project.overview;
  const canonicalUrl = `${SITE_CONFIG.siteUrl}/work/${project.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      siteName: `${SITE_CONFIG.name} Portfolio`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <div className="min-h-screen bg-[#111318] text-[#F4F5F7] flex flex-col">
      <Navigation />

      <main className="flex-1 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <article className="max-w-5xl mx-auto px-5 sm:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-10 flex items-center justify-between gap-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.12em] text-[#A3AAB6] hover:text-[#F4F5F7] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#6685FF]" aria-hidden="true" />
              <span>Back to Selected Work</span>
            </Link>

            <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#6685FF]">
              Case Study {project.index}
            </span>
          </div>

          {/* Case Study Header */}
          <header className="pb-10 border-b border-[#303540] space-y-6">
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono uppercase tracking-[0.12em]">
              <span className="px-2.5 py-1 bg-[#1B1E25] border border-[#303540] rounded-sm text-[#F4F5F7]">
                {project.ownership}
              </span>
              <span className="px-2.5 py-1 bg-[#1B1E25] border border-[#303540] rounded-sm text-[#A3AAB6]">
                {project.companyOrContext}
              </span>
              <span className="px-2.5 py-1 bg-[#1B1E25] border border-[#303540] rounded-sm text-[#A3AAB6]">
                {project.category}
              </span>
              <span className="px-2.5 py-1 bg-[#1B1E25] border border-[#303540] rounded-sm text-[#6685FF]">
                {project.statusLabel}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-semibold tracking-[-0.03em] leading-[1.08] text-[#F4F5F7]">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#A3AAB6] leading-relaxed max-w-3xl">
              {project.subtitle}
            </p>

            {/* Metadata Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#303540]/80">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#A3AAB6]">
                  Context
                </div>
                <div className="mt-1 text-sm font-medium text-[#F4F5F7]">
                  {project.companyOrContext} ({project.ownership})
                </div>
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#A3AAB6]">
                  Timeframe
                </div>
                <div className="mt-1 text-sm font-medium text-[#F4F5F7]">
                  {project.timeframe}
                </div>
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#A3AAB6]">
                  Primary Stack
                </div>
                <div className="mt-1 text-sm font-medium text-[#F4F5F7]">
                  {project.technologies.slice(0, 4).join(", ")}
                </div>
              </div>
            </div>
          </header>

          {/* Visual Mockup Preview */}
          <section className="py-10 border-b border-[#303540]" aria-label="Interface preview">
            <ProjectMockup variant={project.mockupVariant} title={project.title} />
            {project.confidentialityNote && (
              <p className="mt-3 text-xs font-mono text-[#A3AAB6]/80 leading-relaxed">
                {project.confidentialityNote}
              </p>
            )}
          </section>

          {/* Overview & Problem/Context */}
          <section className="py-12 border-b border-[#303540] grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-[0.16em] text-[#6685FF]">
                01 / Overview
              </h2>
              <p className="text-base text-[#F4F5F7]/90 leading-relaxed">
                {project.overview}
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-[0.16em] text-[#6685FF]">
                02 / Problem & Context
              </h2>
              <p className="text-base text-[#A3AAB6] leading-relaxed">
                {project.problemAndContext}
              </p>
            </div>
          </section>

          {/* Role & Responsibilities */}
          <section className="py-12 border-b border-[#303540] space-y-5">
            <h2 className="text-xs font-mono uppercase tracking-[0.16em] text-[#6685FF]">
              03 / My Role & Responsibilities
            </h2>
            <ul className="space-y-3">
              {project.roleAndResponsibilities.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-base text-[#F4F5F7]/90 leading-relaxed"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6685FF] flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Technical Implementation */}
          <section className="py-12 border-b border-[#303540] space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-[0.16em] text-[#6685FF]">
              04 / Technical Implementation
            </h2>
            <div className="space-y-4">
              {project.technicalImplementation.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 border border-[#303540] bg-[#1B1E25]/60 rounded-sm text-sm sm:text-base text-[#A3AAB6] leading-relaxed"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="pt-2">
              <h3 className="text-xs font-mono uppercase tracking-[0.14em] text-[#A3AAB6] mb-3">
                Key Delivered Modules
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.contributions.map((contrib, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-4 border border-[#303540] bg-[#1B1E25]/40 rounded-sm text-sm text-[#F4F5F7]/90 leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6685FF] flex-shrink-0"
                    />
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Architecture Diagram */}
          <section className="py-12 border-b border-[#303540] space-y-5">
            <h2 className="text-xs font-mono uppercase tracking-[0.16em] text-[#6685FF]">
              05 / Architecture & Workflow
            </h2>
            <ArchitectureDiagram
              nodes={project.architectureNodes}
              summary={project.architectureSummary}
            />
          </section>

          {/* Engineering Challenges & Solutions */}
          <section className="py-12 border-b border-[#303540] space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-[0.16em] text-[#6685FF]">
              06 / Engineering Challenges & Solutions
            </h2>
            <div className="space-y-4">
              {project.challenges.map((entry, idx) => (
                <div
                  key={idx}
                  className="border border-[#303540] bg-[#1B1E25] rounded-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#A3AAB6] mb-2">
                      Challenge
                    </div>
                    <p className="text-sm sm:text-base text-[#F4F5F7] leading-relaxed">
                      {entry.challenge}
                    </p>
                  </div>
                  <div className="md:border-l md:border-[#303540] md:pl-6">
                    <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#6685FF] mb-2">
                      Solution
                    </div>
                    <p className="text-sm sm:text-base text-[#A3AAB6] leading-relaxed">
                      {entry.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Verified Outcomes & Tech Stack */}
          <section className="py-12 border-b border-[#303540] grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-7 space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-[0.16em] text-[#6685FF]">
                07 / Verified Outcomes
              </h2>
              <ul className="space-y-3">
                {project.verifiedOutcomes.map((outcome, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#F4F5F7]/90 leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6685FF] flex-shrink-0"
                    />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-5 space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-[0.16em] text-[#6685FF]">
                08 / Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono text-[#F4F5F7] bg-[#1B1E25] border border-[#303540] rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.githubUrl && (
                <div className="pt-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-[0.1em] text-[#F4F5F7] bg-[#232731] border border-[#303540] hover:border-[#6685FF]/60 rounded-sm transition-colors"
                  >
                    <span>GitHub Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#6685FF]" aria-hidden="true" />
                  </a>
                </div>
              )}
            </div>
          </section>

          {/* Next & Previous Case Study Navigation */}
          <nav
            aria-label="Case study pagination"
            className="pt-12 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group p-6 border border-[#303540] bg-[#1B1E25]/60 hover:bg-[#1B1E25] hover:border-[#6685FF]/60 rounded-sm transition-colors"
              >
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.14em] text-[#A3AAB6]">
                  <ArrowLeft className="w-3.5 h-3.5 text-[#6685FF]" aria-hidden="true" />
                  <span>Previous Project</span>
                </div>
                <div className="mt-2 font-heading text-lg font-semibold text-[#F4F5F7]">
                  {prev.title}
                </div>
                <div className="mt-1 text-xs font-mono text-[#A3AAB6]">
                  {prev.category}
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}

            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group p-6 border border-[#303540] bg-[#1B1E25]/60 hover:bg-[#1B1E25] hover:border-[#6685FF]/60 rounded-sm transition-colors sm:text-right"
              >
                <div className="flex items-center sm:justify-end gap-2 text-[11px] font-mono uppercase tracking-[0.14em] text-[#A3AAB6]">
                  <span>Next Project</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6685FF]" aria-hidden="true" />
                </div>
                <div className="mt-2 font-heading text-lg font-semibold text-[#F4F5F7]">
                  {next.title}
                </div>
                <div className="mt-1 text-xs font-mono text-[#A3AAB6]">
                  {next.category}
                </div>
              </Link>
            ) : (
              <Link
                href="/#contact"
                className="group p-6 border border-[#303540] bg-[#1B1E25]/60 hover:bg-[#1B1E25] hover:border-[#6685FF]/60 rounded-sm transition-colors sm:text-right"
              >
                <div className="flex items-center sm:justify-end gap-2 text-[11px] font-mono uppercase tracking-[0.14em] text-[#A3AAB6]">
                  <span>Get In Touch</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6685FF]" aria-hidden="true" />
                </div>
                <div className="mt-2 font-heading text-lg font-semibold text-[#F4F5F7]">
                  Discuss a project or role
                </div>
                <div className="mt-1 text-xs font-mono text-[#A3AAB6]">
                  {SITE_CONFIG.email}
                </div>
              </Link>
            )}
          </nav>
        </article>
      </main>

      <Footer />
    </div>
  );
}
