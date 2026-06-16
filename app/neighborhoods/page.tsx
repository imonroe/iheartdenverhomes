import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Denver Neighborhoods | Emily Chaney Real Estate",
};

const neighborhoods = [
  {
    id: "cherry-creek",
    tag: "Upscale Living",
    title: "Cherry",
    titleEm: "Creek",
    tagline: "Upscale living, walkable luxury",
    description:
      "Cherry Creek is Denver's premier shopping and dining destination. Tree-lined streets, luxury boutiques, and some of the city's best restaurants make this one of the most desirable neighborhoods in Colorado. If you want walkability, culture, and sophistication — this is it.",
    pills: ["High-end shopping", "Restaurant row", "Cherry Creek Trail", "Arts district", "Walkable"],
    median: "$750K+",
    walkScore: 92,
    gradient: "linear-gradient(135deg, #8B7355, #C4A882)",
    bg: undefined,
  },
  {
    id: "washington-park",
    tag: "Classic Denver",
    title: "Washington",
    titleEm: "Park",
    tagline: "Denver's most beloved park",
    description:
      "Wash Park is the gold standard of Denver living. Gorgeous bungalows, tree-canopied streets, and the sprawling park itself — perfect for runners, families, and anyone who loves the outdoors. This neighborhood rarely has a home sit on the market for long.",
    pills: ["Flower gardens", "Rec center", "Running paths", "Family-friendly", "Historic homes"],
    median: "$850K+",
    walkScore: 88,
    gradient: "linear-gradient(135deg, #5A7355, #82A472)",
    bg: "var(--cream)",
  },
  {
    id: "lohi",
    tag: "Trending Now",
    title: "Lo",
    titleEm: "Hi",
    tagline: "Denver's trendiest dining destination",
    description:
      "Lower Highlands — LoHi — is where Denver comes to eat. Packed with award-winning restaurants, rooftop bars, and stunning views of the downtown skyline, LoHi attracts young professionals and foodies who want to be in the center of it all.",
    pills: ["Rooftop dining", "Skyline views", "Craft cocktails", "Walkable nightlife", "Modern condos"],
    median: "$650K+",
    walkScore: 90,
    gradient: "linear-gradient(135deg, #6A5A7A, #9888A8)",
    bg: undefined,
  },
  {
    id: "highlands",
    tag: "Historic Charm",
    title: "The",
    titleEm: "Highlands",
    tagline: "Historic charm, vibrant community",
    description:
      "The Highlands is one of Denver's most storied neighborhoods. Victorian homes mix with new builds, and Tennyson Street offers an eclectic stretch of local shops, galleries, and restaurants. Community-driven and full of character.",
    pills: ["Tennyson Street", "Local galleries", "Victorian homes", "Community events", "Parks"],
    median: "$700K+",
    walkScore: 87,
    gradient: "linear-gradient(135deg, #7A6A5A, #A89888)",
    bg: "var(--cream)",
  },
  {
    id: "congress-park",
    tag: "Hidden Gem",
    title: "Congress",
    titleEm: "Park",
    tagline: "Quiet streets, eclectic soul",
    description:
      "Congress Park is one of Denver's best-kept secrets. Quiet, leafy streets lined with charming bungalows and Tudors, a short bike ride to City Park and Colfax's eclectic shops and restaurants. Perfect for buyers who want character without the premium.",
    pills: ["Bungalows", "City Park access", "Colfax corridor", "Bike-friendly", "Local coffee"],
    median: "$600K+",
    walkScore: 83,
    gradient: "linear-gradient(135deg, #5A6A7A, #8898A8)",
    bg: undefined,
  },
  {
    id: "rino",
    tag: "Creative District",
    title: "Ri",
    titleEm: "No",
    tagline: "Art, craft beer, and creative energy",
    description:
      "River North Art District — RiNo — is Denver's creative heartbeat. Converted warehouses house breweries, art studios, and some of the city's most inventive restaurants. Street murals cover nearly every surface. If you want energy and edge, RiNo delivers.",
    pills: ["Street art", "Craft breweries", "Food halls", "Live music", "Loft living"],
    median: "$550K+",
    walkScore: 86,
    gradient: "linear-gradient(135deg, #6A7A5A, #98A888)",
    bg: "var(--cream)",
  },
  {
    id: "wheat-ridge",
    tag: "Suburban Feel",
    title: "Wheat",
    titleEm: "Ridge",
    tagline: "Ranch homes, real community",
    description:
      "Wheat Ridge offers something increasingly rare in metro Denver: affordable ranch homes with real yards, a tight-knit community feel, and easy access to both the mountains and downtown. Great for first-time buyers and families looking for space.",
    pills: ["Ranch homes", "Mountain access", "Affordable", "Large yards", "Local parks"],
    median: "$550K+",
    walkScore: 72,
    gradient: "linear-gradient(135deg, #7A8A6A, #A8B898)",
    bg: "var(--cream)",
  },
];

