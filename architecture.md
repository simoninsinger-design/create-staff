# CreateStaff Architecture

## Tech Stack
- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + custom CSS
- **3D / Animations**: Three.js (@react-three/fiber + @react-three/drei), Framer Motion
- **Icons**: Lucide React
- **Theming**: Custom ThemeProvider (dark/light mode, default dark)
- **Fonts**: Plus Jakarta Sans (headings), DM Sans (body), JetBrains Mono (code)
- **Deployment**: Vercel

## Directory Structure

```
src/
├── app/                           # Next.js App Router pages
│   ├── layout.tsx                 # Root layout (ThemeProvider, Navbar, Footer, Analytics)
│   ├── page.tsx                   # Homepage
│   ├── services/
│   │   ├── page.tsx               # Services overview
│   │   └── [slug]/page.tsx        # Individual service pages (dynamic)
│   ├── how-it-works/page.tsx      # How It Works page
│   ├── about/page.tsx             # About page
│   ├── pricing/page.tsx           # Pricing page
│   ├── blog/
│   │   ├── page.tsx               # Blog listing
│   │   └── [slug]/page.tsx        # Individual blog posts
│   └── contact/page.tsx           # Contact page
│
├── components/
│   ├── layout/                    # Layout components
│   │   ├── Navbar.tsx             # Main navigation with mobile menu
│   │   ├── Footer.tsx             # Site footer
│   │   └── ThemeProvider.tsx      # Dark/light mode context provider
│   │
│   ├── ui/                        # Reusable UI primitives
│   │   ├── Button.tsx             # Button with variants (primary, secondary, outline, ghost)
│   │   ├── Card.tsx               # Card component with dark/light mode support
│   │   ├── Badge.tsx              # Badge/tag component
│   │   ├── Input.tsx              # Form input component
│   │   ├── SectionHeading.tsx     # Section title + subtitle component
│   │   ├── AnimatedCounter.tsx    # Scroll-triggered counting animation
│   │   └── Container.tsx          # Max-width container wrapper
│   │
│   ├── sections/                  # Page section components
│   │   ├── Hero.tsx               # Homepage hero with 3D scene
│   │   ├── TrustedBy.tsx          # Logo scroll bar
│   │   ├── ProblemSolution.tsx    # Problem → Solution section
│   │   ├── ServicesPreview.tsx    # Service cards grid
│   │   ├── HowItWorksPreview.tsx  # 4-step timeline preview
│   │   ├── Testimonials.tsx       # Testimonial carousel
│   │   ├── Stats.tsx              # Animated stats section
│   │   ├── CTASection.tsx         # Full-width CTA with email capture
│   │   └── ComparisonTable.tsx    # AI vs Traditional Hire comparison
│   │
│   │
│   └── blog/                      # Blog-specific components
│       ├── BlogCard.tsx           # Blog post preview card
│       └── BlogPost.tsx           # Full blog post renderer
│
├── content/                       # CMS-ready content (JSON/MDX)
│   ├── services.json              # (data in constants.ts for now)
│   ├── testimonials.json          # (data in constants.ts for now)
│   └── blog/                      # Blog post MDX/data files
│       ├── why-your-next-ea-should-be-ai.json
│       ├── true-cost-hiring-vs-ai.json
│       └── 5-roles-to-automate.json
│
├── lib/                           # Utilities and constants
│   ├── utils.ts                   # cn() helper, formatDate, estimateReadTime
│   └── constants.ts               # All site data: SERVICES, TESTIMONIALS, STATS, etc.
│
└── styles/
    └── globals.css                # Tailwind imports, CSS variables, theme styles
```

## Color System
- **Navy (dark bg)**: #0A1628
- **Navy Light (cards dark)**: #111D31
- **Navy Lighter**: #1A2942
- **Blue Electric (primary CTA)**: #2563EB
- **Blue Bright (hover)**: #3B82F6
- **Blue Glow (accents)**: #60A5FA
- **Silver (secondary text)**: #C0C8D4
- **Gold (premium accents)**: #D4A853
- **Off-white (light bg)**: #F8FAFC

## Theme System
- Custom ThemeProvider using React Context
- `data-theme` attribute on `<html>` element
- CSS variables toggle between dark/light values
- Default: dark mode
- Persisted to localStorage

## Animation Strategy
- **Hero Particles (Framer Motion SVG)**: 2D particle animation forming humanoid silhouette
  - ~120 SVG circles on desktop, ~60 on mobile
  - Staggered assembly animation on load
  - Mouse parallax via spring physics
  - Connection lines between nearby particles
  - Ambient floating particles for depth
  - Respects `prefers-reduced-motion`
  - No WebGL dependency — works everywhere
- **Framer Motion**: Page transitions, scroll reveals, hover effects
  - `whileInView` for scroll-triggered animations
  - Stagger children for sequential reveals
  - `AnimatePresence` for page transitions
  - Respects `prefers-reduced-motion`
- **Note**: Three.js packages are installed but not currently used (kept for potential future 3D features)

## Data Flow
- Static content from `constants.ts` (CMS-migration ready)
- Blog posts from JSON files in `content/blog/`
- Dynamic service pages from `SERVICES` constant + `[slug]` route
- Environment variables for external services (Calendly, Stripe, Resend, GA)

## SEO
- Metadata API for all pages (title, description, OG)
- JSON-LD structured data (Organization, Service schemas)
- Semantic HTML with proper heading hierarchy
- Sitemap generation (next-sitemap or built-in)

## External Integrations
- **Calendly**: Embed via iframe on Contact page, URL from env var
- **Stripe**: Payment structure ready, keys from env vars
- **Resend**: Email capture API route, key from env var
- **Google Analytics**: GA4 tag from env var, loaded in root layout
- **Vercel Analytics**: Built-in

## Key Components Reference

### Navbar
- Transparent on scroll-top, blurred backdrop on scroll
- Logo shrinks on scroll
- Mobile hamburger menu with slide-in panel
- Theme toggle button
- "Book a Call" CTA button

### Hero
- Full viewport height
- 3D particle scene (right/background)
- Headline + subheadline + 2 CTAs (left)
- Scroll indicator at bottom

### Service Cards
- Grid of 5 cards with icon, title, description
- Hover: scale + glow border + shadow lift
- Link to individual service pages

### Pricing
- 3 tier cards (Starter, Growth, Enterprise)
- Growth tier highlighted/recommended
- Support subscription section below
- FAQ accordion
- Comparison table

### Blog
- Grid of blog cards with category badges
- Individual posts with reading time, date
- MDX/JSON content rendering
