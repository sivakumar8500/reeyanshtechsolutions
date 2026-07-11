import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Award, Users, Compass, Eye, ShieldCheck, Flame } from "lucide-react";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | Our Mission, Team & Engineering Leadership",
  description:
    "Reeyansh Tech Solutions is a Hyderabad-based tech company with 45+ engineers delivering enterprise web, mobile apps, and cloud solutions. Meet our leadership team and discover our mission.",
  keywords: [
    "About Reeyansh Tech Solutions",
    "Software Company Hyderabad",
    "IT Company Telangana India",
    "Engineering Leadership Team",
    "Tech Startup Hyderabad",
  ],
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Us | Mission, Team & Leadership | Reeyansh Tech Solutions",
    description:
      "Meet the engineering leadership team powering Reeyansh Tech Solutions — 45+ engineers, 150+ projects, 95% client retention. Based in Hyderabad, India.",
    url: "https://www.reeyanshtech.in/about/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "About Reeyansh Tech Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Reeyansh Tech Solutions | Engineering Leadership",
    description: "45+ engineers. 150+ projects. 95% retention. Meet the team behind India's premium software company.",
    images: ["/og-image.jpg"],
  },
};

export default function About() {
  const stats = [
    { label: "Projects Completed", value: "150+" },
    { label: "Active Engineers", value: "45+" },
    { label: "Client Retention Rate", value: "95%" },
  ];

  const values = [
    {
      title: "Client-Centricity",
      description: "We align our architectures directly with your business goals, guaranteeing functional, profitable systems.",
      icon: Users,
    },
    {
      title: "Unyielding Quality",
      description: "We write clean, typed, modular code backed by extensive test coverage to prevent operational debt.",
      icon: ShieldCheck,
    },
    {
      title: "Constant Innovation",
      description: "We actively evaluate emerging technologies to ensure your applications remain modern for years to come.",
      icon: Flame,
    },
  ];

  return (
    <div className="relative w-full bg-slate-950 overflow-hidden py-16 md:py-24">
      
      {/* Glow Effects */}
      <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 h-96 w-96 rounded-full bg-purple-600/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <ScrollReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Our Identity</span>
            <h1 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white mt-3">
              We Architect Digital Solutions
            </h1>
            <p className="text-slate-400 mt-4 text-base sm:text-lg">
              Reeyansh Tech Solutions was founded to bridge the gap between complex software engineering and beautiful, intuitive user experiences.
            </p>
          </ScrollReveal>
        </div>

        {/* Company Overview (Image Grid + Text) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 md:mb-32">
          
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white">
                Who We Are
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                At Reeyansh Tech Solutions, we are a team of senior engineers, product designers, and DevOps architects dedicated to helping businesses grow. We specialize in building custom applications that solve real-world problems and scale gracefully.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                We believe in developer excellence, open communication, and Agile project delivery. By operating as a collaborative extension of your team, we ensure fast deployment timelines and robust architectural governance.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-l-2 border-indigo-500/50 pl-4">
                    <div className="font-outfit text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Graphical placeholder representing teamwork */}
          <ScrollReveal direction="right" className="relative">
            <div className="aspect-video w-full rounded-2xl bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/20 border border-slate-800 p-8 flex flex-col justify-between overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm -z-10" />
              <div className="h-10 w-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">Our Standard</span>
                <h3 className="font-outfit text-2xl font-bold text-white mt-1">ISO 27001 Compliant & Agile Built</h3>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  We guarantee security protocol compliance and high developer velocities for every single deployment.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 md:mb-32">
          
          <ScrollReveal direction="up" delay={0.1}>
            <Card className="h-full flex flex-col items-start" glowColor="blue">
              <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="font-outfit text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-slate-350 text-sm leading-relaxed">
                To build high-performance software systems that empower corporate clients to scale efficiently, resolve operational challenges, and deliver exceptional experiences to their users.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <Card className="h-full flex flex-col items-start" glowColor="purple">
              <div className="h-12 w-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="font-outfit text-2xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-slate-350 text-sm leading-relaxed">
                To be recognized globally as the premier engineering partner for ambitious corporate enterprises, leading the frontier of web, mobile cross-platform apps, and automated multi-cloud operations.
              </p>
            </Card>
          </ScrollReveal>

        </div>

        {/* Core Values */}
        <div className="mb-24 md:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal direction="up">
              <h2 className="font-outfit text-3xl font-extrabold text-white">Our Core Values</h2>
              <p className="text-slate-400 text-sm mt-3">The fundamental guidelines that drive our software development culture.</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} direction="up" delay={index * 0.1}>
                  <div className="p-6 rounded-2xl border border-slate-900 bg-slate-950/40 hover:border-slate-800 transition-colors duration-300 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base mb-2">{value.title}</h4>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>



      </div>
    </div>
  );
}
