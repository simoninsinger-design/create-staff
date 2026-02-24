import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ClientLayout } from './client-layout'

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'CreateStaff — We Build AI Employees',
    template: '%s | CreateStaff',
  },
  description:
    'We build custom AI employees so you don\'t have to hire for every role. From AI executive assistants to sales reps, deployed in under 2 weeks.',
  keywords: [
    'AI employees',
    'AI automation',
    'AI executive assistant',
    'AI sales rep',
    'AI consulting',
    'business automation',
    'AI staffing',
  ],
  authors: [{ name: 'CreateStaff' }],
  creator: 'CreateStaff',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://createstaff.com',
    siteName: 'CreateStaff',
    title: 'CreateStaff — We Build AI Employees',
    description:
      'We build custom AI employees so you don\'t have to hire for every role. From AI executive assistants to sales reps, deployed in under 2 weeks.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CreateStaff — We Build AI Employees',
    description:
      'We build custom AI employees so you don\'t have to hire for every role.',
    creator: '@createstaff',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'CreateStaff',
              url: 'https://createstaff.com',
              description:
                'We build custom AI employees so you don\'t have to hire for every role.',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'hello@createstaff.com',
                contactType: 'sales',
              },
            }),
          }}
        />
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${jakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
