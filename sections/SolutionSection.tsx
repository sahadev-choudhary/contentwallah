'use client';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import GradientText from '@/components/ui/GradientText';
import { Bot, Flame, Clapperboard, EyeOff, Palette, CalendarDays, Target, Lightbulb } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Bot,          title: 'AI Prompt Packs',       desc: '1000+ plug-and-play ChatGPT prompts for any niche.' },
  { icon: Flame,        title: 'Viral Hook Libraries',  desc: '500+ tested hooks engineered to stop the scroll.' },
  { icon: Clapperboard, title: 'Reel Script Systems',   desc: '200+ word-for-word scripts ready to film.' },
  { icon: EyeOff,       title: 'Faceless Creator Kits', desc: 'Grow anonymously with AI tools and templates.' },
  { icon: Palette,      title: 'Canva Templates',       desc: '500+ premium templates for every content format.' },
  { icon: CalendarDays, title: 'Content Calendars',     desc: '30-day strategic posting plans that actually work.' },
  { icon: Target,       title: 'Niche Strategy Guides', desc: 'Find your angle and dominate your chosen niche.' },
  { icon: Lightbulb,    title: 'Growth Playbooks',      desc: 'Proven step-by-step systems from 0 to 10K+.' },
];

export default function SolutionSection() {
  return (
    <section id="solution" style={{ padding: '100px 0', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative gradient */}
      <div style={{
        position: 'absolute', width: 800, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.05) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        <SectionHeader
          eyebrow="The Solution"
          title={<>Introducing the<br /><GradientText>AI Creator Growth System</GradientText></>}
          description="Everything you need to create, grow, and monetize your content — all powered by AI and built by creators."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {features.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.06}>
              <div style={{
                padding: '24px 20px', borderRadius: 16, textAlign: 'center',
                background: 'linear-gradient(135deg, #fafbff, #f5f0ff)',
                border: '1px solid rgba(124,58,237,0.1)',
                transition: 'all 0.3s',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #f5f0ff, #f0f7ff)';
                  e.currentTarget.style.borderColor = 'rgba(124,58,237,0.25)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(124,58,237,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #fafbff, #f5f0ff)';
                  e.currentTarget.style.borderColor = 'rgba(124,58,237,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14, margin: '0 auto 14px',
                  background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(124,58,237,0.25)',
                }}>
                  <Icon size={22} color="#fff" />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a', marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6 }}>{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
