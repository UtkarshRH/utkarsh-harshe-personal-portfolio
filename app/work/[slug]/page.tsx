import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AmbientDepthBackground from "@/components/layout/AmbientDepthBackground";
import ProjectMockup from "@/components/work/ProjectMockup";
import ArchitectureDiagram from "@/components/work/ArchitectureDiagram";
import OlaRetailEditorialCaseStudy from "@/components/work/OlaRetailEditorialCaseStudy";
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

  if (project.slug === "ola-retail-app") {
    return <OlaRetailEditorialCaseStudy project={project} prev={prev} next={next} />;
  }

  return (
    <div className="relative min-h-screen bg-[#111318] text-[#F5F5F6] flex flex-col">
      <AmbientDepthBackground />
      <Navigation />

      <main className="relative z-10 flex-1 pt-28 pb-24 sm:pt-36 sm:pb-28">
        <article className="max-w-[1160px] mx-auto px-5 sm:px-8">
          {/* Breadcrumb */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-[#A1A7B3] hover:text-[#F5F5F6] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#6685FF]" aria-hidden="true" />
              <span>Back to selected work</span>
            </Link>

            <span className="text-sm font-mono text-[#A1A7B3]">
              Case Study {project.index}
            </span>
          </div>

          {/* Editorial Header */}
          <header className="pb-12 border-b border-[#2A2E37] space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#A1A7B3]">
              <span className="text-[#F5F5F6] font-medium">
                {project.ownership}
              </span>
              <span className="text-[#2A2E37]">/</span>
              <span>{project.companyOrContext}</span>
              <span className="text-[#2A2E37]">/</span>
              <span>{project.category}</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-[-0.03em] leading-[1.08] text-[#F5F5F6]">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#A1A7B3] leading-[1.65] max-w-3xl">
              {project.subtitle}
            </p>

            {/* Clean Metadata Row */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#2A2E37]">
              <div>
                <div className="text-xs uppercase tracking-[0.08em] text-[#A1A7B3]">
                  Context
                </div>
                <div className="mt-1.5 text-sm sm:text-base text-[#F5F5F6]">
                  {project.companyOrContext} · {project.statusLabel}
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.08em] text-[#A1A7B3]">
                  Timeline
                </div>
                <div className="mt-1.5 text-sm sm:text-base text-[#F5F5F6]">
                  {project.timeframe}
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.08em] text-[#A1A7B3]">
                  Core Stack
                </div>
                <div className="mt-1.5 text-sm sm:text-base text-[#F5F5F6]">
                  {project.technologies.slice(0, 4).join(", ")}
                </div>
              </div>
            </div>
          </header>

          {/* Product UI Mockup */}
          <section className="py-12 border-b border-[#2A2E37]" aria-label="Interface preview">
            <ProjectMockup variant={project.mockupVariant} title={project.title} />
            {project.confidentialityNote && (
              <p className="mt-3 text-xs sm:text-sm text-[#A1A7B3]/85 leading-relaxed">
                {project.confidentialityNote}
              </p>
            )}
          </section>

          {/* Overview & Problem/Context */}
          <section className="py-14 border-b border-[#2A2E37] grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-3">
              <h2 className="text-xs uppercase tracking-[0.08em] text-[#6685FF] font-medium">
                Overview
              </h2>
              <p className="text-base sm:text-lg text-[#F5F5F6]/90 leading-[1.75]">
                {project.overview}
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xs uppercase tracking-[0.08em] text-[#6685FF] font-medium">
                Problem & Context
              </h2>
              <p className="text-base sm:text-lg text-[#A1A7B3] leading-[1.75]">
                {project.problemAndContext}
              </p>
            </div>
          </section>

          {/* Role & Responsibilities */}
          <section className="py-14 border-b border-[#2A2E37] space-y-6">
            <h2 className="text-xs uppercase tracking-[0.08em] text-[#6685FF] font-medium">
              Role & Responsibilities
            </h2>
            <div className="divide-y divide-[#2A2E37] border-t border-b border-[#2A2E37]">
              {project.roleAndResponsibilities.map((item, idx) => (
                <div
                  key={idx}
                  className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3 items-baseline"
                >
                  <span className="md:col-span-2 text-xs font-mono text-[#6685FF]">
                    0{idx + 1}
                  </span>
                  <p className="md:col-span-10 text-base sm:text-lg text-[#F5F5F6]/90 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Implementation & Delivered Modules */}
          <section className="py-14 border-b border-[#2A2E37] space-y-10">
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.08em] text-[#6685FF] font-medium">
                Technical Implementation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.technicalImplementation.map((item, idx) => (
                  <div
                    key={idx}
                    className="pl-5 border-l-2 border-[#2A2E37] text-base text-[#A1A7B3] leading-[1.7]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-xs uppercase tracking-[0.08em] text-[#A1A7B3] font-medium">
                Key Delivered Modules
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3.5">
                {project.contributions.map((contrib, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#F5F5F6]/90 leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 w-1 h-1 rounded-full bg-[#6685FF] flex-shrink-0"
                    />
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Architecture */}
          <section className="py-14 border-b border-[#2A2E37] space-y-5">
            <h2 className="text-xs uppercase tracking-[0.08em] text-[#6685FF] font-medium">
              Architecture & Workflow
            </h2>
            <ArchitectureDiagram
              nodes={project.architectureNodes}
              summary={project.architectureSummary}
            />
          </section>

          {/* Engineering Challenges & Solutions */}
          <section className="py-14 border-b border-[#2A2E37] space-y-6">
            <h2 className="text-xs uppercase tracking-[0.08em] text-[#6685FF] font-medium">
              Engineering Challenges & Solutions
            </h2>
            <div className="divide-y divide-[#2A2E37] border-t border-b border-[#2A2E37]">
              {project.challenges.map((entry, idx) => (
                <div
                  key={idx}
                  className="py-7 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10"
                >
                  <div className="md:col-span-5 space-y-2">
                    <div className="text-xs uppercase tracking-[0.08em] text-[#A1A7B3]">
                      Challenge
                    </div>
                    <p className="text-base sm:text-lg text-[#F5F5F6] leading-relaxed">
                      {entry.challenge}
                    </p>
                  </div>
                  <div className="md:col-span-7 space-y-2">
                    <div className="text-xs uppercase tracking-[0.08em] text-[#6685FF]">
                      Solution
                    </div>
                    <p className="text-base text-[#A1A7B3] leading-[1.7]">
                      {entry.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Verified Outcomes & Stack */}
          <section className="py-14 border-b border-[#2A2E37] grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7 space-y-4">
              <h2 className="text-xs uppercase tracking-[0.08em] text-[#6685FF] font-medium">
                Verified Outcomes
              </h2>
              <ul className="space-y-3">
                {project.verifiedOutcomes.map((outcome, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-base text-[#F5F5F6]/90 leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 w-1 h-1 rounded-full bg-[#6685FF] flex-shrink-0"
                    />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-5 space-y-4">
              <h2 className="text-xs uppercase tracking-[0.08em] text-[#6685FF] font-medium">
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs sm:text-sm font-mono text-[#F5F5F6] bg-[#181B21] border border-[#2A2E37] rounded"
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
                    className="inline-flex items-center gap-2 text-sm text-[#F5F5F6] hover:text-[#6685FF] transition-colors"
                  >
                    <span>GitHub Profile</span>
                    <ArrowUpRight className="w-4 h-4 text-[#6685FF]" aria-hidden="true" />
                  </a>
                </div>
              )}
            </div>
          </section>

          {/* Next / Previous Navigation */}
          <nav
            aria-label="Case study pagination"
            className="pt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group p-6 border border-[#2A2E37] bg-[#181B21] hover:bg-[#1E222A] rounded-md transition-colors"
              >
                <div className="flex items-center gap-2 text-xs text-[#A1A7B3]">
                  <ArrowLeft className="w-3.5 h-3.5 text-[#6685FF]" aria-hidden="true" />
                  <span>Previous project</span>
                </div>
                <div className="mt-2 font-heading text-lg font-semibold text-[#F5F5F6]">
                  {prev.title}
                </div>
                <div className="mt-1 text-sm text-[#A1A7B3]">{prev.category}</div>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}

            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group p-6 border border-[#2A2E37] bg-[#181B21] hover:bg-[#1E222A] rounded-md transition-colors sm:text-right"
              >
                <div className="flex items-center sm:justify-end gap-2 text-xs text-[#A1A7B3]">
                  <span>Next project</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6685FF]" aria-hidden="true" />
                </div>
                <div className="mt-2 font-heading text-lg font-semibold text-[#F5F5F6]">
                  {next.title}
                </div>
                <div className="mt-1 text-sm text-[#A1A7B3]">{next.category}</div>
              </Link>
            ) : (
              <Link
                href="/#contact"
                className="group p-6 border border-[#2A2E37] bg-[#181B21] hover:bg-[#1E222A] rounded-md transition-colors sm:text-right"
              >
                <div className="flex items-center sm:justify-end gap-2 text-xs text-[#A1A7B3]">
                  <span>Contact</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6685FF]" aria-hidden="true" />
                </div>
                <div className="mt-2 font-heading text-lg font-semibold text-[#F5F5F6]">
                  Get in touch
                </div>
                <div className="mt-1 text-sm text-[#A1A7B3]">{SITE_CONFIG.email}</div>
              </Link>
            )}
          </nav>
        </article>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
