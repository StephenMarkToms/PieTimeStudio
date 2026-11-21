"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ORDER = ["/", "/about", "/games", "/support", "/contact"];

function pageIndex(path: string) {
  const name = path.replace(/\/+$/, "") || "/";
  const index = ORDER.indexOf(name);
  return index < 0 ? 0 : index;
}

export function PageDirection() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      sessionStorage.setItem("ptsPage", String(pageIndex(pathname)));
    } catch {
      /* private mode */
    }
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;
      if (link.target && link.target !== "_self") return;
      if (link.hasAttribute("download")) return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || /^(mailto|tel|javascript):/i.test(href)) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname) return;
      if (!ORDER.includes(url.pathname)) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const from = pageIndex(location.pathname);
      const to = pageIndex(url.pathname);
      const root = document.documentElement;
      root.classList.remove("nav-fwd", "nav-back");
      if (to > from) root.classList.add("nav-fwd");
      else if (to < from) root.classList.add("nav-back");
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
