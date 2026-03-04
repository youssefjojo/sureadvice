import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Calculator, Scale, TrendingUp } from "lucide-react";
import { services } from "@/data/services";
import { CTABanner } from "@/components/home/CTABanner";

const iconMap: Record<string, React.ElementType> = {
  Users,
  Calculator,
  Scale,
  TrendingUp,
};

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Sure Advice's comprehensive services: HR Consultancy, Accounting, Legal Support, and Business Development.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--color-off-white)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-[var(--color-yellow)]/10 text-[var(--color-brown)] font-semibold text-sm rounded-full mb-6 border border-[var(--color-yellow)]/20">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            What We <span className="text-[var(--color-brown)]">Offer</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive business solutions tailored to help your organization 
            grow, stay compliant, and operate efficiently.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Users;
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.slug}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "lg:[direction:rtl]"
                }`}
              >
                <div className={isEven ? "" : "lg:[direction:ltr]"}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
                <div className={isEven ? "" : "lg:[direction:ltr]"}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-[var(--color-yellow)]/10 rounded-xl">
                      <Icon size={24} className="text-[var(--color-brown)]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--color-brown)]">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-yellow)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-brown)] text-white font-semibold rounded-xl hover:bg-[var(--color-brown-dark)] transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
