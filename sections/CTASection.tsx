import AnimatedSection from '@/components/ui/AnimatedSection';
import { Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const perks = [
  'Instant digital delivery to your email',
  'Works on any device — no software needed',
  'Lifetime access + free future updates',
  'Used by 10,000+ real creators',
];

export default function CTASection() {
  return (
    <section style={{ padding: '80px 0', background: '#f8fafc' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <AnimatedSection>
          <div style={{
            background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 50%, #3b82f6 100%)',
            borderRadius: 32, padding: 'clamp(48px, 6vw, 80px) clamp(32px, 5vw, 80px)',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}>
            {/* Decorative blobs */}
            <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', top: -100, right: -100, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', bottom: -80, left: -60, pointerEvents: 'none' }} />
            <div className="dot-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.15 }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <span style={{
                display: 'inline-block', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)',
                background: 'rgba(255,255,255,0.12)', borderRadius: 50,
                padding: '6px 18px', marginBottom: 24,
              }}>
                Start Creating Today
              </span>

              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#fff',
                lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: 20,
              }}>
                Stop Scrolling.<br />Start Growing.
              </h2>

              <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'rgba(255,255,255,0.8)', marginBottom: 36, lineHeight: 1.6, maxWidth: 520, margin: '0 auto 36px' }}>
                Join 10,000+ creators who stopped struggling and started growing using ContentWallah AI systems.
              </p>

              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
                <a href="/#products" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#fff', color: '#7c3aed',
                  padding: '16px 36px', borderRadius: 14, fontWeight: 800, fontSize: '1.05rem',
                  textDecoration: 'none', transition: 'all 0.25s',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                }}>
                  <Zap size={18} />
                  Explore Creator Kits
                </a>
                <a href="/#how" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,0.12)', color: '#fff',
                  padding: '16px 32px', borderRadius: 14, fontWeight: 700, fontSize: '1rem',
                  textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'all 0.25s',
                }}>
                  How It Works <ArrowRight size={16} />
                </a>
              </div>

              <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
                {perks.map(perk => (
                  <span key={perk} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>
                    <CheckCircle2 size={13} style={{ color: 'rgba(255,255,255,0.9)' }} /> {perk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
