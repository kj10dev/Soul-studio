import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

/** Desktop-only blend-mode cursor. Elements opt in to a label with data-cursor="VIEW". */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm || !dot.current) return;

    const el = dot.current;
    gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 0 });
    const qx = gsap.quickTo(el, "x", { duration: 0.25, ease: "power3" });
    const qy = gsap.quickTo(el, "y", { duration: 0.25, ease: "power3" });

    const move = (e: PointerEvent) => {
      gsap.to(el, { opacity: 1, duration: 0.2, overwrite: "auto" });
      qx(e.clientX);
      qy(e.clientY);
    };
    const over = (e: PointerEvent) => {
      const t = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
      if (label.current) label.current.textContent = t?.dataset.cursor ?? "";
      gsap.to(el, { width: t ? 84 : 18, height: t ? 84 : 18, duration: 0.25, ease: "power3.out" });
    };
    const leave = () => gsap.to(el, { opacity: 0, duration: 0.2 });

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  });

  return (
    <div
      ref={dot}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden h-[18px] w-[18px] items-center justify-center rounded-full bg-white mix-blend-difference [@media(hover:hover)_and_(pointer:fine)]:flex"
    >
      <span ref={label} className="label text-[10px] tracking-[0.2em] text-black" />
    </div>
  );
}
