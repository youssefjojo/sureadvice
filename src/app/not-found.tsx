import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--color-off-white)] pt-20">
      <div className="text-center px-4">
        <h1 className="text-8xl sm:text-9xl font-bold text-[var(--color-yellow)] mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-brown)] text-white font-semibold rounded-xl hover:bg-[var(--color-brown-dark)] transition-all duration-200"
          >
            <Home size={18} />
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-brown)] text-[var(--color-brown)] font-semibold rounded-xl hover:bg-[var(--color-brown)] hover:text-white transition-all duration-200"
          >
            <ArrowLeft size={18} />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
