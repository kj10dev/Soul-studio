import { useEffect } from "react";
import { ScrollTrigger } from "./lib/gsap";
import SmoothScroll from "./components/SmoothScroll";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Manifesto from "./sections/Manifesto";
import Work from "./sections/Work";
import Styles from "./sections/Styles";
import Collage from "./sections/Collage";
import Artist from "./sections/Artist";
import Book from "./sections/Book";

export default function App() {
  // Recalculate pins and triggers once fonts and images have settled
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  return (
    <SmoothScroll>
      <div className="grain">
        <a
          href="#work"
          className="label fixed top-2 left-2 z-[110] -translate-y-20 bg-white px-3 py-2 text-black focus:translate-y-0"
        >
          Skip to work
        </a>
        <Cursor />
        <Nav />
        <main>
          <Hero />
          <Manifesto />
          <Work />
          <Styles />
          <Collage />
          <Artist />
          <Book />
        </main>
      </div>
    </SmoothScroll>
  );
}
