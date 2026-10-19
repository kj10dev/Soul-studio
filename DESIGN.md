# SOUL — Tattoos by KB Luff · Design System & Build Spec

> **Direction:** Brutalist / Anti-Design × Maximalist / Art-Directed
> **Stack:** React + Vite + TypeScript · Tailwind CSS v4 · GSAP (+ ScrollTrigger, SplitText) · Lenis · Three.js (React Three Fiber)
> **Look in one line:** *a quiet black crown on a very loud website.*

**Source note.** The Instagram and Facebook pages block automated access, so they were not read. This version is built from the supplied **logo** (black background, white crown, "SOUL", "TATTOOS BY KB LUFF") plus the brief. Anything marked **TODO** or **(proposal)** is my suggestion, not confirmed brand fact. Confirm the exact black/white values by sampling the original logo file.

---

## 1. Brand read (from the logo)

| Element | What it is |
|---|---|
| Mark | White five-point crown, ball-tipped prongs, hollow banded base. Centred, flat, high contrast |
| Wordmark | `SOUL`, bold uppercase **high-contrast (Didone/Bodoni-style) serif** |
| Tagline | `TATTOOS BY KB LUFF`, light geometric sans, all caps, **very wide tracking** |
| Colour | Pure white on pure black. No accent colour at all |
| Layout | Stacked, centred lockup surrounded by generous negative space |
| Feel | Regal, dark, premium, minimal |

**The design tension.** The logo is quiet luxury. The brief is Brutalist + Maximalist. Resolve it like this:

> **The logo is the one calm thing on the site. Everything around it is loud.**

Loudness comes from **scale, texture, layering and contrast**, not from adding colours. The site stays strictly black and white (with one optional red accent, see 3.1).

### Logo usage rules
- Use the supplied artwork only (ask KB Luff for a **vector SVG**; the supplied image is raster). Save as `src/assets/logo.png` (or `.svg`).
- Only on `ink` black or `bone`/white (inverted). Never recolour, stretch, outline or add effects.
- Clear space on all sides = the diameter of one crown ball ×3.
- Minimum width: 96px for the full lockup, 28px for the crown alone.
- Never place over busy imagery without a solid black plate behind it.
- The crown silhouette resembles a well-known luxury-watch crown. Keep the surrounding styling distinct (no green/gold, no watch-brand cues) so the identity stays its own.
- The giant "SOUL" on the page is **live type** in the display font, not the logo image. The real logo appears in the nav, hero lockup, footer and favicon.

### Voice
Short. Blunt. Confident. Mix of lowercase and SHOUTING. Examples (proposal): *"ink with a soul."* · *"no flash-in-the-pan. no regrets."* · *"book your skin →"*

---

## 2. Concept: the two styles, split by job

| Layer | Brutalist / Anti-Design | Maximalist / Art-Directed |
|---|---|---|
| Structure | Visible 12-col grid, 3px hard borders, zero radius, solid offset shadows | — |
| Type | Wide-tracked labels, numbered `[01]`, raw uppercase, default-style links | 15–25vw Didone display words, italic serif interruptions, overlapping lines |
| Colour | Pure black + white, nothing else | Full-bleed inversions (black ↔ white blocks), one optional red burst |
| Imagery | Hard-cropped, unrounded, raw | High-contrast B&W, halftone, grain, overlap, rotation, flash-sheet collage |
| Motion | Abrupt, stepped hovers | Big scroll-scrubbed reveals, pinned gallery, 3D crown reacts to scroll |
| Layout | Deliberate misalignment, broken symmetry | Layered z-stacks, elements bleeding off-canvas |

---

## 3. Principles

