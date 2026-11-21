import type { Metadata } from "next";
import Link from "next/link";
import { GamesScroller } from "@/components/GamesScroller";

export const metadata: Metadata = {
  description:
    "Pie Time Studio makes games that cost nothing, own nothing over you, and belong to you once you have them. Funded entirely by the people who play them.",
};

const PLEDGES = [
  { icon: "rpg-coin", title: "$0 to play", text: "Every game, no purchase, no subscription, no paywall." },
  { icon: "rpg-noads", title: "No ads, ever", text: "Your attention isn't for sale. Not to us, not to anyone." },
  { icon: "rpg-scales", title: "No pay-to-win", text: "No microtransactions, no loot boxes, no money-grab skins." },
  { icon: "rpg-chest", title: "You own it", text: "Download it, keep it offline, share it. It's yours." },
];

const IDEAS = [
  { icon: "rpg-potion", title: "Patronage-first", text: "Development is funded by ongoing donations and community support, not by selling access to the games themselves." },
  { icon: "rpg-orb", title: "Transparent by default", text: "We want supporters to see where their support goes — that's part of the deal we're building." },
  { icon: "rpg-sprout", title: "Small, sustainable, honest", text: "We're not chasing hyper-growth. We're testing whether honest games can support themselves." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <span className="eyebrow">A different kind of game studio, Redefining digital ownership</span>
        <h1>Free games. Truly yours. Forever.</h1>
        <p className="lede">
          We are committed to making games with zero cost to play, zero ads, zero pay-to-win,
          and zero shady monetization. Download them, keep them, share them — they&apos;re
          yours the moment you have them. We&apos;re funded entirely by people who believe
          that&apos;s worth supporting.
        </p>
        <div className="hero-actions">
          <Link href="/games" className="btn btn-primary">See Our Games</Link>
          <Link href="/support" className="btn btn-outline">Support the Studio</Link>
        </div>
        <Link href="/about" className="hero-link">Read our mission →</Link>
      </section>

      <section className="section-card">
        <div className="section-card-box">
          <div className="section-head">
            <span className="eyebrow">Featured Games</span>
            <h2>What we&apos;re making</h2>
            <p>Free to download, free to keep, yours once you have it. Scroll through, or see everything.</p>
          </div>
          <div className="pledge-grid">
            {PLEDGES.map((item) => (
              <div className="pledge-item" key={item.title}>
                <div className={`icon ${item.icon}`} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block featured-games">
        <GamesScroller />
      </section>

      <section className="block">
        <div className="panel-box">
          <div className="section-head">
            <span className="eyebrow">The Idea</span>
            <h2>Ownership, not access</h2>
            <p>
              Most games today are rented to you — tied to a launcher, an account,
              or a live-service switch someone else controls. We think that&apos;s backwards.
            </p>
          </div>
          <div className="manifesto">
            <blockquote>
              &quot;When you have one of our games, it&apos;s yours. Not licensed to you.
              Not tied to a service that can disappear. Yours — to keep, to copy,
              to hand to a friend on a USB drive if you want to.&quot;
            </blockquote>
            <cite>— The Pie Time Studio Manifesto</cite>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="panel-box">
          <div className="section-head">
            <span className="eyebrow">How we survive</span>
            <h2>We run entirely on donations</h2>
            <p>
              No investors, no ad networks, no store cuts baked into a price tag.
              Just people who play our games and decide it&apos;s worth chipping in.
              If that sounds impossible — that&apos;s kind of the point.
            </p>
          </div>
          <div className="grid">
            {IDEAS.map((item) => (
              <div className="card" key={item.title}>
                <span className={`icon ${item.icon}`} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <p className="center mt-lg">
            <Link href="/support" className="btn btn-primary">See how to support us</Link>
          </p>
        </div>
      </section>

      <section className="cta-band">
        <h2>We&apos;re just getting started.</h2>
        <p>Follow along as we build our first game and figure this out in the open.</p>
        <Link href="/games" className="btn btn-primary">See What We&apos;re Making</Link>
      </section>
    </>
  );
}
