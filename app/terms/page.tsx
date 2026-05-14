import { GlassCard } from '@/components/ui/GlassCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | ContentWallah',
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Terms & Conditions</h1>
          <p className="text-slate-600">Last updated: May 14, 2026</p>
        </div>
        
        <GlassCard intensity="light" className="p-8 md:p-12 text-slate-700 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>By accessing and using ContentWallah, you accept and agree to be bound by the terms and provision of this agreement.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8">2. Intellectual Property</h2>
          <p>All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of ContentWallah or its content suppliers.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Use License</h2>
          <p>Our products are licensed, not sold. You may not distribute, modify, or resell any part of our systems without explicit written permission.</p>
        </GlassCard>
      </div>
    </div>
  );
}
