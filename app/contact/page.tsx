import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us & Request a Quote",
  description: "Get in touch with Reeyansh Tech Solutions. Request a custom software engineering quote, project consultation, or ask questions.",
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: "Contact Us & Request a Quote | Reeyansh Tech Solutions",
    description: "Get in touch with Reeyansh Tech Solutions. Request a custom software engineering quote, project consultation, or ask questions.",
    url: "https://reeyanshtechsolutions.billnserve.com/contact/",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
