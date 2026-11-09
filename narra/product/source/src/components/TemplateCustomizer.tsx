import { ThemeMode } from '../types';

interface TemplateCustomizerProps {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * Floating colorway switcher.
 *
 * Demo/authoring aid: it swaps the `data-theme` attribute on <html> so you can
 * preview the four presets defined in `src/index.css`. Once you've picked one,
 * set it as the initial `theme` state in `App.tsx` and delete this component
 * plus its two props from `App.tsx` — the page needs none of it to work.
 */
export default function TemplateCustomizer({
  currentTheme,
  onThemeChange,
  isOpen,
  onToggle
}: TemplateCustomizerProps) {
  const themes: { id: ThemeMode; name: string; swatch: string }[] = [
    { id: 'linen', name: 'Narra Linen & Cedar', swatch: '#9C5336' },
    { id: 'olive', name: 'Tuscan Olive & Clay', swatch: '#4D5D43' },
    { id: 'noir', name: 'Obsidian & Gold', swatch: '#C5855A' },
    { id: 'terracotta', name: 'Terracotta Silk', swatch: '#B25036' }
  ];

  return (
    <>
      {/* Floating Pill Toggle Button at Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={onToggle}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-canvas)] shadow-xl hover:scale-105 active:scale-95 transition-all text-xs font-medium cursor-pointer border border-[var(--border-subtle)]"
          title="Preview the four built-in colorways"
          aria-expanded={isOpen}
        >
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: themes.find(t => t.id === currentTheme)?.swatch }}
          />
          <span>Colorway</span>
          <span aria-hidden="true" className="text-[10px] opacity-75 font-mono">{isOpen ? '▼' : '▲'}</span>
        </button>
      </div>

      {/* Slide-Up Customizer Drawer */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-40 w-80 sm:w-96 rounded-[var(--radius-md)] bg-[var(--bg-surface)] border border-[var(--border-medium)] p-6 shadow-2xl transition-all">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]">
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
                Colorway Presets
              </span>
              <h4 className="font-serif-editorial text-base text-[var(--text-primary)]">
                Preview a theme
              </h4>
            </div>
            <button
              onClick={onToggle}
              aria-label="Close colorway panel"
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
                  aria-pressed={currentTheme === theme.id}
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

          <p className="pt-3 border-t border-[var(--border-subtle)] text-[11px] leading-relaxed text-[var(--text-muted)]">
            Each preset is a <code className="font-mono">[data-theme]</code> block of CSS
            variables in <code className="font-mono">src/index.css</code>. Edit the tokens there
            to build your own — see the documentation for the full list.
          </p>
        </div>
      )}
    </>
  );
}
