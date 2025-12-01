import React from 'react';

/**
 * Smiley — auto-generated from SVG
 * Icon type: stroke
 * 
 * Props:
 *  - width, height (numbers) — if only one provided, computed to keep aspect ratio
 *  - strokeWidth (number) — default: 2
 *  - strokeColor (string) — default: "currentColor"
 *  - fillColor (string) — default: "none"
 *  - className (string) — for Tailwind classes (text-* for color, w-* h-* for size)
 */
export default function Smiley({
  width,
  height,
  strokeWidth = 2,
  strokeColor = 'currentColor',
  fillColor = 'none',
  className,
  ...props
}) {
  const aspectRatio = 11 / 11;

  let computedWidth = 11;
  let computedHeight = 11;

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
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden="true"
      {...props}
    >
      <path d="M3.2625 5.9625C3.2625 5.9625 3.9375 6.8625 5.0625 6.8625C6.1875 6.8625 6.8625 5.9625 6.8625 5.9625M3.7125 3.7125H3.717M6.4125 3.7125H6.417M9.5625 5.0625C9.5625 7.54778 7.54778 9.5625 5.0625 9.5625C2.57722 9.5625 0.5625 7.54778 0.5625 5.0625C0.5625 2.57722 2.57722 0.5625 5.0625 0.5625C7.54778 0.5625 9.5625 2.57722 9.5625 5.0625Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
