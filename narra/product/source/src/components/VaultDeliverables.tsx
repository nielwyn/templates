import { useState } from 'react';
import { VAULT_ASSETS } from '../data/content';
import atmosphereImage from '../assets/images/workspace_workshop_atmosphere_1792059117830.jpg';

export default function VaultDeliverables() {
  const [imageError, setImageError] = useState(false);
  const [selectedAssetIndex, setSelectedAssetIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)] transition-colors">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        {/* Section Header with Atmosphere Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[var(--accent-primary)] mb-3">
              <span>The Proprietary Vault</span>
              <span aria-hidden="true" className="text-[var(--border-medium)]">/</span>
              <span>Systems & IP Ready for Deployment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-light text-[var(--text-primary)] leading-[1.18] [text-wrap:balance]">
              The exact contracts, Notion portals, and sales scripts we use for <span className="italic font-normal text-[var(--accent-primary)]">6-figure retainers</span>.
            </h2>

            <p className="mt-5 text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
              You will never write a contract from scratch or wonder what questions to ask on a discovery call. You inherit our complete tested library with lifetime updates.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[var(--radius-md)] overflow-hidden border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
              {!imageError ? (
                <img
                  src={atmosphereImage}
                  alt="Physical still life of strategy notebooks, fountain pen, and color swatches"
                  className="w-full h-[260px] sm:h-[300px] object-cover"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-[260px] bg-[var(--bg-surface-subtle)] flex items-center justify-center text-xs text-[var(--text-muted)]">
                  Narra Vault Systems
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 6-Card Bento Grid of Vault Assets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VAULT_ASSETS.map((asset, index) => (
            <div
              key={index}
              onClick={() => setSelectedAssetIndex(selectedAssetIndex === index ? null : index)}
              className={`p-6 rounded-[var(--radius-sm)] border transition-all cursor-pointer bg-[var(--bg-surface)] ${
                selectedAssetIndex === index
                  ? 'border-[var(--accent-primary)] ring-1 ring-[var(--accent-primary)] shadow-[var(--shadow-card)]'
                  : 'border-[var(--border-subtle)] hover:border-[var(--border-medium)] shadow-[var(--shadow-subtle)]'
              }`}
            >
              {/* Unboxed Metadata (Zero-Pill Rule) */}
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-3 pb-3 border-b border-[var(--border-subtle)]">
                <span className="font-semibold text-[var(--accent-primary)] uppercase tracking-wider text-[11px]">
                  {asset.type}
                </span>
                <span className="font-mono text-[11px] text-[var(--text-secondary)]">
                  {asset.format}
                </span>
              </div>

              <h3 className="font-serif-editorial text-lg text-[var(--text-primary)] font-normal mb-2">
                {asset.title}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                {asset.description}
              </p>

              <div className="flex items-center justify-between text-[11px] font-medium text-[var(--accent-primary)]">
                <span>{selectedAssetIndex === index ? 'Included in Vault ✓' : 'Click to preview breakdown'}</span>
                <span>›</span>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Summary Bar */}
        <div className="mt-12 p-6 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-card)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-serif-editorial text-2xl text-[var(--accent-primary)] font-light">✦</span>
            <div>
              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">Immediate Asset Access</p>
              <p className="text-sm text-[var(--text-primary)] font-medium">Over 42+ production files, templates, and video walkthroughs unlocked on Day 1.</p>
            </div>
          </div>
          <span className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">Estimated Independent Legal & Dev Value: $12,500</span>
        </div>

      </div>
    </section>
  );
}