1. **Break the grid on purpose, never by accident.** Snap to 12 columns, then rotate, overlap or bleed.
2. **One loud thing per viewport.** Pick a focal point per screen.
3. **Hard edges only.** `border-radius: 0` (circles only for badge/cursor). Shadows are solid offsets.
4. **No new hues.** Hierarchy comes from black/white inversion, scale and texture.
5. **Motion has a reason.** Reveal, scrub or react. Looping only for marquee, badge and the 3D crown.
6. **Ugly is a choice, broken is a bug.** Keyboard focus, readable body text and working navigation always.

---

## 4. Tokens

### 4.1 Palette

| Token | Hex | Role |
|---|---|---|
| `ink` | `#000000` | Primary background (matches the logo), text on light |
| `white` | `#FFFFFF` | Logo, primary text on black, inverted sections |
| `bone` | `#F1EEE7` | Optional warm-paper variant for light sections and body copy blocks |
| `graphite` | `#141414` | Raised surfaces on black (cards, panels) |
| `ash` | `#8A8A8A` | Muted text and dividers, **on black only** |
| `blood` | `#FF2A1F` | **Optional (proposal).** Single accent: tape, sticker, hover bursts. Max ~5% of any screen. Remove if the brand should stay purely monochrome |

Page rhythm: alternate **black sections** and **white/bone sections** hard-edged against each other. Hero, services and footer are black; manifesto and collage invert.

### 4.2 Allowed text/background pairs (aim ≥ 4.5:1; verify final values)

| Background | Text |
|---|---|
| `ink` / `graphite` | `white`, `bone`, `ash`, `blood` |
| `white` / `bone` | `ink` only |
| `blood` | `ink` only |

Never put `ash` on a light background. Never put white text on `blood`.

### 4.3 Typography (all free, Google Fonts)

| Role | Family | Settings | Use |
|---|---|---|---|
| Display | **Bodoni Moda** (variable) | Weight 800–900, uppercase, `leading-[0.85]`, `tracking-tight`; italic for interruptions | Giant "SOUL", section titles, manifesto. Echoes the logo wordmark |
| Shout | **Archivo** (variable width) | `font-stretch: 125%`, weight 900, uppercase | Secondary huge words, buttons, stat numbers. Brutalist counterweight to the serif |
| Label | **Jost** | Weight 300–400, uppercase, `tracking-[0.4em]` | Nav, tags, captions, numbering. Mirrors the logo tagline |
| Body | **Archivo** | `font-stretch: 100%`, 400/500, 17–18px, `leading-[1.5]` | Paragraphs |

Rules: Jost Light (300) only at ≥ 14px; use 400 below that. Never set body copy in Bodoni.

Fluid scale:

| Token | Value |
|---|---|
| `text-mega` | `clamp(5rem, 24vw, 28rem)` |
| `text-huge` | `clamp(3rem, 10vw, 11rem)` |
| `text-title` | `clamp(2rem, 5vw, 5rem)` |
| `text-body` | `1.0625rem` |
| `text-label` | `0.8125rem` |

Font link:
`https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Archivo:wdth,wght@62..125,100..900&family=Jost:wght@300;400;500&display=swap` (add `preconnect` to `fonts.googleapis.com` and `fonts.gstatic.com`).

### 4.4 Shape, border, shadow, spacing
- Radius 0.
- Border `3px solid currentColor`; hero cards `6px`.
- Shadow `6px 6px 0 0 var(--shadow)` / `12px 12px 0 0` (white on black sections, ink on light). Hover moves the element **into** its shadow (`translate(6px, 6px)`, shadow → 0).
- Spacing base 4px; section padding `py-24 md:py-40`; gutters `gap-4 md:gap-6`; full-bleed with `px-4 md:px-8`.
- Rotation: cards/badge ±2°–8°. Never rotate body text.

### 4.5 Imagery and texture
- All tattoo photography: **black & white, high contrast**, optional halftone. Colour returns on hover/focus.
- Fixed **grain overlay** (overlay blend, ~12–15%).
- Decorative ornament vocabulary (proposal): the crown glyph, stars, roman numerals, thin barbed lines, flash-sheet frames. Use as repeating patterns and stickers.
- Photo direction: close-ups of fresh and healed work, studio details, hands and needles, skin texture. Get client consent before publishing any photo.

