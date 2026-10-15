import { useState } from 'react';
import mentorImage from '../assets/images/mentor_clara_portrait_1792059117422.jpg';

export default function AboutMentor() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-20 lg:py-28 border-b border-[var(--border-subtle)] bg-[var(--bg-card)] transition-colors">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5">
            <div className="rounded-[var(--radius-md)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--shadow-card)] bg-[var(--bg-surface)]">
              {!imageError ? (
                <img
                  src={mentorImage}
                  alt="Clara Vane, founder and lead mentor at Studio Narra"
                  className="w-full h-[520px] object-cover"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-[520px] bg-[var(--bg-surface-subtle)] flex flex-col items-center justify-center p-8 text-center">
                  <span className="font-serif-editorial text-2xl text-[var(--accent-primary)] mb-2">Clara Vane</span>
                  <p className="text-xs text-[var(--text-secondary)]">Lead Advisor & Founder</p>
                </div>
              )}
            </div>
            
            <div className="mt-4 flex items-center justify-between text-xs text-[var(--text-muted)] px-1">
              <span>Clara Vane · Principal & Founder</span>
              <span>Based in Montreal & New York</span>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[var(--accent-primary)] mb-3">
              <span>Behind the Practice</span>
              <span aria-hidden="true" className="text-[var(--border-medium)]">/</span>
              <span>Meet Your Mentor</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-light text-[var(--text-primary)] leading-[1.18] mb-6 [text-wrap:balance]">
              "I used to believe running a successful firm required <span className="italic font-normal text-[var(--accent-primary)]">burning out my health</span> and managing 15 junior staff."
            </h2>

            <div className="space-y-4 text-base text-[var(--text-secondary)] leading-relaxed">
              <p>
                For six years, I ran an award-winning brand consultancy. On paper, we generated multiple seven figures. In practice, I was surviving on espresso, managing constant employee turnover, and spending my Sundays redlining proposals for fickle clients who treated us like vendors.
              </p>
              <p>
                In 2021, I made a radical decision: I unwound the agency overhead, transitioned to a sovereign advisory model, and capped my roster at five retained partners. Today, my solo advisory nets over $800,000 annually with a 20-hour workweek and zero full-time staff.
              </p>
              <p>
                Studio Narra is the distillation of every framework, contract, and conversation architecture that made this sovereignty possible. I personally mentor every single founder in this cohort.
              </p>
            </div>

            {/* Credential Indicators */}
            <div className="mt-8 pt-8 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-6">
              <div>
                <span className="block font-serif-editorial text-2xl font-normal text-[var(--text-primary)] tabular-nums">14 Yrs</span>
                <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)]">Advisory Experience</span>
              </div>
              <div>
                <span className="block font-serif-editorial text-2xl font-normal text-[var(--text-primary)] tabular-nums">240+</span>
                <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)]">Founders Coached</span>
              </div>
              <div>
                <span className="block font-serif-editorial text-2xl font-normal text-[var(--text-primary)] tabular-nums">5 Clients</span>
                <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)]">Active Personal Roster</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
