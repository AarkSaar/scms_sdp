import React from 'react';

/**
 * Logo — React SVG component
 * Props:
 *  - width, height (numbers) — if only one provided, the other will be computed to keep aspect ratio.
 *  - strokeWidth (number)
 *  - className (string)
 */
export default function Logo({ width, height, strokeWidth = 1.82143, className }) {
  // original viewBox: 0 0 70 70
  const aspectRatio = 70 / 70;

  let computedWidth = 70;
  let computedHeight = 70;

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
      viewBox='0 0 70 70'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      role='img'
      aria-hidden={!className}
    >
      <rect x='0.910767' y='0.910645' width='68' height='68' rx='20.4' fill='#0A0A0A' />
      <rect
        x='0.910767'
        y='0.910645'
        width='68'
        height='68'
        rx='20.4'
        stroke='#3F3F3F'
        strokeWidth={strokeWidth}
        strokeLinecap='round'
      />
      <path
        d='M34.8956 22.7676V34.9104M34.8956 47.0533H34.926'
        stroke='url(#paint0_linear_481_5255)'
        strokeWidth='7.28571'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <defs>
        <linearGradient
          id='paint0_linear_481_5255'
          x1='34.9108'
          y1='22.7676'
          x2='34.9108'
          y2='47.0533'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FD84F1' />
          <stop offset='1' stopColor='#3BD3EF' />
        </linearGradient>
      </defs>
    </svg>
  );
}