---

## 5. Tailwind setup (v4, CSS-first)

`src/index.css`

```css
@import "tailwindcss";

@theme {
  --color-ink: #000000;
  --color-bone: #f1eee7;
  --color-graphite: #141414;
  --color-ash: #8a8a8a;
  --color-blood: #ff2a1f;

  --font-display: "Bodoni Moda", Didot, "Times New Roman", serif;
  --font-sans: "Archivo", system-ui, sans-serif;
  --font-label: "Jost", system-ui, sans-serif;

  --text-mega: clamp(5rem, 24vw, 28rem);
  --text-huge: clamp(3rem, 10vw, 11rem);
  --text-title: clamp(2rem, 5vw, 5rem);

  --animate-marquee: marquee 26s linear infinite;
  @keyframes marquee {
    to { transform: translateX(-50%); }
  }
}

@layer base {
  html { background: var(--color-ink); color: #fff; }
  html.lenis, html.lenis body { height: auto; }
  .lenis.lenis-smooth { scroll-behavior: auto !important; }
  body { font-family: var(--font-sans); font-stretch: 100%; font-size: 1.0625rem; line-height: 1.5; }
  a { text-decoration: underline; text-underline-offset: 3px; text-decoration-thickness: 2px; }
  ::selection { background: #fff; color: #000; }
  :focus-visible { outline: 4px solid var(--color-blood); outline-offset: 3px; }
}

@layer components {
  /* Section themes: set colours + shadow colour together */
  .theme-dark  { background: var(--color-ink); color: #fff; --shadow: #fff; }
  .theme-light { background: #fff; color: var(--color-ink); --shadow: var(--color-ink); }
  .theme-bone  { background: var(--color-bone); color: var(--color-ink); --shadow: var(--color-ink); }

  .display {
    font-family: var(--font-display);
    font-weight: 900;
    text-transform: uppercase;
    line-height: 0.85;
    letter-spacing: -0.02em;
  }
  .display em { font-style: italic; font-weight: 500; text-transform: none; }
  .shout {
    font-family: var(--font-sans);
    font-stretch: 125%;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 0.85;
    letter-spacing: -0.04em;
  }
  .label {
    font-family: var(--font-label);
    font-weight: 400;
    font-size: 0.8125rem;
    text-transform: uppercase;
    letter-spacing: 0.4em;
  }
  .brut-card {
    border: 3px solid currentColor;
    box-shadow: 6px 6px 0 0 var(--shadow, currentColor);
    transition: transform .12s steps(2), box-shadow .12s steps(2);
  }
  .brut-card:hover { transform: translate(6px, 6px); box-shadow: 0 0 0 0 var(--shadow, currentColor); }

  .bw { filter: grayscale(1) contrast(1.4) brightness(.95); transition: filter .2s steps(3); }
  .bw:hover, a:focus-visible .bw { filter: none; }
  .halftone { position: relative; }
  .halftone::after {
    content: ""; position: absolute; inset: 0; pointer-events: none; opacity: .45; mix-blend-mode: multiply;
    background: radial-gradient(#000 1px, transparent 1.6px) 0 0 / 4px 4px;
  }

  .grain::after {
    content: ""; position: fixed; inset: -50%; z-index: 90; pointer-events: none;
    opacity: .14; mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-marquee { animation: none; }
}
```

Apply `className="grain"` on the root `<div>` and a `theme-*` class on every `<section>`.

---

## 6. Project setup

```bash
npm create vite@latest soul -- --template react-ts
cd soul
npm i tailwindcss @tailwindcss/vite gsap @gsap/react lenis three @react-three/fiber @react-three/drei react-router-dom
npm i -D @types/three
```

