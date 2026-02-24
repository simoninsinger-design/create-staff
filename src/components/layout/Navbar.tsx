'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/lib/constants'
import { useTheme } from './ThemeProvider'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-navy/80 backdrop-blur-xl border-b border-border-dark shadow-lg'
          : 'bg-transparent',
        theme === 'light' && isScrolled && 'bg-white/80 border-border-light'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <span
              className={cn(
                'text-xl font-light tracking-tight transition-all duration-300',
                isScrolled ? 'text-lg' : 'text-xl',
                theme === 'dark' ? 'text-white' : 'text-navy'
              )}
            >
              Create
            </span>
            <span
              className={cn(
                'text-xl font-bold tracking-tight transition-all duration-300',
                isScrolled ? 'text-lg' : 'text-xl',
                theme === 'dark' ? 'text-white' : 'text-navy'
              )}
            >
              Staff
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200',
                pathname === link.href
                  ? 'text-blue-electric'
                  : theme === 'dark'
                    ? 'text-silver hover:text-white hover:bg-navy-lighter'
                    : 'text-muted-light hover:text-navy hover:bg-silver-light/50'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={cn(
              'rounded-lg p-2 transition-colors duration-200',
              theme === 'dark'
                ? 'text-silver hover:text-white hover:bg-navy-lighter'
                : 'text-muted-light hover:text-navy hover:bg-silver-light/50'
            )}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="hidden lg:block">
            <Button href="/contact" size="sm">
              Book a Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={cn(
              'rounded-lg p-2 lg:hidden',
              theme === 'dark'
                ? 'text-silver hover:text-white'
                : 'text-muted-light hover:text-navy'
            )}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              'overflow-hidden border-t lg:hidden',
              theme === 'dark'
                ? 'bg-navy/95 backdrop-blur-xl border-border-dark'
                : 'bg-white/95 backdrop-blur-xl border-border-light'
            )}
          >
            <div className="space-y-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'block rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200',
                    pathname === link.href
                      ? 'text-blue-electric bg-blue-electric/10'
                      : theme === 'dark'
                        ? 'text-silver hover:text-white hover:bg-navy-lighter'
                        : 'text-muted-light hover:text-navy hover:bg-silver-light/50'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button href="/contact" className="w-full">
                  Book a Call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
