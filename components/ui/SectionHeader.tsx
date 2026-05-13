import AnimatedSection from './AnimatedSection';

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({ eyebrow, title, description, centered = true, className = '' }: SectionHeaderProps) {
  return (
    <AnimatedSection className={`${centered ? 'text-center' : ''} ${className}`} style={{ marginBottom: 56 }}>
      {eyebrow && (
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(59,130,246,0.08))',
          border: '1px solid rgba(124,58,237,0.15)',
          borderRadius: 50, padding: '6px 16px', marginBottom: 20,
          fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em',
          color: '#7c3aed', textTransform: 'uppercase' as const,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7c3aed', display: 'inline-block' }} />
          {eyebrow}
        </div>
      )}
      <h2 style={{
        fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, lineHeight: 1.2,
        color: '#0f172a', marginBottom: description ? 20 : 0,
        letterSpacing: '-0.02em',
      }}>
        {title}
      </h2>
      {description && (
        <p style={{
          fontSize: '1.1rem', color: '#64748b', lineHeight: 1.7,
          maxWidth: 580, margin: centered ? '0 auto' : '0',
        }}>
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
