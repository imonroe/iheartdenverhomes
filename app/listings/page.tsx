import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listings | Emily Chaney Denver Real Estate",
};

const listings = [
  // Active
  {
    status: "Active" as const,
    address: "6928 S Columbine Way",
    city: "Centennial CO 80122",
    neighborhood: "Centennial",
    price: "$825,000",
    beds: 4, baths: 3, sqft: "2,607",
    gradient: "linear-gradient(135deg, #c4a882, #a08060)",
  },
  {
    status: "Active" as const,
    address: "3733 N Franklin Street",
    city: "Denver CO 80205",
    neighborhood: "Denver",
    price: "$750,000",
    beds: 3, baths: 3, sqft: "1,682",
    gradient: "linear-gradient(135deg, #a0886e, #c8b8a2)",
  },
  {
    status: "Active" as const,
    address: "2645 S Xanadu Way #B",
    city: "Aurora CO 80014",
    neighborhood: "Aurora",
    price: "$360,000",
    beds: 2, baths: 2, sqft: "1,314",
    gradient: "linear-gradient(135deg, #8a9a7a, #b8c8a8)",
  },
  // Sold
  {
    status: "Just Sold" as const,
    address: "2472 W Argyle Place",
    city: "Denver CO 80211",
    neighborhood: "Highlands",
    price: "$1,435,000",
    beds: null, baths: null, sqft: null,
    gradient: "linear-gradient(135deg, #8a7a6a, #b09880)",
  },
  {
    status: "Just Sold" as const,
    address: "2200 Locust Street",
    city: "Denver CO 80207",
    neighborhood: "Denver",
    price: "$1,275,000",
    beds: 4, baths: 3, sqft: "2,865",
    gradient: "linear-gradient(135deg, #7a8a6a, #a0b090)",
  },
  {
    status: "Just Sold" as const,
    address: "1968 S Clarkson Street",
    city: "Denver CO 80210",
    neighborhood: "Wash Park",
    price: "$1,120,000",
    beds: 3, baths: 4, sqft: "3,240",
    gradient: "linear-gradient(135deg, #7a6a5a, #a08870)",
  },
  {
    status: "Just Sold" as const,
    address: "463 S Washington Street",
    city: "Denver CO 80209",
    neighborhood: "Wash Park",
    price: "$1,200,000",
    beds: 4, baths: 3, sqft: "2,557",
    gradient: "linear-gradient(135deg, #6a5a4a, #907868)",
  },
  {
    status: "Just Sold" as const,
    address: "2535 N Hooker Street",
    city: "Denver CO 80211",
    neighborhood: "Highlands / LoHi",
    price: "$1,035,000",
    beds: 4, baths: 2, sqft: "1,939",
    gradient: "linear-gradient(135deg, #6a7a5a, #98a888)",
  },
  {
    status: "Just Sold" as const,
    address: "12034 W Auburn Drive",
    city: "Lakewood CO 80228",
    neighborhood: "Lakewood",
    price: "$1,101,900",
    beds: 4, baths: 4, sqft: "3,181",
    gradient: "linear-gradient(135deg, #5a6a7a, #8898a8)",
  },
  {
    status: "Just Sold" as const,
    address: "6730 W 36th Place",
    city: "Wheat Ridge CO 80033",
    neighborhood: "Wheat Ridge",
    price: "$695,000",
    beds: 5, baths: 3, sqft: "2,126",
    gradient: "linear-gradient(135deg, #8a7a9a, #b8a8c8)",
  },
  {
    status: "Just Sold" as const,
    address: "4745 Garland Street",
    city: "Wheat Ridge CO 80033",
    neighborhood: "Wheat Ridge",
    price: "$675,000",
    beds: 6, baths: 3, sqft: "2,650",
    gradient: "linear-gradient(135deg, #9a8a7a, #c8b8a8)",
  },
  {
    status: "Just Sold" as const,
    address: "11734 W Applewood Knolls Dr",
    city: "Lakewood CO 80215",
    neighborhood: "Lakewood",
    price: "$1,043,500",
    beds: 3, baths: 3, sqft: "2,356",
    gradient: "linear-gradient(135deg, #7a8a8a, #a8b8b8)",
  },
];

