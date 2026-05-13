'use client';
import { useState } from 'react';
import type { Metadata } from 'next';
import GradientText from '@/components/ui/GradientText';
import { Mail, MessageSquare, Camera, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise(r => setTimeout(r, 600));
    setSent(true);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', paddingTop: 68 }}>
      <div style={{ background: 'linear-gradient(160deg, #fafbff, #f5f0ff)', padding: '60px 24px', textAlign: 'center', marginBottom: 0 }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.03em', marginBottom: 14 }}>
            Get in <GradientText>Touch</GradientText>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7 }}>
            Have a question about our products? Want to collaborate? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '60px 24px 80px', display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {/* Contact cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 260 }}>
          {[
            { icon: Mail,          title: 'Email Us',     desc: 'hello@contentwallah.com', sub: 'We reply within 24 hours' },
            { icon: MessageSquare, title: 'WhatsApp',     desc: '+91 98765 43210',          sub: 'Quick support queries' },
            { icon: Camera,         title: 'Instagram',    desc: '@contentwallah',           sub: 'DM us anytime' },
          ].map(({ icon: Icon, title, desc, sub }) => (
            <div key={title} style={{ background: '#fff', border: '1px solid #f1f5f9', borderRadius: 16, padding: '20px 22px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 40, height: 40, borderRadius: 11, background: 'rgba(124,58,237,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={18} style={{ color: '#7c3aed' }} />
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a', marginBottom: 2 }}>{title}</p>
                <p style={{ fontWeight: 600, color: '#7c3aed', fontSize: '0.88rem', marginBottom: 2 }}>{desc}</p>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div style={{ flex: 1, minWidth: 280 }}>
          {sent ? (
            <div style={{ background: '#fff', border: '1px solid #f1f5f9', borderRadius: 24, padding: 48, textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <CheckCircle2 size={48} style={{ color: '#10b981', margin: '0 auto 20px' }} />
              <h2 style={{ fontWeight: 800, fontSize: '1.4rem', color: '#0f172a', marginBottom: 10 }}>Message Sent!</h2>
              <p style={{ color: '#64748b' }}>Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: '#fff', border: '1px solid #f1f5f9', borderRadius: 24, padding: 36, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.2rem', color: '#0f172a', marginBottom: 24 }}>Send a Message</h2>
              {(['name', 'email', 'subject'] as const).map(id => (
                <div key={id} style={{ marginBottom: 18 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: 7, textTransform: 'capitalize' }}>{id}</label>
                  <input type={id === 'email' ? 'email' : 'text'} required className="cw-input"
                    value={form[id]} onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))} />
                </div>
              ))}
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: 7 }}>Message</label>
                <textarea required rows={5} className="cw-input" style={{ resize: 'vertical' }}
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
