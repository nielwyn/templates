import { useState } from 'react';
import { ThemeMode } from '../types';

interface TemplateCustomizerProps {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export default function TemplateCustomizer({
  currentTheme,
  onThemeChange,
  isOpen,
  onToggle
}: TemplateCustomizerProps) {
  const [showSellerGuide, setShowSellerGuide] = useState(false);

  const themes: { id: ThemeMode; name: string; swatch: string; desc: string }[] = [
    { id: 'linen', name: 'Narra Linen & Cedar', swatch: '#9C5336', desc: 'Warm ecru canvas, cedar accent' },
    { id: 'olive', name: 'Tuscan Olive & Clay', swatch: '#4D5D43', desc: 'Sage stone canvas, forest olive' },
    { id: 'noir', name: 'Obsidian & Gold', swatch: '#C5855A', desc: 'Rich dark canvas, warm amber' },
    { id: 'terracotta', name: 'Terracotta Silk', swatch: '#B25036', desc: 'Blush linen canvas, clay accent' }
  ];

  return (
    <>
      {/* Floating Pill Toggle Button at Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={onToggle}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-canvas)] shadow-xl hover:scale-105 active:scale-95 transition-all text-xs font-medium cursor-pointer border border-[var(--border-subtle)]"
          title="Customize colorways & view seller guide"
        >
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: themes.find(t => t.id === currentTheme)?.swatch }}></span>
          <span>Theme & Seller Guide</span>
          <span className="text-[10px] opacity-75 font-mono">{isOpen ? '▼' : '▲'}</span>
        </button>
      </div>

      {/* Slide-Up Customizer Drawer */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-40 w-80 sm:w-96 rounded-[var(--radius-md)] bg-[var(--bg-surface)] border border-[var(--border-medium)] p-6 shadow-2xl transition-all">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]">
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
                Template Preview Engine
              </span>
              <h4 className="font-serif-editorial text-base text-[var(--text-primary)]">
                Narra Sales Page Preset
              </h4>
            </div>
            <button
              onClick={onToggle}
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] text-xs cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Colorway Switcher */}
          <div className="mb-5">
            <label className="block text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)] mb-2.5">
              Select Colorway (:root Tokens)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => onThemeChange(theme.id)}
                  className={`flex items-center gap-2 p-2.5 text-left rounded-[var(--radius-sm)] border text-xs transition-all cursor-pointer ${
                    currentTheme === theme.id
                      ? 'border-[var(--accent-primary)] bg-[var(--accent-tint)] font-semibold'
                      : 'border-[var(--border-subtle)] hover:bg-[var(--bg-surface-subtle)]'
                  }`}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full shrink-0 border border-black/10"
                    style={{ backgroundColor: theme.swatch }}
                  />
                  <div className="truncate">
                    <span className="block truncate text-[11px] text-[var(--text-primary)]">{theme.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Seller Blueprint Action */}
          <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
            <button
              onClick={() => setShowSellerGuide(true)}
              className="text-xs font-semibold text-[var(--accent-primary)] hover:underline cursor-pointer"
            >
              View SELLER-GUIDE.md & Specs →
            </button>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">v1.2.0</span>
          </div>
        </div>
      )}

      {/* Seller Guide Modal */}
      {showSellerGuide && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-stone-950/65 backdrop-blur-sm" onClick={() => setShowSellerGuide(false)} />
          <div className="flex min-h-full items-center justify-center p-4">
            <div 
              className="relative max-w-2xl w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--accent-primary)]">
                    Marketplace Asset Blueprint
                  </span>
                  <h3 className="text-xl font-serif-editorial text-[var(--text-primary)]">
                    SELLER-GUIDE.md · Narra Template
                  </h3>
                </div>
                <button
                  onClick={() => setShowSellerGuide(false)}
                  className="text-xs px-2.5 py-1 border border-[var(--border-subtle)] rounded cursor-pointer"
                >
                  Close
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] uppercase tracking-wider text-xs mb-1">
                    Target Marketplaces & Price Tier
                  </h4>
                  <p>Creative Market ($49–$79 Personal / $149 Commercial), Gumroad ($47), ThemeForest ($39–$59).</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] uppercase tracking-wider text-xs mb-1">
                    Ideal Buyer Avatar
                  </h4>
                  <p>Solopreneurs, specialized consultants, creative directors, executive coaches, boutique agency owners, and educators launching high-ticket advisory programs.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] uppercase tracking-wider text-xs mb-1">
                    Key Listing Tags
                  </h4>
                  <p className="font-mono text-xs text-[var(--text-muted)]">
                    kajabi sales page, coach sales template, editorial website, high converting landing page, consulting template, luxury personal brand, static template
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] uppercase tracking-wider text-xs mb-1">
                    Bundled Architecture
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>Single stylesheet with design tokens in <code>:root</code></li>
                    <li>Zero-pill typographic discipline & editorial aesthetic</li>
                    <li>Interactive curriculum tabs & responsive video/audio preview</li>
                    <li>Multi-step application modal with form validation</li>
                    <li>Full documentation & quick-start README.txt included</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
