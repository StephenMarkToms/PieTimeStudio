import Link from "next/link";
import { Hoard } from "@/components/Hoard";
import { Torches } from "@/components/Torches";
import { Year } from "@/components/Year";

export function Footer() {

  return (
    <footer className="site-footer">
      <Torches />
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand">
            <span className="brand-mark" aria-hidden="true" /> Pie Time Studio
          </Link>
          <p>No pay-to-win. No money-grab skins. Just games you actually own, made possible by the people who play them.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Studio</h4>
            <ul>
              <li><Link href="/about">Our Mission</Link></li>
              <li><Link href="/games">Games</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Get Involved</h4>
            <ul>
              <li><Link href="/support">Donate</Link></li>
              <li><Link href="/contact">Community</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; <Year /> Pie Time Studio. All games released under our ownership promise.</span>
        <span>Made with 🥧.</span>
      </div>
      <Hoard />
    </footer>
  );
}
