"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import EditorialHeader from "@/components/ui/EditorialHeader";
import { EXPERIENCE_TIMELINE } from "@/data/portfolio";

const ExperienceSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="py-20 sm:py-28 border-b border-[#303540]/80 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <EditorialHeader
          eyebrow="03 / EXPERIENCE"
          title="Engineering timeline."
          description="Building full-stack web products, dealer workflows, and API integrations across fast-moving product teams."
        />

        <div className="border-t border-[#303540]">
          {EXPERIENCE_TIMELINE.map((item, idx) => (
            <motion.article
              key={`${item.company}-${item.period}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="py-8 sm:py-10 border-b border-[#303540] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10"
            >
              {/* Left Column: Timeline & Organization */}
              <div className="lg:col-span-4 space-y-2">
                <div className="text-xs font-mono uppercase tracking-[0.14em] text-[#6685FF]">
                  {item.period}
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#F4F5F7]">
                  {item.company}
                </h3>
                <div className="text-sm font-medium text-[#F4F5F7]/90">
                  {item.role}
                </div>
                <div className="text-xs font-mono text-[#A3AAB6]">
                  {item.location}
                </div>
                {item.context && (
                  <p className="pt-1 text-xs text-[#A3AAB6] leading-relaxed">
                    {item.context}
                  </p>
                )}
              </div>

              {/* Right Column: Responsibilities & Stack */}
              <div className="lg:col-span-8 space-y-5">
                <ul className="space-y-3">
                  {item.responsibilities.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-3 text-sm sm:text-[15px] text-[#A3AAB6] leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6685FF] flex-shrink-0"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono text-[#A3AAB6] bg-[#1B1E25] border border-[#303540] rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
