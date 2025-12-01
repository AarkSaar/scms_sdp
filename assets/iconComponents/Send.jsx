import React from 'react';

/**
 * Send — auto-generated from SVG
 * Icon type: stroke
 * 
 * Props:
 *  - width, height (numbers) — if only one provided, computed to keep aspect ratio
 *  - strokeWidth (number) — default: 2
 *  - strokeColor (string) — default: "currentColor"
 *  - fillColor (string) — default: "none"
 *  - className (string) — for Tailwind classes (text-* for color, w-* h-* for size)
 */
export default function Send({
  width,
  height,
  strokeWidth = 2,
  strokeColor = 'currentColor',
  fillColor = 'none',
  className,
  ...props
}) {
  const aspectRatio = 14 / 13;

  let computedWidth = 14;
  let computedHeight = 13;

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
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden="true"
      {...props}
    >
      <path d="M3.2065 6.68421L1.31177 1L13.3118 6.68421M3.2065 6.68421L1.31177 12.3684L13.3118 6.68421M3.2065 6.68421H13.3118" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
