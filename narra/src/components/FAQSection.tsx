import { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';

export default function FAQSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    commitment: true // open first by default
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 border-b border-[var(--border-subtle)] bg-[var(--bg-card)] transition-colors">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[var(--accent-primary)] mb-3">
            <span>Clarifications</span>
            <span aria-hidden="true" className="text-[var(--border-medium)]">/</span>
            <span>Frequently Addressed Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-light text-[var(--text-primary)] leading-[1.18] [text-wrap:balance]">
            Everything you need to know before <span className="italic font-normal text-[var(--accent-primary)]">submitting your application</span>.
          </h2>

          <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
            Have a question not covered here? Email our studio directly at <a href="mailto:nghoangnghiabt@gmail.com" className="underline hover:text-[var(--accent-primary)]">nghoangnghiabt@gmail.com</a>.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = !!openIds[item.id];
            return (
              <div
                key={item.id}
                className="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden shadow-[var(--shadow-subtle)] transition-colors"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[var(--bg-surface-subtle)]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-editorial text-lg sm:text-xl font-normal text-[var(--text-primary)]">
                    {item.question}
                  </span>
                  <span className={`w-6 h-6 rounded-full border border-[var(--border-medium)] flex items-center justify-center text-xs font-mono shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-45 text-[var(--accent-primary)] border-[var(--accent-primary)]' : 'text-[var(--text-muted)]'}`}>
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)]/30">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
