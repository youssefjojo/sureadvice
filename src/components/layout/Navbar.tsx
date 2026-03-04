"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg"
          : "bg-black"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src={COMPANY.logo}
              alt={COMPANY.name}
              width={60}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  pathname === link.href
                    ? "text-[var(--color-yellow)] bg-white/10"
                    : "text-gray-200 hover:text-[var(--color-yellow)] hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-[var(--color-yellow)] text-black font-semibold rounded-lg hover:bg-[var(--color-yellow)]/90 transition-all duration-200 text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-[var(--color-yellow)] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-black/95 backdrop-blur-md border-t border-white/10 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                pathname === link.href
                  ? "text-[var(--color-yellow)] bg-white/10"
                  : "text-gray-200 hover:text-[var(--color-yellow)] hover:bg-white/5"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-3 px-4 py-3 bg-[var(--color-yellow)] text-black font-semibold rounded-lg text-center hover:bg-[var(--color-yellow)]/90 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
