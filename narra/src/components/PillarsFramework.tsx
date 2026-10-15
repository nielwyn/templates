import { useState } from 'react';
import studioImage from '../assets/images/editorial_case_study_studio_1792059117770.jpg';

export default function PillarsFramework() {
  const [imageError, setImageError] = useState(false);

  const pillars = [
    {
      num: '01',
      title: 'High-Ticket Offer Architecture',
      tagline: 'Packaging intangible expertise into tangible $15k–$30k quarterly scopes.',
      bullets: [
        'Defining your Modular Scope Spectrum (Core Advisory + Executive Intensives)',
        'The Value-Pricing Matrix that eliminates hourly billable tracking forever',
        'Legally redlined Master Services Agreement with ironclad boundaries'
      ]
    },
    {
      num: '02',
      title: 'The Sovereign Inbound Engine',
      tagline: 'Attracting enterprise executives and boutique founders without chasing or cold outreach.',
      bullets: [
        'The "Point of View" Editorial Essay framework that pre-sells before discovery calls',
        'Executive Referral Concierge: Structuring effortless 5-figure introductions',
        'Quiet Positioning: How to command top-of-market fees in crowded sectors'
      ]
    },
    {
      num: '03',
      title: 'Asynchronous Intimate Delivery',
      tagline: 'Delivering exceptional high-touch advisory in under 15 hours per client week.',
      bullets: [
        'The Loom Sprint System: Replacing 60-minute Zoom meetings with 8-minute high-impact video audits',
        'Client Operating Hub: Your branded Notion command center for executive check-ins',
        'Zero-Urgency Protocol: Cultivating a calm, proactive client relationship'
      ]
    },
    {
      num: '04',
      title: 'Retainer Longevity & Studio Longevity',
      tagline: 'Sustaining 90%+ contract renewal rates with minimal overhead.',
      bullets: [
        'The 90-Day QBR (Quarterly Business Review) renewal conversation architecture',
        'Lean Studio Staffing: Contracting Tier-1 talent without employer friction or margin erosion',
        'Calm Wealth Defense: Operating a 70%+ net margin boutique practice'
      ]
    }
  ];

  return (
    <section id="framework" className="py-20 lg:py-28 border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)] transition-colors">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[var(--accent-primary)] mb-3">
              <span>The Methodology</span>
              <span aria-hidden="true" className="text-[var(--border-medium)]">/</span>
              <span>The Narra Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-light text-[var(--text-primary)] leading-[1.18] [text-wrap:balance]">
              The 4 Pillars of a <span className="italic font-normal text-[var(--accent-primary)]">Sovereign Boutique</span> Practice
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Every system, agreement, and script inside Narra has been field-tested across 240+ private client engagements. No theoretical fluff.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="p-8 sm:p-10 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--accent-primary)] transition-all shadow-[var(--shadow-subtle)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif-editorial text-3xl font-light text-[var(--accent-primary)] tabular-nums">
                    {pillar.num}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                    Pillar
                  </span>
                </div>

                <h3 className="text-2xl font-serif-editorial font-normal text-[var(--text-primary)] mb-2">
                  {pillar.title}
                </h3>
                
                <p className="text-sm text-[var(--accent-primary)] font-medium mb-6">
                  {pillar.tagline}
                </p>

                <ul className="space-y-3 pt-6 border-t border-[var(--border-subtle)]">
                  {pillar.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      <span className="text-[var(--accent-primary)] text-base leading-none select-none">›</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] text-[11px] font-medium uppercase tracking-wider text-[var(--text-muted)] flex items-center justify-between">
                <span>Phase Integration</span>
                <span className="text-[var(--text-primary)] font-semibold">Weeks {(parseInt(pillar.num) - 1) * 3 + 1}–{parseInt(pillar.num) * 3}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Feature Banner with Studio Environment Image */}
        <div className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-[var(--shadow-subtle)]">
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-[var(--accent-primary)] font-semibold mb-2">
              The Sovereign Operating Standard
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[var(--text-primary)] mb-4 font-light leading-snug">
              "We measure success not by how busy your calendar looks, but by how <span className="italic">peacefully and profitably</span> your practice operates."
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              You will not be asked to build bloated courses, manage massive teams, or create daily social media content. Our members run lean, bespoke practices that honor their life outside of work.
            </p>
            <div className="flex items-center gap-6 text-xs text-[var(--text-muted)]">
              <div>
                <span className="block font-semibold text-base text-[var(--text-primary)] tabular-nums">15 hrs</span>
                <span>Max client delivery / week</span>
              </div>
              <div className="w-px h-8 bg-[var(--border-medium)]"></div>
              <div>
                <span className="block font-semibold text-base text-[var(--text-primary)] tabular-nums">72%</span>
                <span>Average net profit margin</span>
              </div>
              <div className="w-px h-8 bg-[var(--border-medium)]"></div>
              <div>
                <span className="block font-semibold text-base text-[var(--text-primary)] tabular-nums">3–5</span>
                <span>Retained client cap</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[280px]">
            {!imageError ? (
              <img
                src={studioImage}
                alt="Studio Narra physical workspace and material library"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-[var(--bg-surface-subtle)] flex items-center justify-center p-8 text-center text-xs text-[var(--text-muted)]">
                Studio Narra Architecture Library
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
