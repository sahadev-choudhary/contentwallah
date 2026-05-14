'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SequenceCanvas from '@/components/experience/SequenceCanvas';
import ScrollOverlay from '@/components/experience/ScrollOverlay';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomeScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameProxy = useRef({ frame: 1 });
  
  const scene1Ref = useRef<HTMLDivElement>(null);
  const scene2Ref = useRef<HTMLDivElement>(null);
  const scene3Ref = useRef<HTMLDivElement>(null);
  const scene4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=5000',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      tl.to(frameProxy.current, {
        frame: 192,
        snap: 'frame',
        ease: 'none',
        duration: 192
      }, 0);

      // SCENE 1
      tl.to(scene1Ref.current, { autoAlpha: 0, y: -40, duration: 10, ease: 'power2.inOut' }, 20);

      // SCENE 2
      tl.to(scene2Ref.current, { autoAlpha: 1, visibility: 'visible', duration: 15, ease: 'power2.out' }, 40)
        .fromTo('.overlay-text-2', { scale: 0.95 }, { scale: 1.05, duration: 40, ease: 'none' }, 40) 
        .to(scene2Ref.current, { autoAlpha: 0, y: -40, duration: 15, ease: 'power2.in' }, 80);

      // SCENE 3
      tl.to(scene3Ref.current, { autoAlpha: 1, visibility: 'visible', duration: 15, ease: 'power2.out' }, 90)
        .to(scene3Ref.current, { autoAlpha: 0, y: -40, duration: 15, ease: 'power2.in' }, 135);

      // SCENE 4
      tl.to(scene4Ref.current, { autoAlpha: 1, visibility: 'visible', duration: 15, ease: 'power2.out' }, 150)
        .fromTo('.final-logo', { y: 20 }, { y: 0, duration: 10, ease: 'power2.out' }, 150)
        .fromTo('.final-title', { y: 20 }, { y: 0, duration: 10, ease: 'power2.out' }, 153)
        .fromTo('.final-cta', { y: 20, scale: 0.9 }, { y: 0, scale: 1, duration: 10, ease: 'back.out(1.5)' }, 158);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full bg-white z-10" style={{ height: '100vh' }}>
      <div ref={containerRef} className="relative w-full h-[100vh] overflow-hidden">
        <SequenceCanvas frameProxy={frameProxy} />
        <ScrollOverlay 
          scene1Ref={scene1Ref}
          scene2Ref={scene2Ref}
          scene3Ref={scene3Ref}
          scene4Ref={scene4Ref}
        />
      </div>
    </section>
  );
}
