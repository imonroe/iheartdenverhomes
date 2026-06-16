import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Buyers | Emily Chaney Denver Real Estate",
};

const steps = [
  { num: "01", title: "Discovery Call", desc: "We start with a conversation about your goals, timeline, budget, and must-haves. I’ll share current market conditions so your expectations are grounded in reality." },
  { num: "02", title: "Get Pre-Approved", desc: "Before we look at a single home, you need a pre-approval letter. I have trusted lender connections in Denver who move quickly and offer competitive rates." },
  { num: "03", title: "Home Search", desc: "I’ll set up custom alerts, share off-market opportunities, and personally curate properties that fit your criteria — saving you hours of scrolling Zillow." },
  { num: "04", title: "Making an Offer", desc: "When you find the one, I’ll analyze comparable sales, advise on offer strategy, and craft a compelling offer that stands out in competitive situations." },
  { num: "05", title: "Inspection & Due Diligence", desc: "I’ll guide you through inspection results, help you understand what’s material vs. cosmetic, and negotiate repairs or credits on your behalf." },
  { num: "06", title: "Closing Day", desc: "You sign, you get keys, you celebrate. I’ll be there every step of the way to make sure nothing falls through the cracks between contract and closing." },
];

const whyCards = [
  { icon: "🗺️", title: "Deep Denver Knowledge", desc: "I’ve been working Denver neighborhoods for 20+ years. I know which blocks flood, which ones are appreciating, and which listings are overpriced before you fall in love with them." },
  { icon: "⚡", title: "Speed & Responsiveness", desc: "In a competitive market, hours matter. I respond fast, move fast, and will get you in front of new listings the moment they hit — sometimes before they do." },
  { icon: "🤝", title: "Negotiation Expertise", desc: "With hundreds of transactions behind me, I’ve seen every negotiation tactic. I protect your interests fiercely while keeping the deal on track and moving forward." },
  { icon: "💚", title: "Genuinely On Your Side", desc: "I’ll tell you if a house is wrong for you — even if you love it. My job is to make sure you end up in a home that’s right, not just one that closes." },
];

const testimonials = [
  { quote: "Emily was really amazing helping me purchase my first home. So helpful, thoughtful, smart and savvy in navigating the Denver market!", author: "Alison T. · First-Time Buyer" },
  { quote: "Seriously the best damn realtor in Denver, perhaps in the galaxy. Patient, knowledgeable as hell, and a super nice and fun person to boot!", author: "Michael T. · Buyer" },
  { quote: "I wouldn’t use anyone else but Emily when it comes to buying. She knows Denver inside and out and is an amazing negotiator.", author: "Tyler J. · Buyer" },
];

const resources = [
  { label: "Explore Denver Neighborhoods", href: "/neighborhoods" },
  { label: "Browse Current Listings", href: "/listings" },
  { label: "Request a Home Valuation", href: "/contact" },
  { label: "Meet Emily", href: "/about" },
];

export default function BuyersPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: var(--sand);
        }
        .step-card {
          background: var(--white);
          padding: 48px 40px;
        }
        .step-num {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 48px;
          font-weight: 300;
          color: var(--sand);
          line-height: 1;
          margin-bottom: 16px;
        }
        .step-title {
          font-size: 24px;
          font-weight: 400;
          margin-bottom: 14px;
          color: var(--dark);
        }
        .step-desc {
          font-size: 15px;
          line-height: 1.75;
          color: var(--mid);
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          background: var(--sand);
        }
        .why-card {
          background: var(--cream);
          padding: 48px 44px;
        }
        .why-icon {
          font-size: 32px;
          margin-bottom: 20px;
        }
        .why-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 26px;
          font-weight: 400;
          color: var(--dark);
          margin-bottom: 12px;
        }
        .why-desc {
          font-size: 15px;
          line-height: 1.75;
          color: var(--mid);
        }
        .resource-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0;
          border-bottom: 1px solid var(--sand);
          font-size: 15px;
          font-weight: 500;
          color: var(--dark);
          transition: color 0.2s;
        }
        .resource-link:hover {
          color: var(--red);
        }
        .resource-link span {
          font-size: 18px;
          transition: transform 0.2s;
        }
        .resource-link:hover span {
          transform: translateX(4px);
        }
      ` }} />

      {/* PAGE HERO */}
      <section className="page-hero">
        <p className="section-eyebrow">For Home Buyers</p>
        <h1>Your Denver <em>buying guide</em></h1>
        <p>Buying a home in Denver is exciting, competitive, and full of decisions. Here&apos;s how I make the process clear, strategic, and (dare I say) enjoyable.</p>
      </section>

      {/* STEPS */}
      <section className="section">
        <div className="section-header">
          <p className="section-eyebrow">The Process</p>
          <h2 className="section-title">Six steps to <em>your new home</em></h2>
          <p className="section-subtitle">Every home purchase is unique, but the roadmap is the same. Here&apos;s what to expect when you work with me.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.num}>
              <div className="step-num">{step.num}</div>
              <h3 className="step-title serif">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY EMILY */}
      <section className="section section-alt">
        <div className="section-header">
          <p className="section-eyebrow">Why Work With Me</p>
          <h2 className="section-title">What sets Emily <em>apart</em></h2>
          <p className="section-subtitle">You deserve a realtor who knows Denver, moves fast, and always puts your interests first.</p>
        </div>
        <div className="why-grid">
          {whyCards.map((card) => (
            <div className="why-card" key={card.title}>
              <div className="why-icon">{card.icon}</div>
              <div className="why-title">{card.title}</div>
              <p className="why-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: 'var(--dark)', padding: '100px 80px' }}>
        <p className="section-eyebrow">What Buyers Say</p>
        <h2 className="section-title" style={{ color: '#fff' }}>Trusted by Denver <em style={{ color: 'var(--gold)' }}>buyers</em></h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.author}>
              <div className="testimonial-stars">{"★★★★★"}</div>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">{t.author}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SPLIT CTA */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {/* Left - Red CTA */}
        <div style={{ background: 'var(--red)', padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 14 }}>Ready to Buy?</p>
          <h2 className="serif" style={{ fontSize: 'clamp(36px, 3.5vw, 54px)', fontWeight: 300, color: '#fff', marginBottom: 20 }}>Let&apos;s find your <em style={{ fontStyle: 'italic' }}>Denver home</em></h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: 420, marginBottom: 40 }}>No pressure, no obligation. Just a friendly conversation about where you are and where you want to be.</p>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link href="/contact" style={{ background: '#fff', color: 'var(--red)', padding: '16px 40px', fontSize: 12, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', display: 'inline-block' }}>Get in Touch</Link>
            <Link href="/listings" className="btn-outline">Search Homes</Link>
          </div>
        </div>

        {/* Right - Cream Resources */}
        <div style={{ background: 'var(--cream)', padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>Resources</p>
          <h3 className="serif" style={{ fontSize: 32, fontWeight: 300, marginBottom: 32 }}>Helpful <em style={{ fontStyle: 'italic', color: 'var(--red)' }}>links</em></h3>
          <div>
            {resources.map((r) => (
              <Link href={r.href} key={r.href} className="resource-link">
                {r.label}
                <span>{"→"}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
