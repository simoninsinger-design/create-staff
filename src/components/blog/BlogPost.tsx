'use client'

import { useTheme } from '@/components/layout/ThemeProvider'
import { Badge } from '@/components/ui/Badge'
import { formatDate, estimateReadTime } from '@/lib/utils'
import { cn } from '@/lib/utils'
import { Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface BlogPostProps {
  readonly title: string
  readonly date: string
  readonly author: string
  readonly category: string
  readonly content: string
}

export function BlogPost({ title, date, author, category, content }: BlogPostProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const readTime = estimateReadTime(content)

  return (
    <article className="mx-auto max-w-3xl">
      {/* Back link */}
      <Link
        href="/blog"
        className={cn(
          'mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors',
          isDark ? 'text-silver hover:text-white' : 'text-muted-light hover:text-navy'
        )}
      >
        <ArrowLeft size={16} />
        Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-12">
        <Badge variant="blue">{category}</Badge>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <div className={cn(
          'mt-6 flex items-center gap-4 text-sm',
          isDark ? 'text-silver' : 'text-muted-light'
        )}>
          <span>{author}</span>
          <span>&middot;</span>
          <span>{formatDate(date)}</span>
          <span>&middot;</span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {readTime} min read
          </span>
        </div>
      </header>

      {/* Content rendered as markdown-like HTML */}
      <div
        className={cn(
          'prose max-w-none',
          isDark ? 'prose-invert' : '',
          'prose-headings:font-bold prose-headings:tracking-tight',
          'prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4',
          'prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3',
          'prose-p:leading-relaxed prose-p:mb-4',
          'prose-strong:font-semibold',
          'prose-ul:my-4 prose-li:my-1',
          isDark
            ? 'prose-p:text-silver prose-li:text-silver prose-strong:text-white'
            : 'prose-p:text-muted-light prose-strong:text-navy',
          'prose-a:text-blue-electric prose-a:no-underline hover:prose-a:underline'
        )}
        dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
      />
    </article>
  )
}

function renderMarkdown(content: string): string {
  return content
    .split('\n\n')
    .map((block) => {
      const trimmed = block.trim()
      if (trimmed.startsWith('## ')) {
        return `<h2>${trimmed.slice(3)}</h2>`
      }
      if (trimmed.startsWith('### ')) {
        return `<h3>${trimmed.slice(4)}</h3>`
      }
      if (trimmed.startsWith('- ')) {
        const items = trimmed
          .split('\n')
          .filter((l) => l.startsWith('- '))
          .map((l) => `<li>${formatInline(l.slice(2))}</li>`)
          .join('')
        return `<ul>${items}</ul>`
      }
      if (trimmed.startsWith('|')) {
        return renderTable(trimmed)
      }
      if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ') || trimmed.startsWith('3. ')) {
        const items = trimmed
          .split('\n')
          .filter((l) => /^\d+\.\s/.test(l))
          .map((l) => `<li>${formatInline(l.replace(/^\d+\.\s/, ''))}</li>`)
          .join('')
        return `<ol>${items}</ol>`
      }
      return `<p>${formatInline(trimmed)}</p>`
    })
    .join('\n')
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
}

function renderTable(text: string): string {
  const lines = text.split('\n').filter((l) => l.trim().length > 0)
  if (lines.length < 2) return `<p>${text}</p>`

  const parseRow = (line: string) =>
    line
      .split('|')
      .filter((c) => c.trim().length > 0)
      .map((c) => c.trim())

  const headers = parseRow(lines[0])
  const dataRows = lines.slice(2).map(parseRow)

  const headerHtml = headers.map((h) => `<th>${formatInline(h)}</th>`).join('')
  const bodyHtml = dataRows
    .map((row) => `<tr>${row.map((c) => `<td>${formatInline(c)}</td>`).join('')}</tr>`)
    .join('')

  return `<table><thead><tr>${headerHtml}</tr></thead><tbody>${bodyHtml}</tbody></table>`
}
