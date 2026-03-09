'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Zap, DollarSign, Clock, TrendingUp, Shield, BrainCircuit } from 'lucide-react'
import { useTheme } from '@/components/layout/ThemeProvider'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const problems = [
  {
    icon: DollarSign,
    title: '$60K+ per role',
    description: 'You\'re spending six figures on roles that AI can handle for a fraction of the cost.',
  },
  {
    icon: Clock,
    title: 'Limited availability',
    description: 'Your team works 8 hours. Your competitors\' AI employees work 24.',
  },
  {
    icon: AlertTriangle,
    title: 'Scaling bottlenecks',
    description: 'Hiring takes months. Training takes longer. And they might still leave.',
  },
]

const solutions = [
  {
    icon: Zap,
    title: '90% cost reduction',
    description: 'AI employees cost a fraction of full-time hires with no benefits, PTO, or turnover.',
  },
  {
    icon: TrendingUp,
    title: 'Infinite scalability',
    description: 'Scale from 1 to 100 AI employees without a single interview or onboarding process.',
  },
  {
    icon: Shield,
    title: 'Deployed in days',
    description: 'From discovery call to live AI employee in under 2 weeks. No job postings required.',
  },
  {
    icon: BrainCircuit,
    title: 'Gets smarter over time',
    description: 'As AI models improve, so does your agent — automatically. Your investment appreciates instead of depreciates.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ProblemSolution() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section className={cn('py-24 lg:py-32', isDark ? 'bg-navy' : 'bg-offwhite')}>
      <Container>
        <SectionHeading
          badge="The Problem"
          title="You're hiring for roles AI can already do."
          subtitle="Every day you delay, you're paying premium prices for work that doesn't require a human touch."
        />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Problem side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className={cn(
              'mb-8 text-sm font-semibold uppercase tracking-wider',
              'text-red-400'
            )}>
              The old way
            </h3>
            <div className="space-y-6">
              {problems.map((problem) => (
                <motion.div
                  key={problem.title}
                  variants={itemVariants}
                  className={cn(
                    'flex gap-4 rounded-xl border p-5',
                    isDark
                      ? 'border-red-500/20 bg-red-500/5'
                      : 'border-red-200 bg-red-50'
                  )}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/10">
                    <problem.icon size={20} className="text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{problem.title}</h4>
                    <p className={cn('mt-1 text-sm', isDark ? 'text-silver' : 'text-muted-light')}>
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className={cn(
              'mb-8 text-sm font-semibold uppercase tracking-wider',
              'text-blue-electric'
            )}>
              The CreateStaff way
            </h3>
            <div className="space-y-6">
              {solutions.map((solution) => (
                <motion.div
                  key={solution.title}
                  variants={itemVariants}
                  className={cn(
                    'flex gap-4 rounded-xl border p-5',
                    isDark
                      ? 'border-blue-electric/20 bg-blue-electric/5'
                      : 'border-blue-200 bg-blue-50'
                  )}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-electric/10">
                    <solution.icon size={20} className="text-blue-electric" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{solution.title}</h4>
                    <p className={cn('mt-1 text-sm', isDark ? 'text-silver' : 'text-muted-light')}>
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
