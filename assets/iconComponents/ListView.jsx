import React from 'react';

/**
 * ListView — auto-generated from SVG
 * Icon type: stroke
 * 
 * Props:
 *  - width, height (numbers) — if only one provided, computed to keep aspect ratio
 *  - strokeWidth (number) — default: 2
 *  - strokeColor (string) — default: "currentColor"
 *  - fillColor (string) — default: "none"
 *  - className (string) — for Tailwind classes (text-* for color, w-* h-* for size)
 */
export default function ListView({
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
      <path d="M5.7619 8.14283H9.57143M5.7619 6.23807H8.14286M5.7619 3.38092H9.57143M5.7619 1.47616H8.14286M1 8.14283C1 8.26912 1.05017 8.39024 1.13947 8.47955C1.22878 8.56885 1.3499 8.61902 1.47619 8.61902H3.38095C3.50725 8.61902 3.62837 8.56885 3.71767 8.47955C3.80697 8.39024 3.85714 8.26912 3.85714 8.14283V6.23807C3.85714 6.11177 3.80697 5.99065 3.71767 5.90135C3.62837 5.81205 3.50725 5.76188 3.38095 5.76188H1.47619C1.3499 5.76188 1.22878 5.81205 1.13947 5.90135C1.05017 5.99065 1 6.11177 1 6.23807V8.14283ZM1 3.38092C1 3.50722 1.05017 3.62834 1.13947 3.71764C1.22878 3.80694 1.3499 3.85711 1.47619 3.85711H3.38095C3.50725 3.85711 3.62837 3.80694 3.71767 3.71764C3.80697 3.62834 3.85714 3.50722 3.85714 3.38092V1.47616C3.85714 1.34987 3.80697 1.22875 3.71767 1.13944C3.62837 1.05014 3.50725 0.99997 3.38095 0.99997H1.47619C1.3499 0.99997 1.22878 1.05014 1.13947 1.13944C1.05017 1.22875 1 1.34987 1 1.47616V3.38092Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
