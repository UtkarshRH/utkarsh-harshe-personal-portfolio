"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import EditorialHeader from "@/components/ui/EditorialHeader";
import { ABOUT_CONTENT } from "@/data/portfolio";

const AboutSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="py-20 sm:py-28 border-b border-[#303540]/80 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <EditorialHeader
          eyebrow={ABOUT_CONTENT.eyebrow}
          title={ABOUT_CONTENT.title}
        />

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start"
        >
          {/* Editorial Narrative */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-[17px] text-[#A3AAB6] leading-[1.75]">
            {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "text-[#F4F5F7]" : ""}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Structured Engineering Principles */}
          <div className="lg:col-span-5 border border-[#303540] bg-[#1B1E25]/85 backdrop-blur-sm rounded-sm divide-y divide-[#303540]">
            {ABOUT_CONTENT.highlights.map((item) => (
              <div key={item.label} className="p-5 sm:p-6">
                <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#6685FF]">
                  {item.label}
                </div>
                <div className="mt-2 text-sm sm:text-base font-medium text-[#F4F5F7]">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
