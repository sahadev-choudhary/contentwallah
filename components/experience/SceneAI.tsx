import React from 'react';

export default function SceneAI({ refObj }: { refObj: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div ref={refObj} style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', opacity: 0, visibility: 'hidden' }}>
      <h2 className="ai-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#0f172a', zIndex: 10, textAlign: 'center', letterSpacing: '-0.02em', marginTop: '20vh' }}>
        AI changes <span style={{ background: 'linear-gradient(135deg, #7c3aed, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>everything.</span>
      </h2>
    </div>
  );
}
