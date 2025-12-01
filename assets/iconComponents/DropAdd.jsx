import React from 'react';

/**
 * DropAdd — auto-generated from SVG
 * Icon type: stroke
 * 
 * Props:
 *  - width, height (numbers) — if only one provided, computed to keep aspect ratio
 *  - strokeWidth (number) — default: 2
 *  - strokeColor (string) — default: "currentColor"
 *  - fillColor (string) — default: "none"
 *  - className (string) — for Tailwind classes (text-* for color, w-* h-* for size)
 */
export default function DropAdd({
  width,
  height,
  strokeWidth = 2,
  strokeColor = 'currentColor',
  fillColor = 'none',
  className,
  ...props
}) {
  const aspectRatio = 9 / 11;

  let computedWidth = 9;
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
      viewBox="0 0 9 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden="true"
      {...props}
    >
      <path d="M2.94442 6.30612H6.20973M4.57707 4.67347V7.93878M7.84238 6.30612C7.84238 7.17214 7.49836 8.00268 6.88599 8.61504C6.27363 9.22741 5.44309 9.57143 4.57707 9.57143C3.71106 9.57143 2.88052 9.22741 2.26815 8.61504C1.65579 8.00268 1.31177 7.17214 1.31177 6.30612C1.37672 5.11108 1.81982 3.9676 2.57707 3.04082C2.69136 2.88571 2.80973 2.73878 2.92809 2.6C3.4205 2.01067 3.97317 1.47442 4.57707 1C4.57707 1 7.84238 3.44898 7.84238 6.30612Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeMiterlimit="10"/>
    </svg>
  );
}
