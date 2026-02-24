'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/layout/ThemeProvider'
import { Container } from '@/components/ui/Container'
import { BlogCard } from '@/components/blog/BlogCard'
import { cn } from '@/lib/utils'

import post1 from '@/content/blog/why-your-next-ea-should-be-ai.json'
import post2 from '@/content/blog/true-cost-hiring-vs-ai.json'
import post3 from '@/content/blog/5-roles-to-automate.json'

const posts = [post1, post2, post3].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export default function BlogPage() {
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
              Blog
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Insights on AI staffing
            </h1>
            <p className={cn('mt-4 text-lg', isDark ? 'text-silver' : 'text-muted-light')}>
              Practical advice on building AI employees, automating operations,
              and scaling your team with intelligence.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Posts grid */}
      <section className={cn('py-16', isDark ? 'bg-navy-light' : 'bg-white')}>
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>

          {/* TODO: Add blog posts */}
          <p className={cn('mt-16 text-center text-sm', isDark ? 'text-silver/50' : 'text-muted-light')}>
            More articles coming soon. Subscribe to stay updated.
          </p>
        </Container>
      </section>
    </>
  )
}
