import React from 'react';

/**
 * OpenPanel — auto-generated from SVG
 * Icon type: stroke
 * 
 * Props:
 *  - width, height (numbers) — if only one provided, computed to keep aspect ratio
 *  - strokeWidth (number) — default: 2
 *  - strokeColor (string) — default: "currentColor"
 *  - fillColor (string) — default: "none"
 *  - className (string) — for Tailwind classes (text-* for color, w-* h-* for size)
 */
export default function OpenPanel({
  width,
  height,
  strokeWidth = 2,
  strokeColor = 'currentColor',
  fillColor = 'none',
  className,
  ...props
}) {
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden="true"
      {...props}
    >
      <path d="M3.14286 4V8.28571M4.42857 11.2857H7.85714C9.75069 11.2857 11.2857 9.75069 11.2857 7.85714V4.42857C11.2857 2.53502 9.75069 1 7.85714 1H4.42857C2.53502 1 1 2.53502 1 4.42857V7.85714C1 9.75069 2.53502 11.2857 4.42857 11.2857Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  );
}
