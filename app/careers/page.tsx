import { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers | Join Our Engineering Team in Hyderabad",
  description:
    "Join Reeyansh Tech Solutions — a fast-growing software company in Hyderabad. Explore open positions in Next.js frontend, Flutter mobile, Node.js backend, AWS DevOps, and UI/UX design.",
  keywords: [
    "IT Jobs Hyderabad",
    "Software Engineer Jobs India",
    "Flutter Developer Jobs Hyderabad",
    "Next.js Developer Careers",
    "DevOps Engineer Jobs India",
    "React Developer Jobs Hyderabad",
    "Tech Jobs Telangana",
    "Reeyansh Tech Solutions Careers",
  ],
  alternates: { canonical: "/careers/" },
  openGraph: {
    title: "Careers | Join Reeyansh Tech Solutions — Hyderabad",
    description:
      "Exciting engineering roles in Next.js, Flutter, Node.js, AWS DevOps & UI/UX. Join a fast-growing tech company in Hyderabad, India.",
    url: "https://www.reeyanshtech.in/careers/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Careers at Reeyansh Tech Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Reeyansh Tech Solutions Hyderabad",
    description: "Engineering jobs in Hyderabad — Next.js, Flutter, AWS, DevOps & UI/UX. Join our team!",
    images: ["/og-image.jpg"],
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
