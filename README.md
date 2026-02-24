# CreateStaff — AI Employee Consulting Website

Production-grade marketing website for CreateStaff, an AI consulting company that builds custom AI employees for businesses.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **3D**: Three.js via @react-three/fiber + @react-three/drei
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_CALENDLY_URL=       # Calendly scheduling URL
NEXT_PUBLIC_GA_ID=              # Google Analytics GA4 measurement ID
STRIPE_SECRET_KEY=              # Stripe secret key
STRIPE_PUBLIC_KEY=              # Stripe publishable key
RESEND_API_KEY=                 # Resend email API key
NEXT_PUBLIC_SITE_URL=           # Site URL (default: https://createstaff.com)
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with 3D hero, services, testimonials, stats |
| `/services` | All AI employee services overview |
| `/services/[slug]` | Individual service detail pages |
| `/how-it-works` | 5-step process explained |
| `/about` | Company mission, values, team |
| `/pricing` | Build packages + support subscription |
| `/blog` | Blog listing page |
| `/blog/[slug]` | Individual blog posts |
| `/contact` | Contact form + Calendly embed |

## Project Structure

See `architecture.md` for full project architecture documentation.

## Deployment

Optimized for Vercel. Push to main branch to trigger automatic deployment.

```bash
vercel --prod
```
