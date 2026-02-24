import { SERVICES } from '@/lib/constants'
import ServiceDetailClient from './ServiceDetailClient'

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export default function ServiceDetailPage() {
  return <ServiceDetailClient />
}
