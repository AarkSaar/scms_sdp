// components/icons/Search.jsx
import React from 'react';

/**
 * Search — auto-generated from SVG
 *
 * Props:
 *  - width, height (numbers) — if only one provided, the other will be computed to keep aspect ratio.
 *  - strokeWidth (number)
 *  - strokeColor (string)
 *  - fillColor (string) — included for API parity (not used by this icon)
 *  - className (string)
 */
export default function Search({
  width,
  height,
  strokeWidth = 1.5,
  strokeColor = 'currentColor',
  fillColor = 'none',
  className,
}) {
  // original viewBox: "0 0 16 16"
  const vbw = 16;
  const vbh = 16;
  const aspectRatio = vbw / vbh;

  let computedWidth = vbw;
  let computedHeight = vbh;

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
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      role='img'
      aria-hidden={className ? 'false' : 'true'}
    >
      <path
        d='M15 15L11.6167 11.6167M13.4444 7.22222C13.4444 10.6587 10.6587 13.4444 7.22222 13.4444C3.78578 13.4444 1 10.6587 1 7.22222C1 3.78578 3.78578 1 7.22222 1C10.6587 1 13.4444 3.78578 13.4444 7.22222Z'
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
        fill={fillColor}
      />
    </svg>
  );
}