`vite.config.ts`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({ plugins: [react(), tailwindcss()] });
```

GSAP ships all plugins (ScrollTrigger, SplitText, etc.) in the free `gsap` package.

### Folder structure
```
src/
  main.tsx
  App.tsx
  index.css
  assets/
    logo.png            # supplied logo (swap for SVG)
  lib/
    gsap.ts             # registers plugins once
    scrollState.ts      # shared scroll velocity for 3D
  components/
    SmoothScroll.tsx    # Lenis ↔ GSAP bridge
    Logo.tsx
    Cursor.tsx
    Nav.tsx
    Marquee.tsx
    RotatingBadge.tsx
    CrownCanvas.tsx     # Three.js hero crown
  sections/
    Hero.tsx
    Manifesto.tsx
    Work.tsx            # pinned horizontal gallery
    Styles.tsx
    Collage.tsx
    Artist.tsx
    Book.tsx
  data/
    content.ts
public/
  work/                 # tattoo photography
  favicon.svg           # crown only
```

---

## 7. Core wiring

### 7.1 `lib/gsap.ts`
```ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export { gsap, ScrollTrigger, SplitText, useGSAP };
```
Always import from here, never from `gsap` directly.

### 7.2 `lib/scrollState.ts`
```ts
export const scrollState = { velocity: 0 };
```

### 7.3 `components/SmoothScroll.tsx` (Lenis ↔ GSAP ticker)
```tsx
import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { scrollState } from "../lib/scrollState";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenis.on("scroll", (e: { velocity: number }) => {
      scrollState.velocity = e.velocity;
      ScrollTrigger.update();
    });

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```
Wrap the app: `<SmoothScroll><App /></SmoothScroll>`. For in-page anchors use `lenis.scrollTo(target)`.

### 7.4 `components/CrownCanvas.tsx` (hero 3D object)
A procedural white crown (five ball-tipped prongs on a banded base) that spins, distorts its tilt with scroll velocity and leans toward the pointer. It is built from primitives so it needs no model file; swap in a modelled `.glb` of the real logo later via drei's `useGLTF` for an exact match.

```tsx
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollState } from "../lib/scrollState";

const PRONGS = 5;

function Crown() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state, dt) => {
    const v = Math.min(Math.abs(scrollState.velocity), 20) / 20; // 0..1
    group.current.rotation.y += dt * 0.35 + v * 0.12;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * 0.35 + v * 0.3, 0.06);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, state.pointer.x * 0.6, 0.05);
  });

  const mat = <meshStandardMaterial color="#ffffff" metalness={0.45} roughness={0.3} />;

  return (
    <group ref={group} position={[0, -0.6, 0]} scale={1.15}>
      {/* banded base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.75, 0.62, 0.55, 48, 1, true]} />
        <meshStandardMaterial color="#ffffff" metalness={0.45} roughness={0.3} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, -0.28, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.62, 0.07, 16, 48]} />
        {mat}
      </mesh>
      <mesh position={[0, 0.27, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.75, 0.06, 16, 48]} />
        {mat}
      </mesh>

      {/* prongs, each tilted outward and capped with a ball */}
      {Array.from({ length: PRONGS }).map((_, i) => {
        const angle = (i / PRONGS) * Math.PI * 2;
        const tall = i === 0 ? 1.7 : 1.45; // front prong a little taller
        return (
          <group key={i} rotation={[0, -angle, 0]}>
            <group position={[0.62, 0.25, 0]} rotation={[0, 0, -0.26]}>
              <mesh position={[0, tall / 2, 0]}>
                <coneGeometry args={[0.16, tall, 20]} />
                {mat}
              </mesh>
              <mesh position={[0, tall + 0.05, 0]}>
                <sphereGeometry args={[0.13, 24, 24]} />
                {mat}
              </mesh>
            </group>
          </group>
        );
      })}
    </group>
  );
}

