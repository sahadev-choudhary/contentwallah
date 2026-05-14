import { GlassCard } from '@/components/ui/GlassCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ContentWallah',
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-slate-600">Last updated: May 14, 2026</p>
        </div>
        
        <GlassCard intensity="light" className="p-8 md:p-12 text-slate-700 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8">2. Use of Information</h2>
          <p>We may use the information we collect about you to provide, maintain, and improve our services, including, for example, to facilitate payments, send receipts, provide products and services you request, and send related information.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Sharing of Information</h2>
          <p>We do not share personal information with third parties except as necessary to provide our services or as required by law.</p>
        </GlassCard>
      </div>
    </div>
  );
}
