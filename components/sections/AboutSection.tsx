"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import EditorialHeader from "@/components/ui/EditorialHeader";
import { ABOUT_CONTENT, EDUCATION_RECORD } from "@/data/portfolio";

const AboutSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="py-20 sm:py-28 border-b border-[#2A2E37]"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <EditorialHeader
          eyebrow="About"
          title={ABOUT_CONTENT.title}
        />

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Narrative */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-[17px] text-[#A1A7B3] leading-[1.75]">
            {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "text-[#F5F5F6]" : ""}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Education & Engineering Focus */}
          <div className="lg:col-span-5 space-y-8 border-t lg:border-t-0 lg:border-l border-[#2A2E37] pt-8 lg:pt-0 lg:pl-10">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-[0.08em] text-[#6685FF]">
                Education
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#F5F5F6]">
                {EDUCATION_RECORD.degree}, {EDUCATION_RECORD.field}
              </h3>
              <p className="text-sm sm:text-base text-[#A1A7B3]">
                {EDUCATION_RECORD.institution} · {EDUCATION_RECORD.graduationYear}
              </p>
            </div>

            <div className="pt-6 border-t border-[#2A2E37] space-y-4">
              {ABOUT_CONTENT.highlights.map((item) => (
                <div key={item.label}>
                  <div className="text-xs uppercase tracking-[0.08em] text-[#A1A7B3]">
                    {item.label}
                  </div>
                  <div className="mt-1 text-sm sm:text-base text-[#F5F5F6]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
