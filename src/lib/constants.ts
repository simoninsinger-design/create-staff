export const SITE_CONFIG = {
  name: 'CreateStaff',
  tagline: 'We build AI employees so you don\'t have to hire for every role.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://createstaff.com',
  email: 'hello@createstaff.com',
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/simoni-umich/discovery',
  gaId: process.env.NEXT_PUBLIC_GA_ID || '',
} as const

export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const

export const SERVICES = [
  {
    slug: 'ai-executive-assistant',
    title: 'AI Executive Assistant',
    shortDescription: 'Automate scheduling, email management, and daily operations with an AI that never sleeps.',
    description: 'Your AI Executive Assistant handles calendar management, email triage, meeting prep, travel coordination, and administrative tasks around the clock. It learns your preferences and gets smarter over time.',
    icon: 'calendar',
    persona: {
      name: 'Ava',
      image: '/personas/ai-executive-assistant.jpg',
      tagline: 'Your 24/7 executive right hand',
      bio: 'Ava keeps your calendar flawless, your inbox at zero, and your meetings prepped before you even ask. She learns your priorities, anticipates conflicts, and handles the admin that used to eat half your day.',
    },
    capabilities: [
      'Intelligent calendar management and scheduling optimization',
      'Email triage, drafting, and response management',
      'Meeting preparation with automated briefing documents',
      'Travel planning and expense tracking',
      'Document organization and filing',
      'Daily briefings and priority summaries',
    ],
    targetBuyer: 'Founders, executives, and busy leaders who spend too much time on admin tasks instead of strategic work.',
    useCase: 'A startup CEO was spending 15+ hours per week on scheduling, emails, and meeting prep. After deploying their AI EA, they reclaimed 12 hours weekly and redirected that time to fundraising and product strategy.',
    faq: [
      {
        question: 'What tools does the AI EA integrate with?',
        answer: 'Google Workspace, Microsoft 365, Slack, Notion, Calendly, and most popular productivity tools. We can build custom integrations for your specific stack.',
      },
      {
        question: 'Can it handle sensitive information?',
        answer: 'Yes. All data is encrypted in transit and at rest. We implement role-based access controls and can sign NDAs for enterprise clients.',
      },
      {
        question: 'How does it handle scheduling conflicts?',
        answer: 'The AI learns your priority framework and automatically resolves conflicts based on meeting importance, relationship context, and your preferences.',
      },
    ],
  },
  {
    slug: 'ai-chief-of-staff',
    title: 'AI Chief of Staff',
    shortDescription: 'Strategic operations support that keeps your entire organization aligned and moving forward.',
    description: 'Your AI Chief of Staff manages cross-functional coordination, tracks OKRs, prepares board materials, and ensures nothing falls through the cracks across your organization.',
    icon: 'network',
    persona: {
      name: 'Marcus',
      image: '/personas/ai-chief-of-staff.jpg',
      tagline: 'The operational backbone you\'ve been missing',
      bio: 'Marcus tracks every project, prepares every board update, and keeps your leadership team aligned — without a single thing slipping through the cracks. He sees the big picture so you can focus on steering the ship.',
    },
    capabilities: [
      'Cross-functional project coordination and tracking',
      'OKR management and progress reporting',
      'Board deck and investor update preparation',
      'Team communication and alignment management',
      'Strategic initiative tracking and milestone management',
      'Data synthesis and executive decision support',
    ],
    targetBuyer: 'Growing companies (20-200 employees) where the CEO needs operational leverage but isn\'t ready for a $200K+ Chief of Staff hire.',
    useCase: 'A Series A company used their AI Chief of Staff to track 15 cross-functional projects, prepare weekly leadership updates, and manage board reporting — replacing what would have been a $180K/year role.',
    faq: [
      {
        question: 'Can it manage people?',
        answer: 'It manages processes, not people. It tracks assignments, sends reminders, and flags risks — but human leadership decisions stay with your team.',
      },
      {
        question: 'How does it handle confidential strategy documents?',
        answer: 'Enterprise-grade security with SOC 2 compliance. All strategic documents are encrypted and access-controlled.',
      },
      {
        question: 'Does it replace a human Chief of Staff?',
        answer: 'For most companies under 200 employees, yes. For larger organizations, it\'s a powerful force multiplier for your existing CoS.',
      },
    ],
  },
  {
    slug: 'ai-sales-development-rep',
    title: 'AI Sales Development Rep',
    shortDescription: 'Automated outreach, lead qualification, and pipeline management that runs 24/7.',
    description: 'Your AI SDR handles prospecting, personalized outreach, lead scoring, follow-ups, and CRM management. It books qualified meetings on your calendar while you focus on closing.',
    icon: 'megaphone',
    persona: {
      name: 'Sierra',
      image: '/personas/ai-sales-development-rep.jpg',
      tagline: 'Pipeline that builds itself while you sleep',
      bio: 'Sierra researches every prospect, crafts hyper-personalized outreach, and follows up relentlessly until the meeting is booked. She processes thousands of leads and never lets a warm opportunity go cold.',
    },
    capabilities: [
      'Automated prospecting and lead list building',
      'Personalized multi-channel outreach (email, LinkedIn)',
      'Intelligent lead scoring and qualification',
      'Automated follow-up sequences with dynamic personalization',
      'CRM data entry and pipeline management',
      'Meeting booking and handoff to sales team',
    ],
    targetBuyer: 'B2B companies that need consistent pipeline generation but can\'t justify hiring a full SDR team at $65K+ per rep.',
    useCase: 'A B2B SaaS company deployed an AI SDR that sent 2,000+ personalized outreach messages monthly, booked 40+ qualified meetings per month, and generated $500K in pipeline — at 1/10th the cost of a human SDR team.',
    faq: [
      {
        question: 'Won\'t prospects know it\'s AI?',
        answer: 'Our outreach is indistinguishable from human-written messages. Each message is personalized using deep research on the prospect\'s company, role, and recent activity.',
      },
      {
        question: 'Which CRMs do you integrate with?',
        answer: 'Salesforce, HubSpot, Pipedrive, Close, and most popular CRMs. Custom integrations available for enterprise.',
      },
      {
        question: 'Can I review messages before they\'re sent?',
        answer: 'Yes. You can set approval workflows for initial campaigns and let the AI run autonomously once you\'re comfortable with the quality.',
      },
    ],
  },
  {
    slug: 'ai-research-analyst',
    title: 'AI Research Analyst',
    shortDescription: 'Deep research, competitive intelligence, and data analysis delivered on demand.',
    description: 'Your AI Research Analyst monitors markets, analyzes competitors, synthesizes data from multiple sources, and delivers actionable insights — all without the 6-month ramp-up of a junior analyst.',
    icon: 'search',
    persona: {
      name: 'Kai',
      image: '/personas/ai-research-analyst.jpg',
      tagline: 'Insight at the speed of thought',
      bio: 'Kai reads 1,000 articles while your analyst reads 10. He monitors markets, tracks competitors, synthesizes data from dozens of sources, and delivers executive-ready insights on demand.',
    },
    capabilities: [
      'Competitive intelligence monitoring and reporting',
      'Market research and trend analysis',
      'Financial data analysis and visualization',
      'News and sentiment monitoring',
      'Custom research reports on demand',
      'Data synthesis from multiple sources into executive summaries',
    ],
    targetBuyer: 'Investment firms, strategy teams, and executives who need research capacity without hiring a team of analysts.',
    useCase: 'A venture capital firm deployed an AI Research Analyst to screen 500+ deals monthly, produce investment memos, and track portfolio company metrics — work that previously required 3 junior analysts.',
    faq: [
      {
        question: 'How does it source data?',
        answer: 'It pulls from public databases, news feeds, SEC filings, social media, industry reports, and any proprietary data sources you provide access to.',
      },
      {
        question: 'How accurate is the analysis?',
        answer: 'We implement multi-source verification and confidence scoring. Every insight includes source attribution so you can verify claims.',
      },
      {
        question: 'Can it produce client-ready reports?',
        answer: 'Yes. Reports are formatted in your brand template and can be delivered as PDFs, slides, or interactive dashboards.',
      },
    ],
  },
  {
    slug: 'custom-ai-employees',
    title: 'Custom AI Employees',
    shortDescription: 'Got a unique role in mind? We\'ll build a custom AI employee tailored to your exact needs.',
    description: 'Every business is different. We work with you to identify the perfect role for AI automation and build a custom AI employee that fits seamlessly into your existing workflows and tools.',
    icon: 'settings',
    persona: {
      name: 'Nova',
      image: '/personas/custom-ai-employees.jpg',
      tagline: 'Built from scratch for your exact needs',
      bio: 'Nova is whatever your business needs her to be. From logistics coordination to compliance monitoring to customer onboarding — she\'s custom-engineered for the role only your company has.',
    },
    capabilities: [
      'Custom workflow automation for any repeatable role',
      'Integration with your existing tool stack',
      'Role-specific training on your company data and processes',
      'Multi-step reasoning and decision-making capabilities',
      'Custom reporting and dashboard creation',
      'Iterative refinement based on your feedback',
    ],
    targetBuyer: 'Companies with unique operational needs that don\'t fit neatly into standard automation categories.',
    useCase: 'A logistics company needed an AI employee that could manage carrier negotiations, route optimization, and real-time shipment tracking across 3 different platforms. We built a custom solution that reduced logistics costs by 30%.',
    faq: [
      {
        question: 'How long does a custom build take?',
        answer: 'Typically 2-4 weeks from discovery call to deployment, depending on complexity and integration requirements.',
      },
      {
        question: 'What if our needs change over time?',
        answer: 'Custom AI employees can be updated and expanded. Our ongoing support subscription covers continuous improvements.',
      },
      {
        question: 'Can you build for regulated industries?',
        answer: 'Yes. We have experience building compliant AI solutions for healthcare, finance, and legal industries with appropriate safeguards.',
      },
    ],
  },
] as const