const filters = ["All", "Active", "Just Sold", "Denver", "Highlands / LoHi", "Wash Park", "Lakewood", "Wheat Ridge"];

export default function ListingsPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        style={{
          paddingTop: 160,
          paddingBottom: 80,
          textAlign: "center",
          background: "var(--cream)",
        }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 18,
          }}
        >
          Properties
        </p>
        <h1
          style={{
            fontSize: "clamp(42px, 5vw, 64px)",
            fontWeight: 300,
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Current Listings{" "}
          <em style={{ fontStyle: "italic", color: "var(--red)" }}>
            &amp; Recent Sales
          </em>
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "var(--mid)",
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto",
          }}
        >
          Browse active properties and see what has recently sold across Denver
          and surrounding neighborhoods.
        </p>
      </section>

      {/* FILTER BAR */}
      <section
        style={{
          padding: "0 80px 60px",
          background: "var(--cream)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
          }}
        >
          {filters.map((label, i) => (
            <button
              key={label}
              style={{
                padding: "10px 22px",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                border: i === 0 ? "1.5px solid var(--dark)" : "1.5px solid var(--sand)",
                background: i === 0 ? "var(--dark)" : "var(--white)",
                color: i === 0 ? "#fff" : "var(--mid)",
                cursor: "pointer",
                transition: "all .2s",
                fontFamily: "inherit",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* LISTINGS GRID */}
      <section style={{ padding: "0 80px 100px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}
        >
          {listings.map((listing) => (
            <div
              key={listing.address}
              style={{
                background: "var(--white)",
                overflow: "hidden",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                transition: "box-shadow .2s",
                cursor: "pointer",
              }}
            >
              {/* Placeholder Image */}
              <div
                style={{
                  aspectRatio: "16/10",
                  background: listing.gradient,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 20,
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {listing.neighborhood}
                </span>
                {/* Status Badge */}
                <span
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    background:
                      listing.status === "Active"
                        ? "var(--red)"
                        : "var(--dark)",
                    color: "#fff",
                    padding: "5px 12px",
                  }}
                >
                  {listing.status}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: "22px 24px 26px" }}>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 21,
                    fontWeight: 500,
                    lineHeight: 1.25,
                    marginBottom: 4,
                    color: "var(--dark)",
                  }}
                >
                  {listing.address}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--light)",
                    marginBottom: 14,
                  }}
                >
                  {listing.city}
                </div>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "var(--dark)",
                    marginBottom: 10,
                  }}
                >
                  {listing.price}
                </div>
                {listing.beds !== null && (
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--mid)",
                      display: "flex",
                      gap: 14,
                    }}
                  >
                    <span>{listing.beds} bd</span>
                    <span style={{ color: "var(--sand)" }}>|</span>
                    <span>{listing.baths} ba</span>
                    <span style={{ color: "var(--sand)" }}>|</span>
                    <span>{listing.sqft} sqft</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MLS SEARCH CTA */}
      <section
        style={{
          background: "var(--dark)",
          padding: "80px 80px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 14,
          }}
        >
          Search the MLS
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px, 4vw, 52px)",
            fontWeight: 300,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: 18,
          }}
        >
          Looking for something{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
            specific?
          </em>
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.75,
            maxWidth: 520,
            margin: "0 auto 40px",
          }}
        >
          Search the full Denver MLS with custom filters for neighborhood,
          price, beds, baths, and more.
        </p>
        <a
          href="https://www.mhmhomes.com/agent-detail/75943/emily-chaney/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ display: "inline-block" }}
        >
          Search All Denver Homes
        </a>
      </section>
    </>
  );
}
