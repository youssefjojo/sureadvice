import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Users, Calculator, Scale, TrendingUp } from "lucide-react";
import { services } from "@/data/services";
import { CTABanner } from "@/components/home/CTABanner";

const iconMap: Record<string, React.ElementType> = {
  Users, Calculator, Scale, TrendingUp,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] || Users;
  const currentIndex = services.findIndex((s) => s.slug === slug);
  const nextService = services[(currentIndex + 1) % services.length];
  const prevService = services[(currentIndex - 1 + services.length) % services.length];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--color-off-white)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-brown)] hover:text-[var(--color-brown-dark)] mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[var(--color-yellow)]/10 rounded-xl">
                  <Icon size={28} className="text-[var(--color-brown)]" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-brown)] mb-6">
                {service.title}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {service.fullDescription}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-brown)] text-white font-semibold rounded-xl hover:bg-[var(--color-brown-dark)] transition-all duration-200"
              >
                Request This Service
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={service.image}
                alt={service.title}
                width={700}
                height={500}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[var(--color-brown)] mb-12">
            What&apos;s Included
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 p-4 bg-[var(--color-off-white)] rounded-xl">
                <CheckCircle2 size={22} className="text-[var(--color-yellow)] shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="py-12 bg-[var(--color-off-white)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <Link
              href={`/services/${prevService.slug}`}
              className="flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-brown-dark)] transition-colors font-medium"
            >
              <ArrowLeft size={16} />
              {prevService.title}
            </Link>
            <Link
              href={`/services/${nextService.slug}`}
              className="flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-brown-dark)] transition-colors font-medium"
            >
              {nextService.title}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