export const TESTIMONIALS = [
  /* TODO: Replace with real testimonials — Simon to provide actual client feedback for 3 companies */
  {
    quote: 'CreateStaff built us an AI executive assistant that handles 80% of what our previous EA did — for a fraction of the cost. It\'s like having a team member who never takes a day off.',
    name: 'Client 1',
    role: 'CEO',
    company: 'Company A',
    rating: 5,
  },
  {
    quote: 'We were skeptical about AI replacing our SDR function, but the results speak for themselves. The outreach quality is indistinguishable from our best reps and we\'re booking more meetings than ever.',
    name: 'Client 2',
    role: 'Founder',
    company: 'Company B',
    rating: 5,
  },
  {
    quote: 'The custom AI employee they built for our operations cut our manual workload dramatically. The ROI was evident within the first month.',
    name: 'Client 3',
    role: 'COO',
    company: 'Company C',
    rating: 5,
  },
]

export const STATS = [
  /* TODO: Update with verified metrics as client base grows */
  { value: 85, suffix: '%', label: 'Average cost reduction vs. full-time hire' },
  { value: 24, suffix: '/7', label: 'Availability — your AI employee never sleeps' },
  { value: 14, suffix: ' days', label: 'Average time from discovery call to deployment' },
  { value: 3, suffix: '+', label: 'Companies running AI employees' },
]

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Discovery Call',
    shortDescription: 'We learn your business and identify the roles AI can fill.',
    fullDescription: 'A 30-minute conversation where we understand your business, team structure, pain points, and goals. We identify which roles have the highest automation potential and biggest ROI.',
    details: [
      'Share your current workflow challenges',
      'Identify the highest-impact role to automate first',
      'Get a preliminary scope and timeline estimate',
      'No commitment required — just a conversation',
    ],
  },
  {
    step: 2,
    title: 'Workflow Audit',
    shortDescription: 'We map your workflows and find automation opportunities.',
    fullDescription: 'Our team dives deep into your existing processes, tools, and data flows. We document every step of the role we\'re automating and identify exactly where AI can deliver the most value.',
    details: [
      'Map current processes and tool integrations',
      'Identify automation opportunities and potential blockers',
      'Define success metrics and KPIs',
      'Deliver a detailed implementation blueprint',
    ],
  },
  {
    step: 3,
    title: 'Build & Deploy',
    shortDescription: 'We build your AI employee and integrate it into your systems.',
    fullDescription: 'Our engineering team builds your custom AI employee using battle-tested AI infrastructure. We integrate with your existing tools, train the AI on your specific processes, and rigorously test before deployment.',
    details: [
      'Custom AI model configuration and training',
      'Integration with your tool stack (Slack, CRM, email, etc.)',
      'Rigorous testing across edge cases and scenarios',
      'Deployment with monitoring and failsafes',
    ],
  },
  {
    step: 4,
    title: 'Launch & Train',
    shortDescription: 'We deploy, test, and refine until peak performance.',
    fullDescription: 'Your AI employee goes live with close monitoring. We fine-tune performance based on real-world results, incorporate your feedback, and ensure everything runs smoothly before stepping back.',
    details: [
      'Supervised launch with real-time monitoring',
      'Performance optimization based on actual results',
      'Team training on how to work alongside your AI employee',
      'Iterative refinement until you\'re fully satisfied',
    ],
  },
  {
    step: 5,
    title: 'Ongoing Support',
    shortDescription: 'Optional subscription for continuous optimization and support.',
    fullDescription: 'For businesses that want their AI employees to continuously improve, our ongoing support subscription provides monthly optimization, new capability additions, priority support, and a dedicated communication channel.',
    details: [
      'Monthly performance reviews and optimization',
      'New capability additions as your needs evolve',
      'Priority support via Slack or dedicated channel',
      'Proactive recommendations based on usage patterns',
    ],
  },
] as const

