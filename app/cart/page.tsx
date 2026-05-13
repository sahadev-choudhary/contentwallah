'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/products';
import { ShoppingCart, X, Trash2, Zap, Shield, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { items, remove, clear, total } = useCart();
  const oldTotal = items.reduce((s, i) => s + (PRODUCTS[i.id]?.oldPrice ?? 0), 0);
  const savings = oldTotal - total;

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', paddingTop: 68 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px 80px' }}>
        <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, color: '#0f172a', marginBottom: 8, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: 12 }}>
          <ShoppingCart style={{ color: '#7c3aed' }} /> Your Cart
        </h1>
        <p style={{ color: '#64748b', marginBottom: 40 }}>{items.length} item{items.length !== 1 ? 's' : ''} ready to download</p>

        {items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(124,58,237,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <ShoppingCart size={36} style={{ color: '#7c3aed' }} />
            </div>
            <h2 style={{ fontWeight: 700, fontSize: '1.4rem', color: '#0f172a', marginBottom: 12 }}>Your cart is empty</h2>
            <p style={{ color: '#64748b', marginBottom: 28 }}>Discover our premium AI creator kits.</p>
            <Link href="/#products" className="btn-primary">Browse Creator Kits <ArrowRight size={15} /></Link>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Items */}
            <div style={{ flex: 1, minWidth: 280 }}>
              {items.map(item => {
                const p = PRODUCTS[item.id]; if (!p) return null;
                const Icon = p.icon;
                return (
                  <div key={item.id} style={{ background: '#fff', border: '1px solid #f1f5f9', borderRadius: 20, padding: 24, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 18, boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                    <div style={{ width: 60, height: 60, borderRadius: 16, background: 'rgba(124,58,237,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={26} style={{ color: '#7c3aed' }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#0f172a', marginBottom: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontWeight: 700, color: '#7c3aed', fontSize: '1rem' }}>₹{p.price.toLocaleString('en-IN')}</span>
                        <span style={{ color: '#94a3b8', fontSize: '0.85rem', textDecoration: 'line-through' }}>₹{p.oldPrice.toLocaleString('en-IN')}</span>
                      </div>
                      <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                        <Zap size={11} /> Instant delivery
                      </span>
                    </div>
                    <button onClick={() => remove(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', padding: 8, borderRadius: 8, transition: 'color 0.2s' }}>
                      <X size={18} />
                    </button>
                  </div>
                );
              })}
              <button onClick={() => { if (confirm('Clear all items?')) clear(); }} style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#ef4444', border: '1px solid rgba(239,68,68,0.2)', background: 'none', borderRadius: 10, padding: '8px 16px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
                <Trash2 size={14} /> Clear Cart
              </button>
            </div>

            {/* Summary */}
            <div style={{ width: 340, flexShrink: 0 }} className="cart-summary-col">
              <div style={{ position: 'sticky', top: 88 }}>
                <div style={{ background: '#fff', border: '1px solid #f1f5f9', borderRadius: 24, padding: 28, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0f172a', marginBottom: 20 }}>Order Summary</h3>
                  {items.map(item => {
                    const p = PRODUCTS[item.id]; if (!p) return null;
                    return (
                      <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: 10, paddingBottom: 10, borderBottom: '1px solid #f8fafc' }}>
                        <span style={{ color: '#64748b', flex: 1, marginRight: 8, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</span>
                        <span style={{ fontWeight: 600, color: '#0f172a', flexShrink: 0 }}>₹{p.price.toLocaleString('en-IN')}</span>
                      </div>
                    );
                  })}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#64748b', marginBottom: 8 }}>
                    <span>You Save</span><span style={{ color: '#10b981', fontWeight: 600 }}>-₹{savings.toLocaleString('en-IN')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#64748b', marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid #f1f5f9' }}>
                    <span>Delivery</span><span style={{ color: '#10b981', fontWeight: 600 }}>FREE ⚡</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0f172a' }}>Total</span>
                    <span className="gradient-text" style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.03em' }}>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                  <Link href="/checkout" className="btn-primary" style={{ width: '100%', justifyContent: 'center', borderRadius: 14, padding: '15px 20px' }}>
                    Proceed to Checkout <ArrowRight size={15} />
                  </Link>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 12, fontSize: '0.78rem', color: '#94a3b8' }}>
                    <Shield size={12} /> Secure checkout · <Zap size={12} /> Instant delivery
                  </div>
                  {savings > 0 && (
                    <div style={{ marginTop: 14, background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: 10, padding: 14 }}>
                      <p style={{ color: '#059669', fontWeight: 700, fontSize: '0.88rem' }}>🎉 You&apos;re saving ₹{savings.toLocaleString('en-IN')}!</p>
                    </div>
                  )}
                </div>
                <Link href="/#products" style={{ display: 'block', textAlign: 'center', marginTop: 14, color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none' }}>← Continue Shopping</Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`@media (max-width: 800px) { .cart-summary-col { width: 100% !important; } .cart-summary-col > div { position: static !important; } }`}</style>
    </div>
  );
}
