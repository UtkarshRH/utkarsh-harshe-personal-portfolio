"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import EditorialHeader from "@/components/ui/EditorialHeader";
import { SKILL_GROUPS } from "@/data/portfolio";

const SkillsSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 border-b border-[#2A2E37]"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <EditorialHeader
          eyebrow="Technical Expertise"
          title="Core technologies and tools."
          description="Technologies used directly in production systems, backend services, and daily engineering workflows."
        />

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="divide-y divide-[#2A2E37] border-t border-b border-[#2A2E37]"
        >
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="py-6 sm:py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline"
            >
              <div className="md:col-span-4 flex items-baseline gap-3">
                <span className="text-xs font-mono text-[#6685FF]">{group.code}</span>
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#F5F5F6]">
                  {group.category}
                </h3>
              </div>

              <div className="md:col-span-8 flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm text-[#F5F5F6] bg-[#181B21] border border-[#2A2E37] rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
