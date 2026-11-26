import type { Metadata } from "next";
import Link from "next/link";
import { InkText } from "@/components/InkText";

export const metadata: Metadata = {
  title: "Support Us",
  description: "Pie Time Studio runs entirely on donations. Here's how to support free, ad-free, pay-to-win-free games.",
};

export default function SupportPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Support Us</span>
        <InkText as="h1">No sales. No ads. Just you, if you want to.</InkText>
        <p className="lede">
          Pie Time Studio doesn&apos;t make money from the games themselves — they&apos;re
          free, always. Everything we build is funded by people who decide it&apos;s
          worth supporting directly. That&apos;s the whole model.
        </p>
      </section>

      <section className="block">
        <div className="panel-box">
          <div className="section-head">
            <span className="eyebrow">Why donate</span>
            <InkText as="h2" base={40}>What your support actually funds</InkText>
            <p>
              Not a purchase, not a &quot;supporter pack&quot; with bonus content locked
              behind it. Just the studio&apos;s ability to keep making free games —
              time, tools, and the occasional coffee.
            </p>
          </div>
          <div className="tier-grid">
            <div className="tier">
              <h3>One-time</h3>
              <div className="amount">Any amount</div>
              <ul>
                <li>Say thanks for a game you enjoyed</li>
                <li>No obligation, no account needed</li>
                <li>100% optional, always</li>
              </ul>
              <a href="#platforms" className="btn btn-outline">Give once</a>
            </div>
            <div className="tier featured">
              <h3>Monthly</h3>
              <div className="amount">Your call</div>
              <ul>
                <li>Helps us plan ahead with steadier support</li>
                <li>Cancel any time, no hard feelings</li>
                <li>Doesn&apos;t unlock anything paywalled — there isn&apos;t any</li>
              </ul>
              <a href="https://www.patreon.com/c/PieTimeStudio" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Become a patron</a>
            </div>
            <div className="tier">
              <h3>Just play &amp; share</h3>
              <div className="amount">$0</div>
              <ul>
                <li>Play the games, tell a friend</li>
                <li>Word of mouth is how this model has to work</li>
                <li>Genuinely valuable — no donation required</li>
              </ul>
              <Link href="/games" className="btn btn-outline">Browse games</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="platforms">
        <div className="panel-box">
          <div className="section-head">
            <span className="eyebrow">Where to give</span>
            <InkText as="h2" base={40}>Support platforms</InkText>
            <p>Our home for support is Patreon. Every pie slice helps.</p>
          </div>
          <div className="patreon-cta">
            <a href="https://www.patreon.com/c/PieTimeStudio" className="patreon-card" target="_blank" rel="noopener noreferrer">
              <span className="patreon-card-icon" aria-hidden="true">🥧</span>
              <span className="patreon-card-text">
                <span className="patreon-card-title">Pie Time Studio on Patreon</span>
                <span className="patreon-card-sub">patreon.com/c/PieTimeStudio</span>
              </span>
              <span className="patreon-card-arrow" aria-hidden="true">→</span>
            </a>
          </div>
          <div className="manifesto mt-lg">
            <blockquote>
              &quot;We&apos;re not asking you to pay for a game. We&apos;re asking whether you&apos;d
              like to help keep an experiment alive — one where games get made
              without ever asking players for money to play them.&quot;
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
