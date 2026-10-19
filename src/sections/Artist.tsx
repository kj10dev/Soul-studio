import { useRef } from "react";
import { gsap, SplitText, useGSAP, MOTION } from "../lib/gsap";
import { artist } from "../data/content";
import Plate from "../components/Plate";
import CrownMark from "../components/CrownMark";

export default function Artist() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION.motion, () => {
        gsap.fromTo(
          ".portrait",
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.1,
            ease: "power4.inOut",
            scrollTrigger: { trigger: ".portrait", start: "top 80%" },
          },
        );
        const split = SplitText.create(".bio", { type: "lines", mask: "lines" });
        gsap.from(split.lines, {
          yPercent: 110,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ".bio", start: "top 85%" },
        });
        return () => split.revert();
      });
    },
    { scope: root },
  );

  return (
    <section id="artist" ref={root} className="theme-dark relative overflow-hidden border-t-[3px] border-white px-4 py-24 md:px-8 md:py-40">
      <p className="label mb-10 md:mb-16">[06] The artist</p>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="relative col-span-12 md:col-span-6">
          <div className="portrait brut-card relative aspect-[4/5] overflow-hidden bg-black">
            {artist.portrait ? (
              <img src={artist.portrait} alt={`Portrait of ${artist.name}`} loading="lazy" className="bw halftone h-full w-full object-cover" />
            ) : (
              <>
                <Plate variant="dots" />
                <CrownMark className="absolute top-1/2 left-1/2 w-[34%] -translate-x-1/2 -translate-y-1/2 text-white" />
              </>
            )}
          </div>
          <h2 className="display relative z-10 -mt-[18%] ml-[-2%] text-[clamp(4rem,17vw,20rem)] mix-blend-difference md:-mt-[22%] md:-mr-[30%] md:ml-0">
            KB
            <br />
            Luff
          </h2>
        </div>

        <div className="col-span-12 flex flex-col justify-end gap-10 md:col-span-5 md:col-start-8">
          <p className="bio text-[clamp(1.25rem,2vw,1.75rem)] leading-snug">{artist.bio}</p>
          <dl className="grid grid-cols-1 border-[3px] border-white">
            {artist.facts.map((f, i) => (
              <div key={f.k} className={`grid grid-cols-3 gap-4 p-4 ${i > 0 ? "border-t-[3px] border-white" : ""}`}>
                <dt className="label text-ash">{f.k}</dt>
                <dd className="col-span-2">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
