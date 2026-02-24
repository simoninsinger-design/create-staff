'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { HeroParticles } from '@/components/sections/HeroParticles'
import { useTheme } from '@/components/layout/ThemeProvider'
import { cn } from '@/lib/utils'

export function Hero() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div
        className={cn(
          'absolute inset-0',
          isDark
            ? 'bg-gradient-to-b from-navy via-navy to-navy-light'
            : 'bg-gradient-to-b from-offwhite via-white to-offwhite'
        )}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 pt-20 lg:pt-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-electric/10 px-4 py-1.5 text-sm font-semibold text-blue-electric">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-electric animate-pulse" />
                AI-Powered Workforce Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className={cn(
                'mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl',
                isDark ? 'text-white' : 'text-navy'
              )}
            >
              Your next hire{' '}
              <span className="bg-gradient-to-r from-blue-electric to-blue-glow bg-clip-text text-transparent">
                isn&apos;t human.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className={cn(
                'mt-6 max-w-xl text-lg leading-relaxed sm:text-xl',
                isDark ? 'text-silver' : 'text-muted-light'
              )}
            >
              We build custom AI employees that handle real work — scheduling,
              outreach, research, operations — so you can focus on what matters.
              Staff that scales with you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button href="/contact" size="lg">
                Book a Discovery Call
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#how-it-works"
              >
                See How It Works
              </Button>
            </motion.div>

            {/* Social proof mini */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.7 }}
              className={cn(
                'mt-12 flex items-center gap-4',
                isDark ? 'text-silver' : 'text-muted-light'
              )}
            >
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      'h-8 w-8 rounded-full border-2',
                      isDark ? 'border-navy' : 'border-white',
                      i === 0 && 'bg-gradient-to-br from-blue-electric to-blue-bright',
                      i === 1 && 'bg-gradient-to-br from-purple-500 to-pink-500',
                      i === 2 && 'bg-gradient-to-br from-green-400 to-emerald-500'
                    )}
                  />
                ))}
              </div>
              <p className="text-sm">
                Trusted by <span className="font-semibold">growing companies</span> to build AI teams
              </p>
            </motion.div>
          </motion.div>

          {/* Particle animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
          >
            <HeroParticles isDark={isDark} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown
            size={24}
            className={isDark ? 'text-silver/50' : 'text-muted-light/50'}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
