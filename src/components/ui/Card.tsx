'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface CardProps {
  readonly children: ReactNode
  readonly className?: string
  readonly hover?: boolean
  readonly glow?: boolean
}

export function Card({ children, className, hover = true, glow = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        'rounded-xl border p-6',
        'bg-card-light border-border-light',
        '[data-theme="dark"]_&:bg-card-dark [data-theme="dark"]_&:border-border-dark',
        hover && 'cursor-pointer transition-shadow duration-300 hover:shadow-xl',
        glow && 'hover:border-blue-electric/50 hover:shadow-blue-electric/10',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
