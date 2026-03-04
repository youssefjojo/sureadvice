"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Phone, Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { CONTACT, SOCIAL_LINKS } from "@/lib/constants";
import { SocialLinks } from "@/components/shared/SocialLinks";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--color-off-white)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-[var(--color-yellow)]/10 text-[var(--color-brown)] font-semibold text-sm rounded-full mb-6 border border-[var(--color-yellow)]/20">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Get in <span className="text-[var(--color-brown)]">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to transform your business? Reach out to us and let&apos;s discuss how we can help.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-brown)] mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Get in touch with us easily via phone or email! We&apos;re here to 
                  answer all your inquiries and assist you anytime.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 bg-[var(--color-yellow)]/10 rounded-xl group-hover:bg-[var(--color-yellow)]/20 transition-colors">
                    <Phone size={22} className="text-[var(--color-brown)]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                    <p className="text-gray-900 font-medium">{CONTACT.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 bg-[var(--color-yellow)]/10 rounded-xl group-hover:bg-[var(--color-yellow)]/20 transition-colors">
                    <Mail size={22} className="text-[var(--color-brown)]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                    <p className="text-gray-900 font-medium">{CONTACT.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[var(--color-yellow)]/10 rounded-xl">
                    <MapPin size={22} className="text-[var(--color-brown)]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Address</p>
                    <p className="text-gray-900 font-medium">{CONTACT.address}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-3">Follow us</p>
                <SocialLinks variant="hero" iconSize={20} />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-[var(--color-off-white)] rounded-2xl p-8 sm:p-10">
                {submitted && (
                  <div className="mb-6 flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
                    <CheckCircle2 size={20} />
                    <p className="font-medium">Message sent successfully! We&apos;ll get back to you soon.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name")}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-brown)] focus:ring-2 focus:ring-[var(--color-brown)]/20 outline-none transition-all bg-white"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-brown)] focus:ring-2 focus:ring-[var(--color-brown)]/20 outline-none transition-all bg-white"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-brown)] focus:ring-2 focus:ring-[var(--color-brown)]/20 outline-none transition-all bg-white"
                        placeholder="+20 XXX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        id="subject"
                        type="text"
                        {...register("subject")}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-brown)] focus:ring-2 focus:ring-[var(--color-brown)]/20 outline-none transition-all bg-white"
                        placeholder="How can we help?"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-brown)] focus:ring-2 focus:ring-[var(--color-brown)]/20 outline-none transition-all bg-white resize-none"
                      placeholder="Tell us about your needs..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-brown)] text-white font-semibold rounded-xl hover:bg-[var(--color-brown-dark)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
