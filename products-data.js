const PRODUCTS = {
  'viral-creator-kit': {
    id: 'viral-creator-kit',
    name: 'Viral Creator Kit',
    badge: '🔥 BESTSELLER',
    icon: '⚡',
    price: 999,
    oldPrice: 2999,
    tagline: 'The complete all-in-one system to create viral content on any platform.',
    description: 'Stop guessing what works. The Viral Creator Kit gives you everything — hooks, scripts, templates, and a content calendar — so you can create content that actually gets views, saves, and followers.',
    features: [
      { icon: '🔥', title: '100+ Viral Hooks', desc: 'Scroll-stopping hooks for every niche and format.' },
      { icon: '📝', title: '50+ Reel Scripts', desc: 'Word-for-word scripts to film viral reels instantly.' },
      { icon: '📅', title: '30-Day Content Calendar', desc: 'Never run out of content ideas again.' },
      { icon: '🎯', title: 'Niche Strategy Guide', desc: 'Find your angle and dominate your niche.' },
      { icon: '📊', title: 'Engagement Templates', desc: 'Captions, CTAs and comment reply templates.' },
      { icon: '🚀', title: 'Growth Playbook', desc: 'Step-by-step system to go from 0 to 10K followers.' }
    ],
    includes: ['PDF Guide (50 pages)', 'Excel Hook Library', 'Canva Caption Templates', '30-Day Calendar Doc', 'Private Community Access'],
    testimonial: { text: '"Went from 200 to 15K followers in 60 days. The hook templates are absolutely insane!"', author: 'Priya Sharma', role: 'Lifestyle Creator · 15K Followers' }
  },
  'ai-prompt-vault': {
    id: 'ai-prompt-vault',
    name: 'AI Prompt Vault',
    badge: '🤖 AI POWERED',
    icon: '🧠',
    price: 1299,
    oldPrice: 3499,
    tagline: '1000+ ChatGPT prompts to create viral content in seconds.',
    description: 'Stop staring at a blank screen. The AI Prompt Vault gives you 1000+ plug-and-play ChatGPT prompts for captions, hooks, scripts, email sequences, bio rewrites, and business content across every niche.',
    features: [
      { icon: '🤖', title: '1000+ AI Prompts', desc: 'Ready-to-use prompts for every content type.' },
      { icon: '🎯', title: 'Niche-Specific Packs', desc: 'Fitness, finance, fashion, food, tech, and more.' },
      { icon: '📝', title: 'Caption Generator Prompts', desc: 'Write 30 captions in under 5 minutes.' },
      { icon: '🔥', title: 'Viral Hook Prompts', desc: 'Generate 100 hooks for your niche instantly.' },
      { icon: '💼', title: 'Business Growth Prompts', desc: 'Sales copy, email, pitch decks — all included.' },
      { icon: '⚡', title: 'Plug & Play System', desc: 'Just copy, paste, and customize. Done in 60 seconds.' }
    ],
    includes: ['Master Prompt PDF', 'Notion Prompt Database', 'Niche Prompt Packs (10+)', 'Monthly Prompt Updates', 'ChatGPT Workflow Guide'],
    testimonial: { text: '"The AI Prompt Vault changed everything. I went from posting twice a week to daily content without any burnout!"', author: 'Rahul Verma', role: 'Entrepreneur · 42K Instagram' }
  },
  'faceless-creator-blueprint': {
    id: 'faceless-creator-blueprint',
    name: 'Faceless Creator Blueprint',
    badge: '🕶️ FACELESS',
    icon: '🎭',
    price: 799,
    oldPrice: 2499,
    tagline: 'Grow a profitable faceless page without ever showing your face.',
    description: 'The complete roadmap to build a faceless Instagram or YouTube channel from 0 to 10K+ followers and start making money — without showing your identity, being on camera, or going viral by luck.',
    features: [
      { icon: '🕶️', title: 'Niche Selection System', desc: 'Find the perfect faceless niche in 10 minutes.' },
      { icon: '🎬', title: 'Content Creation Without Camera', desc: 'Canva, CapCut and AI tools — all mapped out.' },
      { icon: '📈', title: '0 to 10K Roadmap', desc: 'Week-by-week growth plan with daily actions.' },
      { icon: '💰', title: 'Monetization Blueprint', desc: 'Earn from digital products, affiliate & sponsorships.' },
      { icon: '🤖', title: 'AI Voiceover Guide', desc: 'Use AI voice tools so you never need to speak.' },
      { icon: '🔒', title: 'Stay Anonymous Strategy', desc: 'Grow big while keeping your identity private.' }
    ],
    includes: ['Blueprint PDF (60 pages)', 'Niche Research Spreadsheet', 'Faceless Reel Templates', 'AI Tool Recommendations List', 'Monetization Tracker'],
    testimonial: { text: '"Started a faceless finance page from zero. Now earning ₹50K/month from digital products without showing my face!"', author: 'Ananya Joshi', role: 'Faceless Creator · 28K YouTube' }
  },
  'viral-reel-scripts': {
    id: 'viral-reel-scripts',
    name: 'Viral Reel Scripts',
    badge: '🎬 SCRIPTS',
    icon: '📝',
    price: 699,
    oldPrice: 1999,
    tagline: '200+ done-for-you reel scripts proven to stop the scroll.',
    description: 'Never struggle to write a reel script again. Get 200+ professionally written, high-converting reel scripts across 10+ niches — with hooks, body and CTAs already written for you. Just record and post.',
    features: [
      { icon: '📝', title: '200+ Complete Scripts', desc: 'Full script: hook, body, CTA — ready to film.' },
      { icon: '🎯', title: '10+ Niches Covered', desc: 'Fitness, finance, travel, food, lifestyle, and more.' },
      { icon: '🔥', title: 'Hook-First Format', desc: 'Every script starts with a scroll-stopping hook.' },
      { icon: '⏱️', title: 'Multiple Lengths', desc: '15s, 30s, 60s and 90s scripts included.' },
      { icon: '💬', title: 'CTA Variations', desc: '5 different CTAs per script for A/B testing.' },
      { icon: '🔄', title: 'Repurpose Guide', desc: 'Turn 1 script into 5 pieces of content.' }
    ],
    includes: ['Script PDF (200+ scripts)', 'Excel Script Organizer', 'Hook Swipe File', 'CTA Formula Sheet', 'Repurposing Cheat Sheet'],
    testimonial: { text: '"Used 10 scripts from this pack and 4 of them went viral. This is the best investment I made for my content this year."', author: 'Karan Mehta', role: 'Tech Creator · 55K Instagram' }
  },
  'canva-content-pack': {
    id: 'canva-content-pack',
    name: 'Canva Content Pack',
    badge: '🎨 DESIGN',
    icon: '🖌️',
    price: 499,
    oldPrice: 1499,
    tagline: '500+ premium Canva templates to make your content look stunning.',
    description: 'Look like a professional designer without hiring one. Get 500+ premium Canva templates for reels covers, carousels, stories, quote posts and brand kits — all fully editable and ready to post in minutes.',
    features: [
      { icon: '🖼️', title: '500+ Canva Templates', desc: 'Reels covers, carousels, stories, posts, and more.' },
      { icon: '🎨', title: 'Multiple Styles', desc: 'Minimal, bold, dark, pastel, and branded themes.' },
      { icon: '✏️', title: 'Fully Editable', desc: 'Change fonts, colors and content in one click.' },
      { icon: '📱', title: 'All Sizes Included', desc: 'Square, portrait, landscape and story sizes.' },
      { icon: '🚀', title: 'Brand Kit Ready', desc: 'Add your logo and colors to any template instantly.' },
      { icon: '🔄', title: 'Lifetime Access', desc: 'New templates added every month.' }
    ],
    includes: ['500+ Canva Template Links', 'Brand Color Palette Guide', 'Font Pairing Recommendations', 'Social Media Size Guide', 'Batch Creation Workflow'],
    testimonial: { text: '"My page\'s aesthetic completely transformed overnight. People now DM me asking who does my design — I just use ContentWala templates!"', author: 'Sneha Patel', role: 'Lifestyle Creator · 22K Instagram' }
  },
  'chatgpt-creator-bundle': {
    id: 'chatgpt-creator-bundle',
    name: 'ChatGPT Creator Bundle',
    badge: '💬 CHATGPT',
    icon: '💬',
    price: 1799,
    oldPrice: 4999,
    tagline: 'The ultimate ChatGPT system to automate your entire content workflow.',
    description: 'The most complete ChatGPT toolkit ever built for creators. Includes custom GPT agents, automation workflows, prompt chains, content systems and a full creator OS — so AI does the heavy lifting while you focus on growth.',
    features: [
      { icon: '🤖', title: 'Custom GPT Agents', desc: 'Pre-built GPTs for content, captions, scripts, and ads.' },
      { icon: '⚡', title: 'Automation Workflows', desc: 'Set up content pipelines that run on autopilot.' },
      { icon: '🔗', title: 'Prompt Chains', desc: 'Multi-step prompts that produce complete content plans.' },
      { icon: '📊', title: 'Creator OS', desc: 'Full Notion system powered by ChatGPT outputs.' },
      { icon: '💰', title: 'Monetization Automations', desc: 'AI-written sales copy, email funnels and offers.' },
      { icon: '🎓', title: 'Full Video Tutorial', desc: 'Watch-over-shoulder setup guide included.' }
    ],
    includes: ['Bundle PDF Guide', 'Custom GPT Setup Files', 'Automation Workflow Templates', 'Creator Notion OS', 'Private Community Access', 'Lifetime Updates'],
    testimonial: { text: '"I set up the ChatGPT workflows on a Sunday and by Monday my entire week of content was planned. This is the future of content creation."', author: 'Arjun Singh', role: 'Entrepreneur · 78K YouTube' }
  }
};

// Cart management
const Cart = {
  get() { try { return JSON.parse(localStorage.getItem('cw_cart') || '[]'); } catch { return []; } },
  save(items) { localStorage.setItem('cw_cart', JSON.stringify(items)); window.dispatchEvent(new Event('cartUpdated')); },
  add(productId) {
    const items = this.get();
    if (!items.find(i => i.id === productId)) items.push({ id: productId, qty: 1 });
    this.save(items);
  },
  remove(productId) { this.save(this.get().filter(i => i.id !== productId)); },
  clear() { this.save([]); },
  count() { return this.get().length; },
  total() { return this.get().reduce((s, i) => s + (PRODUCTS[i.id]?.price || 0) * i.qty, 0); }
};
