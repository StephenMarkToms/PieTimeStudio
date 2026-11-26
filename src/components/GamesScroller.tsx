"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Featured = {
  title: string;
  blurb: string;
  tag: string;
  free?: boolean;
  cover?: string;
  alt?: string;
};

const FEATURED: Featured[] = [
  {
    title: "The Right Way",
    blurb: "A pixel-art roguelite RPG with procedural dungeons and deep character builds.",
    tag: "In development",
    free: true,
  },
  {
    title: "DODO-Doku",
    blurb: "A logic puzzle blending Sudoku's reasoning with Minesweeper's deduction.",
    tag: "Open Beta",
    free: true,
    cover: "/images/dododoku-cover.jpg",
    alt: "DoDo-Doku cover art: three dodos above the game title",
  },
  {
    title: "Cube(ish)",
    blurb: "A Katamari-inspired puzzle-adventure — roll, absorb, and grow.",
    tag: "In development",
  },
  {
    title: "Ant Farm",
    blurb: "A cozy idle sim — nurture your own subterranean ant colony.",
    tag: "Closed Beta",
  },
  {
    title: "Untitled Project",
    blurb: "A cozy 3D point-and-click adventure set above the clouds.",
    tag: "In development",
  },
];

export function GamesScroller() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [hidePrev, setHidePrev] = useState(true);
  const [hideNext, setHideNext] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      setHidePrev(track.scrollLeft <= 6);
      setHideNext(track.scrollLeft >= max - 6);
    };

    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCard = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".mini-game-card");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const cardWidth = card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.8;
    const distance = Math.max(1, Math.floor(track.clientWidth / cardWidth)) * cardWidth;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <div className="games-scroll-wrap">
      <button
        type="button"
        className={`scroll-arrow scroll-arrow-left${hidePrev ? " is-hidden" : ""}`}
        aria-label="Scroll games left"
        onClick={() => scrollByCard(-1)}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        className={`scroll-arrow scroll-arrow-right${hideNext ? " is-hidden" : ""}`}
        aria-label="Scroll games right"
        onClick={() => scrollByCard(1)}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="games-scroll" ref={trackRef}>
        {FEATURED.map((game, index) => (
          <Link href="/games" className="mini-game-card" key={game.title} style={{ "--ink": index } as CSSProperties}>
            <div className={`mini-thumb${game.cover ? " has-cover" : ""}`}>
              {game.cover ? (
                <img src={game.cover} alt={game.alt ?? ""} width={1600} height={900} />
              ) : (
                "Cover art coming soon"
              )}
            </div>
            <div className="mini-body">
              <h3>{game.title}</h3>
              <p>{game.blurb}</p>
              <span className={`tag${game.free ? " free" : ""}`}>{game.tag}</span>
            </div>
          </Link>
        ))}
        <Link href="/games" className="mini-game-card mini-game-card-more">
          <div className="mini-more-inner">
            <span className="mini-more-arrow">→</span>
            <span>See all games</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
