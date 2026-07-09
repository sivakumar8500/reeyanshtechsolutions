import { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers & Open Positions",
  description: "Join our agile engineering team at Reeyansh Tech Solutions. Explore roles in frontend development, Flutter, and Cloud DevOps engineering.",
  alternates: {
    canonical: "/careers/",
  },
  openGraph: {
    title: "Careers & Open Positions | Reeyansh Tech Solutions",
    description: "Join our agile engineering team at Reeyansh Tech Solutions. Explore roles in frontend development, Flutter, and Cloud DevOps engineering.",
    url: "https://reeyanshtechsolutions.billnserve.com/careers/",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
