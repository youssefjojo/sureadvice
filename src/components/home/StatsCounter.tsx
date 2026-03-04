"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { COMPANY } from "@/lib/constants";
import { Users, BarChart3, Clock, Building2 } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: BarChart3, value: COMPANY.marketShare, suffix: "%", label: "Market Share" },
  { icon: Building2, value: COMPANY.clientsServed, suffix: "+", label: "Clients Served" },
  { icon: Clock, value: COMPANY.yearsExperience, suffix: "+", label: "Years Experience" },
  { icon: Users, value: COMPANY.employeesManaged, suffix: "+", label: "Employees Managed" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold text-[var(--color-yellow)]">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsCounter() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[var(--color-yellow)]/10 rounded-xl">
                  <stat.icon size={28} className="text-[var(--color-yellow)]" />
                </div>
              </div>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-gray-400 mt-2 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
