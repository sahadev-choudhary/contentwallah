import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import GradientText from '@/components/ui/GradientText';
import { Star, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    text: 'Went from 200 to 15K followers in 60 days. The hook templates are absolutely insane! I was wasting hours creating content that no one watched.',
    author: 'Priya Sharma', role: 'Lifestyle Creator', metric: '15K Followers', avatar: 'P', color: '#7c3aed',
  },
  {
    text: 'The AI Prompt Vault changed everything. I went from posting twice a week to daily content without any burnout. Completely game-changing.',
    author: 'Rahul Verma', role: 'Entrepreneur', metric: '42K Instagram', avatar: 'R', color: '#3b82f6',
  },
  {
    text: 'Started a faceless finance page from zero. Now earning ₹50K/month from digital products. I never showed my face once.',
    author: 'Ananya Joshi', role: 'Faceless Creator', metric: '28K YouTube', avatar: 'A', color: '#10b981',
  },
  {
    text: 'The Reels Script Pack is pure gold. Used 10 scripts, 4 went viral. Best content investment I ever made in 3 years of creating.',
    author: 'Karan Mehta', role: 'Tech Creator', metric: '55K Instagram', avatar: 'K', color: '#f59e0b',
  },
  {
    text: 'My page aesthetic completely transformed overnight with the Canva bundle. People literally DM me asking who designs my content.',
    author: 'Sneha Patel', role: 'Fashion Creator', metric: '22K Instagram', avatar: 'S', color: '#ec4899',
  },
  {
    text: 'Set up the ChatGPT workflows on Sunday and by Monday my entire week of content was planned. This is literally the future of content creation.',
    author: 'Arjun Singh', role: 'Business Educator', metric: '78K YouTube', avatar: 'A', color: '#6366f1',
  },
];

const stats = [
  { value: '10,000+', label: 'Active Creators' },
  { value: '₹2Cr+',   label: 'Creator Revenue Generated' },
  { value: '4.9/5',   label: 'Average Rating' },
  { value: '95%',     label: 'Satisfaction Rate' },
];

export default function TestimonialsSection() {
  return (
    <section id="results" style={{ padding: '100px 0', background: '#f8fafc' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          eyebrow="Creator Results"
          title={<>Real Creators,<br /><GradientText>Real Results</GradientText></>}
          description="Don't take our word for it. Here's what creators are saying after using ContentWallah."
        />

        {/* Stats row */}
        <AnimatedSection>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 0, marginBottom: 56,
            background: '#fff', border: '1px solid #f1f5f9', borderRadius: 20,
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            overflow: 'hidden',
          }}>
            {stats.map(({ value, label }, i) => (
              <div key={label} style={{
                padding: '28px 20px', textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid #f1f5f9' : 'none',
              }}>
                <div className="gradient-text" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>{value}</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonials grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {testimonials.map(({ text, author, role, metric, avatar, color }, i) => (
            <AnimatedSection key={author + i} delay={i * 0.07}>
              <div className="card-base" style={{ padding: 28, height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* Stars */}
                <div style={{ display: 'flex', gap: 3 }}>
                  {Array(5).fill(0).map((_, j) => <Star key={j} size={13} style={{ color: '#f59e0b', fill: '#f59e0b' }} />)}
                </div>
                <p style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.75, flex: 1 }}>
                  &ldquo;{text}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 4, borderTop: '1px solid #f8fafc' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: `linear-gradient(135deg, ${color}, ${color}99)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 800, fontSize: '1rem', color: '#fff', flexShrink: 0,
                  }}>{avatar}</div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>{author}</p>
                    <p style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{role}</p>
                  </div>
                  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.78rem', color: '#10b981', fontWeight: 700 }}>
                    <TrendingUp size={12} /> {metric}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
