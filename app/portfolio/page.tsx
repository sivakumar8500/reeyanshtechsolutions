import { Metadata } from "next";
import PortfolioGrid from "./PortfolioGrid";

export const metadata: Metadata = {
  title: "Case Studies & Portfolio",
  description: "Explore our enterprise software solutions: Scan Basket retail app, Bill & Serve billing ecosystem, and Home Therapy scheduling app.",
  alternates: {
    canonical: "/portfolio/",
  },
  openGraph: {
    title: "Case Studies & Portfolio | Reeyansh Tech Solutions",
    description: "Explore our enterprise software solutions: Scan Basket retail app, Bill & Serve billing ecosystem, and Home Therapy scheduling app.",
    url: "https://reeyanshtechsolutions.billnserve.com/portfolio/",
  },
};

export default function PortfolioPage() {
  return <PortfolioGrid />;
}
