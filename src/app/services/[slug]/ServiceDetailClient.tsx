'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, Network, Megaphone, Search, Settings, Check, ArrowRight, ChevronDown } from 'lucide-react'
import { useTheme } from '@/components/layout/ThemeProvider'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTASection } from '@/components/sections/CTASection'
import { SERVICES } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const iconMap: Record<string, typeof Calendar> = {
  calendar: Calendar,
  network: Network,
  megaphone: Megaphone,
  search: Search,
  settings: Settings,
}

function FAQItem({ question, answer, isDark }: { readonly question: string; readonly answer: string; readonly isDark: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cn(
      'border-b',
      isDark ? 'border-border-dark' : 'border-border-light'
    )}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-semibold">{question}</span>
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
          exit={{ opacity: 0, height: 0 }}
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

export default function ServiceDetailClient() {
  const params = useParams()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const service = SERVICES.find((s) => s.slug === params.slug)

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Service not found</h1>
          <Button href="/services" className="mt-4">
            View All Services
          </Button>
        </div>
      </div>
    )
  }

  const Icon = iconMap[service.icon] || Settings

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
            {/* Persona avatar */}
            <div className="relative mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full border-2 border-blue-electric/30 shadow-lg shadow-blue-electric/10">
              <Image
                src={service.persona.image}
                alt={service.persona.name}
                fill
                className="object-cover"
                sizes="96px"
                priority
              />
            </div>
            <span className="inline-block rounded-full bg-blue-electric/90 px-3 py-1 text-xs font-bold text-white">
              Meet {service.persona.name}
            </span>
            <p className={cn('mt-2 text-sm italic', 'text-blue-electric')}>
              &ldquo;{service.persona.tagline}&rdquo;
            </p>
            <div className={cn(
              'mx-auto mt-4 mb-6 flex h-10 w-10 items-center justify-center rounded-xl',
              isDark ? 'bg-blue-electric/10' : 'bg-blue-electric/5'
            )}>
              <Icon size={20} className="text-blue-electric" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {service.title}
            </h1>
            <p className={cn('mt-6 text-lg', isDark ? 'text-silver' : 'text-muted-light')}>
              {service.description}
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button href="/contact" size="lg">
                Book a Discovery Call <ArrowRight size={16} />
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className={cn('py-20', isDark ? 'bg-navy-light' : 'bg-white')}>
        <Container>
          <SectionHeading
            title="What your AI employee can do"
            subtitle="Every capability is custom-configured for your specific business needs."
          />

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {service.capabilities.map((cap, i) => (
              <motion.div
                key={cap}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  'flex items-start gap-3 rounded-xl border p-4',
                  isDark ? 'border-border-dark bg-navy' : 'border-border-light bg-offwhite'
                )}
              >
                <Check size={18} className="mt-0.5 shrink-0 text-blue-electric" />
                <span className={cn('text-sm', isDark ? 'text-silver' : 'text-muted-light')}>
                  {cap}
                </span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison table */}
      <section className={cn('py-20', isDark ? 'bg-navy' : 'bg-offwhite')}>
        <Container>
          <SectionHeading
            title="AI Employee vs. Traditional Hire"
            subtitle="See how an AI employee compares across key dimensions."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className={cn('border-b', isDark ? 'border-border-dark' : 'border-border-light')}>
                  <th className="py-4 text-left text-sm font-medium" />
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-electric">
                    AI Employee
                  </th>
                  <th className={cn('px-6 py-4 text-center text-sm font-semibold', isDark ? 'text-silver' : 'text-muted-light')}>
                    Traditional Hire
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Annual cost', '$5,000 + $250/mo', '$80K-120K+ fully loaded'],
                  ['Availability', '24/7/365', '40 hrs/week'],
                  ['Time to deploy', '2 weeks', '2-4 months'],
                  ['Scalability', 'Instant', 'Months per hire'],
                  ['Consistency', 'Always on', 'Variable'],
                  ['Turnover risk', 'None', 'Average 2-3 year tenure'],
                  ['Training needed', 'Built-in', '30-90 days ramp'],
                ].map(([feature, ai, traditional]) => (
                  <tr key={feature} className={cn('border-b', isDark ? 'border-border-dark' : 'border-border-light')}>
                    <td className="py-4 text-sm font-medium">{feature}</td>
                    <td className="px-6 py-4 text-center text-sm text-blue-electric font-medium">{ai}</td>
                    <td className={cn('px-6 py-4 text-center text-sm', isDark ? 'text-silver' : 'text-muted-light')}>{traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </Container>
      </section>

      {/* Use case */}
      <section className={cn('py-20', isDark ? 'bg-navy-light' : 'bg-white')}>
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading title="Real-world example" align="left" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                'rounded-2xl border p-8',
                isDark
                  ? 'border-blue-electric/20 bg-blue-electric/5'
                  : 'border-blue-200 bg-blue-50'
              )}
            >
              <p className={cn('text-base leading-relaxed', isDark ? 'text-silver' : 'text-muted-light')}>
                {service.useCase}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className={cn('py-20', isDark ? 'bg-navy' : 'bg-offwhite')}>
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading title="Frequently asked questions" align="left" />
            <div>
              {service.faq.map((item) => (
                <FAQItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  isDark={isDark}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
