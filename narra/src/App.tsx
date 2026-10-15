import { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import ThePlateau from './components/ThePlateau';
import PillarsFramework from './components/PillarsFramework';
import CurriculumTabs from './components/CurriculumTabs';
import VaultDeliverables from './components/VaultDeliverables';
import AudioSamplePreview from './components/AudioSamplePreview';
import CaseStudies from './components/CaseStudies';
import AboutMentor from './components/AboutMentor';
import PricingInvestment from './components/PricingInvestment';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ApplicationDrawer from './components/ApplicationDrawer';
import TemplateCustomizer from './components/TemplateCustomizer';
import { ThemeMode } from './types';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('linen');
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  useEffect(() => {
    if (theme === 'linen') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const handleOpenApply = () => {
    setIsApplyOpen(true);
  };

  const handleCloseApply = () => {
    setIsApplyOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-canvas)] text-[var(--text-primary)] transition-colors duration-200">
      {/* Navigation Top Bar */}
      <TopBar 
        onApplyClick={handleOpenApply}
        onCustomizeClick={() => setIsCustomizerOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onApplyClick={handleOpenApply} />

        {/* 2. The Core Tension / Reframe */}
        <ThePlateau />

        {/* 3. The 4-Pillar Methodology */}
        <PillarsFramework />

        {/* 4. Interactive 12-Week Curriculum */}
        <CurriculumTabs onApplyClick={handleOpenApply} />

        {/* 5. The Proprietary Vault (Deliverables & Systems) */}
        <VaultDeliverables />

        {/* 6. Audio Masterclass Preview */}
        <AudioSamplePreview />

        {/* 7. Case Studies & Proof */}
        <CaseStudies />

        {/* 8. Personal Brand Story & Mentor */}
        <AboutMentor />

        {/* 9. Investment & Pricing Table */}
        <PricingInvestment onApplyClick={handleOpenApply} />

        {/* 10. Clarifications & FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onApplyClick={handleOpenApply} />

      {/* Interactive Application Modal */}
      <ApplicationDrawer
        isOpen={isApplyOpen}
        onClose={handleCloseApply}
      />

      {/* Floating Template Customizer & Seller Guide */}
      <TemplateCustomizer
        currentTheme={theme}
        onThemeChange={setTheme}
        isOpen={isCustomizerOpen}
        onToggle={() => setIsCustomizerOpen(!isCustomizerOpen)}
      />
    </div>
  );
}
