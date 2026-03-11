'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Send } from 'lucide-react'
import { useTheme } from '@/components/layout/ThemeProvider'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

export function CTASection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    /* TODO: Connect to Resend API for email capture */
    setSubmitted(true)
  }

  return (
    <section
      className={cn(
        'relative overflow-hidden py-24 lg:py-32',
        isDark
          ? 'bg-gradient-to-br from-navy via-navy-light to-navy'
          : 'bg-gradient-to-br from-blue-electric to-blue-bright'
      )}
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-blue-electric/10 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to build your first{' '}
            <span className={isDark ? 'text-blue-glow' : 'text-white/90'}>
              AI employee?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            Stop paying six figures for work that doesn't need a person.
            Talk to us about building your first AI employee.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <Button href="/contact" size="lg" className="bg-white text-navy hover:bg-white/90 shadow-xl">
              Book a Discovery Call
              <ArrowRight size={18} />
            </Button>
          </div>

          {/* Email capture */}
          <div className="mt-12">
            <p className="mb-4 text-sm text-white/50">
              Or get our free guide to AI staffing
            </p>

            {submitted ? (
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-sm font-medium text-green-400"
              >
                Thanks! Check your inbox for the guide.
              </motion.p>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className={cn(
                    'flex-1 rounded-lg border px-4 py-3 text-sm',
                    'bg-white/10 border-white/20 text-white placeholder:text-white/40',
                    'focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/30'
                  )}
                />
                <button
                  type="submit"
                  className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white/90"
                >
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
