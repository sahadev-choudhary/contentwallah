'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SequenceCanvas from '@/components/experience/SequenceCanvas';
import ScrollOverlay from '@/components/experience/ScrollOverlay';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ExperiencePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Proxy state that GSAP will mutate, and the Canvas will read
  const frameProxy = useRef({ frame: 1 });
  
  // Scene Refs for the HTML text overlays
  const scene1Ref = useRef<HTMLDivElement>(null);
  const scene2Ref = useRef<HTMLDivElement>(null);
  const scene3Ref = useRef<HTMLDivElement>(null);
  const scene4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let ctx = gsap.context(() => {
      // Main timeline pinned to the container
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=5000', // Reduced scroll distance to make progression faster and smoother
          scrub: 1,      // Buttery smooth scrubbing (1 second catch-up time)
          pin: true,
          anticipatePin: 1,
        }
      });

      // 1. Core Sequence Tween
      // Animate frame from 1 to 192 over a 192 unit duration.
      // This maps HTML animation absolute timings exactly to frame numbers!
      tl.to(frameProxy.current, {
        frame: 192,
        snap: 'frame', // Snap to whole numbers for discrete frame loading
        ease: 'none',
        duration: 192
      }, 0);

      // 2. HTML Text Orchestration
      // Timeline length = 192, effectively making the timing synonymous with the PNG frame number.
      
      // SCENE 1: "Still struggling to grow?"
      // Starts visible, fades out around frame 30
      tl.to(scene1Ref.current, { autoAlpha: 0, y: -40, duration: 10, ease: 'power2.inOut' }, 20);

      // SCENE 2: "AI changes everything"
      // Fades in at frame 40, fades out at 80 (closing the gap)
      tl.to(scene2Ref.current, { autoAlpha: 1, visibility: 'visible', duration: 15, ease: 'power2.out' }, 40)
        .fromTo('.overlay-text', { scale: 0.95 }, { scale: 1.05, duration: 40, ease: 'none' }, 40) 
        .to(scene2Ref.current, { autoAlpha: 0, y: -40, duration: 15, ease: 'power2.in' }, 80);

      // SCENE 3: "Create Faster. Grow Smarter."
      // Fades in at frame 90, fades out at 135
      tl.to(scene3Ref.current, { autoAlpha: 1, visibility: 'visible', duration: 15, ease: 'power2.out' }, 90)
        .to(scene3Ref.current, { autoAlpha: 0, y: -40, duration: 15, ease: 'power2.in' }, 135);

      // SCENE 4: "The AI Creator Growth System"
      // Fades in at frame 150, stays to the end (frame 192)
      tl.to(scene4Ref.current, { autoAlpha: 1, visibility: 'visible', duration: 15, ease: 'power2.out' }, 150)
        .fromTo('.final-logo', { y: 20 }, { y: 0, duration: 10, ease: 'power2.out' }, 150)
        .fromTo('.final-title', { y: 20 }, { y: 0, duration: 10, ease: 'power2.out' }, 153)
        .fromTo('.final-cta', { y: 20, scale: 0.9 }, { y: 0, scale: 1, duration: 10, ease: 'back.out(1.5)' }, 158);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', width: '100%' }}>
      {/* Scrollable Container (Pinned by GSAP) */}
      <div ref={containerRef} style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden', zIndex: 10 }}>
        
        {/* Render Engine for WebP Sequence */}
        <SequenceCanvas frameProxy={frameProxy} />
        
        {/* DOM Text Overlays */}
        <ScrollOverlay 
          scene1Ref={scene1Ref}
          scene2Ref={scene2Ref}
          scene3Ref={scene3Ref}
          scene4Ref={scene4Ref}
        />

      </div>
    </div>
  );
}
