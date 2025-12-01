import React from 'react';

/**
 * Bus — auto-generated from SVG
 * Icon type: stroke
 * 
 * Props:
 *  - width, height (numbers) — if only one provided, computed to keep aspect ratio
 *  - strokeWidth (number) — default: 2
 *  - strokeColor (string) — default: "currentColor"
 *  - fillColor (string) — default: "none"
 *  - className (string) — for Tailwind classes (text-* for color, w-* h-* for size)
 */
export default function Bus({
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
      <path d="M2.26415 8.61905C2.01156 8.61905 1.76932 8.51871 1.59071 8.3401C1.41211 8.1615 1.31177 7.91925 1.31177 7.66667V5.7619M2.26415 8.61905V9.33333C2.26415 9.39648 2.28923 9.45704 2.33389 9.50169C2.37854 9.54634 2.4391 9.57143 2.50224 9.57143C2.56539 9.57143 2.62595 9.54634 2.6706 9.50169C2.71525 9.45704 2.74034 9.39648 2.74034 9.33333V8.61905M2.26415 8.61905H2.74034M1.31177 5.7619V2.90476M1.31177 5.7619H5.12129M2.74034 8.61905H7.50224M7.97843 8.61905C8.23102 8.61905 8.47326 8.51871 8.65187 8.3401C8.83048 8.1615 8.93082 7.91925 8.93082 7.66667V5.7619M7.97843 8.61905V9.33333C7.97843 9.39648 7.95335 9.45704 7.9087 9.50169C7.86405 9.54634 7.80349 9.57143 7.74034 9.57143C7.67719 9.57143 7.61663 9.54634 7.57198 9.50169C7.52733 9.45704 7.50224 9.39648 7.50224 9.33333V8.61905M7.97843 8.61905H7.50224M8.93082 5.7619V2.90476M8.93082 5.7619H5.12129M1.31177 2.90476C1.31177 2.39959 1.51245 1.9151 1.86966 1.55789C2.22687 1.20068 2.71136 1 3.21653 1H7.02605C7.53123 1 8.01571 1.20068 8.37292 1.55789C8.73014 1.9151 8.93082 2.39959 8.93082 2.90476M1.31177 2.90476H5.12129M5.12129 5.7619V2.90476M8.93082 2.90476H5.12129" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
