import React from 'react';

/**
 * SmileyPlus — auto-generated from SVG
 * Icon type: stroke
 * * Props:
 * - width, height (numbers) — if only one provided, computed to keep aspect ratio
 * - strokeWidth (number) — default: 2
 * - strokeColor (string) — default: "currentColor"
 * - fillColor (string) — default: "none"
 * - className (string) — for Tailwind classes (text-* for color, w-* h-* for size)
 */
export default function SmileyPlus({
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
      viewBox='0 0 11 11'
      fill={fillColor}
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      role='img'
      aria-hidden='true'
      {...props}
    >
      <path
        d='M10.4999 5.02506V5.52506C10.4949 6.53422 10.1846 7.51823 9.6098 8.34773C9.03503 9.17723 8.2227 9.81339 7.27962 10.1726C6.33653 10.5318 5.30682 10.5972 4.32587 10.3602C3.34492 10.1232 2.45863 9.59493 1.78353 8.84482C1.10843 8.09471 0.676116 7.15787 0.543418 6.15746C0.41072 5.15705 0.583852 4.1399 1.04005 3.23973C1.49626 2.33955 2.21417 1.5985 3.09942 1.11398C3.98468 0.629458 4.99582 0.424156 5.99994 0.52506M3.49994 6.52506C3.49994 6.52506 4.24994 7.52506 5.49994 7.52506C6.74994 7.52506 7.49994 6.52506 7.49994 6.52506M3.99994 4.02506H4.00494M6.99994 4.02506H7.00494M7.49994 2.02506H10.4999M8.99994 0.52506V3.52506'
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
