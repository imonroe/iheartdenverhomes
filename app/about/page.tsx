import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Emily | Emily Chaney Denver Real Estate",
};

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero" style={{ textAlign: 'center', paddingBottom: 100 }}>
        <p className="section-eyebrow">The Person Behind the Listings</p>
        <h1>
          Hey there,<br /><em>I&apos;m Emily!</em>
        </h1>
        <p style={{ margin: '20px auto 0', maxWidth: 580 }}>
          Denver realtor. Neighborhood nerd. Great Dane mom. Your biggest advocate in the most important purchase of your life.
        </p>
      </section>

      {/* BIO SECTION */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 80, alignItems: 'start' }}>
          {/* Left: Portrait with accent */}
          <div style={{ position: 'relative' }}>
            <Image
              src="/emily-bookshelf-portrait.jpg"
              alt="Emily Chaney portrait"
              width={500}
              height={667}
              style={{ width: '100%', height: 'auto', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
            <div style={{ position: 'absolute', bottom: -20, right: -20, width: 140, height: 140, border: '3px solid var(--red)', zIndex: -1 }} />
          </div>

          {/* Right: Quote, bio, CTA */}
          <div>
            <blockquote style={{ borderLeft: '3px solid var(--red)', paddingLeft: 28, marginBottom: 40 }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 300, fontStyle: 'italic', color: 'var(--dark)', lineHeight: 1.55 }}>
                &ldquo;I don&apos;t just sell houses &mdash; I help people find the place where their next chapter starts. That&apos;s the part I love.&rdquo;
              </p>
            </blockquote>

            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--mid)', marginBottom: 20 }}>
              I grew up in <strong style={{ color: 'var(--dark)', fontWeight: 500 }}>Arvada</strong>, spent my college years exploring the Pacific Northwest in Seattle, and came back to Colorado in 2001 because &mdash; let&apos;s be honest &mdash; once Denver is in your blood, nowhere else quite compares. I&apos;ve been helping people buy and sell homes here ever since.
            </p>

            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--mid)', marginBottom: 20 }}>
              With <strong style={{ color: 'var(--dark)', fontWeight: 500 }}>20+ years in the Denver market</strong>, I&apos;ve guided first-time buyers through bidding wars, helped families upsize to their dream home, and navigated every kind of market &mdash; booms, busts, and everything in between. I know this city block by block.
            </p>

            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--mid)', marginBottom: 40 }}>
              When I&apos;m not previewing listings or negotiating contracts, you&apos;ll find me walking my Great Dane through Wash Park, hunting down the best breakfast burrito in town, or convincing friends that Denver really does have 300 days of sunshine. I bring that same energy &mdash; honest, enthusiastic, a little relentless &mdash; to every client relationship.
            </p>

            <div style={{ display: 'flex', gap: 16 }}>
              <Link href="/contact" className="btn-primary">Work With Emily</Link>
              <Link href="/listings" className="btn-secondary">View Listings &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SIX WORDS SECTION */}
      <section className="section section-alt">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <p className="section-eyebrow">What You Get</p>
          <h2 className="section-title">Six words. <em>All true.</em></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {[
            { num: '01', word: 'Honest', desc: 'No sugarcoating, no hidden agendas. You get the truth — even when it’s not what you want to hear.' },
            { num: '02', word: 'Experienced', desc: '20+ years and 500+ transactions in Denver. I’ve seen every curveball this market can throw.' },
            { num: '03', word: 'Dedicated', desc: 'Your timeline is my timeline. I don’t disappear after the offer — I’m with you through closing and beyond.' },
            { num: '04', word: 'Hardworking', desc: 'Early mornings, late showings, weekend open houses. Whatever it takes to get you the right result.' },
            { num: '05', word: 'Funny', desc: 'Buying a home is stressful enough. I keep things light, real, and — dare I say — actually fun.' },
            { num: '06', word: 'Savvy', desc: 'Pricing strategy, negotiation tactics, market timing. I know how to position you to win.' },
          ].map((item) => (
            <div key={item.num} style={{ background: 'var(--white)', padding: '48px 40px', position: 'relative', overflow: 'hidden' }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 72, fontWeight: 300, color: 'var(--sand)', lineHeight: 1, position: 'absolute', top: 24, right: 28 }}>{item.num}</span>
              <h3 className="serif" style={{ fontSize: 32, fontWeight: 300, marginBottom: 14, color: 'var(--dark)' }}>{item.word}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--mid)', maxWidth: 320 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: 'var(--dark)', padding: '100px 80px' }}>
        <div style={{ textAlign: 'center' }}>
          <p className="section-eyebrow">What Clients Say</p>
          <h2 className="section-title" style={{ color: '#fff' }}>Don&apos;t take my word <em style={{ color: 'var(--gold)' }}>for it.</em></h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">{'★★★★★'}</div>
            <p className="testimonial-quote">&ldquo;Emily was really amazing helping me purchase my first home. So helpful, thoughtful, smart and savvy in navigating the Denver market!&rdquo;</p>
            <div className="testimonial-author">Alison T. &middot; Buyer</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">{'★★★★★'}</div>
            <p className="testimonial-quote">&ldquo;Seriously the best damn realtor in Denver, perhaps in the galaxy. Patient, knowledgeable as hell, and a super nice and fun person to boot!&rdquo;</p>
            <div className="testimonial-author">Michael T. &middot; Buyer</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">{'★★★★★'}</div>
            <p className="testimonial-quote">&ldquo;I wouldn&apos;t use anyone else but Emily when it comes to buying or selling. She knows Denver inside and out and is an amazing negotiator.&rdquo;</p>
            <div className="testimonial-author">Tyler J. &middot; Buyer &amp; Seller</div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="section-header">
          <p className="section-eyebrow">The Team</p>
          <h2 className="section-title">It takes <em>two.</em></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'start' }}>
          {/* Placeholder portrait */}
          <div style={{ aspectRatio: '3/4', background: 'linear-gradient(135deg, #c4b8a8, #e0d6c8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 300, color: 'var(--mid)', opacity: 0.5 }}>Heather Dunn</span>
          </div>

          {/* Bio */}
          <div>
            <h3 className="serif" style={{ fontSize: 36, fontWeight: 300, marginBottom: 8, color: 'var(--dark)' }}>Heather Dunn</h3>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 24 }}>Transaction Coordinator</p>

            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--mid)', marginBottom: 20 }}>
              Behind every seamless closing is Heather. She keeps every deadline, document, and detail on track so nothing falls through the cracks. If Emily is the face you see at showings, Heather is the engine that keeps the entire transaction running on time.
            </p>

            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--mid)', marginBottom: 40 }}>
              With years of experience coordinating residential transactions across the Denver metro, Heather has a reputation for being thorough, responsive, and completely unflappable &mdash; even when things get complicated. She&apos;s the reason clients say the process felt &ldquo;surprisingly easy.&rdquo;
            </p>

            <div style={{ display: 'flex', gap: 48, paddingTop: 32, borderTop: '1px solid var(--sand)' }}>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 300, color: 'var(--red)', lineHeight: 1 }}>100%</div>
                <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--light)', marginTop: 6 }}>Client Follow-Through</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 300, color: 'var(--red)', lineHeight: 1 }}>Zero</div>
                <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--light)', marginTop: 6 }}>Dropped Balls</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RED CTA */}
      <section style={{ background: 'var(--red)', padding: 80, textAlign: 'center' }}>
        <p className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Let&apos;s Connect</p>
        <h2 className="serif" style={{ color: '#fff', fontSize: 58, fontWeight: 300, marginBottom: 20 }}>Ready to find your <em style={{ fontStyle: 'italic', color: '#fff' }}>Denver home?</em></h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.7, maxWidth: 520, margin: '0 auto 40px' }}>No pressure, no rush &mdash; just a friendly conversation about your goals.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ background: '#fff', color: 'var(--red)', padding: '16px 40px', fontSize: 12, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', display: 'inline-block' }}>Get in Touch &rarr;</Link>
          <Link href="/listings" className="btn-outline">Search Homes</Link>
        </div>
      </section>
    </>
  );
}
