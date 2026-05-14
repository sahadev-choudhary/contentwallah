import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Privacy Policy', description: 'ContentWallah privacy policy' };

export default function PrivacyPage() {
  const sections = [
    { title: '1. Information We Collect', content: 'We collect information you provide directly to us, such as your name, email address, and WhatsApp number when you make a purchase. We also automatically collect certain information about your device and how you interact with our website.' },
    { title: '2. How We Use Your Information', content: 'We use the information we collect to process your orders and deliver digital products, send you order confirmations and product downloads, provide customer support, and improve our products and services.' },
    { title: '3. Information Sharing', content: 'We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share information with trusted third parties who assist us in operating our website and serving our customers, as long as those parties agree to keep this information confidential.' },
    { title: '4. Data Security', content: 'We implement a variety of security measures to maintain the safety of your personal information. All transactions are processed through secure connections, and we never store payment information on our servers.' },
    { title: '5. Digital Product Delivery', content: 'Your purchased digital products are delivered via email and WhatsApp. We retain your contact information to provide ongoing customer support and to send updates to products you have purchased.' },
    { title: '6. Cookies', content: 'Our website uses cookies to enhance your browsing experience and maintain your shopping cart. You can choose to disable cookies through your browser settings, though this may affect some functionality.' },
    { title: '7. Your Rights', content: 'You have the right to access, update, or delete your personal information at any time. To exercise these rights, please contact us at hello@contentwallah.com.' },
    { title: '8. Contact Us', content: 'If you have any questions about this Privacy Policy, please contact us at hello@contentwallah.com or through our website contact form.' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', paddingTop: 68 }}>
      <div style={{ background: 'linear-gradient(160deg, #fafbff, #f5f0ff)', padding: '60px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.03em', marginBottom: 12 }}>Privacy Policy</h1>
        <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Last updated: January 2025</p>
      </div>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px 80px' }}>
        <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: 40, fontSize: '1rem' }}>
          ContentWallah is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our website and purchase our digital products.
        </p>
        {sections.map(({ title, content }) => (
          <div key={title} style={{ marginBottom: 36 }}>
            <h2 style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0f172a', marginBottom: 12 }}>{title}</h2>
            <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: '0.95rem' }}>{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
