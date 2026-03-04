export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "gcs",
    title: "GCS",
    category: "HR Outsourcing",
    image: "/images/portfolio/gcs.jpg",
    description: "Complete HR outsourcing solution for GCS operations in Egypt.",
  },
  {
    slug: "dr-diamond",
    title: "Dr. Diamond",
    category: "Business Consulting",
    image: "/images/portfolio/dr-diamond.jpg",
    description:
      "Strategic business development and HR management for Dr. Diamond.",
  },
  {
    slug: "portrait",
    title: "Portrait Studios",
    category: "Accounting",
    image: "/images/portfolio/portrait.png",
    description: "Full accounting and financial services management.",
  },
  {
    slug: "central-tact",
    title: "Central Tact",
    category: "Legal Support",
    image: "/images/portfolio/central-tact.jpg",
    description: "Legal compliance and contract management services.",
  },
  {
    slug: "drova",
    title: "Drova",
    category: "HR Outsourcing",
    image: "/images/portfolio/drova.jpg",
    description:
      "Employee outsourcing and payroll processing for Drova operations.",
  },
  {
    slug: "erctra",
    title: "Erctra",
    category: "Business Development",
    image: "/images/portfolio/erctra.jpg",
    description: "Market expansion and partnership building for Erctra.",
  },
];
