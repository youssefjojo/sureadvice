import type { Metadata } from "next";
import { PortfolioSlider } from "@/components/home/PortfolioSlider";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description:
    "Explore Sure Advice's portfolio of successful projects and satisfied clients across HR outsourcing, accounting, legal, and business development.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-10 bg-[var(--color-off-white)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-[var(--color-yellow)]/10 text-[var(--color-brown)] font-semibold text-sm rounded-full mb-6 border border-[var(--color-yellow)]/20">
            Our Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="text-[var(--color-brown)]">Work</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            If you do it right, it will last forever. Explore our successful client partnerships.
          </p>
        </div>
      </section>

      <PortfolioSlider />
      <CTABanner />
    </>
  );
}
