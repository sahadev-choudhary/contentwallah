import React from 'react';

export default function SceneEngine({ refObj }: { refObj: React.RefObject<HTMLDivElement | null> }) {
  const cards = [
    { text: 'Viral Hooks', pos: { top: '20%', left: '20%' }, color: '#7c3aed' },
    { text: 'AI Prompts', pos: { top: '30%', right: '20%' }, color: '#3b82f6' },
    { text: 'Reels Scripts', pos: { bottom: '25%', left: '25%' }, color: '#10b981' },
    { text: 'Growth Analytics', pos: { bottom: '35%', right: '25%' }, color: '#f59e0b' },
  ];

  return (
    <div ref={refObj} style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', opacity: 0, visibility: 'hidden' }}>
      <h2 className="engine-text" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, color: '#0f172a', zIndex: 10, textAlign: 'center', letterSpacing: '-0.02em', marginTop: '-15vh' }}>
        The AI Creator Growth System
      </h2>
      
      {cards.map((card, i) => (
        <div key={i} className="engine-card" style={{
          position: 'absolute', ...card.pos, padding: '16px 28px',
          background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)',
          borderRadius: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          border: '1px solid rgba(255,255,255,0.9)',
          fontWeight: 700, color: card.color, fontSize: '1.1rem'
        }}>
          ✨ {card.text}
        </div>
      ))}
    </div>
  );
}
