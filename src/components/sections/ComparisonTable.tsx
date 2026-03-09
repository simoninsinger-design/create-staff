'use client'

import { motion } from 'framer-motion'
import { Check, X, Minus } from 'lucide-react'
import { useTheme } from '@/components/layout/ThemeProvider'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

type CellValue = 'yes' | 'no' | 'partial' | string

interface ComparisonRow {
  readonly feature: string
  readonly createstaff: CellValue
  readonly fulltime: CellValue
  readonly freelancer: CellValue
  readonly diy: CellValue
}

const rows: readonly ComparisonRow[] = [
  { feature: 'Setup cost', createstaff: '$5K-25K+', fulltime: '$10K+ (recruiting)', freelancer: '$2K-5K', diy: '$0 (your time)' },
  { feature: 'Monthly cost', createstaff: '$250-1,000', fulltime: '$6.5K-15K+', freelancer: '$3K-8K', diy: 'Your time' },
  { feature: '24/7 availability', createstaff: 'yes', fulltime: 'no', freelancer: 'no', diy: 'partial' },
  { feature: 'Time to deploy', createstaff: '2 weeks', fulltime: '2-4 months', freelancer: '2-4 weeks', diy: '1-6 months' },
  { feature: 'Scales instantly', createstaff: 'yes', fulltime: 'no', freelancer: 'no', diy: 'partial' },
  { feature: 'Domain expertise', createstaff: 'yes', fulltime: 'yes', freelancer: 'partial', diy: 'no' },
  { feature: 'No turnover risk', createstaff: 'yes', fulltime: 'no', freelancer: 'no', diy: 'yes' },
  { feature: 'Continuous improvement', createstaff: 'yes', fulltime: 'partial', freelancer: 'no', diy: 'partial' },
]

const columnHeaders = [
  { key: 'createstaff' as const, label: 'CreateStaff', highlighted: true },
  { key: 'fulltime' as const, label: 'Full-Time Hire', highlighted: false },
  { key: 'freelancer' as const, label: 'Freelancer', highlighted: false },
  { key: 'diy' as const, label: 'DIY / No-Code', highlighted: false },
]

function CellContent({ value }: { readonly value: CellValue }) {
  if (value === 'yes') return <Check size={18} className="text-green-400" />
  if (value === 'no') return <X size={18} className="text-red-400" />
  if (value === 'partial') return <Minus size={18} className="text-amber-400" />
  return <span className="text-sm">{value}</span>
}

export function ComparisonTable() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section className={cn('py-24 lg:py-32', isDark ? 'bg-navy' : 'bg-offwhite')}>
      <Container>
        <SectionHeading
          title="How we compare."
          subtitle="See how CreateStaff stacks up against traditional hiring options."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[640px]">
            <thead>
              <tr>
                <th className={cn(
                  'py-4 text-left text-sm font-medium',
                  isDark ? 'text-silver' : 'text-muted-light'
                )} />
                {columnHeaders.map((col) => (
                  <th
                    key={col.key}
                    className={cn(
                      'px-4 py-4 text-center text-sm font-semibold',
                      col.highlighted && 'text-blue-electric'
                    )}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={cn(
                    'border-t',
                    isDark ? 'border-border-dark' : 'border-border-light'
                  )}
                >
                  <td className={cn(
                    'py-4 text-sm font-medium',
                    isDark ? 'text-white' : 'text-navy'
                  )}>
                    {row.feature}
                  </td>
                  {columnHeaders.map((col) => (
                    <td
                      key={col.key}
                      className={cn(
                        'px-4 py-4 text-center',
                        col.highlighted && (isDark ? 'bg-blue-electric/5' : 'bg-blue-electric/5')
                      )}
                    >
                      <div className="flex items-center justify-center">
                        <CellContent value={row[col.key]} />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </Container>
    </section>
  )
}
