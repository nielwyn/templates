import { useState, useEffect } from 'react';

interface ApplicationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationDrawer({ isOpen, onClose }: ApplicationDrawerProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    website: '',
    practiceType: 'Strategic Design & Brand Architecture',
    monthlyRevenue: '$10k – $20k / month',
    bottleneck: 'Hourly billing ceiling and proposals taking too much time',
    timeline: 'Ready for November 2026 Cohort'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Please provide a valid business email';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (validateStep1()) setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div 
          className="relative transform overflow-hidden rounded-[var(--radius-md)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-xl p-8 sm:p-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Icon */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer w-8 h-8 rounded-full flex items-center justify-center border border-[var(--border-subtle)]"
            aria-label="Close application dialog"
          >
            ✕
          </button>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[var(--accent-primary)] mb-2">
              <span>Studio Narra</span>
              <span aria-hidden="true" className="text-[var(--border-medium)]">·</span>
              <span>Winter Cohort Application</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[var(--text-primary)] font-light">
              {step === 3 ? 'Application Received' : 'Apply for the 12-Week Mentorship'}
            </h3>
            {step !== 3 && (
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2">
                Step {step} of 2 · Strictly 8 seats per cohort to guarantee direct 1:1 mentorship.
              </p>
            )}
          </div>

          {/* Form Step 1: Founder & Practice Profile */}
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
                  Your Full Name <span className="text-[var(--accent-primary)]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Clara Montgomery"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-[var(--border-medium)] bg-[var(--bg-canvas)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                />
                {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
                  Business Email <span className="text-[var(--accent-primary)]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="clara@montgomerystudio.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-[var(--border-medium)] bg-[var(--bg-canvas)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                />
                {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
                  Website, Portfolio or LinkedIn
                </label>
                <input
                  type="url"
                  placeholder="https://montgomerystudio.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-[var(--border-medium)] bg-[var(--bg-canvas)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
                  Core Discipline / Expertise
                </label>
                <select
                  value={formData.practiceType}
                  onChange={(e) => setFormData({ ...formData, practiceType: e.target.value })}
                  className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-[var(--border-medium)] bg-[var(--bg-canvas)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                >
                  <option>Strategic Design & Brand Architecture</option>
                  <option>Independent Executive Advisory / Consulting</option>
                  <option>Product Design & UX Leadership</option>
                  <option>Executive Performance / Specialized Coaching</option>
                  <option>Boutique Creative Agency Owner</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] transition-all rounded-[var(--radius-sm)] cursor-pointer"
                >
                  Continue to Practice Details ›
                </button>
              </div>
            </form>
          )}

          {/* Form Step 2: Practice Bottlenecks & Aspirations */}
          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
                  Current Monthly Practice Revenue
                </label>
                <select
                  value={formData.monthlyRevenue}
                  onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
                  className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-[var(--border-medium)] bg-[var(--bg-canvas)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                >
                  <option>$5,000 – $10,000 / month</option>
                  <option>$10,000 – $20,000 / month</option>
                  <option>$20,000 – $35,000 / month</option>
                  <option>$35,000+ / month</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
                  Biggest Operational Bottleneck
                </label>
                <textarea
                  rows={3}
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  placeholder="e.g. Too much time writing proposals, clients treat me like a pair of hands, feast-and-famine cycles..."
                  className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-[var(--border-medium)] bg-[var(--bg-canvas)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
                  Readiness & Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-[var(--border-medium)] bg-[var(--bg-canvas)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                >
                  <option>Ready for Winter 2026 Cohort (Starts Nov 10)</option>
                  <option>Interested in Spring 2027 Waitlist</option>
                </select>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] border border-[var(--border-medium)] rounded-[var(--radius-sm)] cursor-pointer hover:bg-[var(--bg-surface-subtle)]"
                >
                  ‹ Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] transition-all rounded-[var(--radius-sm)] cursor-pointer"
                >
                  Submit Application for Clara's Review
                </button>
              </div>
            </form>
          )}

          {/* Form Step 3: Success Confirmation State */}
          {step === 3 && (
            <div className="py-4 text-center">
              <div className="w-14 h-14 rounded-full bg-[var(--accent-tint)] text-[var(--accent-primary)] flex items-center justify-center mx-auto mb-4 font-serif-editorial text-2xl">
                ✦
              </div>

              <h4 className="text-xl font-serif-editorial text-[var(--text-primary)] font-normal mb-2">
                Thank you, {formData.fullName}.
              </h4>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 max-w-md mx-auto">
                Your application has been received into Clara's private docket. We review submissions within 24 business hours. If your practice profile is a mutual fit, we will email you an invitation link to schedule your 15-minute diagnostic fit call.
              </p>

              <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs text-left mb-6 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">Application Ref:</span>
                  <span className="font-mono text-[var(--text-primary)]">#NARRA-2026-08</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">Target Cohort:</span>
                  <span className="text-[var(--text-primary)]">{formData.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">Confirmation Sent:</span>
                  <span className="text-[var(--text-primary)]">{formData.email}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="py-3 px-8 text-xs font-semibold uppercase tracking-wider text-white bg-[var(--accent-primary)] rounded-[var(--radius-sm)] cursor-pointer hover:bg-[var(--accent-primary-hover)] transition-all"
              >
                Return to Narra Overview
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
