import React from "react";

/**
 * Logo — auto-generated from SVG
 * Props:
 *  - width, height (numbers) — if only one provided, the other will be computed to keep aspect ratio.
 *  - strokeWidth (number)
 *  - strokeColor (string)
 *  - fillColor (string)
 *  - className (string)
 */
export default function Logo({
  width,
  height,
  strokeWidth = 2,
  strokeColor = "currentColor",
  fillColor = "none",
  className,
}) {
  // original viewBox: 0 0 30 30
  const aspectRatio = 30 / 30;

  let computedWidth = 30;
  let computedHeight = 30;

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
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden={className ? "false" : "true"}
    >
      <rect x="1.31177" y="1" width="28" height="28" rx="8.4" fill={fillColor}/>
      <rect x="1.31177" y="1" width="28" height="28" rx="8.4" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M15.3055 10V15M15.3055 20H15.318" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
      <linearGradient id="paint0_linear_118_6826" x1="15.3118" y1="10" x2="15.3118" y2="20" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FD84F1"/>
      <stop offset="1" stop-color="#3BD3EF"/>
      </linearGradient>
      </defs>
    </svg>
  );
}
