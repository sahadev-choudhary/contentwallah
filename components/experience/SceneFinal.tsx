import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SceneFinal({ refObj }: { refObj: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div ref={refObj} style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', opacity: 0, visibility: 'hidden' }}>
      
      <div className="final-logo" style={{ marginBottom: 40 }}>
        <Image src="/logo.svg" alt="ContentWallah" width={240} height={60} />
      </div>

      <h2 className="final-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0f172a', zIndex: 10, textAlign: 'center', letterSpacing: '-0.02em', marginBottom: 40 }}>
        Build Your Creator Engine
      </h2>
      
      <div className="final-cta" style={{ pointerEvents: 'auto' }}>
        <Link href="/" style={{
          background: '#0f172a', color: '#ffffff', padding: '16px 32px',
          borderRadius: 50, fontSize: '1.1rem', fontWeight: 600,
          boxShadow: '0 10px 25px rgba(15,23,42,0.2)',
          display: 'inline-flex', alignItems: 'center', gap: 10,
          transition: 'transform 0.2s'
        }}>
          Start Creating Smarter
        </Link>
      </div>
      
    </div>
  );
}
