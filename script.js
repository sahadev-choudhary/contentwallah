// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  const stickyCta = document.getElementById('stickyCta');
  if (stickyCta) stickyCta.style.display = window.scrollY > 400 ? 'block' : 'none';
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger?.addEventListener('click', () => mobileMenu.classList.toggle('open'));

// Counter animation
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    if (target >= 1000000) el.textContent = (current / 1000000).toFixed(1) + 'M';
    else if (target >= 1000) el.textContent = Math.floor(current / 1000) + 'K';
    else el.textContent = Math.floor(current);
    if (current >= target) clearInterval(timer);
  }, 16);
}

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      const counters = entry.target.querySelectorAll('.stat-num');
      counters.forEach(c => animateCounter(c));
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.pain-card, .hero-stats').forEach(el => observer.observe(el));

// Stat counters on hero
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.stat-num').forEach(c => animateCounter(c));
        heroObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });
  heroObserver.observe(heroStats);
}

// AI Chat
const aiToggle = document.getElementById('aiToggle');
const aiChatBubble = document.getElementById('aiChatBubble');
const aiClose = document.getElementById('aiClose');

aiToggle?.addEventListener('click', () => aiChatBubble.classList.toggle('open'));
aiClose?.addEventListener('click', () => aiChatBubble.classList.remove('open'));

document.querySelectorAll('.ai-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const topic = chip.textContent;
    chip.style.background = 'rgba(124,58,237,0.5)';
    chip.style.borderColor = '#a855f7';
    setTimeout(() => {
      document.querySelector('.ai-chat-msg').textContent = `Great! We have perfect tools for growing your ${topic}. Check our creator kits below! 🚀`;
      document.querySelector('.ai-chips').innerHTML = '<a href="#products" style="color:#fff;font-size:0.85rem;font-weight:700;text-decoration:none;background:linear-gradient(135deg,#7c3aed,#3b82f6);padding:10px 20px;border-radius:20px;display:inline-block;">View Creator Kits →</a>';
    }, 300);
  });
});

// Smooth reveal on scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, entry.target.dataset.delay || 0);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.pain-card').forEach(el => {
  el.style.transition = 'all 0.6s ease';
  revealObserver.observe(el);
});

// Parallax on hero orbs
window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  document.querySelectorAll('.orb').forEach((orb, i) => {
    const factor = (i + 1) * 0.5;
    orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
});

// Product card tilt effect
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    card.style.transform = `translateY(-6px) rotateX(${-y}deg) rotateY(${x}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// Newsletter form
document.querySelector('.newsletter-btn')?.addEventListener('click', () => {
  const input = document.querySelector('.newsletter-input');
  if (input?.value.includes('@')) {
    input.value = '✓ Subscribed! Check your email.';
    input.style.color = '#10b981';
    input.disabled = true;
  } else {
    input.style.borderColor = '#ef4444';
    input.placeholder = 'Enter a valid email!';
  }
});

// Show AI chat after 3 seconds
setTimeout(() => {
  if (aiChatBubble) aiChatBubble.classList.add('open');
}, 3000);
