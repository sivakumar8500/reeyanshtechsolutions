import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ScrollReveal";
import { blogsData } from "@/lib/data";

// Simple custom component to render basic markdown elements into structured beautiful JSX
const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  const lines = content.split("\n");
  let inList = false;
  let inCode = false;
  let codeBlockContent: string[] = [];

  const renderedElements: React.ReactNode[] = [];

  lines.forEach((line, idx) => {
    // 1. Code Block Toggle
    if (line.trim().startsWith("```")) {
      if (inCode) {
        // Closing block
        renderedElements.push(
          <pre key={`code-${idx}`} className="w-full overflow-x-auto rounded-lg bg-slate-900 border border-slate-800 p-4 font-mono text-xs sm:text-sm text-indigo-300 my-6">
            <code>{codeBlockContent.join("\n")}</code>
          </pre>
        );
        codeBlockContent = [];
        inCode = false;
      } else {
        inCode = true;
      }
      return;
    }

    if (inCode) {
      codeBlockContent.push(line);
      return;
    }

    // 2. Headings
    if (line.startsWith("# ")) {
      renderedElements.push(
        <h1 key={`h1-${idx}`} className="font-outfit text-3xl sm:text-4xl font-extrabold text-white mt-10 mb-4 tracking-tight leading-tight">
          {line.replace("# ", "")}
        </h1>
      );
      return;
    }

    if (line.startsWith("## ")) {
      renderedElements.push(
        <h2 key={`h2-${idx}`} className="font-outfit text-2xl sm:text-3xl font-bold text-white mt-8 mb-4 tracking-tight">
          {line.replace("## ", "")}
        </h2>
      );
      return;
    }

    if (line.startsWith("### ")) {
      renderedElements.push(
        <h3 key={`h3-${idx}`} className="font-outfit text-xl sm:text-2xl font-bold text-white mt-6 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
      return;
    }

    // 3. Horizontal Rule
    if (line.trim() === "---") {
      renderedElements.push(<hr key={`hr-${idx}`} className="border-slate-905 my-8" />);
      return;
    }

    // 4. Bullet list items
    if (line.startsWith("* ") || line.startsWith("- ")) {
      const content = line.substring(2);
      renderedElements.push(
        <li key={`li-${idx}`} className="text-slate-300 text-sm sm:text-base leading-relaxed pl-2 py-1 list-disc ml-6">
          {content}
        </li>
      );
      return;
    }

    // 5. Paragraph / Standard Text
    if (line.trim() !== "") {
      // Process simple bold tags (`**text**`) and inline code (`` `code` ``) inside the paragraph
      const formattedText = line.split("**").map((chunk, i) => {
        if (i % 2 === 1) {
          return <strong key={i} className="text-white font-semibold">{chunk}</strong>;
        }
        
        // Inline code rendering
        return chunk.split("`").map((subChunk, j) => {
          if (j % 2 === 1) {
            return (
              <code key={`inline-code-${j}`} className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-indigo-400 font-mono text-xs sm:text-sm">
                {subChunk}
              </code>
            );
          }
          return subChunk;
        });
      });

      renderedElements.push(
        <p key={`p-${idx}`} className="text-slate-300 text-sm sm:text-base leading-relaxed my-4">
          {formattedText}
        </p>
      );
    }
  });

  return <div className="space-y-1">{renderedElements}</div>;
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogsData.find((b) => b.slug === slug);

  if (!post) {
    return {
      title: "Insight Not Found",
    };
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://rts.billnserve.com/blog/${post.slug}/`,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogsData.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  // Find related posts (excluding current post)
  const relatedPosts = blogsData
    .filter((b) => b.slug !== slug)
    .slice(0, 2);

  return (
    <div className="relative w-full bg-slate-950 py-12 md:py-20 overflow-hidden">
      {/* Article Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": post.title,
            "description": post.summary,
            "datePublished": new Date(post.date).toISOString(),
            "author": {
              "@type": "Person",
              "name": post.author.name,
            },
            "publisher": {
              "@type": "Organization",
              "name": "Reeyansh Tech Solutions",
              "logo": {
                "@type": "ImageObject",
                "url": "https://rts.billnserve.com/logo-icon.png",
              },
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://rts.billnserve.com/blog/${post.slug}/`,
            },
          }),
        }}
      />
      
      {/* Background ambient glows */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-purple-500/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Insights
        </Link>

        {/* Post Meta Header */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-[10px] font-bold uppercase tracking-wider text-indigo-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-outfit text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-x-6 gap-y-2.5 pt-4 text-xs font-semibold text-slate-400 border-b border-slate-900/60 pb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Cover Image gradient card */}
        <div className={`w-full aspect-[21/9] rounded-2xl bg-gradient-to-br ${post.imageGradient} flex items-center justify-center text-3xl font-extrabold text-white mb-10 shadow-2xl relative overflow-hidden`}>
          <span className="uppercase tracking-widest opacity-80">{post.tags[0]}</span>
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* Blog Post Content */}
        <article className="border-b border-slate-900 pb-16">
          <MarkdownRenderer content={post.content} />
        </article>

        {/* Author Footer Panel */}
        <div className="py-10 flex flex-col sm:flex-row items-center gap-6 border-b border-slate-900 mb-16">
          <div className={`h-16 w-16 rounded-full bg-gradient-to-br ${post.author.avatarGradient} flex items-center justify-center text-xl font-bold text-white shrink-0 shadow-lg`}>
            {post.author.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-bold text-white text-base">{post.author.name}</h4>
            <p className="text-xs font-semibold text-indigo-400">{post.author.role}</p>
            <p className="text-slate-400 text-xs mt-2 leading-relaxed">
              Leading developer initiatives and scaling software architecture patterns for corporate client delivery.
            </p>
          </div>
        </div>

        {/* Related Posts */}
        <div>
          <h3 className="font-outfit text-2xl font-bold text-white mb-8">Related Insights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relatedPosts.map((rPost) => (
              <Link key={rPost.slug} href={`/blog/${rPost.slug}`} className="block h-full group">
                <Card className="h-full flex flex-col justify-between p-0 overflow-hidden border-slate-900 bg-slate-950/40" glowColor="blue">
                  <div>
                    <div className={`w-full aspect-video bg-gradient-to-br ${rPost.imageGradient} flex items-center justify-center text-lg font-bold text-white relative shadow-inner overflow-hidden group`}>
                      <span className="opacity-90 group-hover:scale-105 transition-transform duration-500 uppercase tracking-widest text-xs">{rPost.tags[0]}</span>
                      <div className="absolute inset-0 bg-black/10" />
                    </div>

                    <div className="p-5">
                      <h4 className="font-outfit text-lg font-bold text-white group-hover:text-indigo-400 transition-colors duration-250 leading-snug">
                        {rPost.title}
                      </h4>
                      <p className="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                        {rPost.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 border-t border-slate-900/60 flex items-center justify-between text-[10px] font-medium text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {rPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {rPost.readTime}
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
