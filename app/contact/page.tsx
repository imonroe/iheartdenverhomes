import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Emily Chaney Denver Real Estate",
};

export default function ContactPage() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "5fr 7fr",
        minHeight: "100vh",
        paddingTop: 88,
      }}
    >
      {/* LEFT COLUMN */}
      <div
        style={{
          background: "var(--red)",
          padding: "80px 64px",
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        <p
          className="section-eyebrow"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Let&apos;s Connect
        </p>

        <h1
          className="serif"
          style={{
            color: "#fff",
            fontSize: "clamp(42px, 4.5vw, 64px)",
            fontWeight: 300,
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Ready to
          <br />
          <em style={{ fontStyle: "italic" }}>get started?</em>
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 16,
            lineHeight: 1.75,
            maxWidth: 420,
            marginBottom: 40,
          }}
        >
          Whether you&apos;re buying your first home, selling a longtime family
          property, or just exploring what&apos;s out there — I&apos;d love to
          hear from you. No pressure, no rush, just a real conversation about
          your goals.
        </p>

        <div style={{ marginBottom: 48 }}>
          <Image
            src="/emily-phone-kitchen.jpg"
            alt="Emily Chaney on the phone in her kitchen"
            width={600}
            height={450}
            style={{
              width: "100%",
              maxWidth: 600,
              height: "auto",
              aspectRatio: "4/3",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Contact info */}
        <div style={{ marginBottom: 32 }}>
          <a
            href="mailto:emily@hello303.com"
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: 500,
              display: "block",
              marginBottom: 8,
            }}
          >
            emily@hello303.com
          </a>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            MHM Homes &middot; Denver, CO
          </p>
        </div>

        {/* Social links */}
        <div style={{ display: "flex", gap: 12, marginBottom: 40 }}>
          <a
            href="https://www.facebook.com/EmilyChaneyRealtor/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 40,
              height: 40,
              border: "1px solid rgba(255,255,255,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.7)",
              fontSize: 14,
              transition: "all .2s",
            }}
          >
            f
          </a>
          <a
            href="https://www.instagram.com/emheartsdenver/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 40,
              height: 40,
              border: "1px solid rgba(255,255,255,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.7)",
              fontSize: 14,
              transition: "all .2s",
            }}
          >
            &#9678;
          </a>
          <a
            href="https://www.tiktok.com/@emilygoldievalentine"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 40,
              height: 40,
              border: "1px solid rgba(255,255,255,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.7)",
              fontSize: 14,
              transition: "all .2s",
            }}
          >
            &#9834;
          </a>
        </div>

        {/* Quick links */}
        <div>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: 16,
            }}
          >
            Quick Links
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <Link
              href="/listings"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 14,
                transition: "color .2s",
              }}
            >
              Browse listings
            </Link>
            <Link
              href="/neighborhoods"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 14,
                transition: "color .2s",
              }}
            >
              Explore neighborhoods
            </Link>
            <Link
              href="/about"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 14,
                transition: "color .2s",
              }}
            >
              Meet Emily
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div
        style={{
          background: "var(--cream)",
          padding: "80px 72px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2
          className="serif"
          style={{
            fontSize: "clamp(36px, 3.5vw, 52px)",
            fontWeight: 300,
            lineHeight: 1.15,
            marginBottom: 12,
          }}
        >
          Tell me about
          <br />
          <em style={{ fontStyle: "italic", color: "var(--red)" }}>
            your goals.
          </em>
        </h2>

        <p
          style={{
            fontSize: 16,
            color: "var(--mid)",
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 480,
          }}
        >
          Fill out the form and I&apos;ll be in touch within one business day.
        </p>

        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Jane"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="jane@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(303) 555-0123"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="lookingTo">I&apos;m looking to&hellip;</label>
            <select id="lookingTo" name="lookingTo">
              <option value="">Select one</option>
              <option value="buy">Buy a home</option>
              <option value="sell">Sell a home</option>
              <option value="both">Buy and sell</option>
              <option value="invest">Invest in property</option>
              <option value="other">Something else</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="neighborhood">Neighborhood Interest</label>
              <input
                type="text"
                id="neighborhood"
                name="neighborhood"
                placeholder="e.g. Cherry Creek, LoHi"
              />
            </div>
            <div className="form-group">
              <label htmlFor="timeline">Timeline</label>
              <select id="timeline" name="timeline">
                <option value="">Select timeline</option>
                <option value="asap">As soon as possible</option>
                <option value="1-3">1 - 3 months</option>
                <option value="3-6">3 - 6 months</option>
                <option value="6-12">6 - 12 months</option>
                <option value="exploring">Just exploring</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Tell me more</label>
            <textarea
              id="message"
              name="message"
              placeholder="Share anything that would help me understand your goals..."
            />
          </div>

          <button type="submit" className="form-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
