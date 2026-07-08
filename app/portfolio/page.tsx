"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Calendar, User } from "lucide-react";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ScrollReveal";
import { projectsData } from "@/lib/data";

const categories = ["All", "Web", "Mobile", "Data Analytics", "Agentic AI"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <div className="relative w-full bg-slate-950 py-16 md:py-24 overflow-hidden">
      
      {/* Background glowing atmospheres */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-purple-500/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Our Works</span>
            <h1 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white mt-3">
              Case Studies & Projects
            </h1>
            <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
              Explore our portfolio of high-performance web apps, native mobile integrations, cloud migrations, and responsive UI systems.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categories.map((category) => (
            <ScrollReveal key={category} direction="none" delay={0.05}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide rounded-full border transition-all duration-350 outline-none
                  ${
                    selectedCategory === category
                      ? "border-transparent bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.25)]"
                      : "border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700 hover:text-white"
                  }`}
              >
                {category}
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const CardElement = (
                <Card className="h-full flex flex-col justify-between p-0 group overflow-hidden border-slate-900 bg-slate-950/40" glowColor="blue">
                  <div>
                    {/* Visual Card Image Gradient / Logo with overlay details */}
                    <div className={`w-full aspect-video ${project.logoPath ? "bg-slate-950" : `bg-gradient-to-br ${project.imageGradient}`} flex items-center justify-center relative shadow-inner overflow-hidden group/visual`}>
                      {project.logoPath ? (
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${project.logoPath}`}
                          alt={project.title}
                          className="w-full h-full object-fill group-hover/visual:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <span className="opacity-90 group-hover:scale-105 transition-transform duration-500 uppercase tracking-wider text-2xl font-black text-white">{project.title.split(" ")[0]}</span>
                      )}
                      {/* Dark overlay showing on hover */}
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/visual:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                        <ExternalLink className="h-8 w-8 text-white stroke-[2.5]" />
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="font-outfit text-xl font-bold text-white mt-4 group-hover:text-indigo-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded border border-slate-800 bg-slate-950/60 text-[10px] font-medium text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metadata details */}
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 border-t border-slate-900/60 pt-4">
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        {project.client}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {project.year}
                      </span>
                    </div>
                  </div>
                </Card>
              );

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  {project.projectUrl ? (
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer">
                      {CardElement}
                    </a>
                  ) : (
                    CardElement
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-sm">No projects found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}
