"use client";

import { MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-40 p-4 rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:scale-110 animate-bounce"
      style={{ animationDuration: "2s", animationIterationCount: 3 }}
    >
      <MessageCircle size={26} />
    </a>
  );
}
