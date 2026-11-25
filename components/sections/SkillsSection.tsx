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
      className="py-20 sm:py-28 border-b border-[#303540]/80 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <EditorialHeader
          eyebrow="04 / TECHNICAL SKILLS"
          title="Core technologies and tools."
          description="Technologies used directly in production systems, backend services, and daily engineering workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="border border-[#303540] bg-[#1B1E25]/85 backdrop-blur-sm rounded-sm p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#303540]">
                  <h3 className="font-heading text-lg font-semibold text-[#F4F5F7]">
                    {group.category}
                  </h3>
                  <span className="text-xs font-mono text-[#6685FF]">
                    {group.code}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="px-3 py-1.5 text-xs sm:text-[13px] font-mono text-[#F4F5F7] bg-[#111318] border border-[#303540] rounded-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
