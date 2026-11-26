# Pie Time Studio

The studio site, rebuilt as a Next.js app with React and Tailwind. The original static pages are still in the project root. Vercel deploys this repository from the root as a Next.js app (`vercel.json`) on Node.js 22. Connect [StephenMarkToms/PieTimeStudio](https://github.com/StephenMarkToms/PieTimeStudio) and deploy; no root-directory override is required. The old `.html` URLs redirect to the App Router routes.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The tavern skin — torches, stone corners, the gold hoard, vine growth — is the stylesheet in `src/app/tavern.css`, loaded from the Tailwind entry. The same palette and type are declared as Tailwind theme tokens (`text-gold`, `bg-ink`, `font-head`, and so on).
