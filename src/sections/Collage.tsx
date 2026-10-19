import { useRef } from "react";
import { gsap, useGSAP, MOTION } from "../lib/gsap";
import Plate from "../components/Plate";
import CrownMark from "../components/CrownMark";
import Marquee from "../components/Marquee";
import RotatingBadge from "../components/RotatingBadge";

/** Flash-sheet collage: overlap, rotation, parallax. Positions are percentages of the sheet. */
export default function Collage() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION.motion, () => {
        gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
          gsap.to(el, {
            yPercent: -Number(el.dataset.speed) * 30,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          });
        });
      });
    },
    { scope: root },
  );

  const item = "absolute";

  return (
    <section id="collage" ref={root} className="theme-bone relative overflow-hidden border-t-[3px] border-black">
      <p className="label relative z-40 px-4 pt-6 md:px-8">[05] Flash sheet</p>

      <div className="relative mx-auto h-[150vh] w-full md:h-[190vh]">
        {/* black block behind half of it */}
        <div
          data-speed="0.8"
          className={`${item} left-[18%] top-[38%] z-[5] h-[30%] w-[44%] -rotate-2 bg-black text-white`}
          aria-hidden="true"
        >
          <CrownMark className="absolute top-1/2 left-1/2 w-[38%] -translate-x-1/2 -translate-y-1/2" />
          <span className="label absolute bottom-3 left-3 text-xs">[XIII]</span>
        </div>

        <div data-speed="0.6" className={`${item} left-[4%] top-[4%] z-10 w-[40%] -rotate-[4deg] md:w-[34%]`}>
          <div className="brut-card aspect-[4/5] overflow-hidden bg-black">
            <Plate variant="rings" />
          </div>
        </div>

        <h2 data-speed="1" className={`${item} display text-huge left-[26%] top-[10%] z-20`}>
          One of
          <br />
          one<em>.</em>
        </h2>

        <div data-speed="0.3" className={`${item} right-[6%] top-[16%] z-[15] w-[34%] rotate-[5deg] md:w-[26%]`}>
          <div className="brut-card aspect-[4/5] overflow-hidden bg-black">
            <Plate variant="barbs" />
          </div>
        </div>

        <div data-speed="0.9" className={`${item} right-[4%] top-[40%] z-[12] w-[24%] rotate-[3deg] md:w-[18%]`}>
          <div className="brut-card aspect-[4/5] overflow-hidden bg-black">
            <Plate variant="dots" />
          </div>
        </div>

        <div data-speed="0.5" className={`${item} left-[56%] top-[54%] z-[25] w-[32%] -rotate-6 md:w-[22%]`}>
          <div className="brut-card aspect-[4/5] overflow-hidden bg-black">
            <Plate variant="stars" />
          </div>
        </div>

        <span
          data-speed="0.2"
          aria-hidden="true"
          className={`${item} display text-mega left-[1%] top-[60%] z-[8] text-transparent`}
          style={{ WebkitTextStroke: "3px #000" }}
        >
          XIII
        </span>

        <div data-speed="0.7" className={`${item} left-[8%] top-[76%] z-[18] w-[40%] rotate-3 md:w-[30%]`}>
          <div className="brut-card aspect-[4/5] overflow-hidden bg-black">
            <Plate variant="waves" />
          </div>
        </div>

        <p data-speed="0.4" className={`${item} shout left-[42%] top-[86%] z-30 text-[clamp(2rem,6vw,6rem)]`}>
          No
          <br />
          copies.
        </p>

        <div data-speed="0.5" className={`${item} right-[8%] top-[84%] z-30`}>
          <RotatingBadge className="w-28 md:w-40" />
        </div>

        <Marquee
          className={`${item} top-[68%] left-[-10%] z-30 w-[120%]`}
          strip="bg-black text-white -rotate-3"
          items={["FLASH", "ONE OF ONE", "NO COPIES", "SOUL"]}
        />
      </div>
    </section>
  );
}
