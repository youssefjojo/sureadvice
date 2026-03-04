"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function PortfolioSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, portfolioItems.length - itemsPerView);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="section-padding bg-[var(--color-off-white)]" id="portfolio">
      <SectionHeading title="Portfolio" subtitle="If you do it right, it will last forever" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-[var(--color-yellow)] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hidden md:flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-[var(--color-yellow)] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hidden md:flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>

          {/* Slider */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / itemsPerView + 2)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {portfolioItems.map((item, i) => (
                <div
                  key={item.slug}
                  className="min-w-[calc(100%/1-1rem)] sm:min-w-[calc(100%/2-1rem)] lg:min-w-[calc(100%/3-1rem)] flex-shrink-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    onClick={() => setLightbox(i)}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View Details
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold text-[var(--color-yellow)] uppercase tracking-wide">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  i === currentIndex
                    ? "bg-[var(--color-yellow)] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="relative h-80">
                <Image
                  src={portfolioItems[lightbox].image}
                  alt={portfolioItems[lightbox].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-semibold text-[var(--color-yellow)] uppercase tracking-wide">
                  {portfolioItems[lightbox].category}
                </span>
                <h3 className="text-2xl font-bold mt-1">{portfolioItems[lightbox].title}</h3>
                <p className="text-gray-600 mt-2">{portfolioItems[lightbox].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
