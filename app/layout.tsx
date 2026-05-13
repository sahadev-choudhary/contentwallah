import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CartProvider } from '@/context/CartContext';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'ContentWallah — AI Creator Growth System', template: '%s | ContentWallah' },
  description: 'AI-powered creator growth ecosystem. Viral hooks, scripts, templates, and systems to grow faster on Instagram, YouTube, and beyond.',
  keywords: ['content creator', 'AI prompts', 'viral hooks', 'reel scripts', 'creator tools', 'ContentWallah'],
  authors: [{ name: 'ContentWallah' }],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    siteName: 'ContentWallah',
    title: 'ContentWallah — AI Creator Growth System',
    description: 'AI-powered creator growth ecosystem for modern content creators.',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
