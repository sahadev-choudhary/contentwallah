'use client';
import { useEffect, useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import GradientText from '@/components/ui/GradientText';
import { ShoppingCart, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  { icon: ShoppingCart, title: 'Choose Your Kit',           desc: "Pick the exact creator kit built for your goals — whether it's viral hooks, AI prompts, or a complete creator system.", color: '#7c3aed' },
  { icon: Rocket,       title: 'Download & Apply',          desc: 'Get instant access to everything. Open your kit, follow the system, and start creating content that actually performs.', color: '#6366f1' },
  { icon: TrendingUp,   title: 'Watch Your Growth Explode', desc: 'Our creators see results in the first week. Follow the system consistently and watch your views, followers and income grow.', color: '#3b82f6' },
];

/* Timing constants (ms) */
const STEP_HOLD   = 1000;   // how long a step glows before line starts
const LINE_TRAVEL = 900;    // how long the line pulse travels
const PAUSE       = 400;    // gap before next step lights
const TOTAL_CYCLE = (STEP_HOLD + LINE_TRAVEL + PAUSE) * steps.length;

export default function HowItWorksSection() {
  const [active, setActive]   = useState(0);        // 0,1,2
  const [lineGo, setLineGo]   = useState<number[]>([]); // indices of lines currently animating

  useEffect(() => {
    let step      = 0;
    let timers: ReturnType<typeof setTimeout>[] = [];

    const cycle = () => {
      /* Step glows */
      setActive(step);
      setLineGo([]);

      /* After hold, travel the connecting line */
      if (step < steps.length - 1) {
        const t1 = setTimeout(() => setLineGo([step]), STEP_HOLD);
        timers.push(t1);
      }

      /* Advance step */
      const t2 = setTimeout(() => {
        step = (step + 1) % steps.length;
        if (step === 0) {
          /* Brief full-dim before restart */
          setActive(-1);
          setLineGo([]);
          const t3 = setTimeout(cycle, 300);
          timers.push(t3);
        } else {
          cycle();
        }
      }, STEP_HOLD + (step < steps.length - 1 ? LINE_TRAVEL + PAUSE : 0));
      timers.push(t2);
    };

    cycle();
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="how" style={{ padding: '100px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          eyebrow="How It Works"
          title={<>Go From Zero to<br /><GradientText>Creator in 3 Steps</GradientText></>}
          description="No technical skills needed. No prior experience required. Just follow the system."
        />

        {/* Steps row */}
        <AnimatedSection>
          <div className="steps-container" style={{ position: 'relative', display: 'flex', justifyContent: 'center', gap: 0 }}>

            {steps.map((s, i) => {
              const Icon    = s.icon;
              const isActive = active === i;

              return (
                <div key={s.title} className="step-item" style={{ display: 'flex', flex: 1 }}>

                  {/* ── Step column ── */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, padding: '0 8px' }}>

                    {/* Icon circle + pulse rings */}
                    <div style={{ position: 'relative', width: 88, height: 88, marginBottom: 24 }}>

                      {/* Outer pulse ring 1 */}
                      <div style={{
                        position: 'absolute', inset: -12, borderRadius: '50%',
                        border: `2px solid ${s.color}`,
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'scale(1.0)' : 'scale(0.85)',
                        transition: 'opacity 0.4s ease, transform 0.4s ease',
                        animation: isActive ? `pulseRing 1.4s ease-out ${STEP_HOLD}ms` : 'none',
                      }} />

                      {/* Outer pulse ring 2 — slightly delayed */}
                      <div style={{
                        position: 'absolute', inset: -20, borderRadius: '50%',
                        border: `1.5px solid ${s.color}`,
                        opacity: isActive ? 0.5 : 0,
                        transform: isActive ? 'scale(1.0)' : 'scale(0.85)',
                        transition: 'opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s',
                        animation: isActive ? `pulseRing 1.4s ease-out 200ms ${STEP_HOLD}ms` : 'none',
                      }} />

                      {/* Main circle */}
                      <div style={{
                        width: 88, height: 88, borderRadius: '50%',
                        background: isActive
                          ? `linear-gradient(135deg, ${s.color}25, ${s.color}12)`
                          : `rgba(0,0,0,0.03)`,
                        border: isActive
                          ? `2.5px solid ${s.color}`
                          : '2px solid #e2e8f0',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        position: 'relative', zIndex: 1,
                        transition: 'all 0.45s cubic-bezier(0.34,1.56,0.64,1)',
                        boxShadow: isActive ? `0 0 32px ${s.color}35, 0 4px 20px ${s.color}20` : 'none',
                        transform: isActive ? 'scale(1.1)' : 'scale(1)',
                      }}>
                        <Icon size={30} style={{ color: isActive ? s.color : '#94a3b8', transition: 'color 0.3s' }} />
                      </div>

                      {/* Step number badge */}
                      <div style={{
                        position: 'absolute', top: -4, right: -4, width: 24, height: 24,
                        borderRadius: '50%', zIndex: 2,
                        background: isActive ? s.color : '#e2e8f0',
                        color: isActive ? '#fff' : '#94a3b8',
                        fontSize: '0.7rem', fontWeight: 800,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        boxShadow: isActive ? `0 2px 8px ${s.color}60` : 'none',
                      }}>{i + 1}</div>
                    </div>

                    {/* Step label */}
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: isActive ? s.color : '#94a3b8', marginBottom: 10, transition: 'color 0.3s' }}>
                      Step 0{i + 1}
                    </div>

                    <h3 style={{
                      fontWeight: 800, fontSize: '1.1rem', color: isActive ? '#0f172a' : '#64748b',
                      marginBottom: 12, textAlign: 'center', letterSpacing: '-0.01em',
                      transition: 'color 0.3s',
                    }}>{s.title}</h3>

                    <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.7, textAlign: 'center', maxWidth: 260 }}>
                      {s.desc}
                    </p>
                  </div>

                  {/* ── Connector line (between steps) ── */}
                  {i < steps.length - 1 && (
                    <div className="step-connector" style={{
                      flexShrink: 0, position: 'relative',
                    }}>
                      {/* Base track */}
                      <div style={{ position: 'absolute', inset: 0, background: '#e2e8f0', borderRadius: 2 }} />

                      {/* Traveling pulse fill */}
                      <div style={{
                        position: 'absolute', inset: 0, borderRadius: 2,
                        background: `linear-gradient(var(--grad-dir, 90deg), ${steps[i].color}, ${steps[i + 1].color})`,
                        transformOrigin: 'var(--trans-origin, left center)',
                        transform: lineGo.includes(i) ? 'var(--scale-full, scaleX(1))' : 'var(--scale-zero, scaleX(0))',
                        transition: lineGo.includes(i)
                          ? `transform ${LINE_TRAVEL}ms cubic-bezier(0.4,0,0.2,1)`
                          : 'transform 0.15s ease',
                      }} />

                      {/* Moving dot on the line */}
                      {lineGo.includes(i) && (
                        <div style={{
                          position: 'absolute', top: 'var(--dot-top, 50%)', left: 'var(--dot-left, 0)',
                          width: 10, height: 10, borderRadius: '50%', 
                          marginTop: 'var(--dot-mt, -5px)', marginLeft: 'var(--dot-ml, 0)',
                          background: `linear-gradient(135deg, ${steps[i].color}, ${steps[i + 1].color})`,
                          boxShadow: `0 0 10px ${steps[i + 1].color}80`,
                          animation: `var(--dot-anim, travelDot) ${LINE_TRAVEL}ms cubic-bezier(0.4,0,0.2,1) forwards`,
                        }} />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        .steps-container { flex-direction: row; align-items: flex-start; }
        .step-item { flex-direction: row; align-items: flex-start; }
        .step-connector { width: 80px; height: 2px; margin-top: 44px; margin-left: 0; }
        
        @keyframes pulseRing {
          0%   { transform: scale(1);   opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0;   }
        }
        @keyframes travelDot {
          0%   { left: 0%; }
          100% { left: calc(100% - 10px); }
        }
        @keyframes travelDotVertical {
          0%   { top: 0%; }
          100% { top: calc(100% - 10px); }
        }
        
        @media (max-width: 768px) {
          .steps-container { flex-direction: column !important; align-items: center !important; gap: 20px !important; }
          .step-item { flex-direction: column !important; align-items: center !important; width: 100%; }
          .step-connector { 
            width: 2px !important; 
            height: 50px !important; 
            margin-top: 10px !important; 
            margin-bottom: 10px !important;
            --grad-dir: 180deg;
            --trans-origin: top center;
            --scale-full: scaleY(1);
            --scale-zero: scaleY(0);
            --dot-top: 0;
            --dot-left: 50%;
            --dot-mt: 0;
            --dot-ml: -5px;
            --dot-anim: travelDotVertical;
          }
        }
      `}</style>
    </section>
  );
}
