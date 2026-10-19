import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export { gsap, ScrollTrigger, SplitText, useGSAP };

/** Conditions shared by every section's gsap.matchMedia() */
export const MOTION = {
  motion: "(prefers-reduced-motion: no-preference)",
  desktop: "(min-width: 768px)",
  mobile: "(max-width: 767px)",
} as const;
