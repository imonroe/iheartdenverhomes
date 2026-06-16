import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Realtors in Northwest Denver and Wheat Ridge",
  description:
    "Looking for the best realtor in Northwest Denver or Wheat Ridge, CO? Here’s what to look for — and why local expertise makes all the difference.",
};

export default function NorthwestDenverGuidePage() {
  const qualities = [
    {
      title: "Honest",
      desc: "Emily tells you what you need to hear, not just what you want to hear. That candor builds trust — and gets results.",
    },
    {
      title: "Savvy",
      desc: "From pricing strategy to negotiation tactics, Emily brings sharp market instincts honed over 20+ years in Denver real estate.",
    },
    {
      title: "Dedicated",
      desc: "She doesn’t disappear after the contract is signed. Emily is hands-on from first showing to closing day — and beyond.",
    },
    {
      title: "Experienced",
      desc: "With hundreds of transactions across Northwest Denver and the surrounding suburbs, Emily has the track record to back it up.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Emily helped us find our dream home in Wheat Ridge. She knew the neighborhoods inside and out and guided us through a very competitive market.",
      author: "Jessica & Ryan M.",
    },
    {
      quote:
        "We were first-time buyers and honestly had no idea what we were doing. Emily was patient, knowledgeable, and made the whole process feel easy.",
      author: "Andrew T.",
    },
    {
      quote:
        "We’ve worked with Emily twice now — once buying and once selling. Both times she exceeded our expectations. She’s the only realtor we’ll ever use.",
      author: "Karen & Steve L.",
    },
  ];

  const neighborhoods = [
    "Wheat Ridge",
    "Edgewater",
    "Sloan’s Lake",
    "Berkeley / Tennyson",
    "Applewood",
    "Arvada",
    "Lakewood",
  ];

  return (
    <div style={{ paddingTop: 88 }}>
      {/* Article layout */}
      <div
        style={{
          maxWidth: 780,
          margin: "0 auto",
          padding: "72px 40px 100px",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: ".14em",
            textTransform: "uppercase" as const,
            color: "var(--red)",
            marginBottom: 20,
          }}
        >
          Neighborhood Guide &middot; Northwest Denver &amp; Wheat Ridge
        </p>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(36px, 4vw, 52px)",
            fontWeight: 400,
            lineHeight: 1.15,
            marginBottom: 32,
          }}
        >
          Best Realtors in Northwest Denver and Wheat Ridge
        </h1>

        {/* Intro */}
        <p
          style={{
            fontSize: 19,
            lineHeight: 1.75,
            color: "var(--mid)",
            paddingBottom: 36,
            marginBottom: 48,
            borderBottom: "1px solid var(--sand)",
          }}
        >
          Whether you&apos;re buying your first home in Wheat Ridge or selling a
          bungalow near Sloan&apos;s Lake, the right realtor makes all the
          difference. Here&apos;s what to look for in a Northwest Denver real
          estate agent &mdash; and why Emily Chaney is the name neighbors trust.
        </p>

        {/* ── Article body ── */}

        {/* Section 1 */}
        <h2
          style={{
            fontSize: 30,
            fontWeight: 400,
            marginBottom: 20,
            lineHeight: 1.25,
          }}
        >
          What Makes a Great Realtor in Northwest Denver and Wheat Ridge?
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: "var(--mid)",
            marginBottom: 24,
          }}
        >
          Northwest Denver is one of the most dynamic real estate markets along
          the Front Range. From the tree-lined streets of Berkeley to the
          revitalized corridors of Wheat Ridge and Edgewater, every pocket has
          its own personality &mdash; and its own pricing nuances. A great
          realtor in this area needs more than a license. They need:
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 48px 0",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {[
            {
              label: "Local knowledge",
              detail:
                "Block-by-block understanding of values, zoning, and what’s coming next.",
            },
            {
              label: "Track record",
              detail:
                "A history of closed deals in the neighborhoods you care about.",
            },
            {
              label: "Negotiation skills",
              detail:
                "The ability to win in multiple-offer situations without overpaying.",
            },
            {
              label: "Honest communication",
              detail:
                "Straight talk about pricing, condition, and strategy — no sugarcoating.",
            },
          ].map((item) => (
            <li
              key={item.label}
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--dark)",
                paddingLeft: 28,
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: 1,
                  color: "var(--red)",
                  fontSize: 16,
                }}
              >
                &#x2665;
              </span>
              <strong>{item.label}:</strong>{" "}
              <span style={{ color: "var(--mid)" }}>{item.detail}</span>
            </li>
          ))}
        </ul>

        {/* Section 2 */}
        <h2
          style={{
            fontSize: 30,
            fontWeight: 400,
            marginBottom: 20,
            lineHeight: 1.25,
          }}
        >
          Why Emily Chaney Is One of Northwest Denver&apos;s Most Trusted
          Realtors
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: "var(--mid)",
            marginBottom: 20,
          }}
        >
          Emily Chaney has spent over two decades helping families buy and sell
          homes across Northwest Denver, Wheat Ridge, Edgewater, Arvada, and
          Lakewood. She didn&apos;t just study these neighborhoods &mdash; she
          raised her family in them.
        </p>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: "var(--mid)",
            marginBottom: 36,
          }}
        >
          That lived-in expertise means Emily knows which streets flood in
          spring, which blocks are about to appreciate, and which inspectors
          actually look under the deck. It&apos;s the kind of knowledge you
          can&apos;t get from a Zillow search &mdash; and it&apos;s exactly what
          gives her clients an edge.
        </p>

        {/* Quality cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginBottom: 56,
          }}
        >
          {qualities.map((q) => (
            <div
              key={q.title}
              style={{
                background: "var(--cream)",
                borderRadius: 6,
                padding: "32px 28px",
              }}
            >
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 400,
                  marginBottom: 10,
                  color: "var(--dark)",
                }}
              >
                {q.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.75,
                  color: "var(--mid)",
                }}
              >
                {q.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Section 3 - Testimonials */}
        <h2
          style={{
            fontSize: 30,
            fontWeight: 400,
            marginBottom: 24,
            lineHeight: 1.25,
          }}
        >
          Here&apos;s What Clients Say
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
            marginBottom: 56,
          }}
        >
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              style={{
                margin: 0,
                padding: "24px 28px",
                borderLeft: "3px solid var(--red)",
                background: "var(--cream)",
                borderRadius: "0 6px 6px 0",
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.75,
                  color: "var(--dark)",
                  fontStyle: "italic",
                  marginBottom: 12,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <cite
                style={{
                  fontSize: 13,
                  fontStyle: "normal",
                  fontWeight: 600,
                  color: "var(--mid)",
                }}
              >
                &mdash; {t.author}
              </cite>
            </blockquote>
          ))}
        </div>

        {/* Section 4 - Neighborhoods */}
        <h2
          style={{
            fontSize: 30,
            fontWeight: 400,
            marginBottom: 20,
            lineHeight: 1.25,
          }}
        >
          Neighborhoods Emily Serves
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: "var(--mid)",
            marginBottom: 24,
          }}
        >
          Emily&apos;s expertise spans the full Northwest Denver corridor and
          its neighboring suburbs. Here are just a few of the areas she knows
          best:
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            marginBottom: 56,
          }}
        >
          {neighborhoods.map((n) => (
            <span
              key={n}
              style={{
                display: "block",
                background: "var(--dark)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 500,
                padding: "14px 20px",
                borderRadius: 6,
                textAlign: "center",
              }}
            >
              {n}
            </span>
          ))}
          <span
            style={{
              display: "block",
              background: "var(--red)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 500,
              padding: "14px 20px",
              borderRadius: 6,
              textAlign: "center",
            }}
          >
            Your neighborhood?
          </span>
        </div>

        {/* Pull quote */}
        <blockquote
          style={{
            margin: "0 0 56px 0",
            padding: "36px 40px",
            borderTop: "3px solid var(--red)",
            borderBottom: "3px solid var(--red)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 26,
              fontWeight: 400,
              lineHeight: 1.5,
              fontStyle: "italic",
              color: "var(--dark)",
            }}
          >
            &ldquo;Emily doesn&apos;t just sell homes &mdash; she helps people
            find where they belong.&rdquo;
          </p>
        </blockquote>

        {/* CTA Box */}
        <div
          style={{
            background: "var(--red)",
            borderRadius: 8,
            padding: "48px 40px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#fff",
              fontSize: 28,
              fontWeight: 400,
              marginBottom: 12,
            }}
          >
            Ready to Make Your Move?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: 15,
              lineHeight: 1.7,
              marginBottom: 28,
              maxWidth: 480,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Whether you&apos;re buying, selling, or just have questions about
            the Northwest Denver market, Emily is here to help.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              marginBottom: 24,
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://www.instagram.com/iheartdenverhomes"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: ".06em",
                transition: "color .2s",
              }}
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/iheartdenverhomes"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: ".06em",
                transition: "color .2s",
              }}
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/emilychaney"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: ".06em",
                transition: "color .2s",
              }}
            >
              LinkedIn
            </a>
          </div>

          <Link
            href="/contact"
            style={{
              display: "inline-block",
              background: "#fff",
              color: "var(--red)",
              padding: "15px 36px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: ".12em",
              textTransform: "uppercase" as const,
              borderRadius: 4,
              transition: "opacity .2s",
            }}
          >
            Contact Emily
          </Link>
        </div>
      </div>
    </div>
  );
}
