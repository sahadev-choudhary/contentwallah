'use client';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import Link from 'next/link';
import Image from 'next/image';

export default function EcosystemSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 relative text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-[3rem] p-12 md:p-20 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-700/50 shadow-2xl"
      >
        {/* Cinematic glow background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/30 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-10 opacity-90 drop-shadow-lg">
            <Image src="/logo-white.svg" alt="ContentWallah" width={240} height={60} className="h-12 w-auto" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
            Build Your Creator Engine.
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-medium">
            Join thousands of creators who have automated their growth, scaled their reach, and built scalable content machines using our premium AI systems.
          </p>
          
          <Link href="/products" passHref legacyBehavior>
            <GlassButton asChild variant="primary" className="px-12 py-5 text-lg font-bold shadow-2xl shadow-violet-500/30">
              <a>Start Growing With AI</a>
            </GlassButton>
          </Link>
        </div>

        {/* Floating background cards for depth */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <GlassCard intensity="heavy" className="absolute -top-10 -left-10 w-48 h-48 rounded-3xl opacity-20 rotate-12 blur-sm" />
          <GlassCard intensity="heavy" className="absolute -bottom-10 -right-10 w-64 h-64 rounded-3xl opacity-10 -rotate-12 blur-sm" />
        </div>
      </motion.div>
    </section>
  );
}
