'use client'

import { motion } from 'framer-motion'
import { Phone, ClipboardCheck, Wrench, Rocket, HeartHandshake, Check } from 'lucide-react'
import { useTheme } from '@/components/layout/ThemeProvider'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'
import { HOW_IT_WORKS_STEPS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const stepIcons = [Phone, ClipboardCheck, Wrench, Rocket, HeartHandshake]

export default function HowItWorksPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <>
      {/* Hero */}
      <section className={cn('pb-16 pt-32 lg:pt-40', isDark ? 'bg-navy' : 'bg-offwhite')}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-block rounded-full bg-blue-electric/10 px-4 py-1.5 text-sm font-semibold text-blue-electric">
              Our Process
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              From conversation to{' '}
              <span className="bg-gradient-to-r from-blue-electric to-blue-glow bg-clip-text text-transparent">
                AI employee
              </span>{' '}
              in 5 steps.
            </h1>
            <p className={cn('mt-6 text-lg', isDark ? 'text-silver' : 'text-muted-light')}>
              Here&apos;s how we go from first conversation to a working AI employee.
              No black boxes, no surprises.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Steps */}
      <section className={cn('py-16', isDark ? 'bg-navy-light' : 'bg-white')}>
        <Container>
          <div className="relative mx-auto max-w-4xl">
            {/* Vertical line */}
            <div className={cn(
              'absolute left-8 top-0 bottom-0 hidden w-px lg:block',
              isDark ? 'bg-border-dark' : 'bg-border-light'
            )} />

            <div className="space-y-16 lg:space-y-24">
              {HOW_IT_WORKS_STEPS.map((step, i) => {
                const Icon = stepIcons[i]
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative lg:pl-24"
                  >
                    {/* Step number circle */}
                    <div className={cn(
                      'absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-full lg:flex',
                      isDark
                        ? 'bg-navy border-2 border-blue-electric/30'
                        : 'bg-white border-2 border-blue-electric/30 shadow-sm'
                    )}>
                      <Icon size={24} className="text-blue-electric" />
                    </div>

                    {/* Mobile icon */}
                    <div className={cn(
                      'mb-4 flex h-12 w-12 items-center justify-center rounded-xl lg:hidden',
                      isDark ? 'bg-blue-electric/10' : 'bg-blue-electric/5'
                    )}>
                      <Icon size={24} className="text-blue-electric" />
                    </div>

                    <span className="text-xs font-bold uppercase tracking-widest text-blue-electric">
                      Step {step.step}
                    </span>

                    <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{step.title}</h2>

                    <p className={cn(
                      'mt-4 text-base leading-relaxed',
                      isDark ? 'text-silver' : 'text-muted-light'
                    )}>
                      {step.fullDescription}
                    </p>

                    {/* Details */}
                    <ul className="mt-6 space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <Check size={16} className="mt-1 shrink-0 text-blue-electric" />
                          <span className={cn('text-sm', isDark ? 'text-silver' : 'text-muted-light')}>
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className={cn('py-20', isDark ? 'bg-navy' : 'bg-offwhite')}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to get started?
            </h2>
            <p className={cn('mt-4 text-lg', isDark ? 'text-silver' : 'text-muted-light')}>
              Book a free 30-minute call. We&apos;ll talk through your business and
              figure out if AI makes sense for any of your roles.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Book Your Discovery Call
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
