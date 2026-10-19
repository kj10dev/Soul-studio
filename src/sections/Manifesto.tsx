import { Fragment, useRef, type CSSProperties } from "react";
import { gsap, SplitText, useGSAP, MOTION } from "../lib/gsap";
import { manifesto } from "../data/content";
import crown from "../assets/crown.png";

/** "skin is the *canvas.*" -> italic Bodoni on the starred word */
function renderLine(text: string) {
  return text.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith("*") ? <em key={i}>{part.slice(1, -1)}</em> : <Fragment key={i}>{part}</Fragment>,
  );
}

export default function Manifesto() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION.motion, () => {
        const splits: SplitText[] = [];
        gsap.utils.toArray<HTMLElement>(".manifesto-line").forEach((line) => {
          const split = SplitText.create(line, { type: "words" });
          splits.push(split);
          gsap.fromTo(
            split.words,
            { opacity: 0.15 },
            {
              opacity: 1,
              ease: "none",
              stagger: 0.1,
              scrollTrigger: { trigger: line, start: "top 85%", end: "bottom 55%", scrub: true },
            },
          );
        });
        return () => splits.forEach((s) => s.revert());
      });
    },
    { scope: root },
  );

  const pattern = {
    backgroundImage: `url(${crown})`,
    backgroundSize: "96px auto",
    filter: "invert(1)",
  } as CSSProperties;

  return (
    <section
      id="manifesto"
      ref={root}
      className="theme-light relative overflow-hidden border-t-[3px] border-black px-4 py-24 md:px-8 md:py-40"
    >
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.07]" style={pattern} />
      <p className="label relative mb-10 md:mb-16">[02] Manifesto</p>
      <div className="relative flex flex-col gap-6 md:gap-10">
        {manifesto.map((line, i) => (
          <p
            key={line}
            className={`manifesto-line display text-huge ${i === 1 ? "md:ml-[12vw]" : i === 2 ? "md:ml-[4vw]" : ""}`}
          >
            {renderLine(line)}
          </p>
        ))}
      </div>
    </section>
  );
}
