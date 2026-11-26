import type { Metadata, Viewport } from "next";
import { Cinzel, Cinzel_Decorative, EB_Garamond } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageDirection } from "@/components/PageDirection";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cinzel",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-cinzel-decorative",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pietimestudio.com"),
  title: {
    default: "Pie Time Studio — Games you actually own.",
    template: "%s — Pie Time Studio",
  },
  description:
    "Pie Time Studio makes games that cost nothing, own nothing over you, and belong to you once you have them. Funded entirely by the people who play them.",
};

export const viewport: Viewport = {
  themeColor: "#14100f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cinzelDecorative.variable} ${garamond.variable} vt`}
      data-scroll-behavior="smooth"
    >
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <PageDirection />
      </body>
    </html>
  );
}
