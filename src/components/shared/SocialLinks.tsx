import { Facebook, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const links = [
  { href: SOCIAL_LINKS.facebook, icon: Facebook, label: "Facebook" },
  { href: SOCIAL_LINKS.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: SOCIAL_LINKS.whatsapp, icon: MessageCircle, label: "WhatsApp" },
  { href: SOCIAL_LINKS.instagram, icon: Instagram, label: "Instagram" },
];

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  variant?: "default" | "hero";
}

export function SocialLinks({ className, iconSize = 20, variant = "default" }: SocialLinksProps) {
  return (
    <div className={cn("flex gap-3", className)}>
      {links.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={cn(
            "p-2.5 rounded-lg transition-all duration-200",
            variant === "hero"
              ? "text-[var(--color-brown)] hover:text-[var(--color-yellow)] hover:bg-white/10"
              : "bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white"
          )}
        >
          <social.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}
