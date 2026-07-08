import { Code2, Smartphone, Palette, Cloud, Layers, Cpu, Shield, HelpCircle } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: "Code2" | "Smartphone" | "Palette" | "Cloud" | "Layers" | "Cpu" | "Shield" | "HelpCircle";
  features: string[];
  technologies: string[];
  slug: string;
  imagePath?: string; // Path to custom representation image
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Web" | "Mobile" | "Data Analytics" | "Agentic AI";
  techStack: string[];
  imageGradient: string; // Gradient description to render beautiful visual cards
  client: string;
  year: string;
  projectUrl?: string; // Optional url to project site
  logoPath?: string; // Optional path to project logo
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageGradient: string;
  imagePath?: string; // Optional image url path
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  content: string; // Markdown content
  imageGradient: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatarGradient: string;
  };
  readTime: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatarGradient: string;
}

export const servicesData: Service[] = [
  {
    id: "web-development",
    title: "Web Application Development",
    description: "Build fast, highly interactive, and responsive web applications tailored to your business goals. We specialize in React, Next.js, and modern full-stack systems.",
    iconName: "Code2",
    features: [
      "Custom SaaS platforms & Web Apps",
      "E-commerce platforms (Next.js, headless)",
      "Single Page Applications (SPA) & Progressive Web Apps (PWA)",
      "CMS development & integration (Strapi, Contentful)",
      "High performance SEO optimized web portals"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "Tailwind CSS"],
    slug: "web-development",
    imagePath: "/web_app.png"
  },
  {
    id: "mobile-development",
    title: "Mobile Application Development",
    description: "Design and build cross-platform and native mobile apps that deliver exceptional performance and engaging user experiences.",
    iconName: "Smartphone",
    features: [
      "Cross-platform applications (Flutter, React Native)",
      "Native iOS (Swift) and Android (Kotlin) development",
      "Offline-first mobile applications with local sync",
      "App Store & Google Play Store publishing guidance",
      "Mobile app analytics and push notifications integrations"
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "SQLite"],
    slug: "mobile-development",
    imagePath: "/mobile_app.png"
  },
  {
    id: "data-analytics",
    title: "Data Analytics & BI",
    description: "Unlock insights from your enterprise datasets. We design robust pipelines, interactive charts, and custom telemetry data stacks to power business growth.",
    iconName: "Layers",
    features: [
      "BigQuery / Snowflake migrations & setups",
      "Interactive dashboards (Recharts, Tableau, PowerBI)",
      "Telemetry and user data tracking systems",
      "Automated ETL/ELT pipelines (Dataform, dbt)",
      "Data quality monitoring & automated cleaning"
    ],
    technologies: ["Python", "SQL", "BigQuery", "dbt", "Pandas", "Tableau", "Recharts"],
    slug: "data-analytics",
    imagePath: "/data_analytics.png"
  },
  {
    id: "agentic-ai",
    title: "Agentic AI & Orchestration",
    description: "Design autonomous AI agents and automated workflows. We develop generative LLM assistants, vector database semantic searches, and self-improving AI worker pipelines.",
    iconName: "Cpu",
    features: [
      "Generative AI & LLM integration custom logic",
      "Vector search & RAG architectures (Pinecone, pgvector)",
      "Autonomous agentic workflows (LangChain, LangGraph)",
      "API pipeline automations and event-driven webhooks",
      "Semantic search, classification, and embeddings models"
    ],
    technologies: ["OpenAI", "Gemini API", "LangGraph", "Pinecone", "Python", "TypeScript"],
    slug: "agentic-ai",
    imagePath: "/agentic_ai.png"
  }
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Billnserve",
    description: "A secure digital billing, invoicing, and subscription management SaaS platform built for modern SMBs to streamline global payments.",
    category: "Web",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "Node.js"],
    imageGradient: "from-blue-600 via-indigo-600 to-purple-600",
    client: "Billnserve Inc",
    year: "2025",
    projectUrl: "https://billnserve.com/",
    logoPath: "/billnserve-logo.jpg"
  },
  {
    id: "2",
    title: "ScanBasket App",
    description: "An offline-first retail mobile application allowing customers to scan item barcodes in-store and check out instantly via mobile.",
    category: "Mobile",
    techStack: ["Flutter", "Dart", "Firebase", "Camera API", "SQLite"],
    imageGradient: "from-emerald-500 via-teal-600 to-cyan-600",
    client: "ScanBasket Retail",
    year: "2025",
    logoPath: "/scanbasket-logo.jpg"
  },
  {
    id: "3",
    title: "Home Therapy App",
    description: "A telemedicine mobile app guiding patients through home rehabilitation exercises with real-time video feedback and progress telemetry.",
    category: "Mobile",
    techStack: ["Flutter", "Dart", "Firebase", "WebRTC", "SQLite"],
    imageGradient: "from-violet-600 via-purple-600 to-pink-600",
    client: "Home Therapy Inc",
    year: "2024",
    logoPath: "/home-therapy-logo.jpg"
  },
  {
    id: "4",
    title: "Apex Analytics Platform",
    description: "A real-time financial tracking and data intelligence platform built for NextGen Enterprises.",
    category: "Data Analytics",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Node.js"],
    imageGradient: "from-sky-500 via-blue-650 to-indigo-700",
    client: "Apex Corp",
    year: "2025"
  },
  {
    id: "5",
    title: "HyperScale Orchestrator",
    description: "Autonomous LLM worker pipeline automating cloud operations and container scaling dynamically.",
    category: "Agentic AI",
    techStack: ["LangGraph", "Gemini API", "OpenAI", "Python", "Kubernetes"],
    imageGradient: "from-amber-500 via-orange-600 to-red-600",
    client: "HyperScale Corp",
    year: "2025"
  },
  {
    id: "6",
    title: "Velo Headless Commerce",
    description: "A headless e-commerce store with serverless checkout, sub-second loads, and multi-tenant inventory.",
    category: "Web",
    techStack: ["React", "Next.js", "GraphQL", "Stripe API", "AWS Lambda"],
    imageGradient: "from-pink-500 via-red-500 to-yellow-500",
    client: "Velo Fashion",
    year: "2024"
  }
];

