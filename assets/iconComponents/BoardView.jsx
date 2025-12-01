import React from 'react';

/**
 * BoardView — auto-generated from SVG
 * Icon type: stroke
 * 
 * Props:
 *  - width, height (numbers) — if only one provided, computed to keep aspect ratio
 *  - strokeWidth (number) — default: 2
 *  - strokeColor (string) — default: "currentColor"
 *  - fillColor (string) — default: "none"
 *  - className (string) — for Tailwind classes (text-* for color, w-* h-* for size)
 */
export default function BoardView({
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
      <path d="M1.15588 1H4.37017M6.51303 1H9.72731M1.15588 4.21429C1.15588 3.93013 1.26877 3.6576 1.4697 3.45667C1.67063 3.25574 1.94315 3.14286 2.22731 3.14286H3.29874C3.5829 3.14286 3.85542 3.25574 4.05635 3.45667C4.25729 3.6576 4.37017 3.93013 4.37017 4.21429V8.5C4.37017 8.78416 4.25729 9.05668 4.05635 9.25761C3.85542 9.45855 3.5829 9.57143 3.29874 9.57143H2.22731C1.94315 9.57143 1.67063 9.45855 1.4697 9.25761C1.26877 9.05668 1.15588 8.78416 1.15588 8.5V4.21429ZM6.51303 4.21429C6.51303 3.93013 6.62591 3.6576 6.82684 3.45667C7.02777 3.25574 7.30029 3.14286 7.58445 3.14286H8.65588C8.94004 3.14286 9.21257 3.25574 9.4135 3.45667C9.61443 3.6576 9.72731 3.93013 9.72731 4.21429V5.28571C9.72731 5.56987 9.61443 5.8424 9.4135 6.04333C9.21257 6.24426 8.94004 6.35714 8.65588 6.35714H7.58445C7.30029 6.35714 7.02777 6.24426 6.82684 6.04333C6.62591 5.8424 6.51303 5.56987 6.51303 5.28571V4.21429Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
