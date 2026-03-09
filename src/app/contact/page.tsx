'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Clock, ArrowRight } from 'lucide-react'
import { useTheme } from '@/components/layout/ThemeProvider'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Input, Textarea } from '@/components/ui/Input'
import { SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'

const interestOptions = [
  'AI Executive Assistant',
  'AI Chief of Staff',
  'AI Sales Development Rep',
  'AI Research Analyst',
  'Custom AI Employee',
  'Ongoing Support',
  'General Inquiry',
]

export default function ContactPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  })

  function handleChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    /* TODO: Connect to Resend API or form handling service */
    setSubmitted(true)
  }

  return (
    <>
      <section className={cn('pb-16 pt-32 lg:pt-40', isDark ? 'bg-navy' : 'bg-offwhite')}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-block rounded-full bg-blue-electric/10 px-4 py-1.5 text-sm font-semibold text-blue-electric">
              Get in Touch
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s build your{' '}
              <span className="bg-gradient-to-r from-blue-electric to-blue-glow bg-clip-text text-transparent">
                AI team.
              </span>
            </h1>
            <p className={cn('mt-4 text-lg', isDark ? 'text-silver' : 'text-muted-light')}>
              Book a discovery call or send us a message. We respond within 24 hours.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className={cn('py-16', isDark ? 'bg-navy-light' : 'bg-white')}>
        <Container>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {submitted ? (
                <div className={cn(
                  'flex h-full flex-col items-center justify-center rounded-2xl border p-12 text-center',
                  isDark ? 'border-border-dark bg-navy' : 'border-border-light bg-offwhite'
                )}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                    <Send size={24} className="text-green-500" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">Message sent!</h3>
                  <p className={cn('mt-2 text-sm', isDark ? 'text-silver' : 'text-muted-light')}>
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Input
                      id="name"
                      label="Name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                    />
                    <Input
                      id="email"
                      label="Email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                    />
                  </div>

                  <Input
                    id="company"
                    label="Company"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                  />

                  <div className="space-y-1.5">
                    <label htmlFor="interest" className="block text-sm font-medium">
                      What are you interested in?
                    </label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => handleChange('interest', e.target.value)}
                      className={cn(
                        'w-full rounded-lg border px-4 py-3 text-sm',
                        'bg-white border-border-light text-navy',
                        'dark:bg-navy-light dark:border-border-dark dark:text-white',
                        'focus:border-blue-electric focus:outline-none focus:ring-1 focus:ring-blue-electric'
                      )}
                    >
                      <option value="">Select an option...</option>
                      {interestOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Textarea
                    id="message"
                    label="Message"
                    placeholder="Tell us about your needs..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                  />

                  <Button type="submit" className="w-full sm:w-auto">
                    Send Message
                    <ArrowRight size={16} />
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Right side: Calendly + info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Calendly embed */}
              <div className={cn(
                'overflow-hidden rounded-2xl border',
                isDark ? 'border-border-dark' : 'border-border-light'
              )}>
                <div className={cn(
                  'px-6 py-4 border-b',
                  isDark ? 'border-border-dark bg-navy' : 'border-border-light bg-offwhite'
                )}>
                  <h3 className="font-semibold">Book a Discovery Call</h3>
                  <p className={cn('text-sm', isDark ? 'text-silver' : 'text-muted-light')}>
                    30 minutes. No commitment. Let&apos;s explore what&apos;s possible.
                  </p>
                </div>
                <div className={cn(
                  'h-[580px]',
                  isDark ? 'bg-navy-light' : 'bg-white'
                )}>
                  <iframe
                    src={`${SITE_CONFIG.calendlyUrl}?hide_gdpr_banner=1&background_color=${isDark ? '111D31' : 'ffffff'}&text_color=${isDark ? 'C0C8D4' : '0A1628'}&primary_color=2563EB`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Schedule a discovery call"
                  />
                </div>
              </div>

              {/* Contact info cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className={cn(
                  'rounded-xl border p-5',
                  isDark ? 'border-border-dark bg-navy' : 'border-border-light bg-offwhite'
                )}>
                  <Mail size={20} className="text-blue-electric" />
                  <h4 className="mt-3 font-semibold">Email Us</h4>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="mt-1 text-sm text-blue-electric hover:underline"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
                <div className={cn(
                  'rounded-xl border p-5',
                  isDark ? 'border-border-dark bg-navy' : 'border-border-light bg-offwhite'
                )}>
                  <Clock size={20} className="text-blue-electric" />
                  <h4 className="mt-3 font-semibold">Response Time</h4>
                  <p className={cn('mt-1 text-sm', isDark ? 'text-silver' : 'text-muted-light')}>
                    Within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
