"use client";

import { useEffect } from "react";

const SELECTOR = [
  ".section-head",
  ".cta-band",
  ".manifesto",
  ".seed-bag-heading",
  ".card",
  ".pledge-item",
  ".tier",
  ".game-card",
  ".mini-game-card",
  ".patreon-card",
  ".compare",
].join(",");

export function InkOnView() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      for (const node of nodes) node.classList.add("is-in");
      return;
    }

    const seen = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          seen.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    for (const node of nodes) seen.observe(node);
    return () => seen.disconnect();
  }, []);

  return null;
}
