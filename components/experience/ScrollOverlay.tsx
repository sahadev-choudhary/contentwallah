'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ScrollOverlayProps {
  scene1Ref: React.RefObject<HTMLDivElement | null>;
  scene2Ref: React.RefObject<HTMLDivElement | null>;
  scene3Ref: React.RefObject<HTMLDivElement | null>;
  scene4Ref: React.RefObject<HTMLDivElement | null>;
}

export default function ScrollOverlay({ scene1Ref, scene2Ref, scene3Ref, scene4Ref }: ScrollOverlayProps) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 10, pointerEvents: 'none' }}>
      
      {/* SCENE 1: Low Growth */}
      <div ref={scene1Ref} style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 className="overlay-text" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, color: '#ffffff', textShadow: '0 4px 30px rgba(0,0,0,0.8)', textAlign: 'center', letterSpacing: '-0.03em' }}>
          Still struggling<br />to grow?
        </h1>
      </div>

      {/* SCENE 2: AI Activation */}
      <div ref={scene2Ref} style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, visibility: 'hidden' }}>
        <h2 className="overlay-text" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, color: '#ffffff', textShadow: '0 4px 30px rgba(0,0,0,0.8)', textAlign: 'center', letterSpacing: '-0.02em', marginTop: '-15vh' }}>
          AI changes<br />
          <span style={{ background: 'linear-gradient(135deg, #a78bfa, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: 'none' }}>everything.</span>
        </h2>
      </div>

      {/* SCENE 3: Metrics Rise */}
      <div ref={scene3Ref} style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, visibility: 'hidden' }}>
        <h2 className="overlay-text" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, color: '#ffffff', textShadow: '0 4px 30px rgba(0,0,0,0.8)', textAlign: 'center', letterSpacing: '-0.02em', marginTop: '15vh' }}>
          Create Faster.<br />Grow Smarter.
        </h2>
      </div>

      {/* SCENE 4: Ecosystem Reveal */}
      <div ref={scene4Ref} style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: 0, visibility: 'hidden' }}>
        <div className="final-logo" style={{ marginBottom: 30, filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.5))' }}>
          <Image src="/logo-white.svg" alt="ContentWallah" width={240} height={60} />
        </div>
        <h2 className="overlay-text final-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#ffffff', textShadow: '0 4px 30px rgba(0,0,0,0.8)', textAlign: 'center', letterSpacing: '-0.02em', marginBottom: 40 }}>
          The AI Creator Growth System
        </h2>
        <div className="final-cta" style={{ pointerEvents: 'auto' }}>
          <Link href="/" style={{
            background: '#ffffff', color: '#0f172a', padding: '16px 36px',
            borderRadius: 50, fontSize: '1.1rem', fontWeight: 700,
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            display: 'inline-flex', alignItems: 'center', gap: 10,
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}>
            Start Building Smarter
          </Link>
        </div>
      </div>

    </div>
  );
}
