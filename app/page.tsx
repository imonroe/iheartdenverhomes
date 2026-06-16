import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emily Chaney | Denver Real Estate With Heart",
  description: "Buying or selling a home is one of life's biggest moments. With 20+ years in the Denver market, Emily Chaney is here to make sure yours is exciting — not stressful.",
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="hero" style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', paddingTop: 88 }}>
        <div style={{ background: 'var(--cream)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 64px 80px 80px' }}>
          <p className="serif" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 22 }}>Denver Real Estate · MHM Homes</p>
          <h1 style={{ fontSize: 'clamp(52px, 5.5vw, 78px)', fontWeight: 300, lineHeight: 1.08, marginBottom: 28 }}>
            Denver<br />Real Estate<br /><em style={{ fontStyle: 'italic', color: 'var(--red)' }}>With Heart</em>
          </h1>
          <p style={{ fontSize: 16, color: 'var(--mid)', lineHeight: 1.75, maxWidth: 440, marginBottom: 44 }}>Buying or selling a home is one of life&apos;s biggest moments. With 20+ years in the Denver market, I&apos;m here to make sure yours is exciting — not stressful.</p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link href="/contact" className="btn-primary">Let&apos;s Talk</Link>
            <Link href="/listings" className="btn-secondary">View Listings →</Link>
          </div>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <Image src="/emily-bookshelf-portrait.jpg" alt="Emily Chaney, Denver Realtor" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
          <div style={{ position: 'absolute', bottom: 48, left: -1, background: 'var(--white)', padding: '20px 28px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 300, color: 'var(--red)', lineHeight: 1 }}>20<span style={{ fontSize: 24 }}>+</span></div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--mid)', marginTop: 4 }}>Years in Denver</div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-strip">
        <div className="stat-item"><div className="stat-num">20<span style={{ fontSize: 28 }}>+</span></div><div className="stat-label">Years Experience</div></div>
        <div className="stat-item"><div className="stat-num">500<span style={{ fontSize: 28 }}>+</span></div><div className="stat-label">Homes Sold</div></div>
        <div className="stat-item"><div className="stat-num">5<span style={{ fontSize: 28 }}>★</span></div><div className="stat-label">Client Rating</div></div>
        <div className="stat-item"><div className="stat-num">300<span style={{ fontSize: 28 }}>+</span></div><div className="stat-label">Days of Denver Sunshine</div></div>
      </div>

      {/* LISTINGS */}
      <section className="section" style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}>
        <div style={{ padding: '0 80px 48px' }}>
          <div className="section-header">
            <p className="section-eyebrow">Properties</p>
            <h2 className="section-title">Featured <em>Listings</em></h2>
            <p className="section-subtitle">Current listings and recent sales across Denver and surrounding neighborhoods.</p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          <div style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', gridColumn: 'span 2' }}>
            <div style={{ aspectRatio: '16/9', background: 'linear-gradient(135deg,var(--sand),#d4c5b0)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 300, color: 'var(--mid)', opacity: 0.6 }}>Centennial</span></div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 28px 28px', background: 'linear-gradient(transparent, rgba(0,0,0,0.72))', color: '#fff' }}>
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', background: 'var(--red)', color: '#fff', padding: '4px 10px', display: 'inline-block', marginBottom: 10 }}>Active</span>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22 }}>6928 S Columbine Way, Centennial</div>
              <div style={{ fontSize: 14, fontWeight: 500, marginTop: 4, opacity: 0.9 }}>$825,000</div>
              <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>4 bd · 3 ba · 2,607 sqft</div>
            </div>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
            <div style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg,#c8b8a2,#e8d8c4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 300, color: 'var(--mid)', opacity: 0.6 }}>Denver · Cole</span></div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 28px 28px', background: 'linear-gradient(transparent, rgba(0,0,0,0.72))', color: '#fff' }}>
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', background: 'var(--red)', color: '#fff', padding: '4px 10px', display: 'inline-block', marginBottom: 10 }}>Active</span>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22 }}>3733 N Franklin St, Denver</div>
              <div style={{ fontSize: 14, fontWeight: 500, marginTop: 4, opacity: 0.9 }}>$750,000</div>
              <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>3 bd · 3 ba · 1,682 sqft</div>
            </div>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
            <div style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg,#8a7a6a,#b09880)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 300, color: 'rgba(255,255,255,0.5)' }}>Highlands · LoHi</span></div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 28px 28px', background: 'linear-gradient(transparent, rgba(0,0,0,0.72))', color: '#fff' }}>
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', background: 'var(--dark)', color: '#fff', padding: '4px 10px', display: 'inline-block', marginBottom: 10 }}>Just Sold</span>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22 }}>2472 W Argyle Place, Denver</div>
              <div style={{ fontSize: 14, fontWeight: 500, marginTop: 4, opacity: 0.9 }}>$1,435,000</div>
              <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>Denver · Highlands</div>
            </div>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
            <div style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg,#7a6a5a,#a08870)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 300, color: 'rgba(255,255,255,0.5)' }}>Wash Park</span></div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 28px 28px', background: 'linear-gradient(transparent, rgba(0,0,0,0.72))', color: '#fff' }}>
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', background: 'var(--dark)', color: '#fff', padding: '4px 10px', display: 'inline-block', marginBottom: 10 }}>Just Sold</span>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22 }}>1968 S Clarkson St, Denver</div>
              <div style={{ fontSize: 14, fontWeight: 500, marginTop: 4, opacity: 0.9 }}>$1,120,000</div>
              <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>3 bd · 4 ba · 3,240 sqft</div>
            </div>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
            <div style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg,#6a5a4a,#907868)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 300, color: 'rgba(255,255,255,0.5)' }}>Cherry Creek</span></div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 28px 28px', background: 'linear-gradient(transparent, rgba(0,0,0,0.72))', color: '#fff' }}>
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', background: 'var(--dark)', color: '#fff', padding: '4px 10px', display: 'inline-block', marginBottom: 10 }}>Just Sold</span>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22 }}>463 S Washington St, Denver</div>
              <div style={{ fontSize: 14, fontWeight: 500, marginTop: 4, opacity: 0.9 }}>$1,200,000</div>
              <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>4 bd · 3 ba · 2,557 sqft</div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', padding: '48px 0 80px' }}>
          <Link href="/listings" className="btn-primary">View All Listings →</Link>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section section-alt">
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 80, alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <Image src="/emily-sofa-art.jpg" alt="Emily Chaney" width={500} height={667} style={{ width: '100%', height: 'auto', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: -20, right: -20, width: 140, height: 140, border: '3px solid var(--red)', zIndex: -1 }} />
          </div>
          <div>
            <p className="section-eyebrow">Meet Emily</p>
            <h2 className="section-title">Denver &ldquo;nativish.&rdquo;<br /><em>Let me show you around.</em></h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 300, color: 'var(--dark)', lineHeight: 1.55, marginBottom: 20 }}>&ldquo;Buying or selling a house can be exciting, emotional, and stressful — but it doesn&apos;t have to be. My goal is to give you the most stress-free real estate experience possible.&rdquo;</p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--mid)', marginBottom: 20 }}>With <strong style={{ color: 'var(--dark)', fontWeight: 500 }}>20+ years navigating Denver&apos;s ever-changing market</strong>, I&apos;ve been through the booms and the busts — which means I bring real-world experience to every transaction. Grew up in Arvada, spent years in Seattle, came back in 2001 and never left. This city is in my bones.</p>
            <div style={{ display: 'flex', gap: 32, marginTop: 40, paddingTop: 36, borderTop: '1px solid var(--sand)' }}>
              <div><div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 38, fontWeight: 300, color: 'var(--red)', lineHeight: 1 }}>20+</div><div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--light)', marginTop: 4 }}>Years Experience</div></div>
              <div><div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 38, fontWeight: 300, color: 'var(--red)', lineHeight: 1 }}>MHM</div><div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--light)', marginTop: 4 }}>Homes Agent</div></div>
              <div><div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 38, fontWeight: 300, color: 'var(--red)', lineHeight: 1 }}>5★</div><div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--light)', marginTop: 4 }}>Client Rated</div></div>
            </div>
            <div style={{ marginTop: 40, display: 'flex', gap: 16 }}>
              <Link href="/about" className="btn-primary">Meet Emily</Link>
              <Link href="/contact" className="btn-secondary">Work Together →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'var(--sand)' }}>
        <div style={{ background: 'var(--white)', padding: '72px 64px', position: 'relative', overflow: 'hidden' }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 80, fontWeight: 300, color: 'var(--sand)', lineHeight: 1, position: 'absolute', top: 40, right: 48 }}>01</span>
          <div style={{ fontSize: 32, marginBottom: 28 }}>🏡</div>
          <h3 className="serif" style={{ fontSize: 36, fontWeight: 300, marginBottom: 18 }}>Buying<br />a Home</h3>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--mid)', marginBottom: 36, maxWidth: 360 }}>Denver&apos;s market moves fast. You need someone who knows every neighborhood, every pocket listing, and exactly how to negotiate on your behalf.</p>
          <ul style={{ listStyle: 'none', marginBottom: 40 }}>
            {['Expert neighborhood guidance', 'Strategic offer preparation', 'Skilled negotiation & advocacy', 'From first look to closing day'].map(item => (
              <li key={item} style={{ fontSize: 13, color: 'var(--mid)', padding: '8px 0', borderBottom: '1px solid var(--sand)', display: 'flex', alignItems: 'center', gap: 10 }}><span style={{ color: 'var(--red)' }}>→</span>{item}</li>
            ))}
          </ul>
          <Link href="/buyers" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, border: '1.5px solid var(--dark)', fontSize: 18 }}>→</Link>
        </div>
        <div style={{ background: 'var(--white)', padding: '72px 64px', position: 'relative', overflow: 'hidden' }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 80, fontWeight: 300, color: 'var(--sand)', lineHeight: 1, position: 'absolute', top: 40, right: 48 }}>02</span>
          <div style={{ fontSize: 32, marginBottom: 28 }}>💰</div>
          <h3 className="serif" style={{ fontSize: 36, fontWeight: 300, marginBottom: 18 }}>Selling<br />Your Home</h3>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--mid)', marginBottom: 36, maxWidth: 360 }}>Getting top dollar requires strategy, marketing, and pricing expertise. I&apos;ll position your home to attract the right buyers at the right price.</p>
          <ul style={{ listStyle: 'none', marginBottom: 40 }}>
            {['Accurate market pricing', 'Professional staging advice', 'Full marketing rollout', 'Smooth close, maximum return'].map(item => (
              <li key={item} style={{ fontSize: 13, color: 'var(--mid)', padding: '8px 0', borderBottom: '1px solid var(--sand)', display: 'flex', alignItems: 'center', gap: 10 }}><span style={{ color: 'var(--red)' }}>→</span>{item}</li>
            ))}
          </ul>
          <Link href="/sellers" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, border: '1.5px solid var(--dark)', fontSize: 18 }}>→</Link>
        </div>
      </div>

      {/* PHOTO STRIP */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3, overflow: 'hidden' }}>
        {['/emily-hallway-red.jpg', '/emily-hug-me.jpg', '/emily-phone-kitchen.jpg', '/emily-entryway-cactus.jpg'].map((src) => (
          <div key={src} style={{ aspectRatio: '3/4', overflow: 'hidden', position: 'relative' }}>
            <Image src={src} alt="Emily Chaney" fill style={{ objectFit: 'cover', objectPosition: src.includes('cactus') ? 'center' : 'center top' }} />
          </div>
        ))}
      </div>

      {/* TESTIMONIALS */}
      <section style={{ background: 'var(--dark)', padding: '100px 80px' }}>
        <p className="section-eyebrow">What Clients Say</p>
        <h2 className="section-title" style={{ color: '#fff' }}>Real Stories,<br /><em style={{ color: 'var(--gold)' }}>Real Results</em></h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-quote">&ldquo;Emily was really amazing helping me purchase my first home. So helpful, thoughtful, smart and savvy in navigating the Denver market!&rdquo;</p>
            <div className="testimonial-author">Alison T. · Buyer</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-quote">&ldquo;Seriously the best damn realtor in Denver, perhaps in the galaxy. Patient, knowledgeable as hell, and a super nice and fun person to boot!&rdquo;</p>
            <div className="testimonial-author">Michael T. · Buyer</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-quote">&ldquo;I wouldn&apos;t use anyone else but Emily when it comes to buying or selling. She knows Denver inside and out and is an amazing negotiator.&rdquo;</p>
            <div className="testimonial-author">Tyler J. · Buyer &amp; Seller</div>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section className="section section-alt">
        <div className="section-header">
          <p className="section-eyebrow">Explore Denver</p>
          <h2 className="section-title">Find Your <em>Neighborhood</em></h2>
          <p className="section-subtitle">Every corner of Denver has its own personality. Let&apos;s find yours.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
          {[
            { href: '/neighborhoods#cherry-creek', name: 'Cherry Creek', vibe: 'Upscale · Walkable · Dining', bg: 'linear-gradient(135deg,#8B7355,#C4A882)' },
            { href: '/neighborhoods#washington-park', name: 'Washington Park', vibe: 'Outdoorsy · Families · Parks', bg: 'linear-gradient(135deg,#5A7355,#82A472)' },
            { href: '/neighborhoods#lohi', name: 'LoHi', vibe: 'Trendy · Restaurants · Views', bg: 'linear-gradient(135deg,#6A5A7A,#9888A8)' },
            { href: '/neighborhoods#highlands', name: 'Highlands', vibe: 'Historic · Vibrant · Community', bg: 'linear-gradient(135deg,#7A6A5A,#A89888)' },
            { href: '/neighborhoods#congress-park', name: 'Congress Park', vibe: 'Quiet · Charming · Eclectic', bg: 'linear-gradient(135deg,#5A6A7A,#8898A8)' },
            { href: '/neighborhoods#rino', name: 'RiNo', vibe: 'Arts · Craft Beer · Creative', bg: 'linear-gradient(135deg,#6A7A5A,#98A888)' },
          ].map((n) => (
            <Link key={n.name} href={n.href} style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', aspectRatio: '3/4', display: 'block', background: n.bg }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, transparent 35%, rgba(0,0,0,0.72) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 32 }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, color: '#fff' }}>{n.name}</div>
                <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>{n.vibe}</div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/neighborhoods" className="btn-primary">Explore All Neighborhoods →</Link>
        </div>
      </section>

      {/* INSTAGRAM */}
      <div style={{ padding: 80, textAlign: 'center', background: 'var(--white)' }}>
        <p className="section-eyebrow">Follow Along</p>
        <h2 className="serif" style={{ fontSize: 42, fontWeight: 300 }}>Life in <em style={{ fontStyle: 'italic', color: 'var(--red)' }}>Denver</em></h2>
        <p style={{ fontSize: 14, color: 'var(--mid)', marginTop: 8 }}>Behind the listings, the neighborhood finds, and the Colorado life.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 2, marginTop: 40 }}>
          {['#c4a882,#a08060', '#8ba888,#6a8868', '#a8a8c4,#7878a8', '#c4a8a8,#a87878', '#a8c4b8,#78a898', '#c4bca8,#a09880'].map((c, i) => (
            <div key={i} style={{ aspectRatio: '1', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '100%', background: `linear-gradient(135deg,${c})` }} />
            </div>
          ))}
        </div>
        <a href="https://www.instagram.com/emheartsdenver/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 32, fontSize: 14, fontWeight: 500, color: 'var(--mid)' }}>♥ @emheartsdenver on Instagram</a>
      </div>

      {/* CONTACT BANNER */}
      <section style={{ background: 'var(--red)', padding: 80, textAlign: 'center' }}>
        <p className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Let&apos;s Connect</p>
        <h2 className="serif" style={{ color: '#fff', fontSize: 58, fontWeight: 300, marginBottom: 20 }}>Ready to get <em>started?</em></h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.7, maxWidth: 520, margin: '0 auto 40px' }}>No pressure, no rush — just a friendly conversation about your goals.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ background: '#fff', color: 'var(--red)', padding: '16px 40px', fontSize: 12, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase' }}>Get in Touch →</Link>
          <Link href="/listings" className="btn-outline">Search Homes</Link>
        </div>
      </section>
    </>
  );
}
