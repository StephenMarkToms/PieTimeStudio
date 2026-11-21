"use client";

import { useEffect } from "react";

const GOBLIN = `<svg viewBox="0 0 60 66" aria-hidden="true">
    <path d="M9 66c1-11 8-18 21-18s20 7 21 18z" fill="#4e3420" stroke="#1a0f08" stroke-width="1.2"/>
    <path d="M17 54l4 5 4-5 5 5 5-5 4 5 4-5" fill="none" stroke="#2e1d0f" stroke-width="1"/>
    <path d="M15 29C9 26 4 20 1 13c7 1 13 5 17 10z" fill="#6f9a42" stroke="#1f2e12" stroke-width="1.2"/>
    <path d="M45 29c6-3 11-9 14-16-7 1-13 5-17 10z" fill="#6f9a42" stroke="#1f2e12" stroke-width="1.2"/>
    <path d="M13 25c-3-2-6-5-8-9 4 1 8 4 10 7zM47 25c3-2 6-5 8-9-4 1-8 4-10 7z" fill="#a0694f" fill-opacity=".6"/>
    <ellipse cx="30" cy="31" rx="16.5" ry="16" fill="#6f9a42" stroke="#1f2e12" stroke-width="1.2"/>
    <ellipse cx="24" cy="22" rx="6" ry="3" fill="#8fb85c" fill-opacity=".45"/>
    <circle cx="41" cy="37" r="1.1" fill="#4c6e2c"/><circle cx="18" cy="39" r=".9" fill="#4c6e2c"/>
    <path d="M18 24l9 3M42 24l-9 3" stroke="#1f2e12" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="23.5" cy="29" rx="4" ry="3.2" fill="#f2d24a" stroke="#1f2e12" stroke-width=".7"/>
    <ellipse cx="36.5" cy="29" rx="4" ry="3.2" fill="#f2d24a" stroke="#1f2e12" stroke-width=".7"/>
    <g class="gob-pupils"><circle cx="23" cy="29.5" r="1.5" fill="#120a04"/><circle cx="36" cy="29.5" r="1.5" fill="#120a04"/></g>
    <path d="M30 29c2 3 4 6 3 9-1 1-4 1-5 0z" fill="#5c8434" stroke="#1f2e12" stroke-width=".8"/>
    <path d="M21 40c6 5 12 5 18 0-3 5-15 5-18 0z" fill="#2a1208" stroke="#1f2e12" stroke-width=".8"/>
    <path d="M24 41.3l1.3 2 1.2-1.6M34 41.3l-1.3 2-1.2-1.6" fill="#f3ece2"/>
    <g class="gob-hand"><path d="M7 52c-2-5-1-9 2-11" stroke="#6f9a42" stroke-width="5" stroke-linecap="round" fill="none"/>
      <circle cx="9.5" cy="40.5" r="3.4" fill="#6f9a42" stroke="#1f2e12" stroke-width="1"/></g>
  </svg>`;

const COIN = `<svg viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="6" fill="#d4af37" stroke="#3a2a10" stroke-width="1"/><circle cx="7" cy="7" r="3.6" fill="none" stroke="#fff0b0" stroke-opacity=".5" stroke-width=".8"/></svg>`;

const MOUND = `<svg viewBox="0 0 80 18" aria-hidden="true"><path d="M2 18c8-9 22-13 38-13s30 4 38 13z" fill="#6e5418"/>
    ${[[14, 14], [24, 10], [34, 8], [46, 8], [56, 10], [66, 14], [20, 16], [40, 13], [60, 16], [30, 15], [50, 15]].map(([x, y]) =>
      `<ellipse cx="${x}" cy="${y}" rx="4.4" ry="2" fill="#c9a445" stroke="#3a2a10" stroke-width=".55"/>`).join("")}</svg>`;

