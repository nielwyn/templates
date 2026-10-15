import { CaseStudy, CurriculumPhase, FAQItem } from '../types';

export const CURRICULUM_PHASES: CurriculumPhase[] = [
  {
    id: 'phase-1',
    phaseNumber: '01',
    title: 'Positioning & High-Ticket Architecture',
    weeks: 'Weeks 01 — 03',
    objective: 'Dismantle the hourly rate trap and craft a modular signature advisory scope priced at $15,000–$30,000 per quarter.',
    keyTopics: [
      'The 3-Tier Value-Pricing Calculator & SOW Matrix',
      'Eliminating Scope Creep: Non-negotiable advisory boundaries',
      'The High-Trust Diagnostic Call: Closing before proposing'
    ],
    deliverables: [
      'Your Master Signature Offer One-Pager (Executive Ready)',
      'Quarterly Advisory Retainer Agreement (Legal Redline)',
      'Client Diagnostic Script & Objection Handling Audio'
    ],
    templateBonus: 'Notion Offer Vault + Keynote Pitch Deck (Dark & Light)'
  },
  {
    id: 'phase-2',
    phaseNumber: '02',
    title: 'The Sovereign Inbound Engine',
    weeks: 'Weeks 04 — 06',
    objective: 'Build an inbound pipeline of discerning enterprise and boutique founders without posting daily or running paid ads.',
    keyTopics: [
      'The "Point of View" Editorial Essay Framework',
      'Bespoke Client Referral Loops: Turning alumni into your sales force',
      'Quiet Outreach: The 3-Sentence Executive Introduction'
    ],
    deliverables: [
      '3 Published Authority Articles & LinkedIn Long-Form Assets',
      'The VIP Referral Partner Kit & Compensation Model',
      'Executive Relationship CRM (Airtable / Notion)'
    ],
    templateBonus: 'The Editorial Essay Swipe File (14 Proven Structures)'
  },
  {
    id: 'phase-3',
    phaseNumber: '03',
    title: 'Asynchronous Delivery & Leverage',
    weeks: 'Weeks 07 — 09',
    objective: 'Deliver breathtaking client transformation in 12–15 hours per week using structured Loom audits and private async portals.',
    keyTopics: [
      'The Asynchronous Advisory Operating System',
      'Replacing endless Zoom meetings with high-leverage Loom sprints',
      'Setting up your Notion Client Operating Command'
    ],
    deliverables: [
      'Your Branded Notion Client Workspace Template',
      'Weekly Sprint & Strategic Milestone Tracker',
      'Client Onboarding Concierge Automated Workflow'
    ],
    templateBonus: 'Figma Brand Guidelines + Welcome Loom Scripts'
  },
  {
    id: 'phase-4',
    phaseNumber: '04',
    title: 'Retainer Longevity & Studio Longevity',
    weeks: 'Weeks 10 — 12',
    objective: 'Secure 90%+ contract renewal rates and establish your personal holding or lean studio infrastructure.',
    keyTopics: [
      'The Quarterly Business Review (QBR) Renewal Engine',
      'Hiring Tier-1 fractional contractors without brand dilution',
      'Tax efficiency, profit distribution, and calm calendar defense'
    ],
    deliverables: [
      'The 90-Day QBR Presentation & Renewal Contract Template',
      'Fractional Contractor Agreement & Onboarding Protocol',
      'Annual Studio Financial Model & Profit Allocation Calculator'
    ],
    templateBonus: 'Financial Forecast Model + Studio Operating Manual'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'elena',
    name: 'Elena Vance',
    title: 'Brand Strategist & Creative Director',
    business: 'Vance Advisory Group',
    beforeMetric: '$4,500 Sporadic Projects',
    afterMetric: '$22,000 Quarterly Retainers',
    quote: 'Narra completely overhauled how I value my mind over my hours. I cut my client roster from eight stressful accounts down to three dream advisory clients while doubling my net profit.',
    summary: 'Elena shifted from grueling brand identity design packages that dragged on for months to high-level quarterly creative governance for high-growth consumer brands.',
    tags: ['Brand Strategy', 'Consulting', '6-Figure Pivot']
  },
  {
    id: 'julian',
    name: 'Julian Chen',
    title: 'Product Design & UX Architect',
    business: 'Kite Spatial Systems',
    beforeMetric: '$110 / Hour Billing',
    afterMetric: '$68,000 Advisory Contracts',
    quote: 'Before Narra, every prospect treated me like a pair of hands. After executing Phase 1 and 2, my very first discovery call turned into a 6-month, $68,000 retained advisory contract.',
    summary: 'Julian eliminated hourly timesheets entirely, packaging his UX expertise into an executive design sprint that tech founders happily pay five figures to access.',
    tags: ['Product Design', 'Enterprise Tech', 'Value Pricing']
  },
  {
    id: 'marcus',
    name: 'Marcus Reed',
    title: 'Executive Communication Coach',
    business: 'Sovereign Speech Lab',
    beforeMetric: 'Unpredictable $3k/mo',
    afterMetric: 'Calm $28k/mo Predictable',
    quote: 'The asynchronous delivery framework alone gave me back 20 hours every week. I no longer live on Zoom calls, and my clients praise the focus and clarity of our async sprints.',
    summary: 'Marcus turned ad-hoc public speaking coaching sessions into a coveted 12-week leadership presence accelerator for Series B founders.',
    tags: ['Executive Coaching', 'Async Delivery', 'Boutique Scale']
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'commitment',
    question: 'How much time will I need to dedicate each week?',
    answer: 'Expect approximately 4 to 6 hours per week. This includes our weekly 90-minute live masterclass, your private 1:1 strategic review, and 2–3 hours of focused implementation inside your offer vault. We deliberately designed Narra to fit into a full client calendar without burnout.'
  },
  {
    id: 'prerequisites',
    question: 'Who is this mentorship specifically designed for?',
    answer: 'Narra is built for established service professionals, creative agency owners, solo consultants, UX/brand architects, and specialized coaches who have at least 2+ years of proven expertise and are currently generating between $5k and $25k monthly. If you are starting from zero without client experience, this cohort will be too advanced.'
  },
  {
    id: 'format',
    question: 'Are sessions live or recorded?',
    answer: 'All weekly cohort roundtables are hosted live on Thursdays at 11:00 AM EST, and replays are indexed with timecoded transcripts within 3 hours. In addition, you have ongoing asynchronous access to Clara via private Slack voice memos throughout the full 12 weeks.'
  },
  {
    id: 'guarantee',
    question: 'What is your refund and fit guarantee?',
    answer: 'We maintain our Discerning Fit Guarantee. Attend the first 14 days, participate in your first 1:1 strategic audit with Clara, and review all Phase 1 materials. If you honestly feel the caliber and clarity do not exceed your expectations, notify our team within 14 days of cohort kick-off for an immediate, full refund.'
  },
  {
    id: 'payment-plans',
    question: 'Are split payment installments available?',
    answer: 'Yes. You may choose either a single upfront investment of $4,800 (which saves $600) or 3 monthly installments of $1,800 billed 30 days apart. Both options include identical immediate access to all curriculum modules, templates, and 1:1 audits.'
  },
  {
    id: 'international',
    question: 'Can I join if I am outside North America?',
    answer: 'Yes. Our alumni span London, Sydney, Berlin, Tokyo, and Singapore. Live calls are scheduled at 11:00 AM EST to accommodate both European evenings and early Asian mornings, and our private Slack channels and Loom sprints are fully asynchronous.'
  }
];

