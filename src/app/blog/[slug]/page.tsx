import post1 from '@/content/blog/why-your-next-ea-should-be-ai.json'
import post2 from '@/content/blog/true-cost-hiring-vs-ai.json'
import post3 from '@/content/blog/5-roles-to-automate.json'
import BlogPostClient from './BlogPostClient'

const posts = [post1, post2, post3]

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export default function BlogPostPage() {
  return <BlogPostClient />
}
