import { Metadata } from "next";
import BlogGrid from "./BlogGrid";

export const metadata: Metadata = {
  title: "Insights & Tech Blogs",
  description: "Read the latest engineering articles, retail tech trends, and cloud automation guides from Reeyansh Tech Solutions.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "Insights & Tech Blogs | Reeyansh Tech Solutions",
    description: "Read the latest engineering articles, retail tech trends, and cloud automation guides from Reeyansh Tech Solutions.",
    url: "https://reeyanshtechsolutions.billnserve.com/blog/",
  },
};

export default function BlogPage() {
  return <BlogGrid />;
}
