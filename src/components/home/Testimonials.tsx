"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const testimonials = [
  {
    name: "Ahmed El-Sayed",
    role: "CEO, GCS Egypt",
    content:
      "Sure Advice transformed our HR operations. Their expertise in payroll and compliance saved us both time and money. Highly recommended for any business in Egypt.",
  },
  {
    name: "Sarah Hassan",
    role: "Operations Manager, Drova",
    content:
      "Working with Sure Advice has been a game-changer. Their team handles all our employee outsourcing seamlessly, allowing us to focus on growth.",
  },
  {
    name: "Mohamed Kamal",
    role: "Founder, Central Tact",
    content:
      "The legal and compliance support from Sure Advice is outstanding. They keep us fully compliant with Egyptian labor laws and always go above and beyond.",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-white" id="testimonials">
      <SectionHeading title="Testimonials" subtitle="What our clients say about us" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[var(--color-off-white)] rounded-2xl p-8 relative"
            >
              <div className="absolute -top-4 left-8">
                <div className="p-2.5 bg-[var(--color-yellow)] rounded-xl">
                  <Quote size={20} className="text-[var(--color-brown)]" />
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4 mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-brown)] flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
