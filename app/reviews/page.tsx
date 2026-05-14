import { Metadata } from 'next';
import TestimonialsSection from '@/sections/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Reviews | ContentWallah',
};

export default function ReviewsPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-16 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Wall of Love</h1>
        <p className="text-lg text-slate-600">See what top creators are saying about ContentWallah systems.</p>
      </div>
      
      <TestimonialsSection />
    </div>
  );
}
