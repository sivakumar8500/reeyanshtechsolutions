import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Software Quote",
  description:
    "Contact Reeyansh Tech Solutions for a free custom software quote. We build Next.js web apps, Flutter mobile apps, cloud infrastructure, and UI/UX designs for businesses across India and worldwide.",
  keywords: [
    "Contact Software Company India",
    "Get Software Quote Hyderabad",
    "Hire Web Developer India",
    "Custom App Development Quote",
    "IT Consulting Hyderabad",
    "Software Project Inquiry",
    "Reeyansh Tech Contact",
  ],
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact Us | Free Project Quote | Reeyansh Tech Solutions",
    description:
      "Get a free consultation for your web, mobile, or cloud project. Reeyansh Tech Solutions — Hyderabad, India. Fast response guaranteed.",
    url: "https://www.reeyanshtech.in/contact/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact Reeyansh Tech Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Reeyansh Tech Solutions",
    description: "Get a free project quote — web, mobile, cloud & DevOps. Reeyansh Tech, Hyderabad, India.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
