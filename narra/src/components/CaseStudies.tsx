import { CASE_STUDIES } from '../data/content';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 lg:py-28 border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)] transition-colors">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[var(--accent-primary)] mb-3">
            <span>Verified Results</span>
            <span aria-hidden="true" className="text-[var(--border-medium)]">/</span>
            <span>Real Financial & Lifestyle Shifts</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-light text-[var(--text-primary)] leading-[1.18] [text-wrap:balance]">
            From burned-out vendors to <span className="italic font-normal text-[var(--accent-primary)]">retained sovereign advisors</span>.
          </h2>

          <p className="mt-5 text-base text-[var(--text-secondary)] leading-relaxed">
            Read how alumni of our 12-week accelerator redefined their positioning, dismantled the hourly billing ceiling, and created calm, highly profitable practices.
          </p>
        </div>

        {/* 3 Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 flex flex-col justify-between shadow-[var(--shadow-subtle)] hover:border-[var(--accent-primary)] transition-all"
            >
              <div>
                {/* Metric Transformation Block */}
                <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--bg-card)] border border-[var(--border-subtle)] mb-6">
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-1">
                    Revenue & Scope Transformation
                  </span>
                  <div className="flex items-baseline justify-between text-xs sm:text-sm font-medium">
                    <span className="text-[var(--text-muted)] line-through tabular-nums">{study.beforeMetric}</span>
                    <span className="text-[var(--text-primary)] font-bold text-base text-[var(--accent-primary)] tabular-nums">{study.afterMetric}</span>
                  </div>
                </div>

                {/* Editorial Quote */}
                <p className="font-serif-editorial italic text-base sm:text-lg text-[var(--text-primary)] leading-relaxed mb-6">
                  "{study.quote}"
                </p>

                {/* Case Summary */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {study.summary}
                </p>
              </div>

              {/* Author & Discipline Meta */}
              <div className="pt-6 border-t border-[var(--border-subtle)]">
                <div className="font-medium text-sm text-[var(--text-primary)]">
                  {study.name}
                </div>
                <div className="text-xs text-[var(--text-secondary)] mb-3">
                  {study.title} · {study.business}
                </div>

                {/* Clean Unboxed Tags (Zero-Pill Discipline) */}
                <div className="flex items-center gap-2 text-[11px] text-[var(--text-muted)]">
                  {study.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="flex items-center gap-2">
                      <span>{tag}</span>
                      {tIdx < study.tags.length - 1 && <span aria-hidden="true">·</span>}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Aggregate Proof Bar */}
        <div className="mt-16 p-8 rounded-[var(--radius-md)] bg-[var(--accent-tint)] border border-[var(--border-subtle)] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block font-serif-editorial text-3xl font-light text-[var(--text-primary)] tabular-nums">$22.4k</span>
            <span className="text-xs text-[var(--text-secondary)] uppercase tracking-wider">Avg. Retainer Closed</span>
          </div>
          <div>
            <span className="block font-serif-editorial text-3xl font-light text-[var(--text-primary)] tabular-nums">91%</span>
            <span className="text-xs text-[var(--text-secondary)] uppercase tracking-wider">Contract Renewal Rate</span>
          </div>
          <div>
            <span className="block font-serif-editorial text-3xl font-light text-[var(--text-primary)] tabular-nums">16.5 hrs</span>
            <span className="text-xs text-[var(--text-secondary)] uppercase tracking-wider">Avg. Client Workweek</span>
          </div>
          <div>
            <span className="block font-serif-editorial text-3xl font-light text-[var(--text-primary)] tabular-nums">240+</span>
            <span className="text-xs text-[var(--text-secondary)] uppercase tracking-wider">Founders Mentored</span>
          </div>
        </div>

      </div>
    </section>
  );
}
