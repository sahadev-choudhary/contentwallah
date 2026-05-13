import React from 'react';

export default function SceneGrowth({ refObj }: { refObj: React.RefObject<HTMLDivElement | null> }) {
  const stats = [
    { label: 'Reach', value: '+2.4M', color: '#10b981', pos: { top: '15%', left: '15%' } },
    { label: 'Engagement', value: '+380%', color: '#3b82f6', pos: { top: '35%', right: '15%' } },
    { label: 'Content Velocity', value: '10x Faster', color: '#8b5cf6', pos: { bottom: '25%', left: '20%' } },
  ];

  return (
    <div ref={refObj} style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', opacity: 0, visibility: 'hidden' }}>
      <h2 className="growth-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#0f172a', zIndex: 10, textAlign: 'center', letterSpacing: '-0.02em', marginTop: '20vh' }}>
        Create Faster.<br />
        <span style={{ color: '#7c3aed' }}>Grow Smarter.</span>
      </h2>
      
      {stats.map((stat, i) => (
        <div key={i} className="growth-stat" style={{
          position: 'absolute', ...stat.pos, padding: '24px 32px',
          background: '#ffffff', borderRadius: 20, boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
          border: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: 4
        }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {stat.label}
          </span>
          <span style={{ fontSize: '2.5rem', fontWeight: 900, color: stat.color, letterSpacing: '-0.02em' }}>
            {stat.value}
          </span>
        </div>
      ))}
    </div>
  );
}
