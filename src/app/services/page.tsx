'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Network, Megaphone, Search, Settings, ArrowRight, Check } from 'lucide-react'
import { useTheme } from '@/components/layout/ThemeProvider'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'
import { SERVICES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const iconMap: Record<string, typeof Calendar> = {
  calendar: Calendar,
  network: Network,
  megaphone: Megaphone,
  search: Search,
  settings: Settings,
}

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              AI employees for{' '}
              <span className="bg-gradient-to-r from-blue-electric to-blue-glow bg-clip-text text-transparent">
                every role.
              </span>
            </h1>
            <p className={cn('mt-6 text-lg', isDark ? 'text-silver' : 'text-muted-light')}>
              From executive support to sales outreach, we build AI that handles real work —
              not just chatbot demos. Each AI employee is custom-built for your business.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Service details */}
      <section className={cn('py-16', isDark ? 'bg-navy-light' : 'bg-white')}>
        <Container>
          <div className="space-y-24">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || Settings
              const isEven = i % 2 === 0

              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className={cn(
                    'grid grid-cols-1 items-center gap-12 lg:grid-cols-2',
                    !isEven && 'lg:flex-row-reverse'
                  )}
                >
                  {/* Content */}
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className={cn(
                      'mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl',
                      isDark ? 'bg-blue-electric/10' : 'bg-blue-electric/5'
                    )}>
                      <Icon size={24} className="text-blue-electric" />
                    </div>

                    <h2 className="text-2xl font-bold sm:text-3xl">{service.title}</h2>

                    <p className={cn(
                      'mt-4 text-base leading-relaxed',
                      isDark ? 'text-silver' : 'text-muted-light'
                    )}>
                      {service.description}
                    </p>

                    {/* Capabilities */}
                    <ul className="mt-6 space-y-3">
                      {service.capabilities.slice(0, 4).map((cap) => (
                        <li key={cap} className="flex items-start gap-3">
                          <Check size={18} className="mt-0.5 shrink-0 text-blue-electric" />
                          <span className={cn('text-sm', isDark ? 'text-silver' : 'text-muted-light')}>
                            {cap}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Target buyer */}
                    <p className={cn(
                      'mt-6 text-sm italic',
                      isDark ? 'text-silver/70' : 'text-muted-light'
                    )}>
                      Best for: {service.targetBuyer}
                    </p>

                    <div className="mt-6">
                      <Button href={`/services/${service.slug}`} variant="outline" size="sm">
                        Learn More <ArrowRight size={14} />
                      </Button>
                    </div>
                  </div>

                  {/* Persona card */}
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className={cn(
                      'relative overflow-hidden rounded-2xl border',
                      isDark ? 'border-border-dark' : 'border-border-light'
                    )}>
                      <div className="relative h-64 sm:h-80">
                        <Image
                          src={service.persona.image}
                          alt={`${service.persona.name} — ${service.title}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className={cn(
                          'absolute inset-0 bg-gradient-to-t',
                          isDark
                            ? 'from-navy via-navy/40 to-transparent'
                            : 'from-white via-white/40 to-transparent'
                        )} />
                      </div>
                      <div className={cn(
                        'absolute bottom-0 left-0 right-0 p-6',
                      )}>
                        <span className="rounded-full bg-blue-electric/90 px-3 py-1 text-xs font-bold text-white">
                          {service.persona.name}
                        </span>
                        <p className={cn(
                          'mt-3 text-sm leading-relaxed',
                          isDark ? 'text-silver' : 'text-muted-light'
                        )}>
                          {service.persona.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
