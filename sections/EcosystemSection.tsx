import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import GradientText from '@/components/ui/GradientText';
import { Bot, BarChart3, Users, Zap, Globe, BookOpen } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const ecosystem: { icon: LucideIcon; title: string; desc: string; badge: string; badgeColor: string }[] = [
  { icon: Bot,       title: 'AI Creator Tools',      badge: 'Live',        badgeColor: '#10b981', desc: 'AI-powered hooks, scripts, captions, and prompt systems that do the heavy lifting for you.' },
  { icon: Zap,       title: 'Creator Systems',        badge: 'Live',        badgeColor: '#10b981', desc: 'Complete step-by-step frameworks and playbooks to grow any type of content creator account.' },
  { icon: BarChart3, title: 'Growth Analytics',       badge: 'Coming Soon', badgeColor: '#f59e0b', desc: 'Track your content performance, identify viral patterns, and optimize your strategy with data.' },
  { icon: Users,     title: 'Creator Community',      badge: 'Coming Soon', badgeColor: '#f59e0b', desc: 'Exclusive access to a private network of high-performing creators to collaborate and grow together.' },
  { icon: Globe,     title: 'SaaS Creator Platform',  badge: 'Roadmap',     badgeColor: '#7c3aed', desc: 'A full creator dashboard to manage your content, products, and audience — all in one place.' },
  { icon: BookOpen,  title: 'Creator Academy',        badge: 'Roadmap',     badgeColor: '#7c3aed', desc: 'In-depth courses and live workshops on AI content creation, monetization, and personal branding.' },
];

export default function EcosystemSection() {
  return (
    <section id="ecosystem" style={{ padding: '100px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          eyebrow="The Ecosystem"
          title={<>More Than Products.<br /><GradientText>A Creator Ecosystem.</GradientText></>}
          description="ContentWallah is building the complete creator economy infrastructure — from tools to community to SaaS."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {ecosystem.map(({ icon: Icon, title, desc, badge, badgeColor }, i) => (
            <AnimatedSection key={title} delay={i * 0.08}>
              <div className="card-base" style={{ padding: 28, height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: 'linear-gradient(135deg, #f5f0ff, #f0f7ff)',
                    border: '1px solid rgba(124,58,237,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={22} style={{ color: '#7c3aed' }} />
                  </div>
                  <span style={{
                    fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em',
                    textTransform: 'uppercase', padding: '4px 10px',
                    background: `${badgeColor}12`, color: badgeColor,
                    border: `1px solid ${badgeColor}25`, borderRadius: 50,
                  }}>{badge}</span>
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0f172a', marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.7 }}>{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
