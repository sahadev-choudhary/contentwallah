import React from 'react';

export default function SceneChaos({ refObj }: { refObj: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div ref={refObj} style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
      <h1 className="chaos-text" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, color: '#0f172a', zIndex: 10, textAlign: 'center', letterSpacing: '-0.03em' }}>
        Still struggling<br />to grow?
      </h1>
      
      {/* Floating chaos cards */}
      <div className="chaos-card" style={{ position: 'absolute', top: '25%', left: '15%', transform: 'rotate(-12deg)', padding: '16px 24px', background: '#ffffff', borderRadius: 16, boxShadow: '0 20px 40px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9', fontWeight: 700, color: '#ef4444' }}>
        📉 Views Down 40%
      </div>
      
      <div className="chaos-card" style={{ position: 'absolute', bottom: '30%', right: '15%', transform: 'rotate(8deg)', padding: '16px 24px', background: '#ffffff', borderRadius: 16, boxShadow: '0 20px 40px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9', fontWeight: 700, color: '#f59e0b' }}>
        ⚠️ Low Engagement
      </div>
      
      <div className="chaos-card" style={{ position: 'absolute', top: '20%', right: '25%', transform: 'rotate(15deg)', padding: '16px 24px', background: '#ffffff', borderRadius: 16, boxShadow: '0 20px 40px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9', fontWeight: 700, color: '#64748b' }}>
        ❓ What to post today?
      </div>
      
      <div className="chaos-card" style={{ position: 'absolute', bottom: '20%', left: '25%', transform: 'rotate(-5deg)', padding: '16px 24px', background: '#ffffff', borderRadius: 16, boxShadow: '0 20px 40px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9', fontWeight: 700, color: '#64748b' }}>
        ❌ Burnout
      </div>
    </div>
  );
}
