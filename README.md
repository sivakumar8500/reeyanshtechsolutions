# Reeyansh Tech Solutions - Corporate Website

A premium, production-ready corporate website for **Reeyansh Tech Solutions** built using the Next.js App Router, TypeScript, Tailwind CSS, Three.js, and Framer Motion. 

The website features a modern, high-performance dark theme with subtle glowing gradients, smooth scrolling, particle molecular backgrounds, dynamic listing pages (Portfolio, Careers, Blog) with client-side searching/filtering, Zod-validated forms, and API endpoint integration.

---

## Tech Stack & Features

- **Framework:** Next.js (App Router, dynamic metadata routing, custom dynamic routing)
- **Language:** TypeScript (fully typed, custom validation interfaces)
- **Styling:** Tailwind CSS (premium dark theme, custom gradients, webkit scrollbars)
- **Animations:**
  - **Hero:** Canvas-based 3D particle molecular connection simulator built with vanilla `Three.js` (custom physics rendering, resize and unmount lifecycle safety).
  - **Scroll Reveal:** Smooth reveal transition wrapping based on `Framer Motion`.
  - **Page Transitions:** Soft route exit/enter layouts.
  - **Micro-interactions:** Interactive card glows, hover scales, and canvas confetti celebrations.
- **Form Handling:** Zod schema validation integrated with `React Hook Form`.
- **SEO Optimization:** Dynamic XML sitemap generator, robots file, metadata attributes, OpenGraph images, and JSON-LD Organization Structured Data schema.

---

## Directory Structure

```
d:\live_projects\RTS/
├── app/
│   ├── layout.tsx             # Root layout, Google fonts, metadata, JSON-LD schema
│   ├── page.tsx               # Home page (Hero, Services, Tech, Testimonials, CTA)
│   ├── about/
│   │   └── page.tsx           # About Us (Mission/Vision, Core values, Team cards)
│   ├── services/
│   │   └── page.tsx           # Services (alternating layouts, details, check lists)
│   ├── portfolio/
│   │   └── page.tsx           # Portfolio (category filtering grid)
│   ├── careers/
│   │   └── page.tsx           # Careers (accordion listings, application modal form)
│   ├── contact/
│   │   └── page.tsx           # Contact (form validation, maps iframe)
│   ├── blog/
│   │   ├── page.tsx           # Blog overview (search and category tags filtering)
│   │   └── [slug]/
│   │       └── page.tsx       # Dynamic blog reader (custom markdown renderer)
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts       # Contact form receiver endpoint
│   │   └── apply/
│   │       └── route.ts       # Application form receiver endpoint
│   ├── sitemap.ts             # Dynamic sitemap generator
│   └── robots.txt             # SEO search rules
├── components/
│   ├── Navbar.tsx             # Sticky glassmorphic navbar with active indicator
│   ├── Footer.tsx             # Corporate footer with address and quick links
│   ├── MolecularBackground.tsx# Three.js molecular background particle system
│   ├── ScrollReveal.tsx       # Framer Motion wrapper for scroll animations
│   ├── PageTransition.tsx     # Animated page router transitions
│   └── ui/                    # Reusable atomic elements
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       └── Textarea.tsx
├── lib/
│   ├── data.ts                # Structured mock datasets
│   └── schemas.ts             # Zod validation schemas
├── tailwind.config.ts         # Theme and colors overrides
├── package.json
└── tsconfig.json
```

---

## Environment Setup

### Prerequisites
Make sure you have Node.js (v18.17.0 or higher recommended) and npm installed.

```bash
node -v  # Verify Node version
npm -v   # Verify npm version
```

### Installation
1. Navigate to the project root:
   ```bash
   cd d:\live_projects\RTS
   ```
2. Install all dependencies:
   ```bash
   npm install
   ```

---

## How to Run Locally

### Development Server
Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser. The application supports Hot Module Replacement (HMR) and will auto-reload as you modify files.

### Production Build & Test
To compile the TypeScript project and generate an optimized production bundle:

```bash
# Verify TypeScript files compilation
npx tsc --noEmit

# Compile production bundle
npm run build

# Start the production build server locally
npm run start
```

---

## How to Deploy (Vercel)

The codebase is structured to be instantly deployable to **Vercel** with zero custom configuration.

### Option 1: Vercel Dashboard (Recommended)
1. Commit the codebase to a GitHub, GitLab, or Bitbucket repository.
2. Log into the [Vercel Dashboard](https://vercel.com).
3. Click **Add New** > **Project** and import your repository.
4. Vercel will auto-detect Next.js:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
5. Click **Deploy**. Your application will be live on a production-ready URL with global Edge caching and SSL certificates.

### Option 2: Vercel CLI
If you prefer deploying directly from your command line:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login and link project
vercel login
vercel

# Deploy production bundle
vercel --prod
```
