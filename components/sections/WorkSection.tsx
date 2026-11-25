"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import EditorialHeader from "@/components/ui/EditorialHeader";
import ProjectMockup from "@/components/work/ProjectMockup";
import { SELECTED_PROJECTS } from "@/data/portfolio";

const WorkSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="work"
      className="py-20 sm:py-28 border-b border-[#303540]/80 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <EditorialHeader
          eyebrow="02 / SELECTED WORK"
          title="Production systems and backend engineering."
          description="A curated selection of company platforms and systems engineering work, documented with architecture details and real engineering responsibilities."
        />

        <div className="space-y-10 sm:space-y-14">
          {SELECTED_PROJECTS.map((project, idx) => {
            const isPersonal = project.ownership === "Personal Project";
            return (
              <motion.article
                key={project.slug}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="group border border-[#303540] bg-[#1B1E25]/85 backdrop-blur-sm hover:bg-[#1B1E25]/95 hover:border-[#434a59] rounded-sm transition-colors duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-start">
                  {/* Left: Project Metadata & Contributions */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.12em]">
                      <span className="text-[#6685FF]">{project.index}</span>
                      <span className="text-[#303540]">/</span>
                      <span className="text-[#A3AAB6]">{project.category}</span>
                      <span
                        className={`ml-auto sm:ml-2 px-2.5 py-0.5 rounded-sm border ${
                          isPersonal
                            ? "border-[#6685FF]/50 bg-[#6685FF]/10 text-[#F4F5F7]"
                            : "border-[#303540] bg-[#232731] text-[#A3AAB6]"
                        }`}
                      >
                        {project.ownership} · {project.companyOrContext}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#F4F5F7]">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-[#A3AAB6] leading-relaxed">
                        {project.overview}
                      </p>
                    </div>

                    {/* Individual Contributions */}
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#A3AAB6] mb-3">
                        Individual Contributions
                      </h4>
                      <ul className="space-y-2">
                        {project.contributions.slice(0, 3).map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm text-[#F4F5F7]/90 leading-relaxed"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6685FF] flex-shrink-0"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono text-[#A3AAB6] bg-[#111318] border border-[#303540] rounded-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Case Study Link */}
                    <div className="pt-2">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#F4F5F7] bg-[#232731] hover:bg-[#2b303c] border border-[#303540] hover:border-[#6685FF]/60 rounded-sm transition-colors"
                      >
                        <span>View case study</span>
                        <ArrowUpRight
                          className="w-4 h-4 text-[#6685FF] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Product-style Anonymised Mockup */}
                  <div className="lg:col-span-6 lg:pt-2">
                    <ProjectMockup
                      variant={project.mockupVariant}
                      title={project.title}
                    />
                    {project.confidentialityNote && (
                      <p className="mt-3 text-[11px] font-mono text-[#A3AAB6]/75 leading-relaxed">
                        {project.confidentialityNote}
                      </p>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
