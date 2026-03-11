'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/layout/ThemeProvider'
import { cn } from '@/lib/utils'

/* TODO: Replace with actual client logos — Simon to provide company names and logo files */

export function TrustedBy() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      className={cn(
        'border-y py-10',
        isDark ? 'border-border-dark bg-navy-light/50' : 'border-border-light bg-white'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={cn(
            'text-center text-sm font-medium uppercase tracking-wider',
            isDark ? 'text-silver/50' : 'text-muted-light'
          )}
        >
          Companies we've built AI employees for
        </motion.p>
      </div>
    </section>
  )
}
