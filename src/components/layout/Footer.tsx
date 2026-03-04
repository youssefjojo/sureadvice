import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, CONTACT, SOCIAL_LINKS, NAV_LINKS } from "@/lib/constants";

const socialIcons = [
  { href: SOCIAL_LINKS.facebook, icon: Facebook, label: "Facebook", color: "hover:text-blue-500" },
  { href: SOCIAL_LINKS.linkedin, icon: Linkedin, label: "LinkedIn", color: "hover:text-sky-600" },
  { href: SOCIAL_LINKS.instagram, icon: Instagram, label: "Instagram", color: "hover:text-pink-500" },
];

const serviceLinks = [
  { label: "HR Consultancy", href: "/services/hr-consultancy" },
  { label: "Accounting Services", href: "/services/accounting-services" },
  { label: "Legal Support", href: "/services/legal-support" },
  { label: "Business Development", href: "/services/business-development" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src={COMPANY.logo}
                alt={COMPANY.name}
                width={80}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {COMPANY.tagline}. Save thousands with our cost-effective
              employee outsourcing services.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-2.5 bg-white/10 rounded-lg text-gray-400 transition-all duration-200 hover:bg-white/20 ${social.color}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[var(--color-yellow)] font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[var(--color-yellow)] font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[var(--color-yellow)] font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  <Phone size={16} className="shrink-0 text-[var(--color-yellow)]" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  <Mail size={16} className="shrink-0 text-[var(--color-yellow)]" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <MapPin size={16} className="shrink-0 text-[var(--color-yellow)]" />
                  {CONTACT.address}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
