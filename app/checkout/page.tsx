'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/products';
import { Zap, Shield, Lock } from 'lucide-react';

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', upiTxn: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())      e.name     = 'Name is required';
    if (!/\S+@\S+\.\S+/.test(form.email))  e.email    = 'Valid email required';
    if (!/^\d{10}$/.test(form.whatsapp))   e.whatsapp = 'Enter a valid 10-digit WhatsApp number';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 800));
    const order = {
      orderId: Math.random().toString(36).slice(2, 10).toUpperCase(),
      ...form,
      total,
      date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }),
      items: items.map(i => ({ id: i.id, name: PRODUCTS[i.id]?.name ?? i.id })),
    };
    localStorage.setItem('cw_order', JSON.stringify(order));
    clear();
    router.push('/thankyou');
  };

  const field = (id: string, label: string, type = 'text', placeholder = '') => (
    <div style={{ marginBottom: 20 }}>
      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: 7 }}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} value={form[id as keyof typeof form]}
        onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
        className="cw-input"
        style={{ borderColor: errors[id] ? '#ef4444' : undefined }} />
      {errors[id] && <p style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: 5 }}>{errors[id]}</p>}
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', paddingTop: 68 }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '48px 24px 80px' }}>
        <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, color: '#0f172a', marginBottom: 6, letterSpacing: '-0.02em' }}>
          Secure Checkout
        </h1>
        <p style={{ color: '#64748b', marginBottom: 40, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Shield size={14} style={{ color: '#10b981' }} /> SSL encrypted · Your data is safe
        </p>

        <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Form */}
          <form onSubmit={handleSubmit} style={{ flex: 1, minWidth: 280 }}>
            <div style={{ background: '#fff', border: '1px solid #f1f5f9', borderRadius: 24, padding: 32, marginBottom: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0f172a', marginBottom: 24 }}>📦 Delivery Details</h2>
              {field('name', 'Full Name', 'text', 'Your full name')}
              {field('email', 'Email Address', 'email', 'your@email.com')}
              {field('whatsapp', 'WhatsApp Number', 'tel', '10-digit mobile number')}
            </div>

            <div style={{ background: '#fff', border: '1px solid #f1f5f9', borderRadius: 24, padding: 32, marginBottom: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0f172a', marginBottom: 8 }}>💳 Payment</h2>
              <p style={{ color: '#64748b', fontSize: '0.88rem', marginBottom: 20 }}>
                Pay via UPI to <strong style={{ color: '#0f172a' }}>contentwallah@upi</strong> and enter your transaction ID below.
              </p>
              {field('upiTxn', 'UPI Transaction ID (optional)', 'text', 'e.g. 123456789012')}

              <div style={{ background: 'rgba(124,58,237,0.04)', border: '1px solid rgba(124,58,237,0.12)', borderRadius: 12, padding: 16 }}>
                <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6 }}>
                  💡 <strong>How it works:</strong> After submitting, you will receive your digital product download links via email and WhatsApp confirmation within minutes.
                </p>
              </div>
            </div>

            <button type="submit" disabled={submitting} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1.05rem', borderRadius: 14, opacity: submitting ? 0.7 : 1 }}>
              <Lock size={16} />
              {submitting ? 'Processing...' : `Complete Order — ₹${total.toLocaleString('en-IN')}`}
            </button>
          </form>

          {/* Order summary */}
          <div style={{ width: 320, flexShrink: 0 }} className="checkout-summary-col">
            <div style={{ position: 'sticky', top: 88 }}>
              <div style={{ background: '#fff', border: '1px solid #f1f5f9', borderRadius: 24, padding: 28, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontWeight: 800, fontSize: '1rem', color: '#0f172a', marginBottom: 20 }}>Your Order</h3>
                {items.length === 0 ? (
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>No items in cart</p>
                ) : items.map(item => {
                  const p = PRODUCTS[item.id]; if (!p) return null;
                  const Icon = p.icon;
                  return (
                    <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid #f8fafc' }}>
                      <div style={{ width: 40, height: 40, borderRadius: 11, background: 'rgba(124,58,237,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={18} style={{ color: '#7c3aed' }} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</p>
                        <p style={{ fontSize: '0.8rem', color: '#7c3aed', fontWeight: 700, margin: 0 }}>₹{p.price.toLocaleString('en-IN')}</p>
                      </div>
                    </div>
                  );
                })}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 4 }}>
                  <span style={{ fontWeight: 800, color: '#0f172a' }}>Total</span>
                  <span className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 900 }}>₹{total.toLocaleString('en-IN')}</span>
                </div>
                <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    'Instant delivery to your email',
                    'WhatsApp confirmation',
                    'Lifetime access guaranteed',
                  ].map(t => (
                    <span key={t} style={{ fontSize: '0.78rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Zap size={11} style={{ color: '#7c3aed' }} /> {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 800px) { .checkout-summary-col { width: 100% !important; } .checkout-summary-col > div { position: static !important; } }`}</style>
    </div>
  );
}
