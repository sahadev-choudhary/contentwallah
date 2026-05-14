'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassButton } from '@/components/ui/GlassButton';

const navLinks = [
  { href: '/',         label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about',    label: 'About' },
  { href: '/reviews',  label: 'Reviews' },
  { href: '/contact',  label: 'Contact' },
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
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-6 sm:py-4 transition-all duration-300"
        style={{ pointerEvents: 'none' }}
      >
        <div 
          className={`mx-auto max-w-5xl rounded-2xl flex items-center justify-between px-6 py-3 transition-all duration-500 glass-panel ${scrolled ? 'scale-95' : 'scale-100'}`}
          style={{ pointerEvents: 'auto' }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 relative z-10">
            <Image
              src="/logo.svg"
              alt="ContentWallah"
              width={140}
              height={36}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 mx-auto absolute left-1/2 -translate-x-1/2">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="relative px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 transition-colors hover:text-violet-600 group">
                <span className="relative z-10">{label}</span>
                <div className="absolute inset-0 rounded-xl bg-violet-600/5 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200" />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4 relative z-10">
            <Link href="/cart" className="relative p-2 rounded-xl text-slate-600 hover:text-violet-600 transition-colors bg-white/50 hover:bg-white/80 border border-white/60 shadow-sm">
              <ShoppingCart size={20} />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] rounded-full bg-gradient-to-br from-violet-600 to-blue-500 text-white text-[10px] font-bold flex items-center justify-center px-1 shadow-md">
                  {count}
                </span>
              )}
            </Link>
            <Link href="/products" passHref legacyBehavior>
              <GlassButton asChild variant="primary" className="py-2.5 px-5 text-sm">
                <a>Get Started</a>
              </GlassButton>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-10 p-2 text-slate-800 rounded-lg hover:bg-black/5 transition-colors"
            onClick={() => setOpen(v => !v)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-4 top-24 z-40 p-6 rounded-3xl glass-panel shadow-2xl md:hidden flex flex-col gap-2"
          >
            {navLinks.map(({ href, label }) => (
              <Link 
                key={href} 
                href={href} 
                onClick={() => setOpen(false)} 
                className="px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:bg-violet-50 hover:text-violet-600 transition-colors"
              >
                {label}
              </Link>
            ))}
            <div className="h-px bg-slate-200/50 my-2" />
            <Link 
              href="/cart" 
              onClick={() => setOpen(false)} 
              className="px-4 py-3 rounded-xl font-semibold text-violet-600 flex items-center gap-3 hover:bg-violet-50 transition-colors"
            >
              <ShoppingCart size={20} /> 
              <span>Cart {count > 0 && `(${count})`}</span>
            </Link>
            <Link href="/products" onClick={() => setOpen(false)} passHref legacyBehavior>
              <GlassButton asChild variant="primary" className="w-full mt-4 justify-center">
                <a>Get Started</a>
              </GlassButton>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
