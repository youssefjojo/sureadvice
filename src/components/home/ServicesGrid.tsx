"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Calculator, Scale, TrendingUp } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/shared/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Users,
  Calculator,
  Scale,
  TrendingUp,
};

export function ServicesGrid() {
  return (
    <section className="section-padding bg-[var(--color-off-white)]" id="services">
      <SectionHeading title="Services" subtitle="Don't be busy, be productive" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Users;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col group-hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 p-2.5 bg-[var(--color-yellow)] rounded-xl">
                        <Icon size={22} className="text-[var(--color-brown)]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-[var(--color-brown)] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                        {service.shortDescription}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-brown)] group-hover:text-[var(--color-yellow)] transition-colors">
                        Learn More
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[var(--color-brown)] text-[var(--color-brown)] font-semibold rounded-xl hover:bg-[var(--color-brown)] hover:text-white transition-all duration-200"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
