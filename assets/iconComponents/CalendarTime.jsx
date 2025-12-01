import React from 'react';

/**
 * CalendarTime — auto-generated from SVG
 * Icon type: stroke
 * 
 * Props:
 *  - width, height (numbers) — if only one provided, computed to keep aspect ratio
 *  - strokeWidth (number) — default: 2
 *  - strokeColor (string) — default: "currentColor"
 *  - fillColor (string) — default: "none"
 *  - className (string) — for Tailwind classes (text-* for color, w-* h-* for size)
 */
export default function CalendarTime({
  width,
  height,
  strokeWidth = 2,
  strokeColor = 'currentColor',
  fillColor = 'none',
  className,
  ...props
}) {
  const aspectRatio = 10 / 11;

  let computedWidth = 10;
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
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden="true"
      {...props}
    >
      <path d="M8.6625 3.0375V2.3625C8.6625 2.12381 8.56768 1.89489 8.3989 1.7261C8.23011 1.55732 8.0012 1.4625 7.7625 1.4625H1.4625C1.22381 1.4625 0.994887 1.55732 0.826104 1.7261C0.657321 1.89489 0.5625 2.12381 0.5625 2.3625V8.6625C0.5625 8.90119 0.657321 9.13011 0.826104 9.2989C0.994887 9.46768 1.22381 9.5625 1.4625 9.5625H3.0375M6.4125 0.5625V2.3625M2.8125 0.5625V2.3625M0.5625 4.1625H2.8125M7.0875 7.5375L6.4125 6.9975V5.9625M9.1125 6.8625C9.1125 8.35367 7.90367 9.5625 6.4125 9.5625C4.92133 9.5625 3.7125 8.35367 3.7125 6.8625C3.7125 5.37133 4.92133 4.1625 6.4125 4.1625C7.90367 4.1625 9.1125 5.37133 9.1125 6.8625Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
