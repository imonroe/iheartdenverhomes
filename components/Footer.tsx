import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="brand-name">♥ Emily Chaney</div>
          <p>Denver real estate with heart. 20+ years helping buyers and sellers navigate Colorado&apos;s market — from first home to forever home.</p>
          <div className="footer-social">
            <a href="https://www.facebook.com/EmilyChaneyRealtor/" target="_blank" rel="noopener noreferrer">f</a>
            <a href="https://www.instagram.com/emheartsdenver/" target="_blank" rel="noopener noreferrer">◎</a>
            <a href="https://www.tiktok.com/@emilygoldievalentine" target="_blank" rel="noopener noreferrer">♪</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><Link href="/listings">Listings</Link></li>
            <li><Link href="/about">Meet Emily</Link></li>
            <li><Link href="/buyers">For Buyers</Link></li>
            <li><Link href="/sellers">For Sellers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Neighborhoods</h4>
          <ul>
            <li><Link href="/neighborhoods#cherry-creek">Cherry Creek</Link></li>
            <li><Link href="/neighborhoods#washington-park">Washington Park</Link></li>
            <li><Link href="/neighborhoods#lohi">LoHi</Link></li>
            <li><Link href="/neighborhoods#highlands">Highlands</Link></li>
            <li><Link href="/neighborhoods#rino">RiNo</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><Link href="/buyers">Buyer&apos;s Guide</Link></li>
            <li><Link href="/sellers">Seller&apos;s Guide</Link></li>
            <li><Link href="/the-looks">The Looks</Link></li>
            <li><Link href="/northwest-denver-guide">NW Denver Guide</Link></li>
            <li><Link href="/contact">Home Valuation</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Emily Chaney · iheartdenverhomes.com · All rights reserved.</p>
        <div className="footer-mhm"><span>MHM Homes</span><span>·</span><span>Equal Housing Opportunity</span></div>
      </div>
    </footer>
  );
}
