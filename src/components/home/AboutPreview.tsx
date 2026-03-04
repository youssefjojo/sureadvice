"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";

const highlights = [
  "59% market share in Egypt",
  "Employment management & payroll",
  "Social security & insurance",
  "Policy development & compliance",
];

export function AboutPreview() {
  return (
    <section className="section-padding bg-white" id="about">
      <SectionHeading title="About" subtitle="Know more about us" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={COMPANY.logo}
                alt="About Sure Advice"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-[var(--color-yellow)] text-black p-6 rounded-2xl shadow-xl hidden sm:block">
              <p className="text-3xl font-bold">{COMPANY.marketShare}%</p>
              <p className="text-sm font-medium">Market Share</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-[var(--color-brown)] mb-6">
              Cost-Effective HR Outsourcing with Sure Advice
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Outsourcing human resource services is a cost-effective solution for 
              organizations of all sizes, whether or not they have an in-house HR 
              department. By outsourcing to Egypt, businesses can save thousands while 
              ensuring compliance, efficiency, and reduced risk.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Sure Advice is the leading employee outsourcing company in Egypt, holding 
              over 59% of the market share. Our comprehensive outsourcing services cover 
              employment management, personnel administration, social security, insurance, 
              policy development, and payroll processing.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-yellow)] shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-brown)] text-white font-semibold rounded-xl hover:bg-[var(--color-brown-dark)] transition-all duration-200"
            >
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
