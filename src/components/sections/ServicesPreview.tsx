'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
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
          badge="Meet Your AI Team"
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
                      'group relative h-full overflow-hidden rounded-xl border transition-all duration-300',
                      isDark
                        ? 'border-border-dark bg-navy hover:border-blue-electric/40 hover:shadow-lg hover:shadow-blue-electric/5'
                        : 'border-border-light bg-offwhite hover:border-blue-electric/40 hover:shadow-lg'
                    )}
                  >
                    {/* Persona image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={service.persona.image}
                        alt={`${service.persona.name} — ${service.title}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Gradient overlay */}
                      <div className={cn(
                        'absolute inset-0 bg-gradient-to-t',
                        isDark
                          ? 'from-navy via-navy/60 to-transparent'
                          : 'from-offwhite via-offwhite/60 to-transparent'
                      )} />
                      {/* Persona name badge */}
                      <div className="absolute bottom-3 left-4">
                        <span className="rounded-full bg-blue-electric/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                          {service.persona.name}
                        </span>
                      </div>
                      {/* Icon badge */}
                      <div className="absolute right-4 top-3">
                        <div className={cn(
                          'flex h-9 w-9 items-center justify-center rounded-lg backdrop-blur-sm',
                          'bg-navy/50 border border-white/10'
                        )}>
                          <Icon size={18} className="text-blue-glow" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold">{service.title}</h3>
                      <p className={cn(
                        'mt-1 text-xs font-medium italic',
                        'text-blue-electric'
                      )}>
                        &ldquo;{service.persona.tagline}&rdquo;
                      </p>
                      <p className={cn(
                        'mt-3 text-sm leading-relaxed',
                        isDark ? 'text-silver' : 'text-muted-light'
                      )}>
                        {service.shortDescription}
                      </p>

                      {/* Link */}
                      <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-electric">
                        Meet {service.persona.name}
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
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
