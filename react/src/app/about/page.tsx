import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "Why Pie Time Studio exists: free games, no ads, no pay-to-win, and real ownership — funded entirely by donations.",
};

const COMPARE = [
  ["Price to play", "$0–$70, or \"free\" with ads/IAP", "Always $0"],
  ["Ads or attention-selling", "Common", "Never"],
  ["Pay-to-win / paid skins", "Common", "Never"],
  ["Can the company revoke your copy?", "Often, yes", "No — it's a file you own"],
  ["Can you share it with a friend?", "Usually against the rules", "Go for it"],
  ["How the studio gets paid", "Sales, ads, microtransactions", "Voluntary donations only"],
];

const PROOFS = [
  { icon: "rpg-d20", title: "Zero-cost games, real ownership", text: "Every game we release is free to download and free to keep. No account required to keep playing, no online check-in, no rug-pull. Download it once, and it's yours — offline, shareable, permanent." },
  { icon: "rpg-nopurse", title: "No monetization tricks", text: "No ads. No pay-to-win mechanics. No cosmetic money grabs disguised as \"extra content.\" If it ships in the game, it ships for everyone, free, no exceptions." },
  { icon: "rpg-potion", title: "Funded by patronage, not players' wallets", text: "We're betting that a large enough audience will choose to support honest games directly — through donations — rather than be squeezed for every purchase along the way." },
  { icon: "rpg-campfire", title: "Built in the open, with our community", text: "We want the people who support us to feel like part of the studio, not customers being upsold. That means transparency about what we're making and how support is used." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Our Mission</span>
        <h1>We think games shouldn&apos;t cost you anything but your time.</h1>
        <p className="lede">
          Not your money at the door. Not your attention to ads. Not your wallet to
          &quot;skip the grind.&quot; And not your ownership, handed over to a launcher that
          can revoke it whenever it wants.
        </p>
      </section>

      <section className="block">
        <div className="manifesto">
          <blockquote>
            &quot;We&apos;re trying to do the unthinkable: build a game studio that survives
            entirely on the goodwill of the people who play its games — because
            we believe games made honestly are worth supporting honestly.&quot;
          </blockquote>
        </div>
      </section>

      <section className="block">
        <div className="panel-box">
          <div className="section-head">
            <span className="eyebrow">The Problem</span>
            <h2>Digital ownership is broken</h2>
            <p>
              Buy a game today and, more often than not, you haven&apos;t bought a game —
              you&apos;ve bought permission to access one, for as long as a company decides
              to let you. Accounts get banned. Servers get shut down. Launchers change
              their terms. The thing you paid for was never really yours.
            </p>
          </div>
          <div className="compare">
            <table>
              <thead>
                <tr>
                  <th>What happens</th>
                  <th>Typical model</th>
                  <th>Pie Time Studio</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([what, typical, ours]) => (
                  <tr key={what}>
                    <td>{what}</td>
                    <td className="no">{typical}</td>
                    <td className="yes">{ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="section-head">
          <span className="eyebrow">The Idea</span>
          <h2>What we&apos;re actually trying to prove</h2>
        </div>
        <div className="grid grid-2">
          {PROOFS.map((item) => (
            <div className="card" key={item.title}>
              <span className={`icon ${item.icon}`} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <h2>This only works if it&apos;s shared.</h2>
        <p>
          If you believe games can be made this way, the best thing you can do
          is tell someone else — and if you&apos;re able, chip in.
        </p>
        <Link href="/support" className="btn btn-primary">Support the Studio</Link>
      </section>
    </>
  );
}
