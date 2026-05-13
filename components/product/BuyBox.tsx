'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Zap, ShoppingCart, Shield, RefreshCw, Smartphone, Users, CheckCircle2 } from 'lucide-react';

interface BuyBoxProps {
  productId: string;
  productName: string;
  price: number;
  oldPrice: number;
  includes: string[];
}

export default function BuyBox({ productId, productName, price, oldPrice, includes }: BuyBoxProps) {
  const { add, items } = useCart();
  const router = useRouter();
  const [added, setAdded] = useState(false);
  const inCart = items.some(i => i.id === productId);
  const discount = Math.round((1 - price / oldPrice) * 100);

  const handleAdd = () => {
    add(productId);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuy = () => {
    add(productId);
    router.push('/checkout');
  };

  return (
    <div style={{
      background: '#fff', border: '1.5px solid rgba(124,58,237,0.2)',
      borderRadius: 24, overflow: 'hidden',
      boxShadow: '0 8px 40px rgba(124,58,237,0.1), 0 2px 8px rgba(0,0,0,0.04)',
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #f5f0ff, #f0f7ff)',
        padding: '24px 28px', borderBottom: '1px solid rgba(124,58,237,0.1)',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 14,
          background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)',
          borderRadius: 50, padding: '5px 14px', fontSize: '0.75rem', fontWeight: 700, color: '#10b981',
        }}>
          <Zap size={11} /> INSTANT DIGITAL DELIVERY
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
          <span className="gradient-text" style={{ fontSize: '2.6rem', fontWeight: 900, letterSpacing: '-0.03em', fontFamily: 'var(--font-geist-sans)' }}>
            ₹{price.toLocaleString('en-IN')}
          </span>
          <span style={{ fontSize: '1.1rem', color: '#94a3b8', textDecoration: 'line-through' }}>
            ₹{oldPrice.toLocaleString('en-IN')}
          </span>
          <span style={{
            fontSize: '0.78rem', fontWeight: 700, padding: '4px 10px', borderRadius: 6,
            background: 'rgba(239,68,68,0.08)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.15)',
          }}>Save {discount}%</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: 28 }}>
        {/* Delivery */}
        <div style={{
          background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)',
          borderRadius: 12, padding: '14px 16px', marginBottom: 20,
        }}>
          {['Delivered to your email instantly', 'Confirmation on WhatsApp', 'Lifetime access + free updates'].map(d => (
            <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.83rem', color: '#059669', fontWeight: 600, marginBottom: 6 }}>
              <CheckCircle2 size={13} /> {d}
            </div>
          ))}
        </div>

        {/* Buy Now */}
        <button onClick={handleBuy} className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 10, padding: '15px 20px', fontSize: '1rem', borderRadius: 14 }}>
          <Zap size={17} /> Buy Now — Pay Securely
        </button>

        {/* Add to Cart */}
        <button onClick={handleAdd} style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          border: added ? '1.5px solid rgba(16,185,129,0.4)' : '1.5px solid #e2e8f0',
          background: added ? 'rgba(16,185,129,0.05)' : '#fff',
          color: added ? '#059669' : '#374151',
          padding: '12px 20px', borderRadius: 14, fontWeight: 700, fontSize: '0.95rem',
          cursor: 'pointer', marginBottom: 20, transition: 'all 0.25s',
        }}>
          <ShoppingCart size={16} />
          {added ? '✓ Added!' : inCart ? 'Already in Cart' : 'Add to Cart'}
        </button>

        {/* Trust grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 20 }}>
          {[
            { icon: Shield,     label: 'SSL Secure' },
            { icon: RefreshCw,  label: 'Free Updates' },
            { icon: Smartphone, label: 'Any Device' },
            { icon: Users,      label: '10,000+ Creators' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: '#64748b' }}>
              <Icon size={12} style={{ color: '#7c3aed' }} /> {label}
            </div>
          ))}
        </div>

        {/* Includes */}
        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 18 }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 12 }}>
            What&apos;s Inside
          </p>
          {includes.map(inc => (
            <div key={inc} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.83rem', color: '#475569', marginBottom: 8 }}>
              <CheckCircle2 size={13} style={{ color: '#10b981', flexShrink: 0 }} /> {inc}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
