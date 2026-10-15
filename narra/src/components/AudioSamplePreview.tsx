import { useState, useEffect } from 'react';

export default function AudioSamplePreview() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(18); // percentage

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 98 ? 0 : prev + 1));
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const soundwaveBars = [
    24, 45, 68, 32, 85, 95, 60, 40, 75, 55, 30, 80, 100, 65, 45, 90, 80, 50, 70, 40, 60, 85, 95, 35, 55, 75, 90, 45, 30, 65, 80, 50
  ];

  return (
    <section className="py-16 border-b border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] transition-colors">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        <div className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 sm:p-10 shadow-[var(--shadow-subtle)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Audio Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[var(--accent-primary)] mb-2">
              <span>Sample Masterclass Excerpt</span>
              <span aria-hidden="true" className="text-[var(--border-medium)]">·</span>
              <span className="font-mono">04:12 mins</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif-editorial text-[var(--text-primary)] font-normal mb-2">
              "How to Quote $25,000 on the Diagnostic Call Without Flinching"
            </h3>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Listen to Clara unpack the exact psychological pivot that moves prospects from price shopping to securing your retainers on the spot.
            </p>
          </div>

          {/* Right: Interactive Audio Player Widget */}
          <div className="lg:col-span-7 p-6 rounded-[var(--radius-sm)] bg-[var(--bg-card)] border border-[var(--border-subtle)]">
            <div className="flex items-center gap-4 mb-4">
              {/* Play / Pause button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-full bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm shrink-0"
                aria-label={isPlaying ? 'Pause audio preview' : 'Play audio preview'}
              >
                {isPlaying ? (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                    <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                  </svg>
                ) : (
                  <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                )}
              </button>

              <div className="flex-1">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-medium text-[var(--text-primary)]">
                    {isPlaying ? 'Playing Excerpt...' : 'Click to Play Audio Masterclass'}
                  </span>
                  <span className="font-mono text-[var(--text-muted)] text-[11px] tabular-nums">
                    {Math.floor((progress * 252) / 100 / 60)}:
                    {String(Math.floor((progress * 252) / 100) % 60).padStart(2, '0')} / 04:12
                  </span>
                </div>

                {/* Animated Waveform Visualizer */}
                <div 
                  className="flex items-end gap-1 h-10 w-full cursor-pointer py-1"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    setProgress(Math.round((clickX / rect.width) * 100));
                  }}
                >
                  {soundwaveBars.map((height, i) => {
                    const barPercent = (i / soundwaveBars.length) * 100;
                    const isPassed = barPercent <= progress;
                    return (
                      <span
                        key={i}
                        className={`flex-1 rounded-full transition-all duration-150 ${
                          isPassed ? 'bg-[var(--accent-primary)]' : 'bg-[var(--border-medium)]'
                        }`}
                        style={{
                          height: isPlaying ? `${Math.max(15, (height * (Math.sin(i + progress * 0.2) + 1.2)) / 2)}%` : `${height}%`
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Timestamps of topics inside the recording */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-[var(--text-muted)] pt-3 border-t border-[var(--border-subtle)]">
              <span className="font-medium text-[var(--text-secondary)]">Chapters:</span>
              <span className="cursor-pointer hover:text-[var(--accent-primary)]" onClick={() => setProgress(0)}>00:00 The Anchoring Myth</span>
              <span aria-hidden="true">·</span>
              <span className="cursor-pointer hover:text-[var(--accent-primary)]" onClick={() => setProgress(45)}>01:45 Overcoming Scope Hesitation</span>
              <span aria-hidden="true">·</span>
              <span className="cursor-pointer hover:text-[var(--accent-primary)]" onClick={() => setProgress(78)}>03:10 The Silence Rule</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
