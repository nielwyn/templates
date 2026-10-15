interface TopBarProps {
  onApplyClick: () => void;
  onCustomizeClick: () => void;
}

export default function TopBar({ onApplyClick, onCustomizeClick }: TopBarProps) {
  return (
    <>
      {/* Editorial Announcement Strip */}
      <aside aria-label="Cohort status" className="w-full bg-[var(--accent-tint)] border-b border-[var(--border-subtle)] py-2 px-4 text-center transition-colors">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 text-xs tracking-wide text-[var(--text-secondary)]">
          <span className="font-semibold text-[var(--accent-primary)] uppercase tracking-wider text-[11px]">Winter 2026 Cohort</span>
          <span aria-hidden="true" className="text-[var(--border-medium)]">·</span>
          <span>Only 2 of 8 seats remaining</span>
          <span aria-hidden="true" className="text-[var(--border-medium)]">·</span>
          <span className="hidden sm:inline">Applications close October 31</span>
          <button 
            onClick={onCustomizeClick}
            className="ml-3 text-[11px] underline underline-offset-2 hover:text-[var(--accent-primary)] cursor-pointer text-[var(--accent-secondary)] transition-colors"
            title="Preview seller template colorways & tokens"
          >
            Customize Template
          </button>
        </div>
      </aside>

      {/* Top Bar Contract (3 Zones, gap-8) */}
      <header className="sticky top-0 z-40 w-full bg-[var(--bg-canvas)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] transition-colors">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#" 
            className="text-2xl font-serif-editorial font-light tracking-wide text-[var(--text-primary)] whitespace-nowrap shrink-0 hover:opacity-85 transition-opacity"
          >
            STUDIO <span className="italic font-normal">NARRA</span>
          </a>

          {/* Zone 2: 4-5 single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide text-[var(--text-secondary)]">
            <a href="#the-shift" className="hover:text-[var(--text-primary)] transition-colors whitespace-nowrap shrink-0">
              The Shift
            </a>
            <a href="#framework" className="hover:text-[var(--text-primary)] transition-colors whitespace-nowrap shrink-0">
              The Framework
            </a>
            <a href="#curriculum" className="hover:text-[var(--text-primary)] transition-colors whitespace-nowrap shrink-0">
              Curriculum
            </a>
            <a href="#case-studies" className="hover:text-[var(--text-primary)] transition-colors whitespace-nowrap shrink-0">
              Proof & Results
            </a>
            <a href="#investment" className="hover:text-[var(--text-primary)] transition-colors whitespace-nowrap shrink-0">
              Investment
            </a>
            <a href="#faq" className="hover:text-[var(--text-primary)] transition-colors whitespace-nowrap shrink-0">
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onApplyClick}
              className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] transition-all rounded-[var(--radius-sm)] shadow-[var(--shadow-subtle)] whitespace-nowrap shrink-0 cursor-pointer"
            >
              Apply for Cohort
            </button>
          </div>

        </div>
      </header>
    </>
  );
}
