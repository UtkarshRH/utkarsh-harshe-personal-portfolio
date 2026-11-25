"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import EditorialHeader from "@/components/ui/EditorialHeader";
import { EDUCATION_RECORD } from "@/data/portfolio";

const EducationSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="education"
      className="py-20 sm:py-28 border-b border-[#303540]/80 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <EditorialHeader
          eyebrow="05 / EDUCATION"
          title="Academic foundation."
        />

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          <div className="lg:col-span-7 border border-[#303540] bg-[#1B1E25]/85 backdrop-blur-sm rounded-sm p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-[0.14em] text-[#6685FF]">
                  {EDUCATION_RECORD.graduationYear} · {EDUCATION_RECORD.period}
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#F4F5F7]">
                  {EDUCATION_RECORD.degree}, {EDUCATION_RECORD.field}
                </h3>
                <p className="text-sm sm:text-base text-[#A3AAB6]">
                  {EDUCATION_RECORD.institution} · {EDUCATION_RECORD.location}
                </p>
              </div>
              <div className="hidden sm:flex w-10 h-10 items-center justify-center border border-[#303540] bg-[#232731] rounded-sm flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-[#6685FF]" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 border border-[#303540] bg-[#1B1E25]/80 backdrop-blur-sm rounded-sm p-6 sm:p-8 space-y-2">
            <div className="text-xs font-mono uppercase tracking-[0.14em] text-[#A3AAB6]">
              Additional Training
            </div>
            <h4 className="font-heading text-lg font-semibold text-[#F4F5F7]">
              {EDUCATION_RECORD.training.title}
            </h4>
            <p className="text-sm text-[#A3AAB6]">
              {EDUCATION_RECORD.training.provider}
            </p>
            <p className="pt-2 text-xs font-mono text-[#A3AAB6]/85 leading-relaxed">
              {EDUCATION_RECORD.training.topics}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
