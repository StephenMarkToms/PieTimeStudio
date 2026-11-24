import type { Metadata } from "next";
import Link from "next/link";
import { GamesInteractions } from "@/components/GamesInteractions";
import { InkText } from "@/components/InkText";
import { seedBagArt } from "@/components/seedBagArt";
import { sproutArt } from "@/components/sproutArt";

export const metadata: Metadata = {
  title: "Games",
  description: "Free games from Pie Time Studio. No ads, no pay-to-win, no catches — download and keep.",
};

type Game = {
  id: string;
  title: string;
  text: string;
  status: string;
  tags: string[];
  free?: boolean;
  href?: string;
  cover?: string;
  alt?: string;
};

const GAMES: Game[] = [
  {
    id: "the-right-way",
    title: "The Right Way",
    text: "A pixel-art top-down roguelite RPG combining a handcrafted overworld with ever-shifting procedural dungeons. Master deep character builds, conquer dynamic boss encounters, and forge your own path.",
    status: "In development",
    tags: ["PC"],
    free: true,
  },
  {
    id: "dodo-doku",
    title: "DODO-Doku",
    text: "Looking for a game that soothes the soul but keeps your brain spinning? Welcome to DoDo Doku — a pure logic puzzle game that flawlessly blends the rigorous reasoning of Sudoku with the satisfying deduction of Minesweeper!",
    status: "Open-Beta",
    tags: ["PC", "Mobile"],
    free: true,
    href: "https://pietimestudio.itch.io/dododoku",
    cover: "/images/dododoku-cover.jpg",
    alt: "DoDo-Doku cover art: three dodos above the game title",
  },
  {
    id: "cubeish",
    title: "Cube(ish)",
    text: "Roll, Slide, absorb, and grow! A Katamari-inspired puzzle-adventure where every object you absorb increases your mass, unlocking new areas and pathing puzzles as you roll your way toward consuming the world.",
    status: "In development",
    tags: ["PC"],
  },
  {
    id: "ant-farm",
    title: "Ant Farm",
    text: "Nurture your very own subterranean ant colony in a cozy, virtual-pet idle sim! Feed your workers, level up your Queen, and watch your underground empire expand layer by layer. (Please do not shake the ant farm!)",
    status: "Closed Beta",
    tags: ["PC", "Mobile"],
  },
  {
    id: "untitled-project",
    title: "Untitled Project",
    text: "A cozy 3D point-and-click adventure set above the clouds. Gather resources, discover hidden sky secrets, and craft your very own floating paradise at your own peaceful pace.",
    status: "In Development",
    tags: ["PC"],
  },
];

function SeedPlot({ id }: { id: string }) {
  return (
    <div className="seed-plot" data-game={id}>
      <div className="seed-count" aria-live="polite">
        <span className="seed-count-sprout" aria-hidden="true" />
        <span className="seed-count-num">0</span>
        <span className="seed-count-label">seeds planted</span>
      </div>
      <div className="my-seeds" />
    </div>
  );
}

export default function GamesPage() {
  return (
    <>
      <GamesInteractions />
      <section className="page-hero">
        <span className="eyebrow">Games</span>
        <InkText as="h1">What we&apos;re making</InkText>
        <p className="lede">
          Everything here is free to download, free to keep, and yours once you
          have it. No accounts, no ads, no in-game purchases — ever.
        </p>
      </section>

      <section className="block">
        <div className="seed-bag-bar">
          <div className="seed-bag-heading">
            <span className="seed-bag-icon" dangerouslySetInnerHTML={{ __html: sproutArt }} />
            <div>
              <InkText as="h2" base={40}>The Seed Bag</InkText>
              <p id="seedBagNote">Plant a seed on the games you like. The more seeds a game gets, the more its vines grow.</p>
            </div>
          </div>
          <div className="seed-bag" id="seedBag" role="button" tabIndex={0} aria-label="Seed bag">
            <span dangerouslySetInnerHTML={{ __html: seedBagArt }} />
            <span className="seed-bag-count">
              <span id="seedBagCount">5</span> <span className="seed-bag-count-label">seeds</span>
            </span>
          </div>
          <button id="seedResetBtn" className="seed-reset-link" type="button">Dig up all my seeds (start over)</button>
        </div>

        <div className="grid">
          {GAMES.map((game) => (
            <div
              className={`game-card${game.href ? " game-card-link" : ""}`}
              data-game={game.id}
              data-href={game.href}
              role={game.href ? "link" : undefined}
              tabIndex={game.href ? 0 : undefined}
              aria-label={game.href ? `Play ${game.title} on itch.io` : undefined}
              key={game.id}
            >
              <div className={`thumb${game.cover ? " has-cover" : ""}`}>
                {game.cover ? (
                  <img src={game.cover} alt={game.alt ?? ""} width={1600} height={900} />
                ) : (
                  "Cover art coming soon"
                )}
              </div>
              <div className="body">
                <h3>{game.title}</h3>
                <p>{game.text}</p>
                <div className="tags">
                  {game.free ? <span className="tag free">Free forever</span> : null}
                  {game.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="status">Status: {game.status}</div>
                <SeedPlot id={game.id} />
              </div>
            </div>
          ))}
        </div>

        <p className="center mt-lg" style={{ color: "var(--text-dim)", fontSize: "0.9rem" }}>
          Check out our discord for updates and game discussion, or just to say hi!
        </p>
      </section>

      <section className="cta-band">
        <InkText as="h2" base={40}>Want to help us make more of these?</InkText>
        <p>Every game on this page stays free because people choose to support the studio directly.</p>
        <Link href="/support" className="btn btn-primary">Support the Studio</Link>
      </section>
    </>
  );
}