export const teamData: TeamMember[] = [
  {
    id: "1",
    name: "SivaKumar Jogi",
    role: "Founder & CEO",
    bio: "Tech visionary and business architect guiding corporate strategy, partnership alignments, and client success roadmap.",
    imageGradient: "from-blue-400 to-indigo-600",
    imagePath: "/sivakumar-jogi.jpg",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "2",
    name: "Nikhil Kusuri",
    role: "Chief Technology Officer",
    bio: "Engineering veteran leading deep-tech systems architecture, cloud infrastructure delivery, and developer enablement.",
    imageGradient: "from-purple-400 to-pink-600",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "3",
    name: "Balaji Jogi",
    role: "VP of Product & UI/UX",
    bio: "Design advocate passionate about accessibility, cognitive workflows, and creating engaging, beautiful user interfaces.",
    imageGradient: "from-teal-400 to-emerald-600",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "4",
    name: "Jaya Prakash G",
    role: "Lead Software Architect",
    bio: "Full-stack developer specializing in React/Next.js and distributed backend technologies. Enthusiastic open-source contributor.",
    imageGradient: "from-amber-400 to-orange-600",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  }
];

export const jobOpeningsData: JobOpening[] = [
  {
    id: "job-1",
    title: "Senior React / Next.js Developer",
    department: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
    experience: "5+ Years",
    salary: "₹18L - ₹25L per annum",
    description: "We are seeking a senior React and Next.js developer to lead the implementation of our premium enterprise web clients. You will write clean, well-tested code, establish architectural patterns, and mentor junior teammates.",
    requirements: [
      "Expert knowledge of React, Next.js (App Router), TypeScript, and Tailwind CSS.",
      "Experience optimizing Core Web Vitals and understanding server-side rendering patterns.",
      "Proficiency with state management libraries (Zustand, Redux) and React Hook Form.",
      "Familiarity with visual testing and Jest/React Testing Library.",
      "Strong communication skills and comfortable working in remote environments."
    ],
    responsibilities: [
      "Develop modular, reusable, and accessible (ARIA) UI components.",
      "Collaborate with product designers in Figma to translate designs to high-performance code.",
      "Optimize web assets and page loading performance across multiple viewport devices.",
      "Participate in code reviews, providing constructive architectural feedback."
    ]
  },
  {
    id: "job-2",
    title: "Lead Flutter Mobile Engineer",
    department: "Engineering",
    location: "Hybrid (Bengaluru)",
    type: "Full-time",
    experience: "6+ Years",
    salary: "₹22L - ₹30L per annum",
    description: "Join us as a Mobile Architect to design and implement highly reactive cross-platform mobile apps using Flutter. You will own the app lifecycle from architecture design to store submission.",
    requirements: [
      "Strong command over Dart and extensive experience with Flutter framework.",
      "Proven track record of publishing high-rating apps to Apple App Store & Google Play Store.",
      "Experience with offline databases (Hive, Isar, SQLite) and synchronization mechanisms.",
      "Familiarity with CI/CD platforms for mobile deployment (Codemagic, Fastlane).",
      "Deep understanding of state management patterns (Bloc, Provider, Riverpod)."
    ],
    responsibilities: [
      "Define state architecture and native platform integration code.",
      "Implement smooth 60fps animations and custom render painters.",
      "Work closely with backend teams to integrate REST and WebSocket endpoints.",
      "Maintain code coverage above 85% with unit and widget testing."
    ]
  },
  {
    id: "job-3",
    title: "Senior UI/UX Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "4+ Years",
    salary: "₹12L - ₹18L per annum",
    description: "We are looking for a UI/UX expert who wants to shape the digital experiences of our enterprise partners. You will run user studies, design interactive wireframes, and curate scalable component libraries.",
    requirements: [
      "Exceptional Figma mastery, including auto layouts, variables, and design component structures.",
      "Strong portfolio demonstrating user journey maps, wireframes, and polished mockups.",
      "Strong visual sense for typography, color theory, layout grids, and dark modes.",
      "Familiarity with Web Accessibility Standards (WCAG 2.1).",
      "Basic understanding of HTML/CSS to communicate designs effectively to developers."
    ],
    responsibilities: [
      "Design high-fidelity mockups for web platforms and mobile viewports.",
      "Conduct user research and usability testing on high-fidelity prototypes.",
      "Document spacing, variables, and interaction guides inside the design system.",
      "Maintain product branding integrity across websites and mobile applications."
    ]
  },
  {
    id: "job-4",
    title: "Cloud & DevOps Architect",
    department: "Operations",
    location: "Remote (India)",
    type: "Full-time",
    experience: "5+ Years",
    salary: "₹20L - ₹28L per annum",
    description: "We are looking for a Cloud DevOps engineer to own infrastructure orchestrations, secure deployment workflows, and establish auto-scalable cloud architectures for our enterprise clients.",
    requirements: [
      "In-depth expertise with AWS or Google Cloud Platform.",
      "Hands-on experience writing production Terraform scripts.",
      "Expert knowledge of Docker, Kubernetes, and Helm charts.",
      "Experience setting up CI/CD pipelines via GitHub Actions or GitLab CI.",
      "Solid understanding of network routing, VPCs, CDN setup, and cybersecurity compliance."
    ],
    responsibilities: [
      "Provision and maintain scalable, multi-region cloud infrastructures.",
      "Improve CI/CD build speeds, automated test integration, and release steps.",
      "Monitor application performance metrics using Prometheus, Grafana, or Datadog.",
      "Coordinate security reviews, certificate renewals, and cost optimizations."
    ]
  }
];

