import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { courses } from "@/data/courses";
import { COMPANY } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY.url;

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/courses`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.9 },
  ];

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  const coursePages = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...coursePages];
}
