import { Metadata } from "next";
import PortfolioGrid from "./PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | Case Studies & Enterprise Software Projects",
  description:
    "Explore Reeyansh Tech Solutions' portfolio: Scan Basket retail app, Bill & Serve billing ecosystem, Home Therapy scheduling app, and more enterprise software projects delivered across India.",
  keywords: [
    "Software Portfolio India",
    "Enterprise App Case Studies",
    "Flutter App Portfolio",
    "React Next.js Portfolio",
    "IT Company Projects Hyderabad",
    "Mobile App Case Study India",
  ],
  alternates: { canonical: "/portfolio/" },
  openGraph: {
    title: "Portfolio | Enterprise Software Projects | Reeyansh Tech Solutions",
    description:
      "Case studies and live projects: Scan Basket retail app, Bill & Serve billing, Home Therapy scheduling — built with Next.js, Flutter, and AWS by Reeyansh Tech Solutions.",
    url: "https://www.reeyanshtech.in/portfolio/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Reeyansh Tech Solutions Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Reeyansh Tech Solutions",
    description: "Enterprise software projects & case studies — Next.js, Flutter, AWS. Built in Hyderabad, India.",
    images: ["/og-image.jpg"],
  },
};

export default function PortfolioPage() {
  return <PortfolioGrid />;
}
