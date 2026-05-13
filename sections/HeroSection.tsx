'use client';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, TrendingUp, Users, Flame, Star } from 'lucide-react';

const floatingCards = [
  { icon: TrendingUp, label: '+340% Views',      color: '#7c3aed', delay: 0,   top: '22%',  left:  '4%'  },
  { icon: Flame,      label: 'Viral Hook',        color: '#f59e0b', delay: 0.4, top: '32%',  right: '5%'  },
  { icon: Users,      label: '10K Followers',     color: '#10b981', delay: 0.8, bottom: '28%', left: '6%' },
  { icon: Star,       label: '5.0 Rating',        color: '#3b82f6', delay: 1.2, bottom: '22%', right: '6%' },
];

export default function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(160deg, #fafbff 0%, #f5f0ff 30%, #f0f7ff 70%, #fafbff 100%)',
      paddingTop: 68,
    }}>
      {/* Background grid */}
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />

      {/* Gradient orbs */}
      <div className="animate-float-slow" style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
        top: -100, right: -100, pointerEvents: 'none',
      }} />
      <div className="animate-float" style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
        bottom: -80, left: -80, pointerEvents: 'none',
      }} />

      {/* Floating cards — desktop only */}
      {floatingCards.map(({ icon: Icon, label, color, delay, ...pos }) => (
        <motion.div
          key={label}
          className="floating-card animate-float"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.8, duration: 0.5 }}
          style={{
            position: 'absolute', ...pos,
            background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.9)',
            borderRadius: 14, padding: '10px 16px',
            display: 'flex', alignItems: 'center', gap: 8,
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)', zIndex: 1,
            fontSize: '0.85rem', fontWeight: 700, color: '#0f172a',
            pointerEvents: 'none',
          }}
        >
          <Icon size={15} style={{ color }} />
          {label}
        </motion.div>
      ))}

      {/* Main content */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px', width: '100%', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)',
              borderRadius: 50, padding: '7px 18px',
              fontSize: '0.82rem', fontWeight: 600, color: '#7c3aed',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#7c3aed', animation: 'pulse-glow 2s infinite' }} />
              Trusted by 10,000+ Creators
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.08,
              color: '#0f172a', letterSpacing: '-0.03em', marginBottom: 28,
            }}>
            Create Viral Content<br />
            <span className="gradient-text">Faster Using AI</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', color: '#64748b', lineHeight: 1.7, marginBottom: 40, maxWidth: 600, margin: '0 auto 40px' }}>
            Scripts, prompts, templates, hooks & creator systems built for the modern content economy.
            Stop guessing. Start growing.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 60 }}>
            <a href="/#products" className="btn-primary" style={{ fontSize: '1rem', padding: '15px 32px' }}>
              <Zap size={18} />
              Get Instant Access
            </a>
            <a href="/#how" className="btn-secondary" style={{ fontSize: '1rem', padding: '15px 32px' }}>
              How It Works <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              display: 'flex', gap: 0, justifyContent: 'center', flexWrap: 'wrap',
              background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.8)', borderRadius: 20,
              padding: '24px 32px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              maxWidth: 600, margin: '0 auto',
            }}>
            {[
              { value: '10,000+', label: 'Creators Helped' },
              { value: '5,00,000+', label: 'Viral Hooks Generated' },
              { value: '2M+', label: 'AI Prompts Used' },
            ].map(({ value, label }, i) => (
              <div key={label} style={{ flex: 1, minWidth: 140, textAlign: 'center', padding: '0 16px', borderRight: i < 2 ? '1px solid #f1f5f9' : 'none' }}>
                <div style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em' }} className="gradient-text">
                  {value}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500, marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .floating-card { display: none !important; }
        }
      `}</style>
    </section>
  );
}
