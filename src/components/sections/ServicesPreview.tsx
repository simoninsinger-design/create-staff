'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Network, Megaphone, Search, Settings, ArrowRight } from 'lucide-react'
import { useTheme } from '@/components/layout/ThemeProvider'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/ui/Container'
import { SERVICES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const iconMap: Record<string, typeof Calendar> = {
  calendar: Calendar,
  network: Network,
  megaphone: Megaphone,
  search: Search,
  settings: Settings,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ServicesPreview() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section className={cn('py-24 lg:py-32', isDark ? 'bg-navy-light' : 'bg-white')}>
      <Container>
        <SectionHeading
          badge="Our Services"
          title="AI employees for every role."
          subtitle="From executive support to sales outreach, we build AI that does real work — not just chatbot demos."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Settings
            return (
              <motion.div key={service.slug} variants={cardVariants}>
                <Link href={`/services/${service.slug}`}>
                  <div
                    className={cn(
                      'group relative h-full rounded-xl border p-6 transition-all duration-300',
                      isDark
                        ? 'border-border-dark bg-navy hover:border-blue-electric/40 hover:shadow-lg hover:shadow-blue-electric/5'
                        : 'border-border-light bg-offwhite hover:border-blue-electric/40 hover:shadow-lg'
                    )}
                  >
                    {/* Icon */}
                    <div className={cn(
                      'mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300',
                      isDark
                        ? 'bg-blue-electric/10 group-hover:bg-blue-electric/20'
                        : 'bg-blue-electric/5 group-hover:bg-blue-electric/10'
                    )}>
                      <Icon size={24} className="text-blue-electric" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold">{service.title}</h3>
                    <p className={cn(
                      'mt-2 text-sm leading-relaxed',
                      isDark ? 'text-silver' : 'text-muted-light'
                    )}>
                      {service.shortDescription}
                    </p>

                    {/* Link */}
                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-electric opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Learn More
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-electric/0 to-blue-bright/0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03]" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
