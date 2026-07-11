import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Code2, Smartphone, Palette, Cloud, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ScrollReveal";
import { servicesData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services | Web, Mobile App, Cloud & DevOps Development",
  description:
    "Explore Reeyansh Tech Solutions' full range of services: Next.js web applications, Flutter mobile apps, UI/UX design, AWS cloud architecture, and DevOps automation. Enterprise-grade. India-based.",
  keywords: [
    "Web Development Services India",
    "Flutter App Development",
    "Next.js Development Company",
    "Cloud DevOps Services",
    "UI UX Design Services Hyderabad",
    "Enterprise Software Services",
    "AWS Cloud Architecture India",
    "Mobile App Development Company",
  ],
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Our Services | Web, Mobile, Cloud & DevOps | Reeyansh Tech Solutions",
    description:
      "Premium engineering services: Next.js web apps, Flutter mobile apps, UI/UX design, AWS/GCP cloud infrastructure, and DevOps automation. Enterprise-ready from Hyderabad, India.",
    url: "https://www.reeyanshtech.in/services/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Reeyansh Tech Solutions Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Reeyansh Tech Solutions",
    description: "Next.js, Flutter, AWS, DevOps & UI/UX — enterprise software services from Hyderabad, India.",
    images: ["/og-image.jpg"],
  },
};

const serviceIcons = {
  Code2: Code2,
  Smartphone: Smartphone,
  Palette: Palette,
  Cloud: Cloud,
  Layers: Code2,
  Cpu: Code2,
  Shield: Code2,
  HelpCircle: Code2
};

export default function Services() {
  return (
    <div className="relative w-full bg-slate-950 py-16 md:py-24 overflow-hidden">
      
      {/* Visual background atmospheric elements */}
      <div className="absolute top-40 right-1/4 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 left-1/4 h-96 w-96 rounded-full bg-indigo-600/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <ScrollReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Our Services</span>
            <h1 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white mt-3 leading-tight">
              Enterprise Technology Solutions
            </h1>
            <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
              We provide clean architectures, robust codebases, and end-to-end cloud deployments to power modern digital enterprises.
            </p>
          </ScrollReveal>
        </div>

        {/* Detailed Services Sections (Alternating) */}
        <div className="space-y-24 md:space-y-36">
          {servicesData.map((service, index) => {
            const Icon = serviceIcons[service.iconName] || Code2;
            const isEven = index % 2 === 0;

            return (
              <section
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
              >
                
                {/* Text Content */}
                <ScrollReveal
                  direction={isEven ? "left" : "right"}
                  className={`space-y-6 ${!isEven ? "lg:order-2" : ""}`}
                >
                  <div className="inline-flex h-12 w-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 items-center justify-center text-indigo-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white">
                    {service.title}
                  </h2>
                  
                  <p className="text-slate-350 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Features */}
                  <ul className="space-y-3 pt-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="pt-6">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-3">Technologies We Use</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-md border border-slate-800 bg-slate-950/40 text-xs font-semibold text-slate-300 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Graphics / Card side representation */}
                <ScrollReveal
                  direction={isEven ? "right" : "left"}
                  className={`relative ${!isEven ? "lg:order-1" : ""}`}
                >
                  {/* Glassmorphic graphical container with custom representation image */}
                  <div className="aspect-video w-full rounded-2xl border border-slate-800 bg-slate-950/40 p-1.5 flex flex-col justify-between overflow-hidden shadow-2xl relative group">
                    {service.imagePath ? (
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${service.imagePath}`}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Dark gradient overlay to blend image nicely */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                        
                        {/* Overlay details */}
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-10">
                          <div className="space-y-1">
                            <div className="text-white font-bold text-base sm:text-lg leading-tight">{service.title}</div>
                            <div className="text-[10px] uppercase font-bold tracking-widest text-indigo-400">Architecture Spec</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full rounded-xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-500/10 p-6 flex flex-col justify-between relative overflow-hidden">
                        {/* Visual accent circles */}
                        <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-indigo-500/20 blur-xl group-hover:scale-125 transition-transform duration-500" />
                        <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-purple-500/20 blur-xl group-hover:scale-125 transition-transform duration-500" />

                        <div className="text-xs uppercase tracking-widest font-bold text-slate-500">Architecture Spec</div>
                        
                        <div className="space-y-2">
                          <div className="text-white font-semibold text-lg">{service.title}</div>
                          <div className="text-slate-400 text-xs leading-relaxed max-w-sm">
                            Continuous deployment integrations, container orchestrations, and modular typescript components guaranteed for production scaling.
                          </div>
                        </div>

                        <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-wider text-slate-500">
                          <span>Scope: Enterprise</span>
                          <span>Uptime: 99.9%</span>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>

              </section>
            );
          })}
        </div>

        {/* Bottom CTA Block */}
        <section className="mt-28 md:mt-36">
          <ScrollReveal direction="up">
            <Card className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-indigo-950/10 to-slate-950 p-8 sm:p-14 text-center">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 h-24 w-72 rounded-full bg-indigo-500/5 blur-[80px]" />
              
              <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white">Need a Customized Technical Scope?</h3>
              <p className="text-slate-400 text-sm max-w-lg mx-auto mt-3">
                Our senior software developers and architects are ready to draft a customized technical proposal for your software requirements.
              </p>
              
              <div className="mt-8 flex justify-center">
                <Link href="/contact/">
                  <Button size="md" className="gap-2 group">
                    Request Proposals
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </Card>
          </ScrollReveal>
        </section>

      </div>
    </div>
  );
}
