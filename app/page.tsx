"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Code2, Smartphone, Palette, Cloud, CheckCircle, ArrowUpRight, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ScrollReveal";
import TechCurve from "@/components/TechCurve";
import { servicesData, projectsData, testimonialsData } from "@/lib/data";

// Lazy load MolecularBackground to ensure WebGL context is initialized only in browser environment
const MolecularBackground = dynamic(
  () => import("@/components/MolecularBackground"),
  { ssr: false }
);

const serviceIcons = {
  Code2: Code2,
  Smartphone: Smartphone,
  Palette: Palette,
  Cloud: Cloud,
  // Fallbacks if metadata links are modified
  Layers: Code2,
  Cpu: Code2,
  Shield: Code2,
  HelpCircle: Code2
};

const techStack = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
];

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-6 pb-12 lg:pt-8 lg:pb-16 overflow-hidden">
        <MolecularBackground />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
              <ScrollReveal direction="up" delay={0.1}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold uppercase tracking-wider text-indigo-300 backdrop-blur-md mb-6">
                  Empowering Digital Innovation
                </span>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.25}>
                <h1 className="font-outfit text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight">
                  Architecting Next-Gen{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                    Digital Ecosystems
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 mt-6 leading-relaxed">
                  We design, build, and deploy premium enterprise web applications, cross-platform mobile products, and automated cloud infrastructures.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.55}>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto">
                  <Link href="/services/" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full gap-2 group">
                      Explore Services
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/contact/" className="w-full sm:w-auto">
                    <Button size="lg" variant="secondary" className="w-full">
                      Let's Collaborate
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Animated Tech Curve */}
            <div className="lg:col-span-5 flex justify-center items-center relative w-full h-[420px] sm:h-[460px] lg:h-[500px] mt-6 lg:mt-0">
              <ScrollReveal direction="left" delay={0.3} className="w-full h-full flex items-center justify-center">
                <TechCurve />
              </ScrollReveal>
            </div>
            
          </div>
        </div>

        {/* Ambient bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-24 bg-slate-950 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">
                Our Core Expertise
              </h2>
              <p className="text-slate-400 mt-4">
                We engineer scalable solutions tailored to drive digital growth and operational efficiency.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, index) => {
              const Icon = serviceIcons[service.iconName] || Code2;
              return (
                <ScrollReveal key={service.id} direction="up" delay={index * 0.1}>
                  <Card className="h-full flex flex-col justify-between group" glowColor="blue">
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-outfit text-xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>
                    
                    <Link href={`/services#${service.id}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-200">
                      Learn More
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. TECH STACK SHOWCASE */}
      <section className="py-20 border-t border-slate-900 bg-slate-950/60 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <ScrollReveal direction="up">
              <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white">
                Powered by Modern Technology
              </h2>
              <p className="text-slate-400 text-sm mt-3">
                We build applications utilizing industry-leading frameworks to guarantee speeds and developer scaling.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-9 gap-6 items-center justify-items-center">
            {techStack.map((tech, index) => (
              <ScrollReveal key={tech.name} direction="up" delay={index * 0.05} className="w-full">
                <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-900 bg-slate-950/20 backdrop-blur-sm hover:border-slate-800 transition-colors duration-300 group">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-10 w-10 object-contain filter grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
                  />
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 group-hover:text-slate-300 transition-colors duration-300 mt-2">
                    {tech.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CLIENT TESTIMONIALS */}
      <section className="py-24 bg-slate-950 border-t border-slate-900 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">
                What Our Clients Say
              </h2>
              <p className="text-slate-400 mt-4">
                Hear from the enterprise product leads and founders who partnered with Reeyansh Tech Solutions.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} direction="up" delay={index * 0.15}>
                <Card className="h-full flex flex-col justify-between" glowColor="purple">
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-300 text-sm italic leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 border-t border-slate-900 pt-4">
                    {/* Avatar placeholder with gradient background */}
                    <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${testimonial.avatarGradient} flex items-center justify-center text-xs font-bold text-white shrink-0`}>
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-slate-500">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-24 bg-slate-950 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-indigo-950/20 to-slate-950 p-8 sm:p-16 text-center shadow-2xl">
              
              {/* Decorative light glows */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

              <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Ready to Accelerate Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                  Digital Roadmap?
                </span>
              </h2>
              
              <p className="mx-auto max-w-xl text-slate-400 mt-6 text-sm sm:text-base leading-relaxed">
                Connect with our technical architects to design a customized plan for your app development, UI/UX optimization, or cloud migration project.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <Link href="/contact/">
                  <Button size="lg" className="w-full sm:w-auto gap-2">
                    Schedule a Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/portfolio/">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    View Our Work
                  </Button>
                </Link>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
