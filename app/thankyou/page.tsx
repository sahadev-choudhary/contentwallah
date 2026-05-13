'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Mail, MessageSquare, Download, ArrowRight, Sparkles } from 'lucide-react';

interface Order {
  orderId: string; name: string; email: string; whatsapp: string;
  total: number; date: string;
  items: { id: string; name: string }[];
}

export default function ThankYouPage() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    try { const r = localStorage.getItem('cw_order'); if (r) setOrder(JSON.parse(r)); } catch { /* */ }
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(160deg, #fafbff 0%, #f5f0ff 40%, #f0f7ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 60px' }}>
      <div style={{ maxWidth: 600, width: '100%', textAlign: 'center' }}>
        {/* Success icon */}
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: 28 }}>
          <div style={{ width: 96, height: 96, borderRadius: '50%', background: 'rgba(16,185,129,0.1)', border: '2px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
            <CheckCircle2 size={48} style={{ color: '#10b981' }} />
          </div>
          <div style={{ position: 'absolute', top: -4, right: -4, width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,#7c3aed,#3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sparkles size={14} color="#fff" />
          </div>
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.03em', marginBottom: 12 }}>
          🎉 Payment Successful!
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 36 }}>
          Your digital products are on their way! Check your email and WhatsApp.
        </p>

        {order && (
          <div style={{ background: '#fff', border: '1px solid #f1f5f9', borderRadius: 20, padding: 28, marginBottom: 24, textAlign: 'left', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
              <div><p style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Order ID</p><p style={{ fontWeight: 700, color: '#7c3aed' }}>#{order.orderId}</p></div>
              <div style={{ textAlign: 'right' }}><p style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Date</p><p style={{ fontWeight: 600 }}>{order.date}</p></div>
            </div>
            {order.items?.map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f8fafc', fontSize: '0.88rem' }}>
                <span style={{ color: '#475569' }}>{item.name}</span>
                <span style={{ color: '#10b981', fontWeight: 600 }}>✓ Included</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 16 }}>
              <span style={{ fontWeight: 700, color: '#0f172a' }}>Total Paid</span>
              <span className="gradient-text" style={{ fontSize: '1.3rem', fontWeight: 900 }}>₹{order.total?.toLocaleString('en-IN')}</span>
            </div>
          </div>
        )}

        {/* Delivery status */}
        <div style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: 16, padding: 24, marginBottom: 28, textAlign: 'left' }}>
          {[
            { icon: Mail,          label: 'Email Delivery',    desc: order ? `Sent to ${order.email}` : 'Sending now...' },
            { icon: MessageSquare, label: 'WhatsApp',          desc: order ? `Sent to +91 ${order.whatsapp}` : 'Sending confirmation...' },
            { icon: Download,      label: 'Download Links',    desc: 'Available in your inbox immediately' },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={16} style={{ color: '#10b981' }} />
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.88rem', color: '#0f172a' }}>{label}</p>
                <p style={{ color: '#64748b', fontSize: '0.8rem' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary">Back to Home <ArrowRight size={15} /></Link>
          <Link href="/#products" className="btn-secondary">Browse More Kits</Link>
        </div>

        <div style={{ marginTop: 28, background: 'rgba(124,58,237,0.04)', border: '1px solid rgba(124,58,237,0.1)', borderRadius: 12, padding: 16 }}>
          <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
            💜 Tag us <strong style={{ color: '#7c3aed' }}>@contentwallah</strong> on Instagram with your results for a shoutout!
          </p>
        </div>
      </div>
    </div>
  );
}
