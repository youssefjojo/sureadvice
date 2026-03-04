import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, BarChart3, CheckCircle2 } from "lucide-react";
import { courses } from "@/data/courses";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  return (
    <>
      <section className="pt-32 pb-20 bg-[var(--color-off-white)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-brown)] hover:text-[var(--color-brown-dark)] mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Courses
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="px-3 py-1.5 bg-[var(--color-yellow)] text-black text-xs font-bold rounded-full inline-block mb-4">
                {course.tag}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-brown)] mb-4">
                {course.title}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {course.description}
              </p>
              <div className="flex items-center gap-6 text-gray-500 mb-8">
                <span className="flex items-center gap-2">
                  <Clock size={18} className="text-[var(--color-yellow)]" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-2">
                  <BarChart3 size={18} className="text-[var(--color-yellow)]" />
                  {course.level}
                </span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-brown)] text-white font-semibold rounded-xl hover:bg-[var(--color-brown-dark)] transition-all duration-200"
              >
                Enroll Now
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={course.image}
                alt={course.title}
                width={700}
                height={500}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[var(--color-brown)] mb-12">
            What You&apos;ll Learn
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Industry-standard practices and methodologies",
              "Real-world case studies and practical exercises",
              "Hands-on experience with actual business scenarios",
              "Professional certification upon completion",
              "Networking opportunities with industry professionals",
              "Post-course career support and mentorship",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-[var(--color-off-white)] rounded-xl">
                <CheckCircle2 size={20} className="text-[var(--color-yellow)] shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
