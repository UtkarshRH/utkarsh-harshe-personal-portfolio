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
      className="py-20 sm:py-28 border-b border-[#2A2E37]"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <EditorialHeader
          eyebrow="Experience"
          title="Professional timeline."
          description="Building full-stack web products, dealer workflows, and API integrations across product engineering teams."
        />

        <div className="divide-y divide-[#2A2E37] border-t border-b border-[#2A2E37]">
          {EXPERIENCE_TIMELINE.map((item, idx) => (
            <motion.article
              key={`${item.company}-${item.period}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="py-9 sm:py-11 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12"
            >
              <div className="lg:col-span-4 space-y-1.5">
                <div className="text-sm font-mono text-[#6685FF]">
                  {item.period}
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#F5F5F6]">
                  {item.company}
                </h3>
                <div className="text-base text-[#F5F5F6]/90 font-medium">
                  {item.role}
                </div>
                <div className="text-sm text-[#A1A7B3]">{item.location}</div>
              </div>

              <div className="lg:col-span-8 space-y-5">
                <ul className="space-y-3">
                  {item.responsibilities.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-3 text-base text-[#A1A7B3] leading-[1.7]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 w-1 h-1 rounded-full bg-[#6685FF] flex-shrink-0"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-1">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono text-[#A1A7B3] bg-[#181B21] border border-[#2A2E37] rounded"
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
