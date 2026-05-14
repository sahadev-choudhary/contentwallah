import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Metadata } from 'next';
import { Mail, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | ContentWallah',
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600">We're here to help you scale your creator engine.</p>
        </div>
        
        <GlassCard intensity="light" className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Email Us</h3>
                <p className="text-slate-600 text-sm">support@contentwallah.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Live Chat</h3>
                <p className="text-slate-600 text-sm">Available Mon-Fri, 9am-5pm EST</p>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="cw-input" />
              <input type="email" placeholder="Email" className="cw-input" />
            </div>
            <textarea placeholder="How can we help?" rows={4} className="cw-input resize-none"></textarea>
            <GlassButton variant="primary" className="w-full justify-center">Send Message</GlassButton>
          </form>
        </GlassCard>
      </div>
    </div>
  );
}
