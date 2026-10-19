import { useRef } from "react";
import { gsap, SplitText, useGSAP, MOTION } from "../lib/gsap";
import { brand } from "../data/content";
import CrownCanvas from "../components/CrownCanvas";
import Marquee from "../components/Marquee";
import RotatingBadge from "../components/RotatingBadge";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION.motion, () => {
        const split = SplitText.create(".hero-word", { type: "chars", mask: "chars" });
        const tl = gsap.timeline({ delay: 0.15 });
        tl.from(split.chars, {
          yPercent: 120,
          rotate: () => gsap.utils.random(-14, 14),
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.05,
        });
        tl.from(".hero-fade", { opacity: 0, y: 16, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.4");
        return () => split.revert();
      });
    },
    { scope: root },
  );

  return (
    <section id="top" ref={root} className="theme-dark relative min-h-screen overflow-hidden pt-14">
      <CrownCanvas />

      {/* giant live-type wordmark, inverting where it crosses the white crown */}
      <div className="relative z-10 flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-4 pb-28 md:pb-36">
        <h1 className="display text-mega text-center text-white mix-blend-difference">
          <span className="hero-word block">Soul</span>
        </h1>
        <p className="label hero-fade mt-6 text-center text-white mix-blend-difference md:mt-8">{brand.tagline}</p>
      </div>

      <div className="hero-fade absolute top-20 right-4 z-20 md:top-24 md:right-8">
        <RotatingBadge />
      </div>

      <p className="label hero-fade absolute bottom-32 left-4 z-20 hidden text-ash md:block md:bottom-40 md:left-8">
        [01] {brand.line}
      </p>
      <p className="label hero-fade absolute right-4 bottom-32 z-20 hidden text-ash md:block md:right-8 md:bottom-40">
        Scroll ↓
      </p>

      <Marquee className="absolute inset-x-0 bottom-8 z-20 -mx-4 w-[calc(100%+2rem)] md:bottom-12" />
    </section>
  );
}