export default function CrownCanvas() {
  return (
    <Canvas
      className="absolute! inset-0"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.4, 6], fov: 40 }}
      eventSource={document.body}
      eventPrefix="client"
      aria-hidden="true"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} />
      <directionalLight position={[-4, -2, -3]} intensity={0.8} />
      <Crown />
    </Canvas>
  );
}
```
Render it in the hero inside a `relative` container with `pointer-events-none`, **behind** the giant "SOUL" (`z-0`; text `z-10`) so the letters overlap the crown. Optional extras: a faint white wireframe icosahedron orbiting behind it, or `@react-three/postprocessing` halftone/pixelation for extra grit.

### 7.5 `components/Logo.tsx`
```tsx
import logo from "../assets/logo.png";

export default function Logo({ className = "w-24" }: { className?: string }) {
  return <img src={logo} alt="Soul — Tattoos by KB Luff" className={className} />;
}
```

---

## 8. Component specs

### Nav
- Fixed top, full width, `theme-dark`, `border-b-[3px]`.
- Left: crown-only mark (28–32px) + `SOUL` in Bodoni. Right: `WORK [04]   STYLES   ARTIST   BOOK` in `label` style.
- Hover: link inverts (`bg-white text-ink`), `steps(2)` timing, no easing.
- Mobile: full-screen white panel, links in `text-title` display, close button `[X]`.

### Button
- `label` text, `border-3`, `shadow-hard`, white bg / ink text (inverted on light sections), `px-6 py-3`, trailing `→`.
- Hover moves into shadow. Active: bg `blood` (if accent is used) else ash.

### Marquee (tape)
- `-rotate-2` strip, white bg with ink text (or `blood` if the accent is on), `border-y-[3px]`, Bodoni/Archivo repeated with `✦` separators (`BOOK NOW ✦ ONE OF ONE ✦ SOUL ✦`).
- Duplicate content twice so `translateX(-50%)` loops. Optionally scale speed with `scrollState.velocity`.

### Rotating badge
- Circular SVG with `TATTOOS BY KB LUFF ✦` on a text path, crown in the centre, slowly rotating (GSAP `rotation: 360`, `repeat: -1`, `ease: "none"`, 20s). Max 3 badges/stickers per viewport.

### Cursor (desktop only)
- 18px white circle, `mix-blend-mode: difference`, follows pointer via `gsap.quickTo`. Grows to 80px with a label (`VIEW`, `DRAG`) over gallery cards. Hidden on touch and reduced motion. Never remove the native cursor over text inputs.

### Work card
- B&W image (`.bw`, optionally `.halftone`) inside `brut-card`, `[01]` + style label in `label` type top-left, title in display type overlapping the card edge, fixed seed rotations (`[-3, 2, -1.5, 4]`).
- Hover: colour returns; card steps into its shadow.

### Styles list
- Full-width rows split by `border-t-[3px]`: `label` index + Bodoni style name + short description. Hover: row inverts (white bg, ink text) and a floating image follows the cursor (`quickTo`).

---

## 9. Page structure & motion

| # | Section | Theme | Layout | Motion |
|---|---|---|---|---|
| 1 | **Hero** | dark | `min-h-screen`; `SOUL` at `text-mega`, overlapping the 3D crown; `TATTOOS BY KB LUFF` in `label` tracking under it; rotating badge; marquee tape at the bottom | SplitText chars rise with random rotation; crown reacts to scroll velocity + pointer |
| 2 | **Manifesto** | light | 3–4 lines at `text-huge`, one italic Bodoni word per line, a crown glyph pattern behind | Word-by-word opacity scrub (15% → 100%) |
| 3 | **Work** | dark | Pinned horizontal gallery of 5–6 tattoo photos, varied heights/rotations | Pinned horizontal scroll; image parallax ±10% |
| 4 | **Styles** | dark/graphite | Brutalist list rows | Rows stagger up; hover-follow image |
| 5 | **Collage (flash sheet)** | bone | Dense overlap of photos, ornaments, roman numerals, type fragments | Per-item parallax via `data-speed` |
| 6 | **Artist** | dark | KB Luff portrait (B&W, halftone) overlapping a giant `KB LUFF` display line; short bio; studio details | Portrait slides in with a clip-path wipe; text lines reveal |
| 7 | **Book** | light | Giant `BOOK` link to the booking channel at `text-huge`; aftercare + FAQ in a bordered grid; footer with logo, socials, marquee | Letter jitter on hover (random ±4px, steps ease) |

### 9.1 Hero text reveal
```tsx
import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "../lib/gsap";

