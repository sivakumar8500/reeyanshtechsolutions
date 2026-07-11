import { Metadata } from "next";
import BlogGrid from "./BlogGrid";

export const metadata: Metadata = {
  title: "Blog | Tech Insights, Engineering Articles & Tutorials",
  description:
    "Read engineering articles, retail tech trends, cloud automation guides, and software development tutorials from the Reeyansh Tech Solutions team. Stay ahead with expert insights.",
  keywords: [
    "Tech Blog India",
    "Software Engineering Articles",
    "Next.js Tutorials",
    "Flutter Development Blog",
    "Cloud DevOps Guides",
    "Web Development Insights India",
    "IT Blog Hyderabad",
  ],
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Blog | Tech Insights & Engineering Articles | Reeyansh Tech Solutions",
    description:
      "Expert engineering articles on Next.js, Flutter, AWS, DevOps, and enterprise software development from the Reeyansh Tech Solutions team.",
    url: "https://www.reeyanshtech.in/blog/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Reeyansh Tech Solutions Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Reeyansh Tech Solutions",
    description: "Engineering insights on Next.js, Flutter, AWS & DevOps from India's premium software company.",
    images: ["/og-image.jpg"],
  },
};

export default function BlogPage() {
  return <BlogGrid />;
}
