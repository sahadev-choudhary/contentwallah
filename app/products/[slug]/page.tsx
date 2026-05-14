'use client';
import { useParams } from 'next/navigation';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { motion } from 'framer-motion';
import { CheckCircle, Play, TrendingUp, Zap, Cpu, Star } from 'lucide-react';
import Link from 'next/link';

// Mock data based on slug
const getProductData = (slug: string) => {
  if (slug === 'faceless-blueprint') {
    return {
      name: 'Faceless Creator Blueprint',
      tagline: 'Build automated faceless creator pages using advanced AI systems.',
      color: 'violet',
      price: '$79',
      results: '+450% Average Growth',
      bundle: ['Faceless Niche Playbook', 'Automated Video Workflows', 'AI Voice & Script System', 'Monetization Guide'],
    };
  }
  if (slug === 'content-engine-pro') {
    return {
      name: 'Content Engine Pro',
      tagline: 'The complete creator growth ecosystem. Everything you need to scale.',
      color: 'blue',
      price: '$149',
      results: '10x Faster Creation',
      bundle: ['All Premium Systems', 'Advanced Analytics Dashboard', 'Priority Support', '1-on-1 Strategy Call'],
    };
  }
  return {
    name: 'Viral Creator System',
    tagline: 'AI-powered creator growth operating system. Stop guessing, start growing.',
    color: 'amber',
    price: '$49',
    results: '+3M Viral Reach',
    bundle: ['500+ Viral Hooks', 'Reel Script Templates', 'AI Prompt Engines', 'Content Calendar System'],
  };
};

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = getProductData(slug);

  const isViolet = data.color === 'violet';
  const isBlue = data.color === 'blue';
  
  const bgGradient = isViolet ? 'from-violet-500/10 to-indigo-500/10' : isBlue ? 'from-blue-500/10 to-cyan-500/10' : 'from-amber-500/10 to-orange-500/10';
  const accentColor = isViolet ? 'text-violet-600' : isBlue ? 'text-blue-600' : 'text-amber-500';
  const btnColor = isViolet ? 'btn-primary' : isBlue ? 'btn-primary' : 'btn-primary'; // Adjust as needed

  return (
    <div className="bg-slate-50 min-h-screen pb-32">
      
      {/* 1. PRODUCT HERO */}
      <section className={`pt-40 pb-20 px-6 relative overflow-hidden bg-gradient-to-b ${bgGradient}`}>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-sm font-bold text-slate-800 mb-8">
            <Zap size={16} className={accentColor} /> Premium Creator System
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 drop-shadow-sm">
            {data.name}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto mb-12">
            {data.tagline}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Link href="/checkout" passHref legacyBehavior>
              <GlassButton asChild variant="primary" className="px-12 py-5 text-lg font-bold shadow-2xl">
                <a>Get Instant Access - {data.price}</a>
              </GlassButton>
            </Link>
          </motion.div>
        </div>
        
        {/* Cinematic Floating UI */}
        <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
          <GlassCard intensity="heavy" className="absolute top-[20%] left-[10%] p-4 animate-float hidden lg:block"><TrendingUp className={accentColor} size={24}/></GlassCard>
          <GlassCard intensity="heavy" className="absolute bottom-[20%] right-[10%] p-4 animate-float-d2 hidden lg:block"><Cpu className={accentColor} size={24}/></GlassCard>
        </div>
      </section>

      {/* 2. RESULTS SECTION */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <GlassCard intensity="heavy" className="p-12 text-center bg-white/80">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Proven Results</h2>
          <div className={`text-6xl font-extrabold ${accentColor} mb-4 tracking-tight`}>{data.results}</div>
          <p className="text-slate-600 text-lg font-medium">Average creator improvement in 30 days.</p>
        </GlassCard>
      </section>

      {/* 3. WHAT YOU GET */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Everything inside the system</h2>
          <p className="text-slate-600 text-lg">A complete bundle designed for immediate application.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.bundle.map((item, idx) => (
            <GlassCard key={idx} className="p-8 flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 ${accentColor}`}>
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item}</h3>
                <p className="text-slate-600">Plug-and-play frameworks that eliminate guesswork and accelerate your content output by 10x.</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-24 px-6">
        <GlassCard intensity="heavy" className="max-w-4xl mx-auto p-16 text-center bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50">
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Ready to transform your growth?</h2>
          <p className="text-slate-300 text-lg mb-10">Stop wasting time on trial and error. Copy our proven systems today.</p>
          <Link href="/checkout" passHref legacyBehavior>
            <GlassButton asChild variant="primary" className="px-12 py-5 text-lg font-bold shadow-2xl">
              <a>Secure Your Access Now</a>
            </GlassButton>
          </Link>
        </GlassCard>
      </section>

    </div>
  );
}
