export default function ThePlateau() {
  const comparisons = [
    {
      problemTitle: 'The Commodity Proposal Trap',
      problemDesc: 'Spending 15+ hours crafting bespoke 24-page proposals from scratch, only to be compared on price against generic agencies and junior contractors.',
      solutionTitle: 'The Pre-Sold Diagnostic Architecture',
      solutionDesc: 'A 45-minute paid or qualifying diagnostic that uncovers root organizational leaks, positioning your $20k+ advisory scope as the only rational choice.'
    },
    {
      problemTitle: 'The SOW Scope Creep Treadmill',
      problemDesc: 'Vague deliverable lists that invite endless rounds of revisions, midnight weekend Slack messages, and client resentment.',
      solutionTitle: 'Fixed-Window Advisory Sprints',
      solutionDesc: 'Sovereign boundaries with asynchronous Loom feedback cycles and bi-weekly strategic checkpoints that clients deeply respect.'
    },
    {
      problemTitle: 'The Feast-or-Famine Rollercoaster',
      problemDesc: 'When client work is heavy, marketing vanishes. When client work concludes, you enter a frantic 60-day scramble to find new revenue.',
      solutionTitle: 'Annualized Quarterly Retainers',
      solutionDesc: 'Retaining 3–5 high-trust enterprise and boutique partners on rolling 90-day advisory agreements that compound year after year.'
    }
  ];

  return (
    <section id="the-shift" className="py-20 lg:py-28 bg-[var(--bg-card)] border-b border-[var(--border-subtle)] transition-colors">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        {/* Editorial Eyebrow & Headline */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[var(--accent-primary)] mb-3">
            <span>The Core Tension</span>
            <span aria-hidden="true" className="text-[var(--border-medium)]">/</span>
            <span>Why Working Harder Isn't Working</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-light text-[var(--text-primary)] leading-[1.18] [text-wrap:balance]">
            You do not need more client volume. You need a <span className="italic font-normal text-[var(--accent-primary)]">signature model</span> that commands premium authority.
          </h2>
          
          <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed">
            Most seasoned practitioners believe the bottleneck is their marketing reach. In reality, the bottleneck is offering transactional deliverables instead of high-leverage strategic outcomes.
          </p>
        </div>

        {/* 3-Row Side-by-Side Architectural Contrast */}
        <div className="space-y-6">
          {comparisons.map((item, idx) => (
            <div 
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden transition-all shadow-[var(--shadow-subtle)]"
            >
              {/* Left: The Vendor Trap */}
              <div className="p-8 lg:p-10 border-b md:border-b-0 md:border-r border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)]/40">
                <div className="flex items-center gap-3 text-xs tracking-wider uppercase font-semibold text-[var(--text-muted)] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-medium)]"></span>
                  <span>The Vendor Trap</span>
                </div>
                <h3 className="text-xl font-serif-editorial text-[var(--text-primary)] mb-3 font-normal">
                  {item.problemTitle}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.problemDesc}
                </p>
              </div>

              {/* Right: The Sovereign Solution */}
              <div className="p-8 lg:p-10 bg-[var(--bg-surface)]">
                <div className="flex items-center gap-3 text-xs tracking-wider uppercase font-semibold text-[var(--accent-primary)] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"></span>
                  <span>The Narra Standard</span>
                </div>
                <h3 className="text-xl font-serif-editorial text-[var(--text-primary)] mb-3 font-normal">
                  {item.solutionTitle}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.solutionDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout Quote */}
        <div className="mt-12 p-8 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--accent-tint)]/60 text-center max-w-2xl mx-auto">
          <p className="font-serif-editorial italic text-lg sm:text-xl text-[var(--text-primary)] leading-relaxed mb-3">
            "When you sell deliverables by the hour, clients question every minute. When you sell strategic transformation, clients question why they didn't hire you sooner."
          </p>
          <span className="text-xs font-medium tracking-wider uppercase text-[var(--accent-primary)]">
            Clara Vane · Founder, Studio Narra
          </span>
        </div>

      </div>
    </section>
  );
}
