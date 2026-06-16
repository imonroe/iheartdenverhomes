"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/listings", label: "Listings" },
  { href: "/about", label: "About" },
  { href: "/buyers", label: "Buyers" },
  { href: "/sellers", label: "Sellers" },
  { href: "/neighborhoods", label: "Neighborhoods" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/" className="nav-logo">
        <span className="heart">&hearts;</span>
        <span className="brand">Emily Chaney</span>
      </Link>
      <ul className="nav-links">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={pathname === href ? "active" : ""}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/contact" className="nav-cta">
        Get in Touch
      </Link>
    </nav>
  );
}
