import type { Metadata } from "next";
import { InkText } from "@/components/InkText";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Pie Time Studio.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Contact</span>
        <InkText as="h1">Say hello</InkText>
        <p className="lede">
          Questions, feedback, or just want to say the mission resonates with you?
          Reach out — we mean it.
        </p>
      </section>

      <section className="block">
        <div className="grid grid-2">
          <a className="card card-link" href="mailto:pie@pietimestudio.com">
            <span className="icon rpg-letter" aria-hidden="true" />
            <h3>Email</h3>
            <p>pie@pietimestudio.com</p>
          </a>
          <a className="card card-link" href="https://discord.gg/nf4VJxse9K" target="_blank" rel="noopener noreferrer">
            <span className="icon rpg-tankard" aria-hidden="true" />
            <h3>Community</h3>
            <p>Join us on Discord →</p>
          </a>
        </div>
      </section>
    </>
  );
}
