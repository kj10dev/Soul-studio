import { useRef } from "react";
import { gsap, useGSAP, MOTION } from "../lib/gsap";
import { aftercare, brand } from "../data/content";
import Marquee from "../components/Marquee";
import logo from "../assets/logo.jpg";

export default function Book() {
  const root = useRef<HTMLElement>(null);

  // letter jitter on hover (random +/-4px, stepped)
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`${MOTION.motion} and (hover: hover)`, () => {
        const link = root.current!.querySelector<HTMLElement>(".book-link");
        if (!link) return;
        const letters = link.querySelectorAll<HTMLElement>(".book-letter");
        let timer = 0;
        const jitter = () => {
          gsap.to(letters, {
            x: () => gsap.utils.random(-4, 4),
            y: () => gsap.utils.random(-4, 4),
            duration: 0.06,
            ease: "steps(1)",
          });
        };
        const enter = () => {
          jitter();
          timer = window.setInterval(jitter, 90);
        };
        const leave = () => {
          window.clearInterval(timer);
          gsap.to(letters, { x: 0, y: 0, duration: 0.1 });
        };
        link.addEventListener("pointerenter", enter);
        link.addEventListener("pointerleave", leave);
        return () => {
          window.clearInterval(timer);
          link.removeEventListener("pointerenter", enter);
          link.removeEventListener("pointerleave", leave);
        };
      });
    },
    { scope: root },
  );

  return (
    <>
      <section id="book" ref={root} className="theme-light relative border-t-[3px] border-black px-4 py-24 md:px-8 md:py-40">
        <p className="label mb-8">[07] Book</p>

        <a
          href={brand.booking}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="DM"
          aria-label="Book a tattoo with KB Luff on Instagram"
          className="book-link display block text-[clamp(6rem,30vw,34rem)] no-underline"
        >
          {"Book".split("").map((c, i) => (
            <span key={i} className="book-letter inline-block">
              {c}
            </span>
          ))}
          <span className="inline-block">→</span>
        </a>

        <div className="mt-10 grid grid-cols-12 gap-4 md:mt-16 md:gap-6">
          <p className="col-span-12 max-w-xl text-[clamp(1.25rem,2vw,1.75rem)] leading-snug md:col-span-6">
            Send your idea, the size and where it goes. {brand.line}
            {brand.email && (
              <>
                {" "}
                Or write to <a href={`mailto:${brand.email}`}>{brand.email}</a>.
              </>
            )}
            {brand.location && <> Find us: {brand.location}.</>}
          </p>
        </div>

        <div className="mt-16 md:mt-24">
          <p className="label mb-4">Aftercare</p>
          <ul className="grid grid-cols-1 border-[3px] border-black md:grid-cols-4">
            {aftercare.map((a, i) => (
              <li
                key={a.id}
                className={`p-5 ${i > 0 ? "border-t-[3px] border-black md:border-t-0 md:border-l-[3px]" : ""}`}
              >
                <span className="label text-xs">[{a.id}]</span>
                <h3 className="display mt-3 text-3xl">{a.title}</h3>
                <p className="mt-3">{a.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">Your artist's own instructions always come first.</p>
        </div>
      </section>

      <footer className="theme-dark relative overflow-hidden border-t-[3px] border-white pt-16 md:pt-24">
        <div className="grid grid-cols-12 items-center gap-8 px-4 pb-16 md:px-8 md:pb-24">
          <img src={logo} alt="Soul — Tattoos by KB Luff" className="col-span-12 w-56 md:col-span-4 md:w-72" />
          <ul className="col-span-6 flex flex-col gap-2 md:col-span-4 md:col-start-6">
            <li className="label text-ash">Elsewhere</li>
            <li>
              <a href={brand.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={brand.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
          </ul>
          <p className="label col-span-6 text-ash md:col-span-3">
            © {brand.year} Soul
            <br />
            Tattoos by KB Luff
          </p>
        </div>
        <Marquee strip="bg-white text-black -rotate-1" className="-mb-2" />
      </footer>
    </>
  );
}
