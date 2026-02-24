'use client'

import { motion } from 'framer-motion'
import { Target, Heart, Eye, Gem } from 'lucide-react'
import { useTheme } from '@/components/layout/ThemeProvider'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTASection } from '@/components/sections/CTASection'
import { cn } from '@/lib/utils'

const values = [
  {
    icon: Gem,
    title: 'Built to Last',
    description: 'We don\'t build quick hacks. Every AI employee is engineered for reliability, scalability, and long-term performance.',
  },
  {
    icon: Heart,
    title: 'Human-Centered AI',
    description: 'AI should augment humans, not replace them entirely. We automate the repetitive so your team can focus on what\'s meaningful.',
  },
  {
    icon: Eye,
    title: 'Radical Transparency',
    description: 'No black boxes. You\'ll understand exactly how your AI employee works, what it does, and why it makes the decisions it makes.',
  },
  {
    icon: Target,
    title: 'Obsessive Quality',
    description: 'We\'d rather build one exceptional AI employee than ten mediocre ones. Quality is non-negotiable.',
  },
]

const team = [
  /* TODO: Add real headshots for team section */
  {
    name: 'Simon Insinger',
    role: 'Co-Founder',
    bio: 'Building the future of work with AI-powered teams.',
  },
  {
    name: 'Alex Fiduccia',
    role: 'Co-Founder',
    bio: 'CS at Colorado State University. 5 years of IT experience. National cybersecurity competition winner.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function AboutPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <>
      {/* Hero */}
      <section className={cn('pb-16 pt-32 lg:pt-40', isDark ? 'bg-navy' : 'bg-offwhite')}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-block rounded-full bg-blue-electric/10 px-4 py-1.5 text-sm font-semibold text-blue-electric">
              About Us
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Every growing business deserves a{' '}
              <span className="bg-gradient-to-r from-blue-electric to-blue-glow bg-clip-text text-transparent">
                world-class team.
              </span>
            </h1>
            <p className={cn('mt-6 text-lg', isDark ? 'text-silver' : 'text-muted-light')}>
              Without the world-class price tag. We believe AI can democratize access to
              exceptional operational talent — and we&apos;re building the company to prove it.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* What makes us different */}
      <section className={cn('py-20', isDark ? 'bg-navy-light' : 'bg-white')}>
        <Container>
          <SectionHeading
            title="What makes us different"
            subtitle="We're not a SaaS tool. We're your AI operations partner."
          />

          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Deep AI Expertise',
                  description: 'Our team brings AI research experience from top universities and years of production AI deployment.',
                },
                {
                  title: 'Operational Experience',
                  description: 'We\'ve scaled companies operationally. We understand workflows, bottlenecks, and what actually needs automating.',
                },
                {
                  title: 'We Build WITH You',
                  description: 'This isn\'t off-the-shelf software. We embed with your team, understand your processes, and build something truly custom.',
                },
                {
                  title: 'Reliable Infrastructure',
                  description: 'Built on OpenClaw — cutting-edge AI infrastructure that\'s battle-tested for reliability and performance.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    'rounded-xl border p-6',
                    isDark ? 'border-border-dark bg-navy' : 'border-border-light bg-offwhite'
                  )}
                >
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className={cn('mt-2 text-sm leading-relaxed', isDark ? 'text-silver' : 'text-muted-light')}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className={cn('py-20', isDark ? 'bg-navy' : 'bg-offwhite')}>
        <Container>
          <SectionHeading
            title="Our values"
            subtitle="The principles that guide everything we build."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="text-center"
              >
                <div className={cn(
                  'mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl',
                  isDark ? 'bg-blue-electric/10' : 'bg-blue-electric/5'
                )}>
                  <value.icon size={24} className="text-blue-electric" />
                </div>
                <h3 className="text-lg font-bold">{value.title}</h3>
                <p className={cn('mt-2 text-sm leading-relaxed', isDark ? 'text-silver' : 'text-muted-light')}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Team */}
      <section className={cn('py-20', isDark ? 'bg-navy-light' : 'bg-white')}>
        <Container>
          <SectionHeading
            title="The team"
            subtitle="Small, focused, and deeply committed to building exceptional AI employees."
          />

          <div className="mx-auto flex max-w-2xl justify-center gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                {/* Avatar placeholder */}
                <div className={cn(
                  'mx-auto h-32 w-32 rounded-full',
                  i === 0
                    ? 'bg-gradient-to-br from-blue-electric to-blue-bright'
                    : 'bg-gradient-to-br from-purple-500 to-pink-500'
                )} />
                <h3 className="mt-4 text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-blue-electric">{member.role}</p>
                <p className={cn('mt-2 text-sm', isDark ? 'text-silver' : 'text-muted-light')}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