export default function HeroTitle() {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const split = SplitText.create(".hero-word", { type: "chars", mask: "chars" });
    gsap.from(split.chars, {
      yPercent: 120,
      rotate: () => gsap.utils.random(-14, 14),
      duration: 0.9,
      ease: "power4.out",
      stagger: 0.04,
    });
  }, { scope: ref });

  return (
    <h1 ref={ref} className="display text-mega">
      <span className="hero-word block">Soul</span>
    </h1>
  );
}
```
Below it place the tagline as a separate `label` element so the tracked-out look matches the logo.

### 9.2 Manifesto scrub
```tsx
useGSAP(() => {
  const split = SplitText.create(".manifesto-line", { type: "words" });
  gsap.fromTo(split.words, { opacity: 0.15 }, {
    opacity: 1,
    ease: "none",
    stagger: 0.1,
    scrollTrigger: { trigger: ".manifesto-line", start: "top 80%", end: "bottom 40%", scrub: true },
  });
}, { scope: sectionRef });
```

### 9.3 Pinned horizontal Work track
```tsx
useGSAP(() => {
  const track = trackRef.current!;
  gsap.to(track, {
    x: () => -(track.scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: sectionRef.current,
      pin: true,
      scrub: 1,
      end: () => "+=" + track.scrollWidth,
      invalidateOnRefresh: true,
    },
  });
}, { scope: sectionRef });
```
Below `md`, skip the pin and stack cards vertically (see 10).

### 9.4 Parallax collage
```tsx
useGSAP(() => {
  gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
    gsap.to(el, {
      yPercent: -Number(el.dataset.speed) * 30,
      ease: "none",
      scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
    });
  });
}, { scope: sectionRef });
```

---

## 10. Responsive, accessibility, performance

**Responsive**
- Mobile first; display type is fluid.
- Desktop-only effects inside `gsap.matchMedia()`:
  ```ts
  const mm = gsap.matchMedia();
  mm.add("(min-width: 768px)", () => { /* pinned gallery, cursor */ });
  mm.add("(max-width: 767px)", () => { /* vertical reveals */ });
  ```
- 3D on mobile: `dpr` 1, fewer segments (cone 12, sphere 16, torus 32).

**Accessibility**
- Respect `prefers-reduced-motion`: no Lenis, no scrub, no marquee loop, static crown (`frameloop="demand"`), via `gsap.matchMedia` condition `(prefers-reduced-motion: no-preference)`.
- Real headings, landmarks, alt text on every tattoo photo (describe the piece), logo alt `Soul — Tattoos by KB Luff`.
- Visible 4px focus ring on every interactive element.
- Decorative badge, marquee, canvas, ornaments: `aria-hidden="true"`.
- Body text ≥ 17px, never rotated, never directly over photography (use a solid plate).
- Booking must work without JavaScript effects: a plain, labelled link/form.

**Performance**
- One canvas only; render only while the hero is in view.
- Lazy-load gallery images, AVIF/WebP, explicit width/height.
- `useGSAP` for cleanup; call `ScrollTrigger.refresh()` after fonts and images load.

---

## 11. Do / Don't

**Do**
- Use enormous Bodoni type, cropped by the viewport edge.
- Keep the site black and white; invert sections hard-edged.
- Give the logo space; make everything else crowd it.
- Overlap, rotate and stack photography; keep borders 3px, shadows solid.
- Number everything `[01]`, tracked-out labels throughout.

**Don't**
- Add colours beyond the optional red; no gradients, glass, blur shadows or rounded corners.
- Put more than three badges/stickers or more than one canvas in a viewport.
- Use soft eases on UI chrome (use `steps()` or `power4`).
- Rotate, recolour or restyle the logo.
- Use Jost Light below 14px.
- Stack a second scroll-hijacking library on top of Lenis.

---

## 12. Content (swap with real copy)

`src/data/content.ts`

```ts
export const brand = {
  name: "Soul",
  tagline: "Tattoos by KB Luff",
  line: "ink with a soul.",                       // proposal
  email: "TODO",
  booking: "https://www.instagram.com/soul_studio_999/", // proposal: DM-to-book until a form exists
  instagram: "https://www.instagram.com/soul_studio_999/",
  facebook: "https://www.facebook.com/profile.php?id=100090524530260",
  location: "TODO",
  year: "2026",
};

