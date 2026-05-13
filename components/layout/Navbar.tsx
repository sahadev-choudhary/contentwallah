'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/#products',  label: 'Products' },
  { href: '/#how',       label: 'How It Works' },
  { href: '/#results',   label: 'Results' },
  { href: '/about',      label: 'About' },
];

export default function Navbar() {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.75)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', gap: 40 }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Image
              src="/logo.svg"
              alt="ContentWallah"
              width={160}
              height={44}
              priority
              style={{ objectFit: 'contain', height: 44, width: 'auto' }}
            />
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: 4, margin: '0 auto' }} className="nav-desktop">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} style={{
                padding: '7px 14px', borderRadius: 8, fontSize: '0.9rem', fontWeight: 500,
                color: '#475569', textDecoration: 'none', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = '#7c3aed'; e.currentTarget.style.background = 'rgba(124,58,237,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.background = 'transparent'; }}>
                {label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 'auto' }} className="nav-desktop">
            <Link href="/cart" style={{
              position: 'relative', display: 'flex', alignItems: 'center', gap: 6,
              padding: '8px 14px', borderRadius: 10, border: '1px solid #e2e8f0',
              color: '#475569', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600,
              transition: 'all 0.2s',
            }}>
              <ShoppingCart size={16} />
              {count > 0 && (
                <span style={{
                  position: 'absolute', top: -8, right: -8, minWidth: 20, height: 20,
                  borderRadius: 10, background: 'linear-gradient(135deg,#7c3aed,#3b82f6)',
                  color: '#fff', fontSize: '0.7rem', fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5px',
                }}>{count}</span>
              )}
              Cart
            </Link>
            <a href="/#products" className="btn-primary" style={{ padding: '9px 20px', fontSize: '0.88rem' }}>
              Get Started →
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-mobile-btn"
            onClick={() => setOpen(v => !v)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, marginLeft: 'auto', color: '#0f172a' }}
            aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', top: 68, left: 0, right: 0, zIndex: 999,
              background: '#fff', borderBottom: '1px solid #f1f5f9',
              boxShadow: '0 8px 30px rgba(0,0,0,0.1)', padding: 20,
              display: 'flex', flexDirection: 'column', gap: 8,
            }}>
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => setOpen(false)} style={{
                padding: '12px 16px', borderRadius: 10, fontSize: '1rem', fontWeight: 600,
                color: '#475569', textDecoration: 'none', display: 'block',
              }}>{label}</a>
            ))}
            <Link href="/cart" onClick={() => setOpen(false)} style={{
              padding: '12px 16px', borderRadius: 10, color: '#7c3aed',
              fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <ShoppingCart size={16} /> Cart {count > 0 && `(${count})`}
            </Link>
            <a href="/#products" onClick={() => setOpen(false)} className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center', marginTop: 8 }}>
              Get Started →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
