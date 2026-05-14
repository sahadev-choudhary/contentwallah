import Link from 'next/link';
import Image from 'next/image';
import { Camera, Play, Share2, Send } from 'lucide-react';
import { GlassButton } from '@/components/ui/GlassButton';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200/60 pt-20 pb-8 text-slate-600">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/logo.svg"
              alt="ContentWallah"
              width={160}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <p className="text-sm leading-relaxed mb-8 max-w-sm text-slate-500">
            The AI Creator Growth System for the modern content economy. Stop guessing. Start growing.
          </p>
          <div className="flex gap-3">
            {[
              { icon: Camera, label: 'instagram' },
              { icon: Play,   label: 'youtube'   },
              { icon: Share2, label: 'twitter'   },
            ].map(({ icon: Icon, label }) => (
              <a 
                key={label} 
                href="#" 
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-violet-600 hover:border-violet-200 hover:shadow-sm transition-all"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-bold text-slate-900 mb-6 tracking-tight">Products</h4>
          <div className="flex flex-col gap-4">
            <Link href="/products/viral-creator-system" className="text-sm hover:text-violet-600 transition-colors">Viral Creator System</Link>
            <Link href="/products/faceless-blueprint" className="text-sm hover:text-violet-600 transition-colors">Faceless Blueprint</Link>
            <Link href="/products/content-engine-pro" className="text-sm hover:text-violet-600 transition-colors">Content Engine Pro</Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-slate-900 mb-6 tracking-tight">Company</h4>
          <div className="flex flex-col gap-4">
            <Link href="/about" className="text-sm hover:text-violet-600 transition-colors">About Us</Link>
            <Link href="/contact" className="text-sm hover:text-violet-600 transition-colors">Contact</Link>
            <Link href="/reviews" className="text-sm hover:text-violet-600 transition-colors">Creator Reviews</Link>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-slate-900 mb-6 tracking-tight">Legal</h4>
          <div className="flex flex-col gap-4">
            <Link href="/privacy" className="text-sm hover:text-violet-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm hover:text-violet-600 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-400">
          © {year} ContentWallah. Built for creators, by creators.
        </p>
        <p className="text-xs text-slate-400">
          A Helpverse Initiative.
        </p>
      </div>
    </footer>
  );
}
