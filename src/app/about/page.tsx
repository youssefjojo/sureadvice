import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${COMPANY.name} — Egypt's leading HR outsourcing company with ${COMPANY.marketShare}% market share.`,
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide cost-effective, compliant, and efficient HR outsourcing services that enable businesses to focus on growth while we handle workforce management.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the undisputed leader in HR outsourcing across the Middle East and North Africa, setting the standard for excellence in people management.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, innovation, and client success drive everything we do. We believe in building lasting partnerships based on trust and measurable results.",
  },
];

const milestones = [
  { year: "2015", event: "Sure Advice founded in Cairo, Egypt" },
  { year: "2017", event: "Reached 50+ corporate clients" },
  { year: "2019", event: "Expanded to accounting & legal services" },
  { year: "2021", event: "Achieved 59% market share in HR outsourcing" },
  { year: "2023", event: "Launched professional training courses" },
  { year: "2025", event: "Managing 5,000+ employees across Egypt" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--color-off-white)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-[var(--color-yellow)]/10 text-[var(--color-brown)] font-semibold text-sm rounded-full mb-6 border border-[var(--color-yellow)]/20">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Egypt&apos;s Leading <span className="text-[var(--color-brown)]">HR Outsourcing</span> Company
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Since {COMPANY.foundingYear}, Sure Advice has been helping businesses of all sizes 
              optimize their workforce management. With over {COMPANY.marketShare}% market share, 
              we are the trusted partner for HR outsourcing in Egypt.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src={COMPANY.logo}
                alt="Sure Advice Office"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-brown)] mb-6">
                Cost-Effective HR Outsourcing with Sure Advice
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Outsourcing human resource services is a cost-effective solution for organizations 
                of all sizes, whether or not they have an in-house HR department. By outsourcing to 
                Egypt, businesses can save thousands while ensuring compliance, efficiency, and 
                reduced risk.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sure Advice is the leading employee outsourcing company in Egypt, holding over 
                59% of the market share. Our comprehensive outsourcing services cover employment 
                management, personnel administration, social security, insurance, policy development, 
                and payroll processing — allowing businesses to focus on growth while we handle 
                the complexities of HR.
              </p>
              <ul className="space-y-3">
                {["Employment management", "Personnel administration", "Social security & insurance", "Policy development", "Payroll processing"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[var(--color-yellow)] shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="section-padding bg-[var(--color-off-white)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 shadow-md">
                <div className="p-3 bg-[var(--color-yellow)]/10 rounded-xl w-fit mb-4">
                  <value.icon size={28} className="text-[var(--color-brown)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-brown)] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[var(--color-brown)] mb-12">
            Our Journey
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <div key={milestone.year} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[var(--color-yellow)] rounded-full flex items-center justify-center font-bold text-sm text-[var(--color-brown)]">
                    {milestone.year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 h-12 bg-[var(--color-yellow)]/30 mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <p className="text-gray-700 font-medium">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
