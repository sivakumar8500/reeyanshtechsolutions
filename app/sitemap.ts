import { MetadataRoute } from "next";
import { blogsData } from "@/lib/data";

export const dynamic = "force-static";

const BASE_URL = "https://www.reeyanshtech.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static routes with priorities
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,           lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/services/`,  lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/portfolio/`, lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/about/`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog/`,      lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/careers/`,   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact/`,   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  // Dynamic blog routes
  const blogRoutes: MetadataRoute.Sitemap = blogsData.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
