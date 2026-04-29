export const COMPANY = {
  name: "Sure Advice",
  tagline: "Egypt's Leading HR Outsourcing & Business Consulting Company",
  description:
    "Sure Advice is Egypt's leading HR outsourcing company with 59% market share. We offer HR consultancy, payroll processing, accounting services, legal support, and business development solutions.",
  url: "https://www.sure-advice.com",
  logo: "/images/logo.png",
  foundingYear: 2015,
  marketShare: 59,
  clientsServed: 200,
  yearsExperience: 10,
  employeesManaged: 5000,
} as const;

export const CONTACT = {
  phone: "+20 115 675 5584",
  email: "info@sure-advice.com",
  joinUsEmail: "job@sure-advice.com",
  whatsapp: "201156755584",
  address: "67 Al-Thawra Street - Golf Land - Cairo, Egypt",
} as const;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/1F814VMg5K",
  linkedin: "https://www.linkedin.com/company/sure-advice",
  instagram: "https://www.instagram.com/sureadvisehr",
  whatsapp: `https://wa.me/${CONTACT.whatsapp}`,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Courses", href: "/courses" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;