export const blogsData: BlogPost[] = [
  {
    slug: "scan-basket-smart-shopping-zero-waiting",
    title: "Scan Basket: Revolutionizing Retail with Queue-Free Smart Shopping",
    summary: "Discover how our offline-first ScanBasket app shifts the checkout counter to the shopper’s smartphone, eliminating queues and streamlining retail operations.",
    date: "July 08, 2026",
    imageGradient: "from-emerald-500 to-cyan-600",
    author: {
      name: "Balaji Jogi",
      role: "VP of Product & UI/UX",
      avatarGradient: "from-teal-400 to-emerald-600"
    },
    readTime: "5 min read",
    tags: ["Mobile", "Flutter", "App Development", "Retail Technology"],
    content: `
# Scan Basket: Smart Shopping, Zero Waiting

Traditional supermarket shopping often involves unnecessary waiting time at billing counters, leading to customer frustration and operational bottlenecks. 

**Scan Basket** is an innovative supermarket solution designed to eliminate long billing queues and transform the in-store shopping experience. By enabling customers to scan products directly using their mobile devices, the app allows users to build their cart, track spending, and complete payments seamlessly—without waiting at checkout counters.

---

## 📱 How It Works

1. **Start Shopping:** Customers enter the store and open the Scan Basket app to begin their shopping session.
2. **Scan Products:** Using the app’s built-in camera scanner, users scan product barcodes to instantly view names, details, pricing, quantity selection, and active offers.
3. **Build Your Basket:** Scanned items are added to a personal digital basket with budget tracking and real-time total costs.
4. **Seamless Checkout:** Once shopping is complete, users make secure digital payments directly inside the app.
5. **Quick Exit:** A digital receipt with a unique QR code is generated. Store staff verify the purchase by scanning the QR code at the exit, enabling customers to leave queue-free.

---

## 🎯 Key Benefits for Shoppers & Retailers

* **Zero Queue Waiting:** Skip long billing queues completely.
* **Budget Tracking:** Avoid overspending by tracking cart totals in real-time.
* **Instant Information:** Get immediate details on active retail store discounts.
* **Operative Efficiency:** Reduce queue congestions and get behavioral analytics insights for inventory control.

Scan Basket successfully shifts checkout operations directly to the customer's smartphone, making retail shopping faster, smarter, and fully digital.
`
  },
  {
    slug: "modern-nextjs-app-router-best-practices",
    title: "Mastering Next.js App Router: Best Practices for Enterprise Scaling",
    summary: "Deep dive into performance optimizations, server vs. client components, dynamic rendering, and caching strategies for Next.js 15 apps.",
    date: "July 02, 2026",
    imageGradient: "from-blue-600 to-cyan-500",
    author: {
      name: "Sneha Reddy",
      role: "Lead Software Architect",
      avatarGradient: "from-amber-400 to-orange-600"
    },
    readTime: "7 min read",
    tags: ["Next.js", "React", "Web Development", "Performance"],
    content: `
# Mastering Next.js App Router: Best Practices for Enterprise Scaling

The Next.js App Router introduces a paradigm shift in how we structure, fetch data, and render pages. While it simplifies many elements, scaling it for large enterprises requires a deep understanding of its internal execution mechanics.

In this post, we’ll outline critical architectural choices to ensure your Next.js application remains fast, secure, and easy to maintain.

---

## 1. Sever vs. Client Components (RFC 101)

By default, all components in the App Router are **React Server Components (RSC)**. They execute on the server and send pre-rendered HTML to the browser.

### Rules of Thumb:
* **Default to Server Components:** Keep data fetching, heavy parsing, and static layouts in Server Components. This keeps JS bundles light.
* **Defer Client Components to the Leaves:** Only declare \`"use client"\` when you need browser-only features, such as:
  * Event listeners (\`onClick\`, \`onChange\`)
  * State and Lifecycle Hooks (\`useState\`, \`useEffect\`, \`useReducer\`)
  * Browser-specific APIs (\`window\`, \`localStorage\`, \`document\`)

---

## 2. Advanced Data Fetching and Caching

Next.js overrides the native \`fetch\` API to provide auto-deduplication and response caching.

### De-duplicating Requests
If you need to fetch the same data across multiple components (e.g., current user in layout and page), do not fetch it in the layout and pass it down via props. Fetch it directly inside both components. Next.js automatically groups identical \`fetch\` requests into a single network execution.

---

## Conclusion

By isolating interactivity, caching smartly, and utilizing built-in Next.js components, you can easily scale apps to handle millions of monthly visits with excellent performance.

At **Reeyansh Tech Solutions**, we build all our web projects adhering strictly to these performance-first guidelines. Get in touch to learn how we can optimize your current platform!
`
  },
  {
    slug: "flutter-vs-react-native-2026-comparison",
    title: "Flutter vs React Native in 2026: Which to Choose for Your App?",
    summary: "An objective comparison analyzing performance, ecosystem, developer velocity, and native module bridges in 2026.",
    date: "June 25, 2026",
    imageGradient: "from-teal-500 to-indigo-600",
    author: {
      name: "Rajesh Sharma",
      role: "Founder & CEO",
      avatarGradient: "from-blue-400 to-indigo-600"
    },
    readTime: "6 min read",
    tags: ["Mobile", "Flutter", "React Native", "App Development"],
    content: `
# Flutter vs React Native in 2026: Which to Choose for Your App?

Selecting the right mobile application framework remains one of the most critical decisions for startups and enterprise architects alike. In 2026, both **Flutter** and **React Native** have reached mature milestones, resolving historical bugs and introducing massive performance gains.

In this guide, we provide a structured comparison of performance, ecosystem size, and engineering productivity to help you make an informed decision.

---

## Conclusion

Regardless of your chosen path, our engineering team has deep capabilities in both Dart/Flutter and TS/React ecosystems. We can guide you from early-stage prototyping to full app store deployment. Let's build your next digital platform together!
`
  },
  {
    slug: "building-scalable-cloud-infrastructure",
    title: "Building Scalable Infrastructure: A Terraform & Kubernetes Strategy",
    summary: "Learn how we automate cloud provisioning and container orchestrations to guarantee 99.9% uptime for enterprise operations.",
    date: "June 18, 2026",
    imageGradient: "from-purple-600 to-pink-500",
    author: {
      name: "Priya Nair",
      role: "Chief Technology Officer",
      avatarGradient: "from-purple-400 to-pink-600"
    },
    readTime: "8 min read",
    tags: ["DevOps", "Cloud", "Kubernetes", "Terraform"],
    content: `
# Building Scalable Infrastructure: A Terraform & Kubernetes Strategy

In modern cloud computing, manual infrastructure provisioning is an anti-pattern. Enterprise applications require highly reproducible, secure, and auto-scaling ecosystems.

Here is the operational blueprint we employ at **Reeyansh Tech Solutions** to provision and orchestrate infrastructure for high-scale enterprise workloads.

---

## Summary

Combining declarative Terraform configurations with an auto-scaling Kubernetes cluster creates a secure, highly resilient foundation for any business app.

If you are looking to audit your cloud spend, migrate legacy databases, or set up modern CI/CD, reach out to the DevOps team at **Reeyansh Tech Solutions today!**
`
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Vikram Malhotra",
    role: "VP of Product",
    company: "Apex Enterprise",
    content: "Reeyansh Tech Solutions delivered our web analytics suite ahead of schedule. Their attention to UX, performance optimization, and clean TypeScript codebase has set a new benchmark for our outsourcing efforts.",
    rating: 5,
    avatarGradient: "from-blue-500 to-indigo-600"
  },
  {
    id: "2",
    name: "Sarah Jenkins",
    role: "Founder",
    company: "Zenith Fitness",
    content: "The Flutter mobile app created by Reeyansh Tech Solutions is exceptionally fast. The animation transitions run smoothly at 120Hz, and our user base has doubled since launch. Their technical knowledge is outstanding.",
    rating: 5,
    avatarGradient: "from-emerald-400 to-teal-600"
  },
  {
    id: "3",
    name: "Ananya Sen",
    role: "Engineering Director",
    company: "Solace MedTech",
    content: "Our migration to cloud-native Kubernetes was fully automated using Terraform by their DevOps team. The security compliance and CI/CD pipelines they built have reduced our deployment cycle time by 60%.",
    rating: 5,
    avatarGradient: "from-violet-500 to-purple-600"
  }
];
