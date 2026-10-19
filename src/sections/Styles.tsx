import { useRef, useState } from "react";
import { gsap, useGSAP, MOTION } from "../lib/gsap";
import { styles } from "../data/content";
import { goTo } from "../lib/scrollState";
import Plate from "../components/Plate";

export default function Styles() {
  const root = useRef<HTMLElement>(null);
  const follower = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION.motion, () => {
        gsap.from(".style-row", {
          yPercent: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".style-list", start: "top 80%" },
        });
      });

      mm.add(`${MOTION.motion} and (hover: hover) and (pointer: fine)`, () => {
        const el = follower.current;
        if (!el) return;
        gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 0 });
        const qx = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" });
        const qy = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" });
        const move = (e: PointerEvent) => {
          qx(e.clientX + 120);
          qy(e.clientY);
        };
        const list = root.current!.querySelector(".style-list")!;
        const enter = () => gsap.to(el, { opacity: 1, scale: 1, duration: 0.2 });
        const leave = () => gsap.to(el, { opacity: 0, scale: 0.9, duration: 0.2 });
        window.addEventListener("pointermove", move);
        list.addEventListener("pointerenter", enter);
        list.addEventListener("pointerleave", leave);
        return () => {
          window.removeEventListener("pointermove", move);
          list.removeEventListener("pointerenter", enter);
          list.removeEventListener("pointerleave", leave);
        };
      });
    },
    { scope: root },
  );

  return (
    <section id="styles" ref={root} className="theme-dark relative border-t-[3px] border-white py-24 md:py-40">
      <div className="px-4 md:px-8">
        <p className="label mb-6">[04] Styles</p>
        <h2 className="display text-huge mb-12 md:mb-20">
          Styles <em>we</em> do
        </h2>
      </div>

      <ul className="style-list">
        {styles.map((s, i) => (
          <li key={s.id} className="style-row">
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                goTo("book");
              }}
              onPointerEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              data-cursor="BOOK"
              className="grid grid-cols-12 items-baseline gap-4 border-t-[3px] border-white px-4 py-6 no-underline transition-colors duration-100 [transition-timing-function:steps(2)] last:border-b-[3px] hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black md:px-8 md:py-10"
            >
              <span className="label col-span-2 md:col-span-1">[{s.id}]</span>
              <span className="display col-span-10 text-title md:col-span-5">{s.name}</span>
              <span className="col-span-10 col-start-3 text-ash md:col-span-6 md:col-start-auto">{s.blurb}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* floating plate that follows the cursor over the list */}
      <div
        ref={follower}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-40 hidden aspect-[4/5] w-52 overflow-hidden border-[3px] border-white md:block"
        style={{ opacity: 0 }}
      >
        <Plate variant={styles[active].plate} />
      </div>
    </section>
  );
}
