import { Metadata } from 'next';
import ProductsSection from '@/sections/ProductsSection';
import TestimonialsSection from '@/sections/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Products | ContentWallah',
  description: 'Flagship AI creator systems to grow your audience faster.',
};

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <ProductsSection />
      
      <div className="mt-32">
        <TestimonialsSection />
      </div>
    </div>
  );
}
