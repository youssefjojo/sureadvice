export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "hr-consultancy",
    title: "HR Consultancy",
    shortDescription:
      "Expert HR consultancy services to optimize workforce strategies and streamline hiring processes.",
    fullDescription:
      "We provide expert HR consultancy services, helping businesses optimize their workforce strategies, streamline hiring processes, and enhance employee engagement. Our goal is to ensure companies build strong, efficient, and compliant HR frameworks that support long-term success.",
    image: "/images/services/hr-consultancy.jpg",
    icon: "Users",
    features: [
      "Workforce strategy optimization",
      "Hiring process streamlining",
      "Employee engagement programs",
      "HR compliance frameworks",
      "Performance management systems",
      "Organizational development",
    ],
  },
  {
    slug: "accounting-services",
    title: "Accounting Services",
    shortDescription:
      "Professional accounting services including bookkeeping, financial reporting, and tax preparation.",
    fullDescription:
      "We provide professional accounting services, helping businesses manage their finances with accuracy and efficiency. From bookkeeping and financial reporting to tax preparation and compliance, we ensure that companies maintain clear, organized, and legally compliant financial records for sustainable growth.",
    image: "/images/services/accounting.jpg",
    icon: "Calculator",
    features: [
      "Bookkeeping & record management",
      "Financial reporting & analysis",
      "Tax preparation & filing",
      "Regulatory compliance",
      "Budget planning & forecasting",
      "Audit preparation",
    ],
  },
  {
    slug: "legal-support",
    title: "Legal Support",
    shortDescription:
      "Professional legal advice for contract reviews, dispute resolution, and compliance.",
    fullDescription:
      "We provide professional legal advice, helping individuals and businesses navigate legal challenges with clarity and confidence. From contract reviews to dispute resolution, we ensure your rights are protected and your decisions are well-informed. Whether you need guidance on compliance, negotiations, or legal documentation, we offer practical solutions tailored to your needs.",
    image: "/images/services/legal-support.jpg",
    icon: "Scale",
    features: [
      "Contract review & drafting",
      "Dispute resolution",
      "Legal compliance advisory",
      "Negotiation support",
      "Legal documentation",
      "Regulatory guidance",
    ],
  },
  {
    slug: "business-development",
    title: "Business Development",
    shortDescription:
      "Strategic planning, market expansion, and partnership building services.",
    fullDescription:
      "We specialize in business development, helping companies grow through strategic planning, market expansion, and partnership building. By identifying new opportunities and optimizing operations, we assist businesses in increasing revenue, improving efficiency, and achieving long-term success.",
    image: "/images/services/business-development.jpg",
    icon: "TrendingUp",
    features: [
      "Strategic planning & execution",
      "Market expansion strategies",
      "Partnership development",
      "Revenue optimization",
      "Operational efficiency",
      "Growth opportunity identification",
    ],
  },
];
