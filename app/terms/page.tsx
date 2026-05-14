import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Terms & Conditions', description: 'ContentWallah terms and conditions' };

export default function TermsPage() {
  const sections = [
    { title: '1. Acceptance of Terms', content: 'By accessing and using ContentWallah\'s website and purchasing our digital products, you accept and agree to be bound by the terms and provisions of this agreement.' },
    { title: '2. Digital Products', content: 'ContentWallah sells digital products including PDF guides, prompt libraries, templates, and scripts. All products are delivered digitally via email and WhatsApp immediately after purchase.' },
    { title: '3. Intellectual Property', content: 'All digital products sold by ContentWallah are protected by copyright law. Purchasers receive a personal, non-exclusive license to use the products for their own content creation. Reselling, redistributing, or claiming ownership of our products is strictly prohibited.' },
    { title: '4. Refund Policy', content: 'Due to the digital nature of our products, all sales are final. We do not offer refunds once a digital product has been delivered. If you experience any technical issues with accessing your purchase, please contact our support team within 48 hours.' },
    { title: '5. Payment Terms', content: 'Payments are processed via UPI and other accepted payment methods. All prices are in Indian Rupees (INR) and include applicable taxes. Your order will be processed only after payment confirmation.' },
    { title: '6. Disclaimer of Warranties', content: 'ContentWallah products are provided for informational and educational purposes. We cannot guarantee specific results from using our products, as individual results depend on factors including effort, consistency, and market conditions.' },
    { title: '7. Limitation of Liability', content: 'ContentWallah shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or inability to use our products.' },
    { title: '8. Changes to Terms', content: 'We reserve the right to update these terms at any time. Changes will be posted on this page with an updated date. Continued use of our services constitutes acceptance of the updated terms.' },
    { title: '9. Contact', content: 'For questions about these Terms & Conditions, contact us at hello@contentwallah.com.' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', paddingTop: 68 }}>
      <div style={{ background: 'linear-gradient(160deg, #fafbff, #f5f0ff)', padding: '60px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.03em', marginBottom: 12 }}>Terms & Conditions</h1>
        <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Last updated: January 2025</p>
      </div>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px 80px' }}>
        <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: 40, fontSize: '1rem' }}>
          Please read these Terms and Conditions carefully before purchasing from ContentWallah. By completing a purchase, you agree to these terms.
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
