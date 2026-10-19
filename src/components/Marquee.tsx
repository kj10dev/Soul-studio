import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";
import { scrollState } from "../lib/scrollState";
import { tape } from "../data/content";

type Props = {
  className?: string;
  /** Tailwind classes for the strip itself (colours, rotation, borders) */
  strip?: string;
  items?: string[];
};

/** Rotated tape. Content is rendered twice so translateX(-50%) loops seamlessly. */
export default function Marquee({ className = "", strip = "bg-white text-black -rotate-2", items = tape }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const el = ref.current;
      if (!el) return;
      const tick = () => {
        const anim = el.getAnimations()[0];
        if (anim) anim.playbackRate = 1 + Math.min(Math.abs(scrollState.velocity), 40) * 0.12;
      };
      gsap.ticker.add(tick);
      return () => gsap.ticker.remove(tick);
    },
    { scope: ref },
  );

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <div className={`overflow-hidden border-y-[3px] border-current py-2 md:py-3 ${strip}`}>
        <div ref={ref} className="animate-marquee flex w-max">
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0">
              {Array.from({ length: 4 }).flatMap((_, rep) =>
                items.map((t) => (
                  <span key={`${rep}-${t}`} className="shout px-5 text-2xl whitespace-nowrap md:px-8 md:text-5xl">
                    {t} <span className="px-3">✦</span>
                  </span>
                )),
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
