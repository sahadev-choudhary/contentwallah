import type { Metadata } from 'next';
import GradientText from '@/components/ui/GradientText';
import { Zap, Target, Users, Heart } from 'lucide-react';

export const metadata: Metadata = { title: 'About ContentWallah', description: 'Learn about ContentWallah — the AI creator growth ecosystem built for the modern content economy.' };

const values = [
  { icon: Zap,    title: 'Powered by AI',       desc: 'We build AI-first tools that help creators work 10x faster without sacrificing quality.' },
  { icon: Target, title: 'Results-Focused',      desc: 'Every product is built around one goal: measurable growth for real creators.' },
  { icon: Users,  title: 'Community First',      desc: 'We are creators ourselves. We understand the hustle, the burnout, and the wins.' },
  { icon: Heart,  title: 'Built with Purpose',   desc: 'ContentWallah is a Helpverse Initiative. We believe every creator deserves the right tools.' },
];

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', paddingTop: 68 }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(160deg, #fafbff, #f5f0ff)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <span style={{ display: 'inline-block', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7c3aed', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.15)', borderRadius: 50, padding: '6px 18px', marginBottom: 24 }}>Our Story</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.03em', marginBottom: 20 }}>
            Built for Creators,<br /><GradientText>By Creators</GradientText>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.8 }}>
            ContentWallah started from a simple frustration: why is it so hard for talented creators to grow online? We spent months creating content that nobody watched. We tried every tip, every hack — nothing worked consistently.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.8, marginTop: 16 }}>
            Then we discovered the power of AI-powered content systems. We built the toolkit we wished we had — and ContentWallah was born.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
        {/* Values */}
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: 48 }}>Our Values</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, marginBottom: 80 }}>
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} style={{ background: '#fff', border: '1px solid #f1f5f9', borderRadius: 20, padding: 28, boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(124,58,237,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon size={22} style={{ color: '#7c3aed' }} />
              </div>
              <h3 style={{ fontWeight: 800, fontSize: '1rem', color: '#0f172a', marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div style={{ background: 'linear-gradient(135deg, #7c3aed, #3b82f6)', borderRadius: 28, padding: 'clamp(40px, 6vw, 64px)', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', marginBottom: 16 }}>Our Mission</h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, maxWidth: 600, margin: '0 auto' }}>
            To democratize the creator economy by giving every creator — regardless of their budget, experience, or following — access to world-class AI-powered tools and systems that actually drive growth.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginTop: 24 }}>A Helpverse Initiative</p>
        </div>
      </div>
    </div>
  );
}
