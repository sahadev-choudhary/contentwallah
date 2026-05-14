import type { Metadata } from 'next';
import HeroSection from '@/sections/HeroSection';
import PainSection from '@/sections/PainSection';
import SolutionSection from '@/sections/SolutionSection';
import ProductsSection from '@/sections/ProductsSection';
import HowItWorksSection from '@/sections/HowItWorksSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import EcosystemSection from '@/sections/EcosystemSection';
import CTASection from '@/sections/CTASection';

export const metadata: Metadata = {
  title: 'ContentWallah — AI Creator Growth System',
  description: 'Scripts, prompts, hooks & templates for creators who want to grow faster using AI. Join 10,000+ creators.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <ProductsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <EcosystemSection />
      <CTASection />
    </>
  );
}
