"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[var(--color-brown)] text-white shadow-lg transition-all duration-300 hover:bg-[var(--color-brown-dark)] hover:scale-110",
        visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      )}
    >
      <ArrowUp size={22} />
    </button>
  );
}
