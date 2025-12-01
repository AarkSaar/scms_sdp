import React from 'react';

/**
 * Naira — auto-generated from SVG
 * Icon type: stroke
 * 
 * Props:
 *  - width, height (numbers) — if only one provided, computed to keep aspect ratio
 *  - strokeWidth (number) — default: 2
 *  - strokeColor (string) — default: "currentColor"
 *  - fillColor (string) — default: "none"
 *  - className (string) — for Tailwind classes (text-* for color, w-* h-* for size)
 */
export default function Naira({
  width,
  height,
  strokeWidth = 2,
  strokeColor = 'currentColor',
  fillColor = 'none',
  className,
  ...props
}) {
  const aspectRatio = 11 / 9;

  let computedWidth = 11;
  let computedHeight = 9;

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
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden="true"
      {...props}
    >
      <path d="M2.53626 8.34694V1.64408C2.53621 1.50163 2.58349 1.36319 2.67066 1.25052C2.75783 1.13785 2.87995 1.05732 3.01785 1.02159C3.15575 0.98585 3.30161 0.99693 3.43253 1.05309C3.56345 1.10924 3.67201 1.20729 3.74116 1.33184L7.45381 8.0151C7.52296 8.13965 7.63152 8.2377 7.76243 8.29385C7.89335 8.35001 8.03922 8.36109 8.17712 8.32535C8.31502 8.28962 8.43714 8.20909 8.52431 8.09642C8.61148 7.98374 8.65875 7.84531 8.65871 7.70286V1M1.31177 3.44898H9.8832M1.31177 5.89796H9.8832" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
