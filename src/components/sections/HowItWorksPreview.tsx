'use client'

import { motion } from 'framer-motion'
import { Phone, ClipboardCheck, Wrench, Rocket } from 'lucide-react'
import { useTheme } from '@/components/layout/ThemeProvider'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Discovery Call',
    description: 'We learn your business and identify the roles AI can fill.',
  },
  {
    icon: ClipboardCheck,
    number: '02',
    title: 'Workflow Audit',
    description: 'We map your workflows and find automation opportunities.',
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Build & Deploy',
    description: 'We build your AI employee and integrate it into your systems.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Ongoing Support',
    description: 'Optional subscription for continuous optimization and support.',
  },
]

export function HowItWorksPreview() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      id="how-it-works"
      className={cn('py-24 lg:py-32', isDark ? 'bg-navy' : 'bg-offwhite')}
    >
      <Container>
        <SectionHeading
          badge="How It Works"
          title="From idea to AI employee in 4 steps."
          subtitle="A clear, proven process that gets your AI employee up and running fast."
        />

        <div className="relative">
          {/* Connection line (desktop only) */}
          <div className={cn(
            'absolute left-0 right-0 top-16 hidden h-px lg:block',
            isDark ? 'bg-border-dark' : 'bg-border-light'
          )} />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative text-center"
              >
                {/* Step number + icon */}
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center">
                  <div className={cn(
                    'absolute inset-0 rounded-full',
                    isDark ? 'bg-navy-light border border-border-dark' : 'bg-white border border-border-light shadow-sm'
                  )} />
                  <step.icon size={24} className="relative z-10 text-blue-electric" />
                </div>

                {/* Number badge */}
                <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-blue-electric">
                  Step {step.number}
                </span>

                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className={cn(
                  'mt-2 text-sm leading-relaxed',
                  isDark ? 'text-silver' : 'text-muted-light'
                )}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button href="/how-it-works" variant="outline">
            See the Full Process
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
