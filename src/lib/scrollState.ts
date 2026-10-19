import type Lenis from "lenis";

/** Shared between Lenis (writer) and Three.js / marquee (readers). */
export const scrollState: { velocity: number; lenis: Lenis | null } = {
  velocity: 0,
  lenis: null,
};

/** Smooth-scroll to an element id; falls back to native scrolling. */
export function goTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (scrollState.lenis) scrollState.lenis.scrollTo(el, { offset: -56 });
  else el.scrollIntoView({ behavior: "auto" });
}
