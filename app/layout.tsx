import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import WhatsAppButton from "@/components/WhatsAppButton";

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

const BASE_URL = "https://www.reeyanshtech.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Reeyansh Tech Solutions | Web, Mobile App & Cloud DevOps Company India",
    template: "%s | Reeyansh Tech Solutions",
  },
  description:
    "Reeyansh Tech Solutions — a Hyderabad-based enterprise software company delivering Next.js web applications, Flutter mobile apps, UI/UX design, and AWS/GCP cloud DevOps. Build scalable, production-ready digital products with us.",
  keywords: [
    "Reeyansh Tech Solutions",
    "Web Development Company India",
    "Next.js Developer Hyderabad",
    "Flutter App Development India",
    "React Development Company",
    "Mobile App Development Hyderabad",
    "DevOps Cloud Architecture",
    "AWS Cloud Services India",
    "UI UX Design Agency",
    "Enterprise Software Development",
    "Node.js Backend Development",
    "TypeScript Development India",
    "Software Company Hyderabad",
    "IT Services Telangana",
    "reeyanshtech.in",
  ],
  authors: [{ name: "Reeyansh Tech Solutions", url: BASE_URL }],
  creator: "Reeyansh Tech Solutions",
  publisher: "Reeyansh Tech Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    title: "Reeyansh Tech Solutions | Web, Mobile App & Cloud DevOps Company India",
    description:
      "Enterprise-grade custom web systems, high-performance Flutter mobile apps, responsive UI/UX designs, and secure AWS/GCP cloud configurations — built in Hyderabad, India.",
    siteName: "Reeyansh Tech Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reeyansh Tech Solutions — Web & Mobile App Development Company India",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reeyansh Tech Solutions | Web, Mobile App & Cloud DevOps Company India",
    description:
      "Enterprise-grade custom web systems, Flutter mobile apps, UI/UX design, and AWS/GCP cloud infrastructure. Based in Hyderabad, India.",
    images: ["/og-image.jpg"],
    site: "@reeyanshtech",
    creator: "@reeyanshtech",
  },
  verification: {
    google: "", // Add your Google Search Console verification token here
  },
  category: "Technology",
};

// Organization + LocalBusiness Structured Data (JSON-LD)
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Reeyansh Tech Solutions",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo-icon.png`,
        width: 512,
        height: 512,
      },
      sameAs: [
        "https://linkedin.com/company/reeyansh-tech-solutions",
        "https://twitter.com/reeyanshtech",
        "https://github.com/reeyanshtech",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9666848983",
          contactType: "customer service",
          areaServed: "Worldwide",
          availableLanguage: ["English", "Hindi", "Telugu"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "604, Pallavi, Kalyan Nilayam, IDA Jeedimetla, Subhash Nagar, Jeedimetla",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500085",
        addressCountry: "IN",
      },
      foundingDate: "2020",
      numberOfEmployees: { "@type": "QuantitativeValue", value: "45" },
      knowsAbout: [
        "Web Application Development",
        "Mobile App Development",
        "Flutter Development",
        "Next.js",
        "React",
        "Node.js",
        "AWS Cloud",
        "DevOps",
        "UI/UX Design",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Reeyansh Tech Solutions",
      description: "Enterprise Web, Mobile App & Cloud DevOps Company — Hyderabad, India",
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/blog/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
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
        {/* Canonical domain */}
        <link rel="canonical" href={BASE_URL} />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />

        {/* Theme color */}
        <meta name="theme-color" content="#0f172a" />

        {/* Geo tags */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.4435;78.3772" />
        <meta name="ICBM" content="17.4435, 78.3772" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-indigo-500/30 selection:text-white">
        <Navbar />
        <main className="flex-grow flex flex-col pt-[72px] md:pt-[84px]">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        {/* Global WhatsApp floating chat button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
