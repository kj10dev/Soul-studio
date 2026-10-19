import crown from "../assets/crown.png";
import type { PlateVariant } from "../data/content";

/**
 * Generated black-and-white "plates" used wherever tattoo photography goes.
 * They are placeholders: pass a real photo to the card and this is never rendered.
 */
export default function Plate({ variant, className = "" }: { variant: PlateVariant; className?: string }) {
  const W = 400;
  const H = 500;
  let art: React.ReactNode = null;

  if (variant === "rings") {
    art = (
      <g fill="none" stroke="#fff" strokeWidth="2.5">
        {Array.from({ length: 14 }).map((_, i) => (
          <circle key={i} cx="200" cy="250" r={22 + i * 20} />
        ))}
        <circle cx="200" cy="250" r="12" fill="#fff" />
      </g>
    );
  } else if (variant === "barbs") {
    art = (
      <g stroke="#fff" strokeWidth="2.5" fill="#fff">
        {Array.from({ length: 34 }).map((_, i) => (
          <line key={i} x1={-200 + i * 22} y1="0" x2={-200 + i * 22 + 420} y2={H} />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <polygon key={i} points={`${30 + i * 42},${460 - i * 38} ${58 + i * 42},${398 - i * 38} ${72 + i * 42},${470 - i * 38}`} />
        ))}
        <circle cx="200" cy="250" r="86" fill="#000" stroke="#fff" strokeWidth="6" />
      </g>
    );
  } else if (variant === "stars") {
    const star = (cx: number, cy: number, s: number) =>
      `M${cx},${cy - s} Q${cx},${cy} ${cx + s},${cy} Q${cx},${cy} ${cx},${cy + s} Q${cx},${cy} ${cx - s},${cy} Q${cx},${cy} ${cx},${cy - s}Z`;
    art = (
      <g fill="#fff">
        {Array.from({ length: 6 }).flatMap((_, r) =>
          Array.from({ length: 5 }).map((__, c) => {
            const s = 10 + ((r * 5 + c) % 4) * 9;
            return <path key={`${r}-${c}`} d={star(40 + c * 80 + (r % 2) * 30, 50 + r * 80, s)} />;
          }),
        )}
      </g>
    );
  } else if (variant === "waves") {
    art = (
      <g fill="none" stroke="#fff" strokeWidth="2.5">
        {Array.from({ length: 20 }).map((_, i) => {
          const y = 20 + i * 24;
          const a = 14 + (i % 5) * 6;
          return <path key={i} d={`M-20 ${y} Q80 ${y - a} 180 ${y} T380 ${y} T580 ${y}`} />;
        })}
      </g>
    );
  } else if (variant === "dots") {
    art = (
      <g fill="#fff">
        {Array.from({ length: 26 }).flatMap((_, r) =>
          Array.from({ length: 21 }).map((__, c) => {
            const x = c * 20;
            const y = r * 20;
            const d = Math.hypot(x - 200, y - 250);
            const rad = Math.max(0, 9 - d / 26);
            return rad > 0.6 ? <circle key={`${r}-${c}`} cx={x} cy={y} r={rad} /> : null;
          }),
        )}
      </g>
    );
  } else {
    art = (
      <>
        <defs>
          <pattern id="crowns" width="80" height="80" patternUnits="userSpaceOnUse">
            <image href={crown} x="14" y="14" width="52" height="48" />
          </pattern>
        </defs>
        <rect width={W} height={H} fill="url(#crowns)" />
      </>
    );
  }

  return (
    <svg
      className={`h-full w-full ${className}`}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect width={W} height={H} fill="#000" />
      {art}
    </svg>
  );
}
