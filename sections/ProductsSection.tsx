'use client';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import GradientText from '@/components/ui/GradientText';
import { PRODUCT_LIST } from '@/data/products';
import { CheckCircle2, Zap, ArrowRight, Star } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import type { Product } from '@/data/products';

function ProductCard({ product }: { product: Product }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };

  const discount = Math.round((1 - product.price / product.oldPrice) * 100);
  const Icon = product.icon;

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      <div style={{
        background: '#ffffff',
        border: product.featured ? '1.5px solid rgba(124,58,237,0.25)' : '1px solid #f1f5f9',
        borderRadius: 24, padding: 28, position: 'relative', overflow: 'hidden',
        boxShadow: product.featured
          ? '0 8px 40px rgba(124,58,237,0.12), 0 2px 8px rgba(0,0,0,0.04)'
          : '0 2px 12px rgba(0,0,0,0.04)',
        transition: 'box-shadow 0.3s',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Featured gradient top stripe */}
        {product.featured && (
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
            background: 'linear-gradient(90deg, #7c3aed, #6366f1, #3b82f6)',
          }} />
        )}

        {/* Badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <span style={{
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: product.featured ? '#7c3aed' : '#64748b',
            background: product.featured ? 'rgba(124,58,237,0.08)' : '#f8fafc',
            border: product.featured ? '1px solid rgba(124,58,237,0.15)' : '1px solid #f1f5f9',
            borderRadius: 50, padding: '4px 12px',
          }}>{product.badge}</span>
          <span style={{
            fontSize: '0.72rem', fontWeight: 700, color: '#ef4444',
            background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)',
            borderRadius: 50, padding: '4px 10px',
          }}>{discount}% OFF</span>
        </div>

        {/* Icon */}
        <div style={{
          width: 52, height: 52, borderRadius: 16, marginBottom: 16,
          background: `linear-gradient(135deg, ${product.color.includes('violet') ? '#7c3aed' : product.color.includes('blue') ? '#3b82f6' : product.color.includes('purple') ? '#9333ea' : product.color.includes('orange') ? '#f97316' : product.color.includes('emerald') ? '#10b981' : '#ec4899'}, ${product.color.includes('blue') ? '#6366f1' : product.color.includes('violet') ? '#6366f1' : '#7c3aed'})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(124,58,237,0.2)',
        }}>
          <Icon size={24} color="#fff" />
        </div>

        <h3 style={{ fontWeight: 800, fontSize: '1.15rem', color: '#0f172a', marginBottom: 8, letterSpacing: '-0.01em' }}>
          {product.name}
        </h3>
        <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, marginBottom: 16, flex: 1 }}>
          {product.tagline}
        </p>

        {/* Includes preview */}
        <div style={{ marginBottom: 20, display: 'flex', flexDirection: 'column', gap: 5 }}>
          {product.includes.slice(0, 3).map(inc => (
            <span key={inc} style={{ fontSize: '0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: 6 }}>
              <CheckCircle2 size={12} style={{ color: '#10b981', flexShrink: 0 }} />
              {inc}
            </span>
          ))}
        </div>

        {/* Price */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
          <span style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.03em' }}>
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          <span style={{ fontSize: '0.95rem', color: '#94a3b8', textDecoration: 'line-through' }}>
            ₹{product.oldPrice.toLocaleString('en-IN')}
          </span>
        </div>
        <div style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 5, marginBottom: 20 }}>
          <Zap size={11} /> Instant digital delivery
        </div>

        {/* Stars */}
        <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
          {Array(5).fill(0).map((_, i) => <Star key={i} size={12} style={{ color: '#f59e0b', fill: '#f59e0b' }} />)}
          <span style={{ fontSize: '0.78rem', color: '#94a3b8', marginLeft: 4 }}>5.0</span>
        </div>

        {/* CTA */}
        <Link href={`/product/${product.id}`} className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center', borderRadius: 12 }}>
          Get Now <ArrowRight size={15} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" style={{ padding: '100px 0', background: '#f8fafc' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          eyebrow="Digital Products"
          title={<>Creator Kits That<br /><GradientText>Actually Work</GradientText></>}
          description="Instant download. Start creating better content in the next 60 minutes."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, perspective: '1200px' }}>
          {PRODUCT_LIST.map(product => (
            <AnimatedSection key={product.id}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
