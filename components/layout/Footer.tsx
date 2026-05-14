import Link from 'next/link';
import Image from 'next/image';
import { Camera, Play, Share2, Send } from 'lucide-react';
import { PRODUCT_LIST } from '@/data/products';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#0f172a', color: '#94a3b8' }}>
      {/* Main footer */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48 }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', marginBottom: 16 }}>
              <Image
                src="/logo-white.svg"
                alt="ContentWallah"
                width={180}
                height={50}
                style={{ objectFit: 'contain', height: 50, width: 'auto' }}
              />
            </Link>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 24, maxWidth: 240 }}>
              The AI Creator Growth System for the modern content economy. A Helpverse Initiative.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { icon: Camera, label: 'instagram' },
                { icon: Play,   label: 'youtube'   },
                { icon: Share2, label: 'twitter'   },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" style={{
                  width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', color: '#94a3b8', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', marginBottom: 16 }}>Products</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {PRODUCT_LIST.map(p => (
                <Link key={p.id} href={`/product/${p.id}`} style={{ color: '#64748b', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', marginBottom: 16 }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Blog', href: '#' },
                { label: 'Affiliate Program', href: '#' },
              ].map(({ label, href }) => (
                <Link key={label} href={href} style={{ color: '#64748b', fontSize: '0.88rem', textDecoration: 'none' }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', marginBottom: 16 }}>Legal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms & Conditions', href: '/terms' },
                { label: 'Refund Policy', href: '#' },
              ].map(({ label, href }) => (
                <Link key={label} href={href} style={{ color: '#64748b', fontSize: '0.88rem', textDecoration: 'none' }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', marginBottom: 8 }}>Newsletter</h4>
            <p style={{ fontSize: '0.85rem', marginBottom: 14, lineHeight: 1.6 }}>
              Free weekly creator tips &amp; AI prompts.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              <input type="email" placeholder="your@email.com" style={{
                flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10, padding: '10px 14px', color: '#fff', fontSize: '0.85rem',
                outline: 'none', fontFamily: 'inherit', minWidth: 0,
              }} />
              <button style={{
                background: 'linear-gradient(135deg,#7c3aed,#3b82f6)', border: 'none',
                borderRadius: 10, padding: '10px 12px', cursor: 'pointer',
                color: '#fff', display: 'flex', alignItems: 'center',
              }}>
                <Send size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 24px', textAlign: 'center', fontSize: '0.82rem', color: '#475569' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          © {year} ContentWallah — A Helpverse Initiative. Built for creators, by creators. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
