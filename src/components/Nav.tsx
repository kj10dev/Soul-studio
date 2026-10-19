import { useState } from "react";
import { nav } from "../data/content";
import { goTo } from "../lib/scrollState";
import CrownMark from "./CrownMark";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    // let the mobile panel close before measuring
    requestAnimationFrame(() => goTo(id));
  };

  const linkCls =
    "label px-3 py-2 no-underline transition-colors duration-100 [transition-timing-function:steps(2)] hover:bg-white hover:text-black";

  return (
    <header className="theme-dark fixed inset-x-0 top-0 z-50 border-b-[3px] border-white">
      <nav aria-label="Main" className="flex h-14 items-center justify-between px-4 md:px-8">
        <a href="#top" onClick={go("top")} className="flex items-center gap-3 no-underline" aria-label="Soul — home">
          <CrownMark className="w-8" />
          <span className="display text-2xl leading-none">Soul</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} onClick={go(n.id)} className={linkCls}>
                {n.label}
                {n.count && <span className="ml-2 text-ash">[{n.count}]</span>}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="label border-[3px] border-white px-3 py-1 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "[X]" : "Menu"}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="theme-light fixed inset-0 top-14 z-40 flex flex-col justify-center gap-4 px-4 md:hidden">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={go(n.id)} className="display text-title no-underline">
              {n.label}
              {n.count && <span className="label ml-3 align-top text-sm">[{n.count}]</span>}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
