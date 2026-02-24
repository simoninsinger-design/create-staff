'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useTheme } from '@/components/layout/ThemeProvider'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/ui/Container'
import { TESTIMONIALS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [activeIndex, setActiveIndex] = useState(0)

  function nextTestimonial() {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  function prevTestimonial() {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const testimonial = TESTIMONIALS[activeIndex]

  return (
    <section className={cn('py-24 lg:py-32', isDark ? 'bg-navy-light' : 'bg-white')}>
      <Container>
        <SectionHeading
          badge="Testimonials"
          title="Don't take our word for it."
          subtitle="Hear from the companies already running AI employees."
        />

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className={cn(
                'rounded-2xl border p-8 md:p-12',
                isDark
                  ? 'border-border-dark bg-navy'
                  : 'border-border-light bg-offwhite'
              )}
            >
              <Quote size={40} className="text-blue-electric/20" />

              {/* Stars */}
              <div className="mt-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className={cn(
                'mt-6 text-lg leading-relaxed md:text-xl',
                isDark ? 'text-white' : 'text-navy'
              )}>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-electric to-blue-bright" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className={cn('text-sm', isDark ? 'text-silver' : 'text-muted-light')}>
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className={cn(
                'rounded-full p-2 transition-colors duration-200',
                isDark
                  ? 'hover:bg-navy-lighter text-silver'
                  : 'hover:bg-silver-light text-muted-light'
              )}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    i === activeIndex
                      ? 'w-8 bg-blue-electric'
                      : cn('w-2', isDark ? 'bg-navy-lighter' : 'bg-silver-light')
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className={cn(
                'rounded-full p-2 transition-colors duration-200',
                isDark
                  ? 'hover:bg-navy-lighter text-silver'
                  : 'hover:bg-silver-light text-muted-light'
              )}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
