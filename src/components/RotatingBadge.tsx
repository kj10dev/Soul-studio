import { useId, useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";
import CrownMark from "./CrownMark";

/** Circular text badge ("TATTOOS BY KB LUFF ✦") with the crown at its centre. Inherits currentColor. */
export default function RotatingBadge({ className = "w-28 md:w-40" }: { className?: string }) {
  const id = useId();
  const ring = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.to(ring.current, { rotation: 360, duration: 20, ease: "none", repeat: -1, transformOrigin: "50% 50%" });
  });

  return (
    <div className={`relative aspect-square ${className}`} aria-hidden="true">
      <svg ref={ring} viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <defs>
          <path id={`${id}-p`} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="97" fill="none" stroke="currentColor" strokeWidth="3" />
        <text fill="currentColor" fontFamily="Jost, sans-serif" fontSize="15" letterSpacing="7.4" style={{ textTransform: "uppercase" }}>
          <textPath href={`#${id}-p`}>Tattoos by KB Luff ✦ Tattoos by KB Luff ✦</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <CrownMark className="w-[34%]" />
      </div>
    </div>
  );
}
