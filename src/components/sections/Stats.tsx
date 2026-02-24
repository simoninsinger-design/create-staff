'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/layout/ThemeProvider'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { Container } from '@/components/ui/Container'
import { STATS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Stats() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      className={cn(
        'relative overflow-hidden py-20',
        isDark
          ? 'bg-gradient-to-r from-navy via-navy-light to-navy'
          : 'bg-gradient-to-r from-blue-electric to-blue-bright'
      )}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className={cn(
                'text-4xl font-bold sm:text-5xl',
                isDark ? 'text-white' : 'text-white'
              )}>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <p className={cn(
                'mt-2 text-sm',
                isDark ? 'text-silver' : 'text-white/80'
              )}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