export const PRICING_TIERS = [
  {
    name: 'Starter',
    description: 'Automate your first task with a focused AI agent',
    price: '5,000',
    period: 'one-time',
    features: [
      '1 AI agent — single focused function',
      'Discovery call & workflow audit',
      'Integration with 1-2 tools',
      '1-2 week build timeline',
      '1 round of revisions',
      'Documentation & training session',
      '14 days post-launch support',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Core',
    description: 'A full AI employee that replaces an entire role',
    price: '12,000',
    period: 'starting at',
    features: [
      '1 AI employee — 3-5 integrated capabilities',
      'Comprehensive workflow audit & strategy',
      'Integration with 3-5 tools',
      '3-4 week build timeline',
      '2 rounds of revisions',
      'Documentation, training & video walkthrough',
      '30 days post-launch support',
      'Custom knowledge base built on your docs & SOPs',
    ],
    highlighted: true,
    cta: 'Get Started',
  },
  {
    name: 'Department',
    description: 'Multiple AI agents that work together as a team',
    price: '25,000',
    period: 'starting at',
    features: [
      '2-4 coordinated AI agents with handoff logic',
      'Full AI strategy & executive alignment sessions',
      'Integration with 5-10+ tools',
      '6-8 week build timeline',
      'Unlimited revisions during build',
      'Custom dashboards & reporting',
      '60 days post-launch support',
      'Team training & ongoing office hours',
    ],
    highlighted: false,
    cta: "Let's Talk",
  },
] as const

export const SUPPORT_PLANS = [
  {
    name: 'Starter',
    price: '250',
    period: 'month',
    features: [
      'Monitoring & uptime management',
      'Bug fixes & minor adjustments',
      'Email support (48-hour response)',
      'API/integration break-fix',
    ],
  },
  {
    name: 'Growth',
    price: '500',
    period: 'month',
    recommended: true,
    features: [
      'Everything in Starter support',
      'Prompt tuning & performance improvements',
      'Monthly strategy call (30 min)',
      'Priority support (24-hour response)',
      'Minor feature additions',
    ],
  },
  {
    name: 'Partner',
    price: '1,000',
    period: 'month',
    features: [
      'Everything in Growth support',
      'Quarterly business review with ROI analysis',
      'New builds at 15% discount',
      'Same-day support response',
      'Dedicated Slack channel',
    ],
  },
] as const

/* Legacy single support plan export for backward compat */
export const SUPPORT_PLAN = {
  price: '250',
  period: 'month',
  features: [
    'Monitoring & uptime management',
    'Bug fixes & minor adjustments',
    'Email support (48-hour response)',
    'API/integration break-fix',
  ],
}

export const PRICING_FAQ = [
  {
    question: 'Is there a contract or minimum commitment?',
    answer: 'Build packages are one-time engagements with no ongoing commitment. Support subscriptions are month-to-month — cancel anytime. We also offer 2 months free on annual support commitments.',
  },
  {
    question: 'What if I\'m not satisfied with the result?',
    answer: 'We include revision rounds in every package. If we can\'t deliver what we promised, we\'ll rebuild it at no additional cost.',
  },
  {
    question: 'How long does a typical build take?',
    answer: 'Starter agents take about 1-2 weeks. Core AI employees take 3-4 weeks. Department-level builds take 6-8 weeks. We\'ll give you a precise timeline after the discovery call.',
  },
  {
    question: 'What tools and platforms do you integrate with?',
    answer: 'Google Workspace, Microsoft 365, Slack, Salesforce, HubSpot, Notion, Linear, Jira, and dozens more. If you use it, we can probably integrate with it.',
  },
  {
    question: 'Do I need the ongoing support subscription?',
    answer: 'Not required — your AI employee works even without a support plan. But AI agents perform best with continuous tuning. The Growth plan ($500/mo) is our most popular choice.',
  },
  {
    question: 'How does this compare to hiring someone?',
    answer: 'A full-time employee costs $78K-$182K/year fully loaded (salary + benefits + recruiting + overhead). A Core AI employee costs $12K to build and $250-$500/mo to maintain — and works 24/7. Most clients see ROI within the first month.',
  },
  {
    question: 'Do I own the AI employee you build?',
    answer: 'Yes. Unlike SaaS subscriptions, what we build is yours. If you cancel support, your AI employee keeps working. You own the asset.',
  },
]
