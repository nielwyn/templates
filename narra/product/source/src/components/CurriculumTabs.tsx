import { useState } from 'react';
import { CURRICULUM_PHASES } from '../data/content';

interface CurriculumTabsProps {
  onApplyClick: () => void;
}

export default function CurriculumTabs({ onApplyClick }: CurriculumTabsProps) {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const currentPhase = CURRICULUM_PHASES[activePhaseIndex];

  return (
    <section id="curriculum" className="py-20 lg:py-28 border-b border-[var(--border-subtle)] bg-[var(--bg-card)] transition-colors">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        {/* Eyebrow & Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[var(--accent-primary)] mb-3">
            <span>The 12-Week Roadmap</span>
            <span aria-hidden="true" className="text-[var(--border-medium)]">/</span>
            <span>Intimate Step-by-Step Execution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-light text-[var(--text-primary)] leading-[1.18] [text-wrap:balance]">
            Curriculum designed for <span className="italic font-normal text-[var(--accent-primary)]">immediate ROI</span> and permanent systems.
          </h2>

          <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
            Every two weeks includes a live 90-minute strategic working session, one private 1:1 milestone audit with Clara, and full implementation templates.
          </p>
        </div>

        {/* Interactive Segmented Tabs (Compliant with Section 1.A: Interactive Filter Controls) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-sm)] mb-8 shadow-[var(--shadow-subtle)]">
          {CURRICULUM_PHASES.map((phase, idx) => {
            const isActive = activePhaseIndex === idx;
            return (
              <button
                key={phase.id}
                onClick={() => setActivePhaseIndex(idx)}
                className={`py-3.5 px-4 text-left rounded-[var(--radius-sm)] transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-subtle)]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-semibold uppercase tracking-wider ${isActive ? 'text-white/80' : 'text-[var(--text-muted)]'}`}>
                    Phase {phase.phaseNumber}
                  </span>
                  <span className={`text-[11px] font-mono tabular-nums ${isActive ? 'text-white/90' : 'text-[var(--text-muted)]'}`}>
                    {phase.weeks}
                  </span>
                </div>
                <div className="font-serif-editorial text-sm sm:text-base font-normal truncate">
                  {phase.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Box */}
        <div className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 sm:p-12 shadow-[var(--shadow-card)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-8 border-b border-[var(--border-subtle)] gap-4">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[var(--accent-primary)] font-semibold mb-2">
                <span>Phase {currentPhase.phaseNumber}</span>
                <span aria-hidden="true" className="text-[var(--border-medium)]">·</span>
                <span>{currentPhase.weeks}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[var(--text-primary)] font-normal">
                {currentPhase.title}
              </h3>
            </div>

            <button
              onClick={onApplyClick}
              className="self-start lg:self-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[var(--accent-tint)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white transition-all rounded-[var(--radius-sm)] cursor-pointer whitespace-nowrap"
            >
              Enroll in Winter Cohort
            </button>
          </div>

          {/* Phase Core Objective */}
          <div className="mb-8 p-5 rounded-[var(--radius-sm)] bg-[var(--bg-card)] border border-[var(--border-subtle)]">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1">
              Core Objective & Breakthrough
            </span>
            <p className="text-sm sm:text-base text-[var(--text-primary)] font-serif-editorial italic">
              "{currentPhase.objective}"
            </p>
          </div>

          {/* Key Topics & Tangible Deliverables Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: What We Build & Master */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"></span>
                Key Training Modules
              </h4>
              <ul className="space-y-3.5">
                {currentPhase.keyTopics.map((topic, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <span className="font-mono text-xs text-[var(--accent-primary)] mt-0.5">0{tIdx + 1}</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Tangible Artifacts You Walk Away With */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-secondary)]"></span>
                Tangible Practice Deliverables
              </h4>
              <ul className="space-y-3.5">
                {currentPhase.deliverables.map((del, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--accent-secondary)] font-serif-editorial text-sm">✦</span>
                    <span className="font-medium text-[var(--text-primary)]">{del}</span>
                  </li>
                ))}
              </ul>

              {/* Bonus Template Pill Alternative (Clean unboxed banner) */}
              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] flex items-center gap-2">
                <span className="text-[var(--accent-primary)] font-semibold uppercase tracking-wider text-[10px]">Vault Bonus:</span>
                <span className="italic">{currentPhase.templateBonus}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
