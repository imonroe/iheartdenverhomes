import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before & After | Emily Chaney Denver Real Estate",
};

export default function BeforeAfterPage() {
  const transformations = [
    {
      address: "6730 W 36th Place",
      area: "Wheat Ridge",
      sold: "$695,000",
      stats: [
        { label: "Days on Market", value: "5" },
        { label: "Result", value: "Over ask" },
      ],
      quote: "A complete transformation that helped buyers see the true potential of this mid-century gem.",
    },
    {
      address: "4745 Garland Street",
      area: "Wheat Ridge",
      sold: "$675,000",
      stats: [
        { label: "Days on Market", value: "8" },
        { label: "Offers Received", value: "3" },
      ],
      quote: "Strategic staging turned a dated interior into a move-in-ready showpiece that attracted multiple offers.",
    },
    {
      address: "2472 W Argyle Place",
      area: "Highlands Denver",
      sold: "$1,435,000",
      stats: [
        { label: "Sale Price", value: "$1.43M" },
        { label: "Result", value: "Top dollar" },
      ],
      quote: "Thoughtful preparation and styling positioned this Highlands home at the top of its price range.",
    },
    {
      address: "1968 S Clarkson Street",
      area: "Wash Park Denver",
      sold: "$1,120,000",
      stats: [
        { label: "Sale Price", value: "$1.12M" },
        { label: "Neighborhood", value: "Wash Park" },
      ],
      quote: "From lived-in to listing-ready — staging helped this Wash Park classic shine in a competitive market.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Walk & Assess",
      desc: "I tour your home room by room and identify exactly what will move the needle with buyers — and what we can skip.",
    },
    {
      num: "02",
      title: "Prep & Stage",
      desc: "From paint touch-ups to furniture placement, we create a look that photographs beautifully and feels aspirational in person.",
    },
    {
      num: "03",
      title: "Professional Photos",
      desc: "High-end photography and video capture every angle at its best. These images become the foundation of your entire marketing campaign.",
    },
    {
      num: "04",
      title: "Strategic Launch",
      desc: "Your listing goes live with maximum impact — timed, targeted, and positioned to generate immediate interest and urgency.",
    },
  ];

  return (
    <>
      <style>{`
        .ba-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .ba-card {
          background: var(--white);
          border: 1px solid var(--sand);
          overflow: hidden;
        }
        .ba-panels {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          background: var(--sand);
        }
        .ba-panel {
          height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          position: relative;
        }
        .ba-panel-before {
          background: linear-gradient(135deg, #c4bdb3 0%, #a89f93 100%);
        }
        .ba-panel-after {
          background: linear-gradient(135deg, #8aa68e 0%, #5f8a65 100%);
        }
        .ba-panel span {
          position: relative;
          z-index: 1;
          background: rgba(0,0,0,0.25);
          padding: 8px 18px;
          font-size: 10px;
          letter-spacing: .16em;
        }
        .ba-body {
          padding: 32px;
        }
        .ba-address {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 26px;
          font-weight: 400;
          margin-bottom: 4px;
        }
        .ba-area {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--light);
          margin-bottom: 20px;
        }
        .ba-quote {
          font-size: 14px;
          line-height: 1.75;
          color: var(--mid);
          font-style: italic;
          margin-bottom: 24px;
        }
        .ba-result-strip {
          display: flex;
          gap: 0;
          border-top: 1px solid var(--sand);
        }
        .ba-result-item {
          flex: 1;
          padding: 18px 24px;
          border-right: 1px solid var(--sand);
        }
        .ba-result-item:last-child {
          border-right: none;
        }
        .ba-result-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--light);
          margin-bottom: 4px;
        }
        .ba-result-value {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 22px;
          font-weight: 400;
        }
        .ba-sold-tag {
          display: inline-block;
          background: var(--red);
          color: #fff;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: .12em;
          text-transform: uppercase;
          padding: 6px 14px;
          margin-bottom: 16px;
        }
        .ba-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          background: var(--sand);
        }
        .ba-step-card {
          background: var(--cream);
          padding: 48px 36px;
          position: relative;
          overflow: hidden;
        }
        .ba-step-card .ba-step-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 64px;
          font-weight: 300;
          color: var(--sand);
          line-height: 1;
          position: absolute;
          top: 20px;
          right: 24px;
        }
        .ba-step-card h3 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 14px;
        }
        .ba-step-card p {
          font-size: 14px;
          line-height: 1.75;
          color: var(--mid);
          max-width: 280px;
        }
        @media (max-width: 1024px) {
          .ba-grid { grid-template-columns: 1fr; max-width: 640px; }
          .ba-process-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 700px) {
          .ba-grid { max-width: 100%; }
          .ba-process-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <section className="page-hero">
        <p className="section-eyebrow">Staging &amp; Preparation</p>
        <h1>
          Before &amp; After:<br /><em>The Difference It Makes</em>
        </h1>
        <p>
          Every home has potential. The right preparation unlocks it — helping buyers
          fall in love the moment they walk through the door.
        </p>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="section-header">
          <p className="section-eyebrow">The Emily Chaney Approach</p>
          <h2 className="section-title">Presentation <em>sells homes.</em></h2>
          <p className="section-subtitle">
            Buyers decide whether they can see themselves in a home within the first
            8 seconds. Strategic staging and preparation ensure those seconds work
            in your favor.
          </p>
        </div>

        {/* TRANSFORMATION CARDS */}
        <div className="ba-grid">
          {transformations.map((t) => (
            <div key={t.address} className="ba-card">
              <div className="ba-panels">
                <div className="ba-panel ba-panel-before">
                  <span>Before</span>
                </div>
                <div className="ba-panel ba-panel-after">
                  <span>After</span>
                </div>
              </div>
              <div className="ba-body">
                <div className="ba-sold-tag">Sold {t.sold}</div>
                <h3 className="ba-address">{t.address}</h3>
                <p className="ba-area">{t.area}</p>
                <p className="ba-quote">&ldquo;{t.quote}&rdquo;</p>
              </div>
              <div className="ba-result-strip">
                {t.stats.map((s) => (
                  <div key={s.label} className="ba-result-item">
                    <p className="ba-result-label">{s.label}</p>
                    <p className="ba-result-value">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DARK BANNER */}
      <section style={{ background: 'var(--dark)', padding: '72px 80px', textAlign: 'center' }}>
        <h2
          className="serif"
          style={{
            color: '#fff',
            fontSize: 'clamp(32px, 3vw, 48px)',
            fontWeight: 300,
            marginBottom: 12,
          }}
        >
          Got before &amp; after <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>photos?</em>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.7, maxWidth: 500, margin: '0 auto' }}>
          Every listing I take gets the full treatment. These results speak for themselves.
        </p>
      </section>

      {/* PROCESS */}
      <section className="section section-alt">
        <div className="section-header">
          <p className="section-eyebrow">The Process</p>
          <h2 className="section-title">From Lived-In to <em>Listing-Ready</em></h2>
          <p className="section-subtitle">
            A proven preparation process that consistently delivers stronger first
            impressions and better offers.
          </p>
        </div>
        <div className="ba-process-grid">
          {steps.map((step) => (
            <div key={step.num} className="ba-step-card">
              <span className="ba-step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--red)', padding: 80, textAlign: 'center' }}>
        <p className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Get Started</p>
        <h2
          className="serif"
          style={{
            color: '#fff',
            fontSize: 'clamp(36px, 4vw, 58px)',
            fontWeight: 300,
            marginBottom: 20,
          }}
        >
          Let&apos;s talk about your home&apos;s <em style={{ fontStyle: 'italic' }}>potential.</em>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.7, maxWidth: 520, margin: '0 auto 40px' }}>
          Whether you&apos;re ready to list or just starting to think about it, a
          conversation costs nothing and could change everything.
        </p>
        <Link
          href="/contact"
          style={{
            background: '#fff',
            color: 'var(--red)',
            padding: '16px 40px',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            display: 'inline-block',
          }}
        >
          Schedule a Consultation &rarr;
        </Link>
      </section>
    </>
  );
}
