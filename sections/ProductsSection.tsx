'use client';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Zap, Play, Layers, Sparkles, TrendingUp, Cpu } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    id: 'viral-creator-system',
    name: 'Viral Creator System',
    description: 'AI-powered creator growth operating system. Stop guessing, start growing.',
    icon: Zap,
    color: 'from-amber-400 to-orange-500',
    iconColor: 'text-amber-500',
    features: ['Viral hooks & structures', 'Reels script frameworks', 'AI prompt engines', 'Creator workflows'],
    price: '$49',
  },
  {
    id: 'faceless-blueprint',
    name: 'Faceless Creator Blueprint',
    description: 'Build automated faceless creator pages using advanced AI systems.',
    icon: Play,
    color: 'from-violet-500 to-indigo-500',
    iconColor: 'text-violet-500',
    features: ['Faceless niche strategies', 'Automation workflows', 'Video script systems', 'AI monetization'],
    price: '$79',
    popular: true,
  },
  {
    id: 'content-engine-pro',
    name: 'Content Engine Pro',
    description: 'The complete creator growth ecosystem. Everything you need to scale.',
    icon: Cpu,
    color: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-500',
    features: ['Everything in previous tiers', 'Advanced AI dashboards', 'Scaling systems', '1-on-1 strategy call'],
    price: '$149',
  }
];

export default function ProductsSection() {
  return (
    <section id="products" className="max-w-7xl mx-auto px-6 relative">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold text-sm mb-6"
        >
          <Sparkles size={16} /> Premium Systems
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"
        >
          Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-500">Creator Systems</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto"
        >
          We don't sell templates. We sell operating systems that transform your content workflow using AI.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
          >
            <GlassCard intensity={product.popular ? "heavy" : "light"} className={`h-full flex flex-col p-8 ${product.popular ? 'border-violet-300 ring-4 ring-violet-500/10 scale-105 z-20' : 'border-slate-200/60 hover:border-slate-300'}`}>
              {product.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-violet-600 to-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-${product.color.split('-')[1]}-500/30`}>
                <product.icon size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h3>
              <p className="text-slate-600 mb-8 text-sm leading-relaxed flex-grow">{product.description}</p>
              
              <div className="text-3xl font-extrabold text-slate-900 mb-8">
                {product.price}
              </div>

              <ul className="flex flex-col gap-4 mb-8">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                    <TrendingUp size={16} className={`shrink-0 mt-0.5 ${product.iconColor}`} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Link href={`/products/${product.id}`} passHref legacyBehavior>
                <GlassButton asChild variant={product.popular ? 'primary' : 'secondary'} className="w-full mt-auto">
                  <a>Explore System</a>
                </GlassButton>
              </Link>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
