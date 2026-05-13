import type { LucideIcon } from 'lucide-react';
import {
  Zap, BrainCircuit, EyeOff, FileText, Palette, MessageSquare,
  Flame, Target, BarChart3, Rocket, NotebookPen, Bot,
  Clapperboard, CalendarDays, PencilLine, Layout, Repeat2,
  Timer, Mic, Link2, GraduationCap, Smartphone, Shield,
} from 'lucide-react';

export interface ProductFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ProductTestimonial {
  text: string;
  author: string;
  role: string;
  avatar: string;
}

export interface Product {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  color: string;          // Tailwind gradient classes
  price: number;
  oldPrice: number;
  featured?: boolean;
  features: ProductFeature[];
  includes: string[];
  testimonial: ProductTestimonial;
}

export const PRODUCTS: Record<string, Product> = {
  'viral-creator-kit': {
    id: 'viral-creator-kit',
    name: 'Viral Creator Kit',
    badge: 'Bestseller',
    tagline: 'The complete all-in-one system to create viral content on any platform.',
    description: 'Stop guessing what works. The Viral Creator Kit gives you everything — hooks, scripts, templates, and a content calendar — so you can create content that actually gets views, saves, and followers.',
    icon: Zap,
    color: 'from-violet-500 to-purple-600',
    price: 999,
    oldPrice: 2999,
    featured: true,
    features: [
      { icon: Flame,        title: '100+ Viral Hooks',       desc: 'Scroll-stopping hooks for every niche and format.' },
      { icon: FileText,     title: '50+ Reel Scripts',       desc: 'Word-for-word scripts to film viral reels instantly.' },
      { icon: CalendarDays, title: '30-Day Content Calendar', desc: 'Never run out of content ideas again.' },
      { icon: Target,       title: 'Niche Strategy Guide',   desc: 'Find your angle and dominate your niche.' },
      { icon: BarChart3,    title: 'Engagement Templates',   desc: 'Captions, CTAs and comment reply templates.' },
      { icon: Rocket,       title: 'Growth Playbook',        desc: 'Step-by-step system to go from 0 to 10K followers.' },
    ],
    includes: ['PDF Guide (50 pages)', 'Excel Hook Library', 'Canva Caption Templates', '30-Day Calendar Doc', 'Private Community Access'],
    testimonial: {
      text: 'Went from 200 to 15K followers in 60 days. The hook templates are absolutely insane!',
      author: 'Priya Sharma', role: 'Lifestyle Creator · 15K Followers', avatar: 'P',
    },
  },
  'ai-prompt-vault': {
    id: 'ai-prompt-vault',
    name: 'AI Prompt Vault',
    badge: 'AI Powered',
    tagline: '1000+ ChatGPT prompts to create viral content in seconds.',
    description: 'Stop staring at a blank screen. The AI Prompt Vault gives you 1000+ plug-and-play ChatGPT prompts for captions, hooks, scripts, email sequences, bio rewrites, and business content across every niche.',
    icon: BrainCircuit,
    color: 'from-blue-500 to-indigo-600',
    price: 1299,
    oldPrice: 3499,
    featured: true,
    features: [
      { icon: Bot,        title: '1000+ AI Prompts',      desc: 'Ready-to-use prompts for every content type.' },
      { icon: Target,     title: 'Niche-Specific Packs',  desc: 'Fitness, finance, fashion, food, tech, and more.' },
      { icon: PencilLine, title: 'Caption Generator',     desc: 'Write 30 captions in under 5 minutes.' },
      { icon: Flame,      title: 'Viral Hook Prompts',    desc: 'Generate 100 hooks for your niche instantly.' },
      { icon: Shield,     title: 'Business Prompts',      desc: 'Sales copy, email, pitch decks — all included.' },
      { icon: Zap,        title: 'Plug & Play System',    desc: 'Just copy, paste, and customize. Done in 60s.' },
    ],
    includes: ['Master Prompt PDF', 'Notion Prompt Database', 'Niche Prompt Packs (10+)', 'Monthly Prompt Updates', 'ChatGPT Workflow Guide'],
    testimonial: {
      text: 'The AI Prompt Vault changed everything. I went from posting twice a week to daily content without any burnout!',
      author: 'Rahul Verma', role: 'Entrepreneur · 42K Instagram', avatar: 'R',
    },
  },
  'faceless-creator-blueprint': {
    id: 'faceless-creator-blueprint',
    name: 'Faceless Creator Blueprint',
    badge: 'Trending',
    tagline: 'Grow a profitable faceless page without ever showing your face.',
    description: 'The complete roadmap to build a faceless Instagram or YouTube channel from 0 to 10K+ followers and start making money — without showing your identity or going viral by luck.',
    icon: EyeOff,
    color: 'from-purple-500 to-pink-600',
    price: 799,
    oldPrice: 2499,
    features: [
      { icon: Target,       title: 'Niche Selection System',        desc: 'Find the perfect faceless niche in 10 minutes.' },
      { icon: Clapperboard, title: 'Camera-Free Content Creation',  desc: 'Canva, CapCut and AI tools — all mapped out.' },
      { icon: BarChart3,    title: '0 to 10K Roadmap',             desc: 'Week-by-week growth plan with daily actions.' },
      { icon: Zap,          title: 'Monetization Blueprint',        desc: 'Earn from digital products, affiliate & sponsorships.' },
      { icon: Mic,          title: 'AI Voiceover Guide',            desc: 'Use AI voice tools so you never need to speak.' },
      { icon: Shield,       title: 'Stay Anonymous Strategy',       desc: 'Grow big while keeping your identity private.' },
    ],
    includes: ['Blueprint PDF (60 pages)', 'Niche Research Spreadsheet', 'Faceless Reel Templates', 'AI Tool Recommendations List', 'Monetization Tracker'],
    testimonial: {
      text: 'Started a faceless finance page from zero. Now earning ₹50K/month from digital products without showing my face!',
      author: 'Ananya Joshi', role: 'Faceless Creator · 28K YouTube', avatar: 'A',
    },
  },
  'viral-hook-system': {
    id: 'viral-hook-system',
    name: 'Viral Hook System',
    badge: 'Hot',
    tagline: '500+ proven hooks that stop the scroll and explode your reach.',
    description: 'The hook is 80% of your content success. This system gives you 500+ categorized, tested, platform-specific hooks that are engineered to trigger curiosity and stop thumbs dead in their tracks.',
    icon: Flame,
    color: 'from-orange-500 to-red-600',
    price: 699,
    oldPrice: 1999,
    features: [
      { icon: Flame,      title: '500+ Proven Hooks',     desc: 'Organized by niche, emotion, and format.' },
      { icon: Target,     title: 'Platform-Specific',     desc: 'Hooks for Reels, YouTube Shorts, TikTok, Threads.' },
      { icon: BarChart3,  title: 'Emotion-Based System',  desc: 'Curiosity, fear, desire, shock — all mapped.' },
      { icon: Repeat2,    title: 'Hook Formulas',         desc: '20 proven hook templates to remix infinitely.' },
      { icon: Timer,      title: 'First 3 Seconds Guide', desc: 'Engineer the perfect opening every time.' },
      { icon: Rocket,     title: 'Viral Case Studies',    desc: 'Breakdowns of 50+ viral posts and why they worked.' },
    ],
    includes: ['Hook Library PDF', 'Excel Hook Organizer', 'Hook Formula Sheet', 'Platform Cheat Sheet', 'Case Study Breakdown'],
    testimonial: {
      text: 'Used 10 hooks from this pack and 4 of them went viral. Best investment for content this year.',
      author: 'Karan Mehta', role: 'Tech Creator · 55K Instagram', avatar: 'K',
    },
  },
  'reels-script-pack': {
    id: 'reels-script-pack',
    name: 'Reels Script Pack',
    badge: 'New',
    tagline: '200+ done-for-you reel scripts proven to stop the scroll.',
    description: 'Never struggle to write a reel script again. Get 200+ professionally written, high-converting reel scripts across 10+ niches — with hooks, body and CTAs already written for you. Just record and post.',
    icon: FileText,
    color: 'from-emerald-500 to-teal-600',
    price: 599,
    oldPrice: 1799,
    features: [
      { icon: NotebookPen, title: '200+ Complete Scripts',  desc: 'Full script: hook, body, CTA — ready to film.' },
      { icon: Target,      title: '10+ Niches Covered',    desc: 'Fitness, finance, travel, food, lifestyle, and more.' },
      { icon: Flame,       title: 'Hook-First Format',     desc: 'Every script starts with a scroll-stopping hook.' },
      { icon: Timer,       title: 'Multiple Lengths',       desc: '15s, 30s, 60s and 90s scripts included.' },
      { icon: MessageSquare, title: 'CTA Variations',      desc: '5 different CTAs per script for A/B testing.' },
      { icon: Repeat2,     title: 'Repurpose Guide',       desc: 'Turn 1 script into 5 pieces of content.' },
    ],
    includes: ['Script PDF (200+ scripts)', 'Excel Script Organizer', 'Hook Swipe File', 'CTA Formula Sheet', 'Repurposing Cheat Sheet'],
    testimonial: {
      text: 'I used 10 scripts from this pack and 4 went viral. Best investment I made for content this year.',
      author: 'Sneha Patel', role: 'Lifestyle Creator · 22K Instagram', avatar: 'S',
    },
  },
  'canva-creator-bundle': {
    id: 'canva-creator-bundle',
    name: 'Canva Creator Bundle',
    badge: 'Design Kit',
    tagline: '500+ premium Canva templates to make your content look stunning.',
    description: 'Look like a professional designer without hiring one. Get 500+ premium Canva templates for reels covers, carousels, stories, quote posts and brand kits — all fully editable and ready to post in minutes.',
    icon: Palette,
    color: 'from-pink-500 to-rose-600',
    price: 499,
    oldPrice: 1499,
    features: [
      { icon: Layout,     title: '500+ Canva Templates', desc: 'Reels covers, carousels, stories, posts, and more.' },
      { icon: Palette,    title: 'Multiple Styles',       desc: 'Minimal, bold, dark, pastel, and branded themes.' },
      { icon: PencilLine, title: 'Fully Editable',        desc: 'Change fonts, colors and content in one click.' },
      { icon: Smartphone, title: 'All Sizes Included',    desc: 'Square, portrait, landscape and story sizes.' },
      { icon: Rocket,     title: 'Brand Kit Ready',       desc: 'Add your logo and colors to any template instantly.' },
      { icon: Repeat2,    title: 'Lifetime Access',       desc: 'New templates added every month.' },
    ],
    includes: ['500+ Canva Template Links', 'Brand Color Palette Guide', 'Font Pairing Recommendations', 'Social Media Size Guide', 'Batch Creation Workflow'],
    testimonial: {
      text: 'My page aesthetic completely transformed overnight. People DM me asking who does my design!',
      author: 'Meera Singh', role: 'Fashion Creator · 31K Instagram', avatar: 'M',
    },
  },
};

export const PRODUCT_LIST = Object.values(PRODUCTS);
