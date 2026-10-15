export interface CaseStudy {
  id: string;
  name: string;
  title: string;
  business: string;
  beforeMetric: string;
  afterMetric: string;
  quote: string;
  summary: string;
  tags: string[];
}

export interface CurriculumPhase {
  id: string;
  phaseNumber: string;
  title: string;
  weeks: string;
  objective: string;
  keyTopics: string[];
  deliverables: string[];
  templateBonus: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export type ThemeMode = 'linen' | 'olive' | 'noir' | 'terracotta';
