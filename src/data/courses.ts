export interface Course {
  slug: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  duration: string;
  level: string;
}

export const courses: Course[] = [
  {
    slug: "hr-course",
    title: "HR Course",
    description:
      "HR course with real practical training inside a company. Learn recruitment, payroll, and employee relations hands-on.",
    image: "/images/courses/hr-course.jpg",
    tag: "Practical Training",
    duration: "8 Weeks",
    level: "Beginner to Intermediate",
  },
  {
    slug: "web-design",
    title: "Web Design",
    description:
      "Learn modern website design using HTML, CSS & responsive layouts. Build real projects from scratch.",
    image: "/images/courses/web-design.jpg",
    tag: "Creative Skills",
    duration: "6 Weeks",
    level: "Beginner",
  },
  {
    slug: "corporate-law",
    title: "Corporate Lawyer",
    description:
      "Corporate law, contracts, and business legal compliance. Master the legal framework for modern business.",
    image: "/images/courses/corporate-law.jpg",
    tag: "Legal Field",
    duration: "10 Weeks",
    level: "Intermediate",
  },
  {
    slug: "franchise-agreement",
    title: "Franchise Agreement",
    description:
      "Drafting and managing franchise agreements professionally. Learn negotiation and contract law essentials.",
    image: "/images/courses/franchise.jpg",
    tag: "Business Law",
    duration: "4 Weeks",
    level: "Advanced",
  },
];
