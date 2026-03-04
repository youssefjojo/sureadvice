"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="relative py-20 bg-[var(--color-brown)] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }} />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Let us handle the complexities of HR, accounting, and legal compliance 
            so you can focus on what matters most — growing your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-yellow)] text-black font-bold rounded-xl hover:bg-[var(--color-yellow)]/90 transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              Get Free Consultation
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[var(--color-brown)] transition-all duration-200"
            >
              <Phone size={18} />
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
