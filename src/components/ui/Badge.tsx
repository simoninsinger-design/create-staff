import { cn } from '@/lib/utils'

interface BadgeProps {
  readonly children: string
  readonly variant?: 'default' | 'blue' | 'gold'
  readonly className?: string
}

const variants = {
  default: 'bg-navy-lighter text-silver',
  blue: 'bg-blue-electric/10 text-blue-electric',
  gold: 'bg-gold/10 text-gold',
} as const

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
