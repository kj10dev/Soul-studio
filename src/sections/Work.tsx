import { useRef } from "react";
import { gsap, useGSAP, MOTION } from "../lib/gsap";
import { brand, work } from "../data/content";
import Plate from "../components/Plate";

export default function Work() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`${MOTION.motion} and ${MOTION.desktop}`, () => {
        const t = track.current!;
        const horizontal = gsap.to(t, {
          x: () => -(t.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            pin: true,
            scrub: 1,
            end: () => "+=" + (t.scrollWidth - window.innerWidth),
            invalidateOnRefresh: true,
          },
        });
        // parallax inside each card, tied to the horizontal scroll
        gsap.utils.toArray<HTMLElement>(".card-inner").forEach((inner) => {
          gsap.fromTo(
            inner,
            { xPercent: -8 },
            {
              xPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: inner.closest(".work-card"),
                containerAnimation: horizontal,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            },
          );
        });
      });
    },
    { scope: root },
  );

  return (
    <section id="work" ref={root} className="theme-dark relative border-t-[3px] border-white md:h-screen md:overflow-hidden">
      <div ref={track} className="flex flex-col gap-10 px-4 py-24 md:h-full md:w-max md:flex-row md:items-center md:gap-[4vw] md:px-[4vw] md:py-0">
        {/* title panel */}
        <div className="md:w-[40vw] md:shrink-0">
          <p className="label mb-6">[03] Work</p>
          <h2 className="display text-huge">
            Work <span className="label align-top text-base text-ash">[{String(work.length).padStart(2, "0")}]</span>
          </h2>
          <p className="mt-6 max-w-sm text-ash">Every piece drawn for the person wearing it. Made once, never repeated.</p>
          <p className="label mt-8 hidden text-ash md:block">Keep scrolling →</p>
        </div>

        {work.map((w) => (
          <article
            key={w.id}
            className={`work-card relative md:w-[26vw] md:shrink-0 ${w.offset}`}
            style={{ rotate: `${w.rotate}deg` }}
          >
            <div data-cursor="VIEW" className="brut-card relative aspect-[4/5] overflow-hidden bg-black">
              <div className="card-inner h-full w-full scale-[1.25]">
                {w.image ? (
                  <img src={w.image} alt={`${w.style} tattoo, ${w.title}`} loading="lazy" className="bw h-full w-full object-cover" />
                ) : (
                  <Plate variant={w.plate} />
                )}
              </div>
              <span className="label absolute top-3 left-3 bg-black px-2 py-1 text-xs">
                [{w.id}] {w.style}
              </span>
            </div>
            <h3 className="display relative z-10 -mt-6 ml-4 text-[clamp(2rem,4vw,4.5rem)] mix-blend-difference md:-ml-6 md:-mt-10">
              {w.title}
            </h3>
            <p className="label mt-2 text-ash">{w.year}</p>
          </article>
        ))}

        {/* end panel */}
        <div className="md:w-[30vw] md:shrink-0">
          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
            className="display text-title block no-underline hover:underline"
          >
            More on Instagram ↗
          </a>
        </div>
      </div>
    </section>
  );
}
