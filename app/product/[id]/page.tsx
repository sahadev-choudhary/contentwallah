import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PRODUCTS, PRODUCT_LIST } from '@/data/products';
import BuyBox from '@/components/product/BuyBox';
import { Star, TrendingUp, CheckCircle2, ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return PRODUCT_LIST.map(p => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const p = PRODUCTS[id];
  if (!p) return { title: 'Not Found' };
  return {
    title: `${p.name} — ContentWallah`,
    description: p.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCTS[id];
  if (!product) notFound();

  const Icon = product.icon;
  const others = PRODUCT_LIST.filter(p => p.id !== id).slice(0, 3);

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', paddingTop: 68 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '24px 0 0', fontSize: '0.85rem' }}>
          <Link href="/" style={{ color: '#7c3aed', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5, fontWeight: 500 }}>
            <ArrowLeft size={14} /> Home
          </Link>
          <span style={{ color: '#94a3b8' }}>›</span>
          <Link href="/#products" style={{ color: '#7c3aed', textDecoration: 'none', fontWeight: 500 }}>Products</Link>
          <span style={{ color: '#94a3b8' }}>›</span>
          <span style={{ color: '#475569' }}>{product.name}</span>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'flex', gap: 40, padding: '32px 0 80px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* ─── LEFT ─── */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Badge */}
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: '#7c3aed',
              background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)',
              borderRadius: 50, padding: '5px 16px', marginBottom: 20,
            }}>{product.badge}</span>

            {/* Title */}
            <h1 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, lineHeight: 1.15,
              color: '#0f172a', letterSpacing: '-0.02em', marginBottom: 16,
              display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
            }}>
              <span style={{
                width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                boxShadow: '0 4px 16px rgba(124,58,237,0.25)',
              }}>
                <Icon size={26} color="#fff" />
              </span>
              {product.name}
            </h1>

            <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.7, marginBottom: 20 }}>
              {product.tagline}
            </p>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {Array(5).fill(0).map((_, i) => <Star key={i} size={15} style={{ color: '#f59e0b', fill: '#f59e0b' }} />)}
              </div>
              <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>5.0</span>
              <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>(4,800+ purchases)</span>
              <span style={{ color: '#10b981', fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                <TrendingUp size={13} /> Trending
              </span>
            </div>

            <p style={{ color: '#64748b', lineHeight: 1.85, marginBottom: 36, fontSize: '0.95rem' }}>
              {product.description}
            </p>

            {/* What You Get */}
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: 20 }}>🎯 What You Get</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 40 }}>
              {product.features.map(({ icon: FIcon, title, desc }) => (
                <div key={title} style={{
                  padding: '20px', borderRadius: 16, background: '#fff',
                  border: '1px solid #f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 11, background: 'rgba(124,58,237,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12,
                  }}>
                    <FIcon size={18} style={{ color: '#7c3aed' }} />
                  </div>
                  <h4 style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a', marginBottom: 6 }}>{title}</h4>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.5 }}>{desc}</p>
                </div>
              ))}
            </div>

            {/* Includes */}
            <div style={{ background: '#fff', border: '1px solid #f1f5f9', borderRadius: 20, padding: 28, marginBottom: 28, boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0f172a', marginBottom: 18 }}>📦 Everything Included</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {product.includes.map(inc => (
                  <div key={inc} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: '#475569' }}>
                    <CheckCircle2 size={15} style={{ color: '#10b981', flexShrink: 0 }} /> {inc}
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div style={{ background: 'linear-gradient(135deg, #f5f0ff, #f0f7ff)', border: '1px solid rgba(124,58,237,0.15)', borderRadius: 20, padding: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16, flexWrap: 'wrap' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '1.1rem', color: '#fff', flexShrink: 0,
                }}>{product.testimonial.avatar}</div>
                <div style={{ flex: 1 }}>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: '#0f172a' }}>{product.testimonial.author}</strong>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{product.testimonial.role}</span>
                </div>
                <div style={{ display: 'flex', gap: 2 }}>
                  {Array(5).fill(0).map((_, i) => <Star key={i} size={13} style={{ color: '#f59e0b', fill: '#f59e0b' }} />)}
                </div>
              </div>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.75, fontStyle: 'italic' }}>
                &ldquo;{product.testimonial.text}&rdquo;
              </p>
            </div>
          </div>

          {/* ─── RIGHT (BuyBox) ─── */}
          <div style={{ width: 360, flexShrink: 0 }} className="buybox-col">
            <div style={{ position: 'sticky', top: 88 }}>
              <BuyBox
                productId={product.id}
                productName={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                includes={product.includes}
              />

              {/* Related */}
              <div style={{ marginTop: 20 }}>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 12 }}>
                  You Might Also Like
                </p>
                {others.map(p => {
                  const RIcon = p.icon;
                  return (
                    <Link key={p.id} href={`/product/${p.id}`} style={{
                      display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none',
                      background: '#fff', border: '1px solid #f1f5f9', borderRadius: 14,
                      padding: 14, marginBottom: 8, transition: 'all 0.2s',
                    }}>
                      <div style={{ width: 40, height: 40, borderRadius: 11, background: 'rgba(124,58,237,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <RIcon size={18} style={{ color: '#7c3aed' }} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: '0.87rem', fontWeight: 700, color: '#0f172a', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</p>
                        <p style={{ fontSize: '0.8rem', color: '#7c3aed', fontWeight: 700, margin: 0 }}>₹{p.price.toLocaleString('en-IN')}</p>
                      </div>
                      <span style={{ color: '#94a3b8' }}>→</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .buybox-col { width: 100% !important; }
          .buybox-col > div { position: static !important; }
        }
      `}</style>
    </div>
  );
}
