import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Looks | Staging & Design | Emily Chaney Denver Real Estate",
};

export default function TheLooksPage() {
  const transformations = [
    {
      address: "2472 W Argyle Pl, Highlands",
      room: "Living Room",
      roomEm: "Reimagined",
      sold: "$1,435,000",
      days: "6",
      whatWeDid:
        "This mid-century Highlands home had great bones but the living room felt dated and disconnected. We removed heavy drapes, replaced dark furniture with a curated neutral palette, added modern lighting, and anchored the space with a large-scale art piece that drew the eye through to the backyard. The fireplace surround was restyled with minimal decor to let the architecture speak.",
      theResult:
        "The home received 14 showings in the first weekend and multiple offers by Monday. It sold for $35,000 over asking in just 6 days. Buyers specifically mentioned the living room as the moment they knew they wanted the house.",
      bgBefore: "#d5cdc4",
      bgAfter: "#c8c0b5",
    },
    {
      address: "1968 S Clarkson St, Washington Park",
      room: "Primary Bedroom",
      roomEm: "Transformed",
      sold: "$1,120,000",
      days: "9",
      whatWeDid:
        "The primary bedroom was being used as a home office and storage space. We cleared everything out, brought in a king platform bed with high-end hotel-inspired linens, added symmetrical nightstands with warm brass lamps, and hung floor-length linen curtains to frame the windows. A plush area rug and a single upholstered bench at the foot of the bed completed the retreat feel.",
      theResult:
        "Buyers consistently described the primary suite as the standout room during feedback. The home sold in 9 days at full asking price with clean terms — no inspection contingencies, no appraisal concerns. The sellers netted more than they expected.",
      bgBefore: "#c9c1b8",
      bgAfter: "#bfb7ac",
    },
    {
      address: "6730 W 36th Ave, Wheat Ridge",
      room: "Kitchen & Dining",
      roomEm: "Elevated",
      sold: "$695,000",
      days: "14",
      whatWeDid:
        "The kitchen had good cabinetry but felt cold and sterile. We added warmth with wood cutting boards, ceramic vessels, and a few styled open shelves. The dining area was empty — we brought in a modern farmhouse table set for six with linen placemats, a centerpiece of dried botanicals, and a statement pendant light overhead. The connection between the two spaces finally made sense.",
      theResult:
        "This Wheat Ridge listing had been a concern for the sellers — similar homes in the area were sitting for 30+ days. With staging, we generated strong interest immediately. Sold in 14 days at 101% of list price. The photography of the kitchen and dining area drove the most online engagement by far.",
      bgBefore: "#d2cbc3",
      bgAfter: "#c5bdb4",
    },
    {
      address: "1601 N Hooker St, LoHi",
      room: "Open Living & Dining",
      roomEm: "Connected",
      sold: "$1,035,000",
      days: "7",
      whatWeDid:
        "This LoHi townhome had an open floorplan that the sellers had divided with oversized sectional furniture and mismatched rugs. We replaced everything with a streamlined sofa and accent chairs oriented toward the fireplace, defined the dining zone with a round table and four chairs, and created visual flow using a cohesive warm neutral palette. Strategic mirror placement amplified the natural light.",
      theResult:
        "The home showed twice as large as it had before staging. We had 22 showing requests in the first five days and accepted an offer on day 7 — $15,000 over list with an escalation clause. The buyers said the layout made immediate sense when they walked in.",
      bgBefore: "#cdc5bc",
      bgAfter: "#c1b9af",
    },
    {
      address: "4745 Garland St, Wheat Ridge",
      room: "Entry & Main Living",
      roomEm: "First Impressions",
      sold: "$675,000",
      days: "12",
      whatWeDid:
        "The entry was cluttered with shoes, coats, and personal items — the first impression was chaos. We cleared the entry completely, added a slim console table with a mirror above it, and placed a woven basket and a single plant to create a welcoming moment. In the main living area, we swapped the sellers' dark leather furniture for a light linen sofa, added throw pillows in soft earth tones, and styled the built-in shelves with books and ceramics.",
      theResult:
        "Feedback from the first round of showings was overwhelmingly positive — every buyer commented on how inviting the home felt from the front door. The home sold in 12 days at 103% of list price with two competing offers. A clean, intentional entry set the tone for the entire showing experience.",
      bgBefore: "#d0c8bf",
      bgAfter: "#c3bbb1",
    },
  ];

  const processSteps = [
    {
      title: "Walk & Assess",
      desc: "I walk every room with you, noting what stays, what goes, and what needs to shift. We talk about the buyer profile for your neighborhood and what they expect to see.",
    },
    {
      title: "Edit & Stage",
      desc: "We declutter, depersonalize, and restyle. Sometimes that means rearranging what you already have. Other times, I bring in furniture, art, and accessories to transform the space completely.",
    },
    {
      title: "Professional Photos",
      desc: "Once the home is staged, my photographer captures every room at its best — natural light, clean compositions, and angles that make buyers stop scrolling and book a showing.",
    },
    {
      title: "Strategic Launch",
      desc: "The listing goes live with polished photos, compelling copy, and a marketing push designed to create urgency and drive the strongest possible offers in the shortest time.",
    },
  ];

  return (
    <>
      <style>{`
        .looks-hero {
          padding: 160px 80px 100px;
          background: var(--dark);
          color: var(--white);
        }
        .looks-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .looks-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 18px;
        }
        .looks-h1 {
          font-size: clamp(48px, 4.5vw, 72px);
          font-weight: 300;
          line-height: 1.05;
          margin-bottom: 24px;
        }
        .looks-h1 em {
          font-style: italic;
          color: var(--gold);
        }
        .looks-hero-desc {
          font-size: 16px;
          line-height: 1.75;
          color: #bbb;
          max-width: 480px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .stat-cell {
          padding: 40px 32px;
          background: var(--dark);
        }
        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 300;
          color: var(--white);
          line-height: 1;
          margin-bottom: 8px;
        }
        .stat-label {
          font-size: 12px;
          color: var(--light);
          letter-spacing: .06em;
          text-transform: uppercase;
        }

        .intro-strip {
          background: var(--red);
          color: var(--white);
          padding: 72px 80px;
        }
        .intro-strip-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(24px, 2.5vw, 34px);
          font-weight: 300;
          font-style: italic;
          line-height: 1.5;
          max-width: 720px;
          margin-bottom: 48px;
        }
        .intro-steps {
          display: flex;
          gap: 48px;
        }
        .intro-step-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: .14em;
          text-transform: uppercase;
          opacity: 0.8;
          position: relative;
          padding-left: 20px;
        }
        .intro-step-label::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
        }

        .photo-notice {
          background: var(--sand);
          padding: 28px 36px;
          border-left: 4px solid var(--red);
          margin: 0 80px;
          margin-top: 80px;
          margin-bottom: 0;
          font-size: 14px;
          color: var(--mid);
          line-height: 1.7;
        }

        .transform-section {
          padding: 100px 80px;
        }
        .transform-section-alt {
          background: var(--cream);
        }
        .transform-address {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: var(--light);
          margin-bottom: 10px;
        }
        .transform-title {
          font-size: clamp(32px, 3vw, 48px);
          font-weight: 300;
          margin-bottom: 24px;
        }
        .transform-title em {
          font-style: italic;
          color: var(--red);
        }
        .transform-tags {
          display: flex;
          gap: 12px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }
        .transform-tag {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: .08em;
          text-transform: uppercase;
          padding: 8px 18px;
          border: 1px solid var(--sand);
          color: var(--mid);
        }
        .transform-tag-sold {
          background: var(--red);
          color: var(--white);
          border-color: var(--red);
        }
        .transform-panels {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 56px;
        }
        .transform-panel {
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.25);
        }
        .transform-detail {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
        }
        .transform-detail h3 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 16px;
        }
        .transform-detail p {
          font-size: 15px;
          line-height: 1.8;
          color: var(--mid);
        }

        .process-section {
          padding: 100px 80px;
          background: var(--dark);
          color: var(--white);
        }
        .process-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .process-header h2 {
          font-size: clamp(36px, 3vw, 50px);
          font-weight: 300;
          margin-bottom: 16px;
        }
        .process-header p {
          font-size: 15px;
          color: #999;
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .process-card {
          background: rgba(255,255,255,0.04);
          border-top: 3px solid var(--red);
          padding: 40px 32px;
        }
        .process-card h3 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 14px;
          color: var(--white);
        }
        .process-card p {
          font-size: 14px;
          line-height: 1.75;
          color: #999;
        }

        .looks-cta {
          background: var(--red);
          padding: 80px;
          text-align: center;
        }
        .looks-cta h2 {
          font-size: clamp(30px, 3vw, 44px);
          font-weight: 300;
          color: var(--white);
          margin-bottom: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 900px) {
          .looks-hero { padding: 120px 32px 64px; }
          .looks-hero-grid { grid-template-columns: 1fr; gap: 48px; }
          .intro-strip { padding: 48px 32px; }
          .intro-steps { flex-wrap: wrap; gap: 24px; }
          .photo-notice { margin: 48px 32px 0; }
          .transform-section { padding: 64px 32px; }
          .transform-panels { grid-template-columns: 1fr; }
          .transform-detail { grid-template-columns: 1fr; gap: 32px; }
          .process-section { padding: 64px 32px; }
          .process-grid { grid-template-columns: 1fr 1fr; }
          .looks-cta { padding: 56px 32px; }
        }
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: 1fr; }
          .process-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section className="looks-hero">
        <div className="looks-hero-grid">
          <div>
            <p className="looks-eyebrow">Staging &amp; Design</p>
            <h1 className="looks-h1">
              The / <em>Looks.</em>
            </h1>
            <p className="looks-hero-desc">
              Staging is not decorating — it&apos;s strategy. Every room is
              edited, styled, and photographed to make buyers feel something the
              moment they see your listing online. This is what that process
              looks like, and the results it delivers.
            </p>
          </div>
          <div>
            <div className="stats-grid">
              <div className="stat-cell">
                <div className="stat-num">$1.4M</div>
                <div className="stat-label">Highest Sale</div>
              </div>
              <div className="stat-cell">
                <div className="stat-num">11</div>
                <div className="stat-label">Avg Days on Market</div>
              </div>
              <div className="stat-cell">
                <div className="stat-num">103%</div>
                <div className="stat-label">List Price Achieved</div>
              </div>
              <div className="stat-cell">
                <div className="stat-num">20+</div>
                <div className="stat-label">Yrs Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RED INTRO STRIP ─── */}
      <section className="intro-strip">
        <p className="intro-strip-quote">
          &ldquo;Staging isn&apos;t about making a home look pretty — it&apos;s
          about making buyers feel like they&apos;ve already moved in. Every
          detail is a decision. Every room is a strategy.&rdquo;
        </p>
        <div className="intro-steps">
          <span className="intro-step-label">Walk &amp; Assess</span>
          <span className="intro-step-label">Edit &amp; Stage</span>
          <span className="intro-step-label">Shoot &amp; List</span>
          <span className="intro-step-label">Sell &amp; Close</span>
        </div>
      </section>

      {/* ─── PHOTO NOTICE ─── */}
      <div className="photo-notice">
        <strong>A note on photos:</strong> Before-and-after images for each
        property are coming soon. In the meantime, the descriptions below
        capture the scope of work and the measurable results staging delivered
        for each listing.
      </div>

      {/* ─── TRANSFORMATIONS ─── */}
      {transformations.map((t, i) => (
        <section
          key={t.address}
          className={`transform-section${i % 2 === 1 ? " transform-section-alt" : ""}`}
        >
          <p className="transform-address">{t.address}</p>
          <h2 className="transform-title">
            {t.room} <em>{t.roomEm}</em>
          </h2>
          <div className="transform-tags">
            <span className="transform-tag transform-tag-sold">Sold</span>
            <span className="transform-tag">{t.sold}</span>
            <span className="transform-tag">{t.days} Days on Market</span>
          </div>
          <div className="transform-panels">
            <div
              className="transform-panel"
              style={{ background: t.bgBefore }}
            >
              Before
            </div>
            <div className="transform-panel" style={{ background: t.bgAfter }}>
              After
            </div>
          </div>
          <div className="transform-detail">
            <div>
              <h3>What We Did</h3>
              <p>{t.whatWeDid}</p>
            </div>
            <div>
              <h3>The Result</h3>
              <p>{t.theResult}</p>
            </div>
          </div>
        </section>
      ))}

      {/* ─── PROCESS SECTION ─── */}
      <section className="process-section">
        <div className="process-header">
          <p className="looks-eyebrow">The Process</p>
          <h2>How Every Listing Gets the Look</h2>
          <p>
            From the first walkthrough to launch day, every decision is
            intentional. Here&apos;s how staging works when you list with me.
          </p>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <div key={step.title} className="process-card">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="looks-cta">
        <h2>Let&apos;s talk about what your home could look like.</h2>
        <Link href="/contact" className="btn-outline">
          Get in Touch
        </Link>
      </section>
    </>
  );
}
