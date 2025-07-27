"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12 sm:mb-16"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-gray-800 dark:text-gray-100 mb-6">
        <span className="text-gray-600 dark:text-gray-100">{"<"}</span>
        {title}
        <span className="text-gray-600 dark:text-gray-100">{"/>"}</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto mb-8"></div>
      {subtitle && (
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-mono">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
