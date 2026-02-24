'use client'

import { useParams } from 'next/navigation'
import { useTheme } from '@/components/layout/ThemeProvider'
import { Container } from '@/components/ui/Container'
import { BlogPost } from '@/components/blog/BlogPost'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'
import { cn } from '@/lib/utils'

import post1 from '@/content/blog/why-your-next-ea-should-be-ai.json'
import post2 from '@/content/blog/true-cost-hiring-vs-ai.json'
import post3 from '@/content/blog/5-roles-to-automate.json'

const posts = [post1, post2, post3]

export default function BlogPostPage() {
  const params = useParams()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Post not found</h1>
          <Button href="/blog" className="mt-4">
            Back to Blog
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className={cn('pb-16 pt-32 lg:pt-40', isDark ? 'bg-navy' : 'bg-offwhite')}>
        <Container>
          <BlogPost {...post} />
        </Container>
      </section>

      <CTASection />
    </>
  )
}
