'use client';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import GradientText from '@/components/ui/GradientText';
import { Clock, TrendingDown, RefreshCw, Frown, BatteryLow, EyeOff } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const pains: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Clock,        title: 'Hours wasted on content',       desc: 'You spend 3 hours crafting a reel that gets 200 views. Your competitor posts something basic and hits 50K.' },
  { icon: TrendingDown, title: 'Low views despite hard work',   desc: 'You are posting consistently but nothing is working. The algorithm feels rigged against you.' },
  { icon: RefreshCw,    title: 'Stuck in the consistency trap', desc: 'You go hard for 2 weeks, burn out, disappear for a month, and lose all your momentum.' },
  { icon: Frown,        title: "Don't know what to post",       desc: 'You sit there every night staring at a blank screen, paralyzed by content anxiety.' },
  { icon: BatteryLow,   title: 'Creator burnout is real',       desc: 'Content creation used to be fun. Now it feels like a full-time job with no paycheck.' },
  { icon: EyeOff,       title: 'Too shy to show your face',     desc: 'You want to grow online but the idea of being on camera stops you from even starting.' },
];

export default function PainSection() {
  return (
    <section id="pain" style={{ padding: '100px 0', background: '#f8fafc' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          eyebrow="The Real Problem"
          title={<>Do any of these<br /><GradientText>sound familiar?</GradientText></>}
          description="You're not lazy. You're not untalented. You just don't have the right system yet."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {pains.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.07}>
              <div className="card-base" style={{ padding: 28, height: '100%', cursor: 'default' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#f1f5f9')}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, marginBottom: 16,
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(59,130,246,0.08))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={20} style={{ color: '#7c3aed' }} />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#0f172a', marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.7 }}>{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA bridge */}
        <AnimatedSection delay={0.5} style={{ textAlign: 'center', marginTop: 56 }}>
          <p style={{ fontSize: '1.15rem', color: '#0f172a', fontWeight: 600, marginBottom: 8 }}>
            You don&apos;t need to hustle harder.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
            You need the right AI-powered creator system.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
