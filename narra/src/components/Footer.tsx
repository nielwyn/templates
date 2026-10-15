interface FooterProps {
  onApplyClick: () => void;
}

export default function Footer({ onApplyClick }: FooterProps) {
  return (
    <footer className="py-16 lg:py-20 bg-[var(--bg-card)] border-t border-[var(--border-subtle)] transition-colors">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        {/* Upper Footer: Final Call to Action */}
        <div className="pb-16 mb-16 border-b border-[var(--border-subtle)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-primary)] mb-2 block">
              Final Invitation · Winter 2026
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif-editorial text-[var(--text-primary)] font-light leading-snug">
              Ready to transition from sporadic projects to <span className="italic font-normal text-[var(--accent-primary)]">retained advisory sovereignty</span>?
            </h3>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              Applications are reviewed sequentially. Only 2 of 8 seats remain open for the upcoming cohort.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={onApplyClick}
              className="px-8 py-4 text-xs font-semibold tracking-wider uppercase text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] transition-all rounded-[var(--radius-sm)] shadow-[var(--shadow-card)] cursor-pointer"
            >
              Apply for Cohort
            </button>
          </div>
        </div>

        {/* Lower Footer: Navigation & Meta */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-serif-editorial font-light text-[var(--text-primary)] mb-4 inline-block">
              STUDIO <span className="italic font-normal">NARRA</span>
            </a>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm mb-4">
              A private advisory accelerator and high-ticket offer architecture program for independent consultants, creative directors, and specialized practitioners.
            </p>
            <div className="text-xs text-[var(--text-muted)]">
              Support & Inquiries: <a href="mailto:nghoangnghiabt@gmail.com" className="underline hover:text-[var(--accent-primary)]">nghoangnghiabt@gmail.com</a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[var(--text-primary)] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[var(--text-secondary)]">
              <li><a href="#the-shift" className="hover:text-[var(--accent-primary)] transition-colors">The Shift</a></li>
              <li><a href="#framework" className="hover:text-[var(--accent-primary)] transition-colors">The 4 Pillars</a></li>
              <li><a href="#curriculum" className="hover:text-[var(--accent-primary)] transition-colors">12-Week Curriculum</a></li>
              <li><a href="#case-studies" className="hover:text-[var(--accent-primary)] transition-colors">Client Case Studies</a></li>
              <li><a href="#investment" className="hover:text-[var(--accent-primary)] transition-colors">Enrollment & Pricing</a></li>
            </ul>
          </div>

          {/* Column 3: Trust & Licensing */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[var(--text-primary)] mb-4">
              Template Architecture
            </h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
              Built with clean semantic HTML, Tailwind CSS, Google Fonts, and custom design tokens in <code>:root</code>. Free commercial licensing for fonts and curated assets.
            </p>
            <span className="text-[11px] font-mono text-[var(--text-muted)]">Template Build v1.2.0</span>
          </div>

        </div>

        {/* Quiet Bottom Copyright */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-4">
          <p>© {new Date().getFullYear()} Studio Narra. All rights reserved. Designed for boutique small business leaders.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-[var(--text-secondary)] cursor-pointer">Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-[var(--text-secondary)] cursor-pointer">Terms of Service</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-[var(--text-secondary)] cursor-pointer">Discerning Fit Guarantee</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
