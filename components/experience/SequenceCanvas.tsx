'use client';
import { useEffect, useRef, useState } from 'react';

// Configuration for the WebP Sequence
const FRAME_COUNT = 192;
const INITIAL_LOAD_COUNT = 20; // Only block the UI for the first 20 frames
const FRAME_PATH = (index: number) => `/Dashboard Sequence WebP/${index.toString().padStart(5, '0')}.webp`;

export default function SequenceCanvas({ frameProxy }: { frameProxy: React.MutableRefObject<{ frame: number }> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const [initialLoaded, setInitialLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // --- PROGRESSIVE PRELOADER ---
    let loadedCount = 0;
    
    const loadImage = (index: number) => {
      const img = new Image();
      img.src = FRAME_PATH(index);
      img.onload = () => {
        loadedCount++;
        
        // Force draw frame 1 as soon as it's ready so the screen isn't blank
        if (index === 1) renderFrame();
        
        // Remove loading screen once initial critical frames are ready
        if (loadedCount === INITIAL_LOAD_COUNT) {
          setInitialLoaded(true);
        }
      };
      imagesRef.current[index] = img;
    };

    // 1. Load initial critical frames immediately
    for (let i = 1; i <= INITIAL_LOAD_COUNT; i++) {
      loadImage(i);
    }

    // 2. Lazy load the rest silently in the background
    // Using a slight delay to ensure initial UI rendering is prioritized
    setTimeout(() => {
      for (let i = INITIAL_LOAD_COUNT + 1; i <= FRAME_COUNT; i++) {
        loadImage(i);
      }
    }, 500);

    // --- HIGH PERFORMANCE RENDER FUNCTION ---
    const renderFrame = () => {
      if (!canvas || !ctx) return;
      
      const frameIndex = Math.max(1, Math.min(FRAME_COUNT, Math.round(frameProxy.current.frame)));
      const img = imagesRef.current[frameIndex];

      // Only draw if the image exists and is fully downloaded
      if (img && img.complete && img.naturalWidth > 0) {
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.naturalWidth / img.naturalHeight;
        
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgRatio;
          drawHeight = canvas.height;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        }

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    // --- RESIZE LOGIC ---
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      ctx.scale(dpr, dpr);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      renderFrame();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // --- GSAP RENDER LOOP ---
    let rafId: number;
    let lastFrame = -1;
    
    const loop = () => {
      const currentFrame = Math.max(1, Math.min(FRAME_COUNT, Math.round(frameProxy.current.frame)));
      if (currentFrame !== lastFrame) {
        renderFrame();
        lastFrame = currentFrame;
      }
      rafId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rafId);
      // Memory cleanup: nullify image references
      imagesRef.current = [];
    };
  }, []);

  return (
    <>
      {/* Initial Critical Loader */}
      {!initialLoaded && (
        <div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', zIndex: 100, transition: 'opacity 0.5s' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
             <div style={{ width: 40, height: 40, border: '3px solid #f1f5f9', borderTopColor: '#0f172a', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
             <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
               Initializing Cinematic Experience...
             </div>
          </div>
          <style>{`
            @keyframes spin { 100% { transform: rotate(360deg); } }
          `}</style>
        </div>
      )}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: initialLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-out'
        }}
      />
    </>
  );
}
