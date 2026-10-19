import type { CSSProperties } from "react";
import crown from "../assets/crown.png";

/** The crown from the logo, rendered as a mask so it follows currentColor. */
export default function CrownMark({ className = "w-8" }: { className?: string }) {
  const style = { "--crown": `url(${crown})` } as CSSProperties;
  return <span className={`crown-mask inline-block ${className}`} style={style} aria-hidden="true" />;
}
