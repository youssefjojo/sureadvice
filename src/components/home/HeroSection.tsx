"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { SocialLinks } from "@/components/shared/SocialLinks";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[var(--color-off-white)] overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-[var(--color-yellow)]/10 text-[var(--color-brown)] font-semibold text-sm rounded-full mb-6 border border-[var(--color-yellow)]/20">
                #1 HR Outsourcing in Egypt
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-black">Welcome to</span>
              <br />
              <span className="text-[var(--color-yellow)]">Sure</span>{" "}
              <span className="text-[var(--color-brown)]">Advice</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg sm:text-xl max-w-xl mb-8 leading-relaxed"
            >
              {COMPANY.tagline}. Outsourcing human resource services is a cost-effective 
              solution for organizations of all sizes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-brown)] text-white font-semibold rounded-xl hover:bg-[var(--color-brown-dark)] transition-all duration-200 shadow-lg shadow-[var(--color-brown)]/20 hover:shadow-xl hover:-translate-y-0.5"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--color-brown)] text-[var(--color-brown)] font-semibold rounded-xl hover:bg-[var(--color-brown)] hover:text-white transition-all duration-200"
              >
                Our Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <SocialLinks variant="hero" iconSize={22} />
            </motion.div>
          </div>

          {/* Right — Logo / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[var(--color-yellow)]/20 rounded-full blur-3xl scale-75" />
              <Image
                src={COMPANY.logo}
                alt={COMPANY.name}
                width={500}
                height={500}
                className="relative z-10 w-64 sm:w-80 lg:w-96 h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
