'use client'

import { cn } from '@/lib/utils'
import { type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  readonly label?: string
  readonly error?: string
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          'w-full rounded-lg border px-4 py-3 text-sm',
          'bg-white border-border-light text-navy',
          'dark:bg-navy-light dark:border-border-dark dark:text-white',
          'placeholder:text-muted-dark',
          'focus:border-blue-electric focus:outline-none focus:ring-1 focus:ring-blue-electric',
          'transition-colors duration-200',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  readonly label?: string
  readonly error?: string
}

export function Textarea({ label, error, className, id, ...props }: TextareaProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={cn(
          'w-full rounded-lg border px-4 py-3 text-sm',
          'bg-white border-border-light text-navy',
          'dark:bg-navy-light dark:border-border-dark dark:text-white',
          'placeholder:text-muted-dark',
          'focus:border-blue-electric focus:outline-none focus:ring-1 focus:ring-blue-electric',
          'transition-colors duration-200',
          'min-h-[120px] resize-y',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
