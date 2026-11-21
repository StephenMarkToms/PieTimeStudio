"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Torches } from "@/components/Torches";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Mission" },
  { href: "/games", label: "Games" },
  { href: "/support", label: "Support Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const active = (href: string) => pathname === href;

  return (
    <header className="site-header">
      <Torches />
      <nav className="nav">
        <Link href="/" className="brand">
          <span className="brand-mark" aria-hidden="true" /> Pie Time Studio
        </Link>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          ☰
        </button>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={active(link.href) ? "active" : undefined} aria-current={active(link.href) ? "page" : undefined}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/support" className={`nav-cta${active("/support") ? " active" : ""}`}>
              Donate
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
