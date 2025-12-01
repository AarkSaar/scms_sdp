import React from 'react';

/**
 * UserLine — auto-generated from SVG
 * Icon type: stroke
 * 
 * Props:
 *  - width, height (numbers) — if only one provided, computed to keep aspect ratio
 *  - strokeWidth (number) — default: 2
 *  - strokeColor (string) — default: "currentColor"
 *  - fillColor (string) — default: "none"
 *  - className (string) — for Tailwind classes (text-* for color, w-* h-* for size)
 */
export default function UserLine({
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
      <path d="M4.5625 5.5625C5.94321 5.5625 7.0625 4.44321 7.0625 3.0625C7.0625 1.68179 5.94321 0.5625 4.5625 0.5625C3.18179 0.5625 2.0625 1.68179 2.0625 3.0625C2.0625 4.44321 3.18179 5.5625 4.5625 5.5625ZM4.5625 5.5625C5.62337 5.5625 6.64078 5.98393 7.39093 6.73407C8.14107 7.48422 8.5625 8.50163 8.5625 9.5625M4.5625 5.5625C3.50163 5.5625 2.48422 5.98393 1.73407 6.73407C0.983927 7.48422 0.5625 8.50163 0.5625 9.5625" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