export default function NeighborhoodsPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <p className="section-eyebrow">Explore Denver</p>
        <h1>
          Find Your<br />
          <em>Neighborhood</em>
        </h1>
        <p>
          Every corner of Denver has its own personality — its own coffee shops, its own pace,
          its own Friday-night vibe. Let&apos;s find the one that feels like home.
        </p>
      </section>

      {/* NEIGHBORHOOD FEATURES */}
      {neighborhoods.map((n, i) => {
        const isOdd = i % 2 === 0; // 0-indexed: first item has image left
        return (
          <section
            key={n.id}
            id={n.id}
            style={{
              background: n.bg || "var(--white)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                minHeight: 520,
              }}
            >
              {/* Image / Gradient placeholder */}
              {isOdd && (
                <div
                  style={{
                    background: n.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 520,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 28,
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.35)",
                    }}
                  >
                    {n.title} {n.titleEm}
                  </span>
                </div>
              )}

              {/* Content */}
              <div
                style={{
                  padding: "72px 64px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {/* Tag badge */}
                <span
                  style={{
                    display: "inline-block",
                    alignSelf: "flex-start",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "var(--red)",
                    background: "rgba(167, 13, 42, 0.08)",
                    padding: "6px 14px",
                    marginBottom: 20,
                  }}
                >
                  {n.tag}
                </span>

                <h2
                  style={{
                    fontSize: "clamp(36px, 3.5vw, 50px)",
                    fontWeight: 300,
                    marginBottom: 8,
                  }}
                >
                  {n.title} <em style={{ fontStyle: "italic", color: "var(--red)" }}>{n.titleEm}</em>
                </h2>

                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    color: "var(--gold)",
                    fontStyle: "italic",
                    marginBottom: 20,
                  }}
                >
                  {n.tagline}
                </p>

                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: "var(--mid)",
                    maxWidth: 480,
                    marginBottom: 28,
                  }}
                >
                  {n.description}
                </p>

                {/* Pills */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 28,
                  }}
                >
                  {n.pills.map((pill) => (
                    <span
                      key={pill}
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: ".04em",
                        color: "var(--mid)",
                        border: "1px solid var(--sand)",
                        padding: "6px 14px",
                        borderRadius: 999,
                      }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 40,
                    marginBottom: 32,
                    paddingTop: 24,
                    borderTop: "1px solid var(--sand)",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 32,
                        fontWeight: 300,
                        color: "var(--dark)",
                        lineHeight: 1,
                      }}
                    >
                      {n.median}
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "var(--light)",
                        marginTop: 4,
                      }}
                    >
                      Median Price
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 32,
                        fontWeight: 300,
                        color: "var(--dark)",
                        lineHeight: 1,
                      }}
                    >
                      {n.walkScore}
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "var(--light)",
                        marginTop: 4,
                      }}
                    >
                      Walk Score
                    </div>
                  </div>
                </div>

                <div>
                  <Link href="/listings" className="btn-primary">
                    View Listings
                  </Link>
                </div>
              </div>

              {/* Image on right for even items */}
              {!isOdd && (
                <div
                  style={{
                    background: n.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 520,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 28,
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.35)",
                    }}
                  >
                    {n.title} {n.titleEm}
                  </span>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* CTA BANNER */}
      <section style={{ background: "var(--red)", padding: 80, textAlign: "center" }}>
        <p
          className="section-eyebrow"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Not Sure Where to Start?
        </p>
        <h2
          className="serif"
          style={{
            color: "#fff",
            fontSize: 58,
            fontWeight: 300,
            marginBottom: 20,
          }}
        >
          Let&apos;s figure it out <em style={{ fontStyle: "italic" }}>together.</em>
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 17,
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 auto 40px",
          }}
        >
          Tell me what matters most — schools, commute, nightlife, yard space — and
          I&apos;ll match you with the Denver neighborhoods that fit your life.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
          <Link
            href="/contact"
            style={{
              background: "#fff",
              color: "var(--red)",
              padding: "16px 40px",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: ".12em",
              textTransform: "uppercase",
            }}
          >
            Get in Touch
          </Link>
          <Link href="/listings" className="btn-outline">
            Search Homes
          </Link>
        </div>
      </section>
    </>
  );
}
