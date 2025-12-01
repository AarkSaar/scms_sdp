import React from 'react';

/**
 * Flag — auto-generated from SVG
 * Icon type: fill
 * 
 * Props:
 *  - width, height (numbers) — if only one provided, computed to keep aspect ratio
 *  - strokeWidth (number) — default: 1.5
 *  - strokeColor (string) — default: "none"
 *  - fillColor (string) — default: "currentColor"
 *  - className (string) — for Tailwind classes (text-* for color, w-* h-* for size)
 */
export default function Flag({
  width,
  height,
  strokeWidth = 1.5,
  strokeColor = 'none',
  fillColor = 'currentColor',
  className,
  ...props
}) {
  const aspectRatio = 8 / 9;

  let computedWidth = 8;
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
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden="true"
      {...props}
    >
      <path d="M0.924012 8.57143H0.311768V0H7.65871L5.8832 2.7551L7.65871 5.5102H0.924012V8.57143Z" fill={fillColor}/>
    </svg>
  );
}
