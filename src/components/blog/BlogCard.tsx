'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { useTheme } from '@/components/layout/ThemeProvider'
import { Badge } from '@/components/ui/Badge'
import { formatDate, estimateReadTime } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface BlogCardProps {
  readonly slug: string
  readonly title: string
  readonly excerpt: string
  readonly date: string
  readonly category: string
  readonly content: string
}

export function BlogCard({ slug, title, excerpt, date, category, content }: BlogCardProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const readTime = estimateReadTime(content)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/blog/${slug}`}>
        <div
          className={cn(
            'group h-full rounded-xl border p-6 transition-all duration-300',
            isDark
              ? 'border-border-dark bg-navy-light hover:border-blue-electric/30 hover:shadow-lg hover:shadow-blue-electric/5'
              : 'border-border-light bg-white hover:border-blue-electric/30 hover:shadow-lg'
          )}
        >
          {/* Category badge */}
          <Badge variant="blue">{category}</Badge>

          {/* Title */}
          <h3 className="mt-4 text-xl font-bold leading-tight group-hover:text-blue-electric transition-colors duration-200">
            {title}
          </h3>

          {/* Excerpt */}
          <p className={cn(
            'mt-3 text-sm leading-relaxed line-clamp-3',
            isDark ? 'text-silver' : 'text-muted-light'
          )}>
            {excerpt}
          </p>

          {/* Meta */}
          <div className={cn(
            'mt-6 flex items-center justify-between text-xs',
            isDark ? 'text-silver/60' : 'text-muted-light'
          )}>
            <span>{formatDate(date)}</span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {readTime} min read
            </span>
          </div>

          {/* Read more */}
          <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-electric opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Read More
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
