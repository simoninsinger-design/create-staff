'use client'

import { Hero } from '@/components/sections/Hero'
import { TrustedBy } from '@/components/sections/TrustedBy'
import { ProblemSolution } from '@/components/sections/ProblemSolution'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { HowItWorksPreview } from '@/components/sections/HowItWorksPreview'
import { Testimonials } from '@/components/sections/Testimonials'
import { Stats } from '@/components/sections/Stats'
import { CTASection } from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ProblemSolution />
      <ServicesPreview />
      <HowItWorksPreview />
      <Testimonials />
      <Stats />
      <CTASection />
    </>
  )
}
