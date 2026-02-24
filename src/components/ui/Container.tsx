import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

interface ContainerProps {
  readonly children: ReactNode
  readonly className?: string
  readonly as?: 'div' | 'section' | 'article' | 'main'
}

export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </Tag>
  )
}
