'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mesh } from 'three';
import ExperienceCanvas from '@/components/experience/ExperienceCanvas';
import SceneChaos from '@/components/experience/SceneChaos';
import SceneAI from '@/components/experience/SceneAI';
import SceneEngine from '@/components/experience/SceneEngine';
import SceneGrowth from '@/components/experience/SceneGrowth';
import SceneFinal from '@/components/experience/SceneFinal';

// Register GSAP ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ExperiencePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Proxy state for GSAP to animate, avoiding async R3F ref issues
  const orbState = useRef({ scale: 0, y: -2, x: 0, z: 0 });
  
  // Scene Refs
  const scene1Ref = useRef<HTMLDivElement>(null);
  const scene2Ref = useRef<HTMLDivElement>(null);
  const scene3Ref = useRef<HTMLDivElement>(null);
  const scene4Ref = useRef<HTMLDivElement>(null);
  const scene5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=6000',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // ---- INITIAL STATE ----
      orbState.current = { scale: 0, y: -2, x: 0, z: 0 };

      // ---- SCENE 1: Chaos (0 to 1) ----
      tl.addLabel('scene1')
        .to('.chaos-card', { y: -50, autoAlpha: 0, rotation: 0, duration: 1, stagger: 0.1, ease: 'power2.inOut' })
        .to('.chaos-text', { autoAlpha: 0, y: -30, duration: 1, ease: 'power2.inOut' }, '<0.5')
        
      // ---- SCENE 2: AI Activation (1 to 2) ----
        .addLabel('scene2')
        .to(scene2Ref.current, { autoAlpha: 1, visibility: 'visible', duration: 1 }, 'scene2')
        .to(orbState.current, { scale: 1, y: 0, x: 0, z: 0, duration: 1.5, ease: 'power2.out' }, 'scene2')
        .to('.ai-text', { scale: 1.05, duration: 2, ease: 'none' }, 'scene2')
        
      // ---- SCENE 3: Content Engine (3 to 4) ----
        .addLabel('scene3', '+=1')
        .to(scene2Ref.current, { autoAlpha: 0, duration: 1 }, 'scene3')
        .to(orbState.current, { scale: 0.5, y: 1.5, x: 0, z: 0, duration: 1 }, 'scene3')
        .to(scene3Ref.current, { autoAlpha: 1, visibility: 'visible', duration: 1 }, 'scene3+=0.5')
        .from('.engine-card', { y: 80, autoAlpha: 0, duration: 1, stagger: 0.15, ease: 'back.out(1.5)' }, 'scene3+=0.5')
        
      // ---- SCENE 4: Viral Growth (5 to 6) ----
        .addLabel('scene4', '+=1')
        .to(scene3Ref.current, { autoAlpha: 0, y: -50, duration: 1 }, 'scene4')
        .to(orbState.current, { x: 3, y: 0, z: 0, duration: 1 }, 'scene4')
        .to(scene4Ref.current, { autoAlpha: 1, visibility: 'visible', duration: 1 }, 'scene4+=0.5')
        .from('.growth-stat', { scale: 0.8, autoAlpha: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }, 'scene4+=0.5')
        
      // ---- SCENE 5: Final Ecosystem (7 to 8) ----
        .addLabel('scene5', '+=1')
        .to(scene4Ref.current, { autoAlpha: 0, duration: 1 }, 'scene5')
        .to(orbState.current, { x: 0, y: 0, z: 0, scale: 4, duration: 1.5, ease: 'power2.inOut' }, 'scene5')
        .to(scene5Ref.current, { autoAlpha: 1, visibility: 'visible', duration: 1 }, 'scene5+=0.5')
        .from('.final-logo', { y: 30, autoAlpha: 0, duration: 1 }, 'scene5+=1')
        .from('.final-title', { y: 30, autoAlpha: 0, duration: 1 }, 'scene5+=1.2')
        .from('.final-cta', { y: 30, autoAlpha: 0, duration: 1 }, 'scene5+=1.4');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div style={{ background: '#fafbff', minHeight: '100vh', width: '100%' }}>
      {/* 3D Background Canvas */}
      <ExperienceCanvas orbState={orbState} />
      
      {/* Scrollable Container (Pinned by GSAP) */}
      <div ref={containerRef} style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden', zIndex: 10 }}>
        <SceneChaos refObj={scene1Ref} />
        <SceneAI refObj={scene2Ref} />
        <SceneEngine refObj={scene3Ref} />
        <SceneGrowth refObj={scene4Ref} />
        <SceneFinal refObj={scene5Ref} />
      </div>
    </div>
  );
}
