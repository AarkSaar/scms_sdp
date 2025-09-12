import React from "react";

/**
 * Filter2 — auto-generated from SVG
 * Props:
 *  - width, height (numbers) — if only one provided, the other will be computed to keep aspect ratio.
 *  - strokeWidth (number)
 *  - strokeColor (string)
 *  - fillColor (string)
 *  - className (string)
 */
export default function Filter2({
  width,
  height,
  strokeWidth = 2,
  strokeColor = "currentColor",
  fillColor = "none",
  className,
}) {
  // original viewBox: 0 0 12 12
  const aspectRatio = 12 / 12;

  let computedWidth = 12;
  let computedHeight = 12;

  if (width != null && height == null) {
    computedWidth = width;
    computedHeight = Math.round(width / aspectRatio);
  } else if (height != null && width == null) {
    computedHeight = height;
    computedWidth = Math.round(height * aspectRatio);
  } else if (width != null && height != null) {
    computedWidth = width;
    computedHeight = height;
  }

  return (
    <svg
      width={computedWidth}
      height={computedHeight}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden={className ? "false" : "true"}
    >
      <path d="M11.2857 2.92857H5.5M7.42857 9.35714H1.64286M7.42857 9.35714C7.42857 10.4223 8.29202 11.2857 9.35714 11.2857C10.4223 11.2857 11.2857 10.4223 11.2857 9.35714C11.2857 8.29202 10.4223 7.42857 9.35714 7.42857C8.29202 7.42857 7.42857 8.29202 7.42857 9.35714ZM4.85714 2.92857C4.85714 3.99369 3.99369 4.85714 2.92857 4.85714C1.86345 4.85714 1 3.99369 1 2.92857C1 1.86345 1.86345 1 2.92857 1C3.99369 1 4.85714 1.86345 4.85714 2.92857Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
