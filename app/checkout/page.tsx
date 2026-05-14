'use client';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Lock, ShieldCheck, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 px-6 flex items-center justify-center relative overflow-hidden">
      {/* Background cinematic blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* Left: Product & Trust */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Complete your order
          </h1>
          <p className="text-slate-600 text-lg mb-10">
            You are one step away from unlocking the AI creator systems that will transform your growth forever.
          </p>

          <GlassCard intensity="light" className="p-6 mb-8 border-violet-200 bg-violet-50/50">
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-blue-500 rounded-xl shadow-lg flex items-center justify-center">
                <Image src="/icon.svg" alt="Icon" width={32} height={32} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Viral Creator System</h3>
                <p className="text-violet-600 font-semibold">Instant Access</p>
              </div>
              <div className="ml-auto font-extrabold text-2xl text-slate-900">$49</div>
            </div>
          </GlassCard>

          <div className="space-y-4 mb-8">
            {['100% Secure 256-bit Encryption', 'Instant Email Delivery', 'Lifetime Updates Included'].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle size={20} className="text-emerald-500" /> {text}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Checkout Form */}
        <GlassCard intensity="heavy" className="p-8 md:p-10 shadow-2xl bg-white/90">
          <div className="flex items-center gap-2 text-slate-800 font-bold mb-8 pb-4 border-b border-slate-200">
            <Lock size={18} className="text-violet-600" /> Secure Checkout
          </div>

          <form className="space-y-5" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">First Name</label>
                <input type="text" className="cw-input bg-slate-50 border-slate-200 focus:border-violet-500 focus:ring-violet-500/20" placeholder="John" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Name</label>
                <input type="text" className="cw-input bg-slate-50 border-slate-200 focus:border-violet-500 focus:ring-violet-500/20" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address</label>
              <input type="email" className="cw-input bg-slate-50 border-slate-200 focus:border-violet-500 focus:ring-violet-500/20" placeholder="john@example.com" />
            </div>

            <div className="space-y-1 pt-4">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Card Details</label>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <span className="text-slate-400 font-medium">Card information</span>
                <ShieldCheck size={20} className="text-slate-400" />
              </div>
            </div>

            <div className="pt-6">
              <GlassButton variant="primary" className="w-full py-5 text-lg shadow-xl shadow-violet-500/30">
                <Lock size={18} /> Pay Now — $49
              </GlassButton>
            </div>
            
            <p className="text-center text-xs text-slate-500 mt-4 flex items-center justify-center gap-2">
              <ShieldCheck size={14} /> Payments are secure and encrypted
            </p>
          </form>
        </GlassCard>

      </div>
    </div>
  );
}
