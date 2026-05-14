'use client';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Star, PlayCircle } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    handle: '@sarahcreates',
    image: 'https://i.pravatar.cc/150?u=sarah',
    text: 'ContentWallah completely changed how I script my reels. I went from 2k to 50k followers in 3 months just using the Viral Hook templates.',
    rating: 5,
    video: true,
  },
  {
    id: 2,
    name: 'David Chen',
    handle: '@davidgrowth',
    image: 'https://i.pravatar.cc/150?u=david',
    text: 'The Faceless Blueprint is the most comprehensive system I have ever seen. It’s practically an operating system for printing money on Instagram.',
    rating: 5,
    video: false,
  },
  {
    id: 3,
    name: 'Maya Patel',
    handle: '@mayavlogs',
    image: 'https://i.pravatar.cc/150?u=maya',
    text: 'I used to spend 4 hours writing a script. Now I use the Content Engine prompts and it takes me 15 minutes. Best investment for my channel.',
    rating: 5,
    video: true,
  }
];

export default function TestimonialsSection() {
  return (
    <section id="results" className="max-w-7xl mx-auto px-6 relative">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"
        >
          Creators who built their <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-500">Engines</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
          >
            <GlassCard intensity="light" className="h-full p-6 flex flex-col hover:bg-white/60 transition-colors">
              {testimonial.video && (
                <div className="w-full aspect-video rounded-xl bg-slate-200 mb-6 relative overflow-hidden group cursor-pointer border border-slate-200/50">
                  <div className="absolute inset-0 bg-slate-800/20 group-hover:bg-slate-800/40 transition-colors flex items-center justify-center">
                    <PlayCircle size={48} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>
                </div>
              )}

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-slate-700 italic mb-6 flex-grow">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="rounded-full border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                  <p className="text-slate-500 text-xs">{testimonial.handle}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
