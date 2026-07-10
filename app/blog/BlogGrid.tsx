"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import ScrollReveal from "@/components/ScrollReveal";
import { blogsData } from "@/lib/data";

const allTags = ["All", "Next.js", "React", "Web Development", "Performance", "Mobile", "Flutter", "React Native", "App Development", "DevOps", "Cloud", "Kubernetes", "Terraform"];

export default function BlogGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredBlogs = blogsData.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = selectedTag === "All" || blog.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="relative w-full bg-slate-950 py-16 md:py-24 overflow-hidden">
      
      {/* Background glow animations */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-purple-500/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Engineering Blog</span>
            <h1 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white mt-3">
              Technical Insights & Guides
            </h1>
            <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
              Read architectural deep-dives, mobile technology comparisons, and cloud infrastructure guides compiled by our engineering directors.
            </p>
          </ScrollReveal>
        </div>

        {/* Search & Filters Controls */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12 border-b border-slate-900 pb-8">
          
          {/* Search Box */}
          <ScrollReveal direction="left" className="w-full md:max-w-md relative">
            <Input
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-[37px] h-4 w-4 text-slate-500" />
          </ScrollReveal>

          {/* Tags scrollable container */}
          <ScrollReveal direction="right" className="w-full md:max-w-2xl overflow-x-auto scrollbar-none flex gap-2 py-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors duration-200 outline-none
                  ${
                    selectedTag === tag
                      ? "bg-indigo-500 text-white shadow-[0_0_12px_rgba(99,102,241,0.2)]"
                      : "bg-slate-900 text-slate-400 border border-slate-800/80 hover:text-white hover:border-slate-700"
                  }`}
              >
                {tag}
              </button>
            ))}
          </ScrollReveal>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <ScrollReveal key={blog.slug} direction="up" delay={index * 0.1}>
              <Link href={`/blog/${blog.slug}/`} className="block h-full group">
                <Card className="h-full flex flex-col justify-between p-0 overflow-hidden border-slate-900 bg-slate-950/40" glowColor="purple">
                  <div>
                    {/* Visual Card Image Cover */}
                    <div className={`w-full aspect-video bg-gradient-to-br ${blog.imageGradient} flex items-center justify-center p-6 text-xl font-extrabold text-white shadow-inner relative overflow-hidden group`}>
                      <span className="opacity-90 group-hover:scale-105 transition-transform duration-500 uppercase tracking-widest text-sm">{blog.tags[0]}</span>
                      {/* Ambient hover light */}
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded border border-indigo-500/20 bg-indigo-500/10 text-[9px] font-bold uppercase tracking-wider text-indigo-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <h3 className="font-outfit text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-250 leading-snug">
                        {blog.title}
                      </h3>

                      <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3">
                        {blog.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-slate-900/60 flex items-center justify-between text-[11px] font-medium text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {blog.readTime}
                    </span>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-24">
            <p className="text-slate-500 text-sm">No blog posts found matching your search filters.</p>
          </div>
        )}

      </div>
    </div>
  );
}
