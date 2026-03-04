"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, BarChart3, ArrowRight } from "lucide-react";
import { courses } from "@/data/courses";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function CoursesSection() {
  return (
    <section className="section-padding bg-white" id="courses">
      <SectionHeading title="Courses" subtitle="Professional Courses With Real Value" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/courses/${course.slug}`} className="group block h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col group-hover:-translate-y-2 border border-gray-100">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-[var(--color-yellow)] text-black text-xs font-bold rounded-full">
                        {course.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-[var(--color-brown)] mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                      {course.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BarChart3 size={14} />
                        {course.level}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-brown)] group-hover:text-[var(--color-yellow)] transition-colors">
                      Enroll Now
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