// TODO: confirm the real styles KB Luff offers
export const styles = [
  { id: "01", name: "Custom", blurb: "TODO one blunt line" },
  { id: "02", name: "Fine line", blurb: "TODO one blunt line" },
  { id: "03", name: "Blackwork", blurb: "TODO one blunt line" },
  { id: "04", name: "Cover-ups", blurb: "TODO one blunt line" },
];

export const work = [
  { id: "01", style: "TODO", year: "2026", image: "/work/01.jpg", rotate: -3 },
  { id: "02", style: "TODO", year: "2026", image: "/work/02.jpg", rotate: 2 },
  { id: "03", style: "TODO", year: "2025", image: "/work/03.jpg", rotate: -1.5 },
  { id: "04", style: "TODO", year: "2025", image: "/work/04.jpg", rotate: 4 },
];

export const manifesto = [
  "skin is the *canvas.*",   // *word* renders as Bodoni italic
  "no copies. no *regrets.*",
  "one of one, every time.",
];

export const artist = {
  name: "KB Luff",
  bio: "TODO",
  portrait: "/work/kb.jpg",
};

export const aftercare = [ /* TODO: real aftercare steps from the studio */ ];
```

Use real work from the Instagram feed for `/public/work/`; the `.bw` class handles the treatment, so no per-image editing is needed.

---

## 13. Build order (for Claude Code or a developer)

1. Scaffold, install dependencies, paste `index.css` from Section 5, load fonts, add `logo.png`.
2. Create `lib/gsap.ts`, `lib/scrollState.ts`, `SmoothScroll`; verify Lenis + ScrollTrigger sync with a test pin.
3. Build primitives: `Nav`, `Button`, `Marquee`, `RotatingBadge`, `Cursor`, `Logo`.
4. Build `Hero` with `HeroTitle` and `CrownCanvas`; confirm the type overlaps the crown.
5. Build `Manifesto`, `Work` (pinned), `Styles`, `Collage`, `Artist`, `Book`.
6. Wire copy from `data/content.ts`.
7. Add `gsap.matchMedia` breakpoints and the reduced-motion path.
8. Audit: keyboard tab-through, contrast (4.2), mobile Lighthouse, `ScrollTrigger.refresh()` after fonts.

### Acceptance checklist
- [ ] Logo used only as supplied, on black or white, with clear space
- [ ] Site is strictly black/white (plus optional single red accent)
- [ ] Giant `SOUL` is live Bodoni type; tagline uses tracked `label` style
- [ ] Every section has one dominant focal element
- [ ] No border-radius except badge/cursor
- [ ] Lenis and ScrollTrigger share one ticker
- [ ] Crown reacts to scroll velocity and pointer; single canvas
- [ ] Tattoo photos are B&W by default with colour on hover; client consent confirmed
- [ ] Reduced-motion users get a static, fully readable site
- [ ] Booking link works with no JS effects; no horizontal scroll on mobile