export function Hoard() {
  useEffect(() => {
    const footer = document.querySelector<HTMLElement>(".site-footer");
    if (!footer || typeof footer.animate !== "function") return;

    const heapTop = (x: number) => 26 - 7 * Math.sin((2 * Math.PI * x) / 240 + 0.6)
      - 4 * Math.sin((6 * Math.PI * x) / 240 + 1.7)
      - 2 * Math.sin((10 * Math.PI * x) / 240);
    const small = window.matchMedia("(max-width: 780px)");
    const surfaceAt = (x: number) => {
      const tileW = small.matches ? 172 : 240;
      const tileH = small.matches ? 46 : 64;
      const tx = (((x % tileW) + tileW) % tileW) * 240 / tileW;
      return tileH - (heapTop(tx) * tileH) / 64;
    };

    const hit = document.createElement("div");
    hit.className = "hoard-hit";
    hit.setAttribute("role", "button");
    hit.tabIndex = 0;
    hit.setAttribute("aria-label", "Grab some gold from the hoard");
    footer.appendChild(hit);

    let busy = false;
    const spawn = (x: number) => {
      if (busy) return;
      busy = true;
      const width = footer.clientWidth;
      const spot = Math.max(120, Math.min(width - 120, x));
      const surface = surfaceAt(spot);

      const hole = document.createElement("div");
      hole.className = "goblin-hole";
      hole.style.left = `${spot}px`;
      hole.style.bottom = `${surface - 4}px`;
      hole.innerHTML = `<div class="goblin">${GOBLIN}</div><div class="hoard-coin">${COIN}</div>`;
      const mound = document.createElement("div");
      mound.className = "goblin-mound";
      mound.style.left = `${spot}px`;
      mound.style.bottom = `${surface - 12}px`;
      mound.innerHTML = MOUND;
      footer.append(hole, mound);

      const duration = 2600;
      const ease = "cubic-bezier(.3,.7,.3,1)";
      const goblin = hole.querySelector(".goblin");
      const coin = hole.querySelector(".hoard-coin");
      const pupils = hole.querySelector(".gob-pupils");
      const hand = hole.querySelector(".gob-hand");
      if (!goblin || !coin || !pupils || !hand) return;

      coin.animate([
        { transform: "translate(-7px, 10px) rotate(0)", opacity: 0, offset: 0 },
        { transform: "translate(-7px, -46px) rotate(200deg)", opacity: 1, offset: 0.14 },
        { transform: "translate(-7px, -38px) rotate(360deg)", opacity: 1, offset: 0.24 },
        { transform: "translate(-7px, -42px) rotate(380deg)", opacity: 1, offset: 0.46 },
        { transform: "translate(-24px, -15px) rotate(400deg)", opacity: 1, offset: 0.55 },
        { transform: "translate(-23px, -16px) rotate(400deg)", opacity: 1, offset: 0.66 },
        { transform: "translate(-23px, -16px) rotate(400deg)", opacity: 1, offset: 0.74 },
        { transform: "translate(-23px, 45px) rotate(400deg)", opacity: 1, offset: 1 },
      ], { duration, easing: ease, fill: "forwards" });

      goblin.animate([
        { transform: "translateY(100%)", offset: 0 },
        { transform: "translateY(100%)", offset: 0.16 },
        { transform: "translateY(52%)", offset: 0.28 },
        { transform: "translateY(55%) rotate(-3deg)", offset: 0.38 },
        { transform: "translateY(52%) rotate(3deg)", offset: 0.46 },
        { transform: "translateY(12%) rotate(-4deg)", offset: 0.55 },
        { transform: "translateY(14%) rotate(2deg)", offset: 0.66 },
        { transform: "translateY(14%) rotate(-2deg)", offset: 0.74 },
        { transform: "translateY(105%)", offset: 1 },
      ], { duration, easing: ease, fill: "forwards" });

      pupils.animate([
        { transform: "translate(0,0)" },
        { transform: "translate(0,0)", offset: 0.28 },
        { transform: "translate(-1.2px,-1.4px)", offset: 0.34 },
        { transform: "translate(1px,-1.4px)", offset: 0.42 },
        { transform: "translate(-1.2px,-.8px)", offset: 0.5 },
        { transform: "translate(1.4px,.4px)", offset: 0.68 },
        { transform: "translate(1.4px,.4px)" },
      ], { duration, fill: "forwards" });

      hand.animate([
        { transform: "translate(0,0)" },
        { transform: "translate(0,0)", offset: 0.5 },
        { transform: "translate(-3px,-5px)", offset: 0.56 },
        { transform: "translate(0,0)", offset: 0.66 },
        { transform: "translate(0,0)" },
      ], { duration, fill: "forwards" });

      mound.animate([
        { opacity: 0, transform: "translateX(-50%) scaleY(.4)" },
        { opacity: 1, transform: "translateX(-50%) scaleY(1)", offset: 0.2 },
        { opacity: 1, transform: "translateX(-50%) scaleY(1)", offset: 0.9 },
        { opacity: 0, transform: "translateX(-50%) scaleY(.4)" },
      ], { duration: duration + 300, fill: "forwards" }).finished.then(() => {
        hole.remove();
        mound.remove();
        busy = false;
      });
    };

    const onClick = (event: MouseEvent) => spawn(event.clientX - footer.getBoundingClientRect().left);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        spawn(footer.clientWidth * (0.3 + Math.random() * 0.4));
      }
    };
    hit.addEventListener("click", onClick);
    hit.addEventListener("keydown", onKey);

    return () => {
      hit.removeEventListener("click", onClick);
      hit.removeEventListener("keydown", onKey);
      hit.remove();
      footer.querySelectorAll(".goblin-hole, .goblin-mound").forEach((node) => node.remove());
    };
  }, []);

  return null;
}
