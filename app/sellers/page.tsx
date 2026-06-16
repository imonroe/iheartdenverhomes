import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Sellers | Emily Chaney Denver Real Estate",
};

export default function SellersPage() {
  const steps = [
    { num: "01", title: "Pricing Strategy", desc: "I analyze recent sales, current inventory, and market trends to pinpoint the price that attracts the most qualified buyers and maximizes your return." },
    { num: "02", title: "Prep & Staging", desc: "From decluttering tips to professional staging, I help you showcase your home so buyers can see themselves living there from the moment they walk in." },
    { num: "03", title: "Professional Marketing", desc: "High-end photography, video tours, targeted digital ads, and exposure across the top listing platforms — your home gets the attention it deserves." },
    { num: "04", title: "Showings & Open Houses", desc: "I coordinate and host showings that highlight your home’s best features, creating urgency and excitement among prospective buyers." },
    { num: "05", title: "Offer Review & Negotiation", desc: "When offers come in, I break down every detail, advise on terms, and negotiate aggressively so you get the strongest deal possible." },
    { num: "06", title: "Smooth Close", desc: "From inspection to appraisal to the closing table, I manage every step so there are no surprises — just a successful sale." },
  ];

  const whyCards = [
    { icon: "📸", title: "Marketing That Moves Homes", desc: "Professional photography, cinematic video, social media strategy, and listing syndication that puts your home in front of the right buyers fast." },
    { icon: "📊", title: "Data-Driven Pricing", desc: "No guesswork. I use real-time market data and comparable sales analysis to price your home where it will generate maximum interest and top-dollar offers." },
    { icon: "🧠", title: "20+ Years of Market Experience", desc: "I've navigated booms, corrections, and everything in between. That experience means you get strategy grounded in real results, not theory." },
    { icon: "📞", title: "You'll Always Hear From Me", desc: "Selling your home is stressful enough. I keep you informed at every stage — no ghosting, no runaround, just honest communication." },
  ];

  const testimonials = [
    { quote: "Emily sold our home in under a week, above asking price. Her staging advice and marketing plan were absolutely next-level.", author: "Rachel & James D.", role: "Sellers" },
    { quote: "We interviewed three agents before choosing Emily. Best decision we made. She handled everything and kept us in the loop the entire time.", author: "Mark S.", role: "Seller" },
    { quote: "From pricing to closing, Emily made selling our home completely stress-free. We got multiple offers within days of listing.", author: "Sarah P.", role: "Seller" },
  ];

  return (
    <>
      <style>{`
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: var(--sand);
        }
        .step-card {
          background: var(--white);
          padding: 48px 40px;
          position: relative;
          overflow: hidden;
        }
        .step-card .step-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 64px;
          font-weight: 300;
          color: var(--sand);
          line-height: 1;
          position: absolute;
          top: 24px;
          right: 28px;
        }
        .step-card h3 {
          font-size: 24px;
          font-weight: 400;
          margin-bottom: 14px;
        }
        .step-card p {
          font-size: 14px;
          line-height: 1.75;
          color: var(--mid);
          max-width: 320px;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-top: 56px;
        }
        .why-card .why-icon {
          font-size: 32px;
          margin-bottom: 20px;
        }
        .why-card h3 {
          font-size: 20px;
          font-weight: 400;
          margin-bottom: 12px;
        }
        .why-card p {
          font-size: 14px;
          line-height: 1.75;
          color: var(--mid);
        }
        @media (max-width: 1024px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr); }
          .why-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
        }
        @media (max-width: 700px) {
          .steps-grid { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <section className="page-hero">
        <p className="section-eyebrow">For Home Sellers</p>
        <h1>
          Sell smart.<br /><em>Sell for more.</em>
        </h1>
        <p>Getting top dollar for your home takes more than a sign in the yard. It takes strategy, marketing, and an agent who knows how to position your property to attract the right buyers at the right price.</p>
      </section>

      {/* STEPS */}
      <section className="section">
        <div className="section-header">
          <p className="section-eyebrow">The Process</p>
          <h2 className="section-title">How I <em>Sell Your Home</em></h2>
          <p className="section-subtitle">A proven, step-by-step approach designed to get you the best possible outcome.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.num} className="step-card">
              <span className="step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY EMILY */}
      <section className="section section-alt">
        <div className="section-header">
          <p className="section-eyebrow">Why Emily</p>
          <h2 className="section-title">What Sets Me <em>Apart</em></h2>
          <p className="section-subtitle">Selling your home is personal. Here&apos;s why my clients trust me with one of the biggest decisions of their lives.</p>
        </div>
        <div className="why-grid">
          {whyCards.map((card) => (
            <div key={card.title} className="why-card">
              <div className="why-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: 'var(--dark)', padding: '100px 80px' }}>
        <p className="section-eyebrow">What Sellers Say</p>
        <h2 className="section-title" style={{ color: '#fff' }}>Sold With <em style={{ color: 'var(--gold)' }}>Confidence</em></h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.author} className="testimonial-card">
              <div className="testimonial-stars">{"★★★★★"}</div>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">{t.author} &middot; {t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: 'var(--red)', padding: 80, textAlign: 'center' }}>
        <p className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Free Home Valuation</p>
        <h2 className="serif" style={{ color: '#fff', fontSize: 58, fontWeight: 300, marginBottom: 20 }}>What&apos;s your home <em style={{ fontStyle: 'italic' }}>worth?</em></h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.7, maxWidth: 520, margin: '0 auto 40px' }}>Let&apos;s find out together. I&apos;ll provide a complimentary market analysis so you know exactly where you stand.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ background: '#fff', color: 'var(--red)', padding: '16px 40px', fontSize: 12, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', display: 'inline-block' }}>Get Your Free Valuation &rarr;</Link>
        </div>
      </section>
    </>
  );
}
