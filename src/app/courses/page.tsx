import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, BarChart3, ArrowRight } from "lucide-react";
import { courses } from "@/data/courses";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Our Courses",
  description:
    "Professional courses with real value — HR, Web Design, Corporate Law, and Franchise Agreement courses by Sure Advice.",
};

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--color-off-white)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-[var(--color-yellow)]/10 text-[var(--color-brown)] font-semibold text-sm rounded-full mb-6 border border-[var(--color-yellow)]/20">
            Our Courses
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Professional <span className="text-[var(--color-brown)]">Courses</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Develop your skills with our hands-on, practical courses led by industry experts.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => (
              <Link key={course.slug} href={`/courses/${course.slug}`} className="group block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col group-hover:-translate-y-2 border border-gray-100">
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
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-[var(--color-brown)] mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{course.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BarChart3 size={14} /> {course.level}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-brown)] group-hover:text-[var(--color-yellow)] transition-colors">
                      Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
