'use client'

import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { cn } from '@/lib/utils'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'
import { Linkedin, Twitter, Mail } from 'lucide-react'

const socialLinks = [
  /* TODO: Replace with actual social media URLs */
  { label: 'LinkedIn', href: 'https://linkedin.com/company/createstaff', icon: Linkedin },
  { label: 'Twitter', href: 'https://twitter.com/createstaff', icon: Twitter },
  { label: 'Email', href: `mailto:${SITE_CONFIG.email}`, icon: Mail },
]

const footerSections = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'AI Executive Assistant', href: '/services/ai-executive-assistant' },
      { label: 'AI Chief of Staff', href: '/services/ai-chief-of-staff' },
      { label: 'AI Sales Rep', href: '/services/ai-sales-development-rep' },
      { label: 'AI Research Analyst', href: '/services/ai-research-analyst' },
      { label: 'Custom Builds', href: '/services/custom-ai-employees' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Pricing', href: '/pricing' },
      /* TODO: Create privacy and terms pages */
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer
      className={cn(
        'border-t',
        theme === 'dark'
          ? 'bg-navy border-border-dark'
          : 'bg-offwhite border-border-light'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <span className={cn('text-xl font-light', theme === 'dark' ? 'text-white' : 'text-navy')}>
                Create
              </span>
              <span className={cn('text-xl font-bold', theme === 'dark' ? 'text-white' : 'text-navy')}>
                Staff
              </span>
            </Link>
            <p className={cn('mt-4 max-w-sm text-sm leading-relaxed', theme === 'dark' ? 'text-silver' : 'text-muted-light')}>
              {SITE_CONFIG.tagline}
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'rounded-lg p-2 transition-colors duration-200',
                    theme === 'dark'
                      ? 'text-silver hover:text-white hover:bg-navy-lighter'
                      : 'text-muted-light hover:text-navy hover:bg-silver-light/50'
                  )}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className={cn('text-sm font-semibold uppercase tracking-wider', theme === 'dark' ? 'text-white' : 'text-navy')}>
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'text-sm transition-colors duration-200',
                        theme === 'dark'
                          ? 'text-silver hover:text-white'
                          : 'text-muted-light hover:text-navy'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className={cn('mt-12 border-t pt-8', theme === 'dark' ? 'border-border-dark' : 'border-border-light')}>
          <p className={cn('text-center text-sm', theme === 'dark' ? 'text-silver' : 'text-muted-light')}>
            &copy; {new Date().getFullYear()} CreateStaff. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
