import { useState } from 'react';
import heroImage from '../assets/images/hero_editorial_founder_1792059117016.jpg';

interface HeroProps {
  onApplyClick: () => void;
}

export default function Hero({ onApplyClick }: HeroProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[var(--border-subtle)] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        {/* Editorial Eyebrow with Unboxed Separators */}
        <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[var(--accent-primary)] mb-6">
          <span>The 2026 Executive Mentorship</span>
          <span aria-hidden="true" className="text-[var(--border-medium)]">/</span>
          <span>Private Advisory Accelerator</span>
          <span aria-hidden="true" className="text-[var(--border-medium)]">/</span>
          <span className="text-[var(--text-muted)] font-normal">Winter Cohort</span>
        </div>

        {/* 2-Column Split: Copy on Left, Editorial Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline, Narrative, and CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-serif-editorial font-light text-[var(--text-primary)] leading-[1.12] tracking-tight mb-7 [text-wrap:balance]">
              Transform your bespoke expertise into a <span className="italic font-normal text-[var(--accent-primary)]">lucrative, self-sustaining</span> boutique practice.
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed mb-9 max-w-xl">
              An intimate 12-week advisory accelerator for independent consultants, creative studio directors, and specialized practitioners transitioning from erratic project fees to predictable $15k–$30k quarterly retainers.
            </p>

            {/* CTAs & Secondary Triggers */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <button
                onClick={onApplyClick}
                className="px-8 py-4 text-xs font-semibold tracking-wider uppercase text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] transition-all rounded-[var(--radius-sm)] shadow-[var(--shadow-card)] text-center cursor-pointer"
              >
                Apply for Winter Cohort
              </button>

              <a
                href="#curriculum"
                className="px-6 py-4 text-xs font-semibold tracking-wider uppercase text-[var(--text-primary)] hover:text-[var(--accent-primary)] border border-[var(--border-medium)] hover:border-[var(--accent-primary)] transition-all rounded-[var(--radius-sm)] bg-transparent text-center"
              >
                Review 12-Week Syllabus
              </a>
            </div>

            {/* Key Anchor Specs Strip (Zero-Pill Discipline: Unboxed text with subtle dividers) */}
            <div className="pt-8 border-t border-[var(--border-subtle)] grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-1">Duration</span>
                <span className="text-sm font-medium text-[var(--text-primary)]">12 Weeks Intensive</span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-1">Cohort Size</span>
                <span className="text-sm font-medium text-[var(--text-primary)]">Strictly 8 Founders</span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-1">Format</span>
                <span className="text-sm font-medium text-[var(--text-primary)]">1:1 Audits + Async</span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-1">Start Date</span>
                <span className="text-sm font-medium text-[var(--text-primary)]">Nov 10, 2026</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Visual Asset & Floating Outcome Proof */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[var(--radius-md)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--shadow-card)] bg-[var(--bg-card)]">
              {!imageError ? (
                <img
                  src={heroImage}
                  alt="Creative studio founder working in sunlit architectural atelier"
                  className="w-full h-[460px] sm:h-[540px] object-cover"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-[500px] flex flex-col items-center justify-center p-8 bg-[var(--bg-surface-subtle)] text-center">
                  <div className="w-12 h-12 rounded-full border border-[var(--border-medium)] flex items-center justify-center mb-4 text-[var(--accent-primary)] font-serif-editorial text-xl">
                    N
                  </div>
                  <h3 className="font-serif-editorial text-xl text-[var(--text-primary)] mb-2">Studio Narra Atelier</h3>
                  <p className="text-xs text-[var(--text-secondary)]">Boutique Advisory & Mentorship for Independent Practitioners</p>
                </div>
              )}

              {/* Subtle scrim at bottom for caption */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[var(--text-primary)]/85 via-[var(--text-primary)]/40 to-transparent text-white">
                <p className="text-[11px] uppercase tracking-widest text-[#E8DFD3] font-medium mb-1">Founder Spotlight</p>
                <p className="font-serif-editorial italic text-sm text-[#F7EFE9] leading-snug">
                  "I traded frantic 60-hour project sprints for 3 retained advisory partners. My calendar is peaceful."
                </p>
              </div>
            </div>

            {/* Floating Quantitative Outcome Proof Card */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-8 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-sm)] p-5 shadow-[var(--shadow-card)] max-w-xs transition-colors">
              <span className="block text-[10px] uppercase tracking-widest text-[var(--accent-primary)] font-semibold mb-1">Cohort Benchmark</span>
              <p className="text-xl font-serif-editorial text-[var(--text-primary)] font-light leading-snug mb-1">
                <span className="font-semibold tabular-nums">$4,500</span> <span className="text-xs font-sans text-[var(--text-muted)]">one-off</span> → <span className="text-[var(--accent-primary)] font-semibold tabular-nums">$22,000</span> <span className="text-xs font-sans text-[var(--text-muted)]">quarterly</span>
              </p>
              <p className="text-xs text-[var(--text-secondary)] leading-normal">
                Average client retainer scale achieved within 90 days of framework deployment.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
