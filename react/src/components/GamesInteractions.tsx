"use client";

import { useEffect } from "react";
import { mountSeedBag } from "@/lib/seeds";

export function GamesInteractions() {
  useEffect(() => {
    const unmountSeeds = mountSeedBag();
    let downX = 0;
    let downY = 0;

    const openCard = (card: HTMLElement) => {
      const url = card.dataset.href;
      if (url) window.open(url, "_blank", "noopener");
    };

    const onDown = (event: PointerEvent) => {
      downX = event.clientX;
      downY = event.clientY;
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const card = target?.closest(".game-card[data-href]");
      if (!(card instanceof HTMLElement) || target?.closest(".bean-patch, .seed-plot, a, button")) return;
      if (Math.abs(event.clientX - downX) > 6 || Math.abs(event.clientY - downY) > 6) return;
      openCard(card);
    };

    const onAux = (event: MouseEvent) => {
      if (event.button !== 1) return;
      const target = event.target as Element | null;
      const card = target?.closest(".game-card[data-href]");
      if (card instanceof HTMLElement && !target?.closest(".bean-patch, .seed-plot")) openCard(card);
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Enter") return;
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const card = target.closest(".game-card[data-href]");
      if (card instanceof HTMLElement && target === card) openCard(card);
    };

    document.addEventListener("pointerdown", onDown);
    document.addEventListener("click", onClick);
    document.addEventListener("auxclick", onAux);
    document.addEventListener("keydown", onKey);

    return () => {
      unmountSeeds();
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("click", onClick);
      document.removeEventListener("auxclick", onAux);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return null;
}