export const VAULT_ASSETS = [
  {
    title: 'Master Retainer Contract & Scope SOW',
    type: 'Legal Template',
    format: 'Word & Google Docs',
    description: 'Reviewed by boutique IP attorneys. Protects against scope creep and enforces net-15 payment terms.'
  },
  {
    title: 'The Diagnostic Discovery Playbook',
    type: 'Sales Protocol',
    format: 'Audio Guide + PDF Matrix',
    description: 'Exact questions to unseat commodity competition and establish $20k+ advisory budgets effortlessly.'
  },
  {
    title: 'Notion Client Operating Command',
    type: 'System Template',
    format: 'Full Notion Architecture',
    description: 'The exact asynchronous client portal used to run 6-figure client retainers without email threads.'
  },
  {
    title: 'The High-End Pricing Calculator',
    type: 'Financial Model',
    format: 'Google Sheets / Excel',
    description: 'Calculate your exact advisory retainers based on enterprise client leverage, not hours expended.'
  },
  {
    title: '14 Editorial Point-of-View Frameworks',
    type: 'Content Assets',
    format: 'Swipe File',
    description: 'Proven long-form essay structures that turn passive LinkedIn and Substack readers into booked discovery calls.'
  },
  {
    title: 'The 90-Day QBR Renewal Deck',
    type: 'Client Retention',
    format: 'Keynote & Figma',
    description: 'Presenting return on advisory value so clearly that renewal agreements become automatic.'
  }
];
