import React from 'react';

/**
 * People — auto-generated from SVG
 * Icon type: stroke
 * 
 * Props:
 *  - width, height (numbers) — if only one provided, computed to keep aspect ratio
 *  - strokeWidth (number) — default: 2
 *  - strokeColor (string) — default: "currentColor"
 *  - fillColor (string) — default: "none"
 *  - className (string) — for Tailwind classes (text-* for color, w-* h-* for size)
 */
export default function People({
  width,
  height,
  strokeWidth = 2,
  strokeColor = 'currentColor',
  fillColor = 'none',
  className,
  ...props
}) {
  const aspectRatio = 11 / 10;

  let computedWidth = 11;
  let computedHeight = 10;

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
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden="true"
      {...props}
    >
      <path d="M6.6044 4.2967C7.51475 4.2967 8.25275 3.55871 8.25275 2.64835C8.25275 1.73799 7.51475 1 6.6044 1M8.25275 8.91215H9.57143V8.55466C9.56615 8.05211 9.43363 7.55905 9.18618 7.12165C8.93873 6.68418 8.58446 6.31661 8.15642 6.05321C7.87976 5.88293 7.57804 5.75979 7.26374 5.68758M3.96703 4.2967C4.87739 4.2967 5.61538 3.55871 5.61538 2.64835C5.61538 1.73799 4.87739 1 3.96703 1C3.05667 1 2.31868 1.73799 2.31868 2.64835C2.31868 3.55871 3.05667 4.2967 3.96703 4.2967ZM1 8.91209H6.93407V8.55466C6.92882 8.05211 6.79628 7.55905 6.54883 7.12165C6.30138 6.68418 5.9471 6.31659 5.51907 6.05319C5.09104 5.78979 4.60324 5.63917 4.10122 5.6154C4.05647 5.61329 4.01172 5.61218 3.96703 5.61209C3.92234 5.61218 3.8776 5.61329 3.83284 5.6154C3.33083 5.63917 2.84302 5.78979 2.41499 6.05319C1.98697 6.31659 1.63268 6.68418 1.38523 7.12165C1.13779 7.55905 1.00525 8.05211 1 8.55466V8.91209Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
