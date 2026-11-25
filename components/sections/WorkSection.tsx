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
      className="py-20 sm:py-28 border-b border-[#2A2E37]"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <EditorialHeader
          eyebrow="Selected Work"
          title="Production systems and backend engineering."
          description="Selected company platforms and systems engineering work, documented with architecture context and individual contributions."
        />

        <div className="divide-y divide-[#2A2E37] border-t border-b border-[#2A2E37]">
          {SELECTED_PROJECTS.map((project, idx) => (
            <motion.article
              key={project.slug}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Left Column: Narrative & Contributions */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#A1A7B3]">
                  <span className="font-mono text-[#6685FF]">{project.index}</span>
                  <span className="text-[#2A2E37]">/</span>
                  <span>{project.category}</span>
                  <span className="text-[#2A2E37]">·</span>
                  <span className="text-[#F5F5F6]">
                    {project.ownership} ({project.companyOrContext})
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#F5F5F6]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base text-[#A1A7B3] leading-[1.7]">
                    {project.overview}
                  </p>
                </div>

                <ul className="space-y-2.5">
                  {project.contributions.slice(0, 3).map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm sm:text-[15px] text-[#F5F5F6]/90 leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 w-1 h-1 rounded-full bg-[#6685FF] flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono text-[#A1A7B3] bg-[#181B21] border border-[#2A2E37] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href={`/work/${project.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-[#F5F5F6] hover:text-[#6685FF] transition-colors"
                  >
                    <span>View case study</span>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#6685FF] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>

              {/* Right Column: Clean Product UI Preview */}
              <div className="lg:col-span-6">
                <ProjectMockup
                  variant={project.mockupVariant}
                  title={project.title}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
