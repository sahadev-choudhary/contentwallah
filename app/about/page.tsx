import { GlassCard } from '@/components/ui/GlassCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | ContentWallah',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">About ContentWallah</h1>
          <p className="text-lg text-slate-600">Built for creators, by creators.</p>
        </div>
        
        <GlassCard intensity="light" className="p-8 md:p-12 text-slate-700 leading-relaxed space-y-6">
          <p>
            At ContentWallah, we believe that most creators don't fail because of a lack of talent. They fail because they lack the proper systems and workflows to scale their output and reach.
          </p>
          <p>
            Our mission is to democratize access to the same growth engines used by the top 1% of creators. We provide AI-powered prompts, viral script frameworks, and complete creator operating systems designed to eliminate guesswork.
          </p>
          <p>
            As a Helpverse Initiative, we are committed to building a transparent, supportive, and highly effective ecosystem for the modern creator economy.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
