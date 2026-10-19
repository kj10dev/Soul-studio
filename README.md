# SOUL — Tattoos by KB Luff

React + Vite + TypeScript · Tailwind CSS v4 · GSAP (ScrollTrigger, SplitText) · Lenis · Three.js (React Three Fiber).
Design rules live in `DESIGN.md`.

```bash
npm install
npm run dev        # local dev server
npm run build      # production build -> dist/
SINGLE_FILE=1 npx vite build --outDir dist-single   # one self-contained index.html
```

## Where to change things

| What | Where |
|---|---|
| All copy, styles list, aftercare, links | `src/data/content.ts` (items marked TODO are proposals) |
| Real tattoo photos | put files in `public/work/` and set `image: "/work/01.jpg"` on a work item; they are shown black & white and return to colour on hover |
| Artist portrait | set `artist.portrait` in `content.ts` |
| Booking email / studio location | set `brand.email` / `brand.location`; they appear automatically |
| Logo | `src/assets/logo.jpg` (swap for an SVG when available); crown mark: `src/assets/crown.png` |
| Colours, fonts, spacing | `@theme` block in `src/index.css` |

Without `image`, work cards show generated black-and-white plates (`src/components/Plate.tsx`).
# Soul-studio
