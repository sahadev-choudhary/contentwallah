import type { Metadata } from 'next';
import HomeScrollSequence from '@/components/home/HomeScrollSequence';
import ProductsSection from '@/sections/ProductsSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import EcosystemSection from '@/sections/EcosystemSection';

export const metadata: Metadata = {
  title: 'ContentWallah — AI Creator Growth System',
  description: 'Scripts, prompts, hooks & templates for creators who want to grow faster using AI. Join 10,000+ creators.',
};

export default function HomePage() {
  return (
    <div className="bg-slate-50 relative">
      {/* 1. The Cinematic Centerpiece */}
      <HomeScrollSequence />
      
      {/* 2. Flagship Products */}
      <div className="relative z-20 bg-slate-50 pt-32 pb-24 border-t border-slate-200">
        <ProductsSection />
      </div>
      
      {/* 3. Testimonials */}
      <div className="relative z-20 bg-slate-50 py-24">
        <TestimonialsSection />
      </div>
      
      {/* 4. Final CTA / Ecosystem */}
      <div className="relative z-20 bg-white py-32 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
        <EcosystemSection />
      </div>
    </div>
  );
}
