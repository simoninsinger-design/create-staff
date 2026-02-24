'use client'

import { cn } from '@/lib/utils'
import { type ReactNode, type ButtonHTMLAttributes } from 'react'
import Link from 'next/link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  readonly size?: 'sm' | 'md' | 'lg'
  readonly href?: string
  readonly children: ReactNode
  readonly className?: string
  readonly pulse?: boolean
}

const variants = {
  primary:
    'bg-blue-electric text-white hover:bg-blue-bright shadow-lg shadow-blue-electric/25 hover:shadow-blue-electric/40',
  secondary:
    'bg-navy-lighter text-white hover:bg-navy-light border border-border-dark [data-theme="light"]_&:bg-silver-light [data-theme="light"]_&:text-navy',
  outline:
    'border-2 border-blue-electric text-blue-electric hover:bg-blue-electric hover:text-white',
  ghost:
    'text-muted-dark hover:text-foreground hover:bg-navy-lighter/50',
} as const

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
} as const

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  pulse,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold',
    'transition-all duration-300 ease-out cursor-pointer',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-electric',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    pulse && 'animate-pulse',
    className
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
