import { useState } from 'react';

interface PricingInvestmentProps {
  onApplyClick: () => void;
}

export default function PricingInvestment({ onApplyClick }: PricingInvestmentProps) {
  const [billingPlan, setBillingPlan] = useState<'single' | 'split'>('single');

  const inclusions = [
    '12 Weeks of High-Touch Strategic Mentorship & Guidance',
    'Weekly 90-Minute Live Cohort Strategy Masterclasses (Indexed Replays)',
    '6x Private 45-Minute 1:1 Milestone Audits with Clara Vane',
    'Direct Asynchronous Access via Private Slack & Voice Memos',
    'The Complete Proprietary Vault (42+ Legal Contracts, SOWs, Notion Hubs)',
    'Executive Diagnostic Scripts & Objection-Handling Audio Files',
    'Guest Masterclasses from Elite IP Attorneys & Wealth Planners',
    'Lifetime Access to the Studio Narra Alumni Private Network'
  ];

  return (
    <section id="investment" className="py-20 lg:py-28 border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)] transition-colors">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        {/* Section Eyebrow & Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-medium tracking-widest uppercase text-[var(--accent-primary)] mb-3">
            <span>Transparent Enrollment</span>
            <span aria-hidden="true" className="text-[var(--border-medium)]">/</span>
            <span>Winter 2026 Cohort</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-light text-[var(--text-primary)] leading-[1.18] [text-wrap:balance]">
            An investment designed to be recouped with <span className="italic font-normal text-[var(--accent-primary)]">a single client</span> retainer.
          </h2>

          <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
            One signed $20,000 advisory retainer delivers a 4x return on your tuition. We limit each cohort strictly to 8 founders to ensure intimate 1:1 strategic attention.
          </p>

          {/* Interactive Billing Plan Toggle (Compliant with Section 1.A) */}
          <div className="mt-8 inline-flex items-center gap-1 p-1 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[var(--radius-sm)] shadow-[var(--shadow-subtle)]">
            <button
              onClick={() => setBillingPlan('single')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-[var(--radius-sm)] transition-all cursor-pointer ${
                billingPlan === 'single'
                  ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Single Payment · Save $600
            </button>
            <button
              onClick={() => setBillingPlan('split')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-[var(--radius-sm)] transition-all cursor-pointer ${
                billingPlan === 'split'
                  ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              3 Monthly Installments
            </button>
          </div>
        </div>

        {/* Pricing Card & Inclusions Layout */}
        <div className="max-w-4xl mx-auto rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-[var(--bg-surface)] shadow-[var(--shadow-card)] overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Pricing & Enrollment Action */}
            <div className="lg:col-span-5 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-[var(--border-subtle)] bg-[var(--bg-card)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[var(--accent-primary)] mb-4">
                  <span>Winter 2026 Cohort</span>
                  <span className="text-[var(--text-muted)] font-mono text-[11px]">8 Seats Max</span>
                </div>

                <div className="mb-6">
                  {billingPlan === 'single' ? (
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl font-serif-editorial font-light text-[var(--text-primary)] tabular-nums">
                          $4,800
                        </span>
                        <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                          USD
                        </span>
                      </div>
                      <span className="text-xs text-[var(--accent-primary)] font-semibold mt-1 block">
                        One-time investment · Includes $600 discount
                      </span>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl font-serif-editorial font-light text-[var(--text-primary)] tabular-nums">
                          $1,800
                        </span>
                        <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                          / month
                        </span>
                      </div>
                      <span className="text-xs text-[var(--text-secondary)] font-medium mt-1 block">
                        3 monthly payments of $1,800 · Total $5,400
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-8">
                  Admissions are selective to protect cohort quality. Applications are reviewed sequentially within 24 business hours.
                </p>
              </div>

              <div>
                <button
                  onClick={onApplyClick}
                  className="w-full py-4 px-6 text-xs font-semibold tracking-wider uppercase text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] transition-all rounded-[var(--radius-sm)] shadow-md text-center cursor-pointer mb-3"
                >
                  Submit Application for Review
                </button>
                <p className="text-[11px] text-center text-[var(--text-muted)]">
                  No fee required to apply · 15-minute fit call before acceptance
                </p>
              </div>
            </div>

            {/* Right: What You Receive */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-xs uppercase tracking-widest font-semibold text-[var(--text-primary)] mb-6 flex items-center justify-between">
                  <span>Complete Cohort Inclusions</span>
                  <span className="text-[var(--text-muted)] font-normal text-[11px]">Total Value $18,400</span>
                </h3>

                <ul className="space-y-4 mb-8">
                  {inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      <span className="text-[var(--accent-primary)] text-sm font-semibold select-none">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Discerning Fit Guarantee Box */}
              <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--accent-tint)]/70 border border-[var(--border-subtle)]">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-[var(--accent-primary)] mb-1">
                  Our 14-Day Discerning Fit Guarantee
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Participate through Week 2 and your first 1:1 strategy audit with Clara. If you do not feel 100% confident in the return on your investment, notify us for a prompt, courteous full refund.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
