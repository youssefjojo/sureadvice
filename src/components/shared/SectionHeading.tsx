"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className="font-[var(--font-heading)] text-5xl sm:text-6xl md:text-7xl font-bold text-gray-100 uppercase tracking-tight select-none">
        {title}
      </h2>
      <p className="text-gray-500 text-lg mt-2 -translate-y-4">
        {subtitle}
      </p>
    </motion.div>
  );
}
