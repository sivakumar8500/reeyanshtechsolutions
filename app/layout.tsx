import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Reeyansh Tech Solutions - Enterprise App Development & Cloud DevOps",
    template: "%s | Reeyansh Tech Solutions",
  },
  description:
    "Partner with Reeyansh Tech Solutions for premium web development, mobile applications, user experience (UI/UX) design, and cloud infrastructure orchestration. Scalable, fast, and production-ready.",
  keywords: [
    "Reeyansh Tech Solutions",
    "Web Development Company",
    "Next.js Developer India",
    "Flutter App Development",
    "DevOps Architecture",
    "UI/UX Design Agency",
    "Cloud Computing Services",
    "Bengaluru Software Company",
  ],
  authors: [{ name: "Reeyansh Tech Solutions" }],
  creator: "Reeyansh Tech Solutions",
  metadataBase: new URL("https://reeyanshtech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reeyanshtech.com",
    title: "Reeyansh Tech Solutions - Enterprise Web & Mobile Engineering",
    description:
      "Enterprise-grade custom web systems, high-performance Flutter mobile apps, responsive UI/UX designs, and secure AWS/GCP cloud configurations.",
    siteName: "Reeyansh Tech Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reeyansh Tech Solutions Corporate Web & Mobile App Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reeyansh Tech Solutions - Enterprise Web & Mobile Engineering",
    description:
      "Enterprise-grade custom web systems, high-performance Flutter mobile apps, responsive UI/UX designs, and secure AWS/GCP cloud configurations.",
    images: ["/og-image.jpg"],
  },
};

// Organization Structured Data (JSON-LD)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Reeyansh Tech Solutions",
  "url": "https://reeyanshtech.com",
  "logo": "https://reeyanshtech.com/logo.png",
  "sameAs": [
    "https://linkedin.com/company/reeyansh-tech-solutions",
    "https://twitter.com/reeyanshtech",
    "https://github.com/reeyanshtech",
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-96668-48983",
    "contactType": "customer service",
    "areaServed": "Worldwide",
    "availableLanguage": ["English", "Hindi"],
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "604, Pallavi, Kalyan Nilayam, IDA Jeedimetla, Subhash Nagar, Jeedimetla",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500085",
    "addressCountry": "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full bg-slate-950 text-slate-100 antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-indigo-500/30 selection:text-white">
        <Navbar />
        <main className="flex-grow flex flex-col pt-[72px] md:pt-[84px]">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
