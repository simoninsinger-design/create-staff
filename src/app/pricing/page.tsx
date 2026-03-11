'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ChevronDown, ArrowRight } from 'lucide-react'
import { useTheme } from '@/components/layout/ThemeProvider'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ComparisonTable } from '@/components/sections/ComparisonTable'
import { CTASection } from '@/components/sections/CTASection'
import { PRICING_TIERS, SUPPORT_PLANS, PRICING_FAQ } from '@/lib/constants'
import { cn } from '@/lib/utils'

function FAQItem({ question, answer, isDark }: { readonly question: string; readonly answer: string; readonly isDark: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cn('border-b', isDark ? 'border-border-dark' : 'border-border-light')}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-semibold pr-4">{question}</span>
        <ChevronDown
          size={18}
          className={cn(
            'shrink-0 transition-transform duration-200',
            isOpen && 'rotate-180',
            isDark ? 'text-silver' : 'text-muted-light'
          )}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="pb-5"
        >
          <p className={cn('text-sm leading-relaxed', isDark ? 'text-silver' : 'text-muted-light')}>
            {answer}
          </p>
        </motion.div>
      )}
    </div>
  )
}

export default function PricingPage() {
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
              Pricing
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Invest in AI employees,{' '}
              <span className="bg-gradient-to-r from-blue-electric to-blue-glow bg-clip-text text-transparent">
                not headcount.
              </span>
            </h1>
            <p className={cn('mt-6 text-lg', isDark ? 'text-silver' : 'text-muted-light')}>
              What it costs. No hidden fees.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Build Packages */}
      <section className={cn('py-16', isDark ? 'bg-navy-light' : 'bg-white')}>
        <Container>
          <SectionHeading
            title="Build Packages"
            subtitle="One-time investment to build and deploy your AI employee."
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PRICING_TIERS.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  'relative flex flex-col rounded-2xl border p-8',
                  tier.highlighted
                    ? 'border-blue-electric shadow-xl shadow-blue-electric/10'
                    : isDark
                      ? 'border-border-dark'
                      : 'border-border-light',
                  isDark ? 'bg-navy' : 'bg-offwhite'
                )}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-blue-electric px-4 py-1 text-xs font-bold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold">{tier.name}</h3>
                <p className={cn('mt-1 text-sm', isDark ? 'text-silver' : 'text-muted-light')}>
                  {tier.description}
                </p>

                <div className="mt-6">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  {tier.period && (
                    <span className={cn('ml-1 text-sm', isDark ? 'text-silver' : 'text-muted-light')}>
                      {tier.period}
                    </span>
                  )}
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={16} className="mt-0.5 shrink-0 text-blue-electric" />
                      <span className={cn('text-sm', isDark ? 'text-silver' : 'text-muted-light')}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  {/* TODO: Connect Stripe payment links */}
                  <Button
                    href="/contact"
                    variant={tier.highlighted ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    {tier.cta}
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Ongoing Support */}
      <section className={cn('py-16', isDark ? 'bg-navy' : 'bg-offwhite')}>
        <Container>
          <SectionHeading
            title="Ongoing Support"
            subtitle="Optional monthly plans for continuous optimization, monitoring, and priority support. Month-to-month — cancel anytime."
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {SUPPORT_PLANS.map((plan, i) => {
              const isRecommended = 'recommended' in plan && plan.recommended
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    'relative flex flex-col rounded-2xl border p-8',
                    isRecommended
                      ? 'border-gold/50 shadow-lg shadow-gold/5'
                      : isDark ? 'border-border-dark' : 'border-border-light',
                    isDark ? 'bg-navy' : 'bg-white'
                  )}
                >
                  {isRecommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-gold px-4 py-1 text-xs font-bold text-navy">
                        Recommended
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className={cn('ml-1 text-sm', isDark ? 'text-silver' : 'text-muted-light')}>
                      /{plan.period}
                    </span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                        <span className={cn('text-sm', isDark ? 'text-silver' : 'text-muted-light')}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      href="/contact"
                      variant={isRecommended ? 'primary' : 'outline'}
                      className="w-full"
                    >
                      Get {plan.name}
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Comparison Table */}
      <ComparisonTable />

      {/* FAQ */}
      <section className={cn('py-20', isDark ? 'bg-navy-light' : 'bg-white')}>
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading title="Frequently asked questions" />

            <div>
              {PRICING_FAQ.map((item) => (
                <FAQItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  isDark={isDark}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className={cn('text-sm', isDark ? 'text-silver' : 'text-muted-light')}>
                Not sure which plan is right for you?
              </p>
              <Button href="/contact" variant="outline" className="mt-4">
                Book a Free Discovery Call
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
