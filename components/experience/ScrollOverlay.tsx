'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { BarChart, Activity, Zap, Layers, Sparkles, TrendingUp, Users } from 'lucide-react';

interface ScrollOverlayProps {
  scene1Ref: React.RefObject<HTMLDivElement | null>;
  scene2Ref: React.RefObject<HTMLDivElement | null>;
  scene3Ref: React.RefObject<HTMLDivElement | null>;
  scene4Ref: React.RefObject<HTMLDivElement | null>;
}

export default function ScrollOverlay({ scene1Ref, scene2Ref, scene3Ref, scene4Ref }: ScrollOverlayProps) {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      
      {/* SCENE 1: Dormant Creator State */}
      <div ref={scene1Ref} className="absolute inset-0 flex flex-col items-center justify-center pt-20">
        
        {/* Floating Dead Analytics Cards */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
           <GlassCard intensity="light" className="absolute top-[25%] left-[15%] p-4 w-48 -rotate-6 animate-float-slow">
             <div className="flex items-center gap-3 mb-2"><Activity size={16} className="text-slate-400" /><span className="text-xs font-semibold text-slate-500">Engagement</span></div>
             <div className="h-12 w-full border-b border-dashed border-slate-300 flex items-end"><div className="h-2 w-full bg-slate-200 rounded-t-sm" /></div>
           </GlassCard>
           <GlassCard intensity="light" className="absolute bottom-[30%] right-[15%] p-4 w-48 rotate-3 animate-float-d2">
             <div className="flex items-center gap-3 mb-2"><Users size={16} className="text-slate-400" /><span className="text-xs font-semibold text-slate-500">Followers</span></div>
             <div className="text-xl font-bold text-slate-400">+12</div>
             <div className="text-[10px] text-slate-400 mt-1">Last 30 days</div>
           </GlassCard>
        </div>

        <div className="relative z-10 text-center max-w-3xl px-6 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 drop-shadow-2xl">
            Still struggling to grow?
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto mb-10 leading-relaxed shadow-white/50 drop-shadow-md">
            Most creators don't fail because of talent. They fail because they lack systems.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pointer-events-auto">
            <Link href="/products" passHref legacyBehavior>
              <GlassButton asChild variant="primary" className="px-8 py-4 text-base">
                <a>Explore The System</a>
              </GlassButton>
            </Link>
            <GlassButton variant="secondary" className="px-8 py-4 text-base gap-2 group">
              <Play size={18} className="text-slate-600 group-hover:text-violet-600 transition-colors" />
              Watch Transformation
            </GlassButton>
          </div>
        </div>
      </div>

      {/* SCENE 2: AI Activation */}
      <div ref={scene2Ref} className="absolute inset-0 flex items-center justify-center opacity-0 invisible">
        
        {/* Floating AI Cards */}
        <div className="absolute inset-0 pointer-events-none">
           <GlassCard className="absolute top-[20%] left-[20%] p-3 px-5 flex items-center gap-3 animate-float"><Zap size={18} className="text-amber-500" /><span className="font-semibold text-slate-800 text-sm">Viral Hooks</span></GlassCard>
           <GlassCard className="absolute top-[35%] right-[18%] p-3 px-5 flex items-center gap-3 animate-float-d1"><Sparkles size={18} className="text-violet-500" /><span className="font-semibold text-slate-800 text-sm">AI Prompts</span></GlassCard>
           <GlassCard className="absolute bottom-[25%] left-[25%] p-3 px-5 flex items-center gap-3 animate-float-d2"><Layers size={18} className="text-blue-500" /><span className="font-semibold text-slate-800 text-sm">Reel Scripts</span></GlassCard>
        </div>

        <h2 className="overlay-text-2 text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight text-center drop-shadow-xl -mt-[15vh]">
          AI changes<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-500">everything.</span>
        </h2>
      </div>

      {/* SCENE 3: System Expansion */}
      <div ref={scene3Ref} className="absolute inset-0 flex items-center justify-center opacity-0 invisible">
        
        {/* Expanding System Dashboards */}
        <div className="absolute inset-0 pointer-events-none">
           <GlassCard intensity="heavy" className="absolute top-[15%] right-[10%] p-5 w-64 animate-float-slow">
             <div className="text-sm font-semibold text-slate-500 mb-1">Total Reach</div>
             <div className="text-3xl font-extrabold text-slate-900">+2.4M</div>
             <div className="mt-2 text-xs font-semibold text-emerald-500 flex items-center gap-1"><TrendingUp size={12}/> +1,240% increase</div>
           </GlassCard>
           <GlassCard intensity="heavy" className="absolute bottom-[20%] left-[12%] p-5 w-64 animate-float-d1">
             <div className="text-sm font-semibold text-slate-500 mb-1">Engagement Rate</div>
             <div className="text-3xl font-extrabold text-slate-900">+380%</div>
             <div className="mt-2 text-xs font-semibold text-emerald-500 flex items-center gap-1"><TrendingUp size={12}/> Massive spike</div>
           </GlassCard>
           <GlassCard className="absolute top-[40%] left-[5%] p-3 px-5 flex items-center gap-3 animate-float-d2"><Zap size={18} className="text-violet-600" /><span className="font-semibold text-slate-800 text-sm">10x Faster Creation</span></GlassCard>
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight text-center drop-shadow-xl mt-[15vh]">
          The AI Creator<br />Growth System
        </h2>
      </div>

      {/* SCENE 4: Final Ecosystem Reveal */}
      <div ref={scene4Ref} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 invisible">
        <div className="final-logo mb-8 drop-shadow-xl">
          <Image src="/logo.svg" alt="ContentWallah" width={280} height={70} className="h-16 w-auto" />
        </div>
        <h2 className="final-title text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight text-center mb-10 drop-shadow-lg">
          Build Your Creator Engine.
        </h2>
        <div className="final-cta pointer-events-auto">
          <Link href="/products" passHref legacyBehavior>
            <GlassButton asChild variant="primary" className="px-10 py-5 text-lg shadow-2xl shadow-violet-500/20">
              <a>Start Growing With AI</a>
            </GlassButton>
          </Link>
        </div>
      </div>

    </div>
  );
}

// Internal component helper for Play icon
function Play({ size, className }: { size: number, className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  );
}
