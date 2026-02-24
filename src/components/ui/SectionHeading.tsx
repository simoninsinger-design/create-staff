'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  readonly title: string
  readonly subtitle?: string
  readonly badge?: string
  readonly align?: 'left' | 'center'
  readonly className?: string
}

export function SectionHeading({
  title,
  subtitle,
  badge,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-blue-electric/10 px-4 py-1.5 text-sm font-semibold text-blue-electric">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-dark [data-theme='light']_&:text-muted-light">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
