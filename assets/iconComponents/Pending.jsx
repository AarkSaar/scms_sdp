import React from 'react';

/**
 * Pending — Stroke-only loading/pending icon
 *
 * Props:
 *  - width, height (numbers) — if only one provided, computed to keep aspect ratio
 *  - strokeWidth (number) — default: 1.5
 *  - strokeColor (string) — default: "currentColor"
 *  - className (string) — for Tailwind classes (text-* for color, w-* h-* for size)
 */
export default function Pending({
  width,
  height,
  strokeWidth = 1.5,
  strokeColor = 'currentColor',
  className,
  ...props
}) {
  const aspectRatio = 16 / 16;

  let computedWidth = 16;
  let computedHeight = 16;

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
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      role='img'
      aria-hidden='true'
      {...props}
    >
      <path
        d='M6.13569 14.7502C5.45396 14.5928 4.79923 14.3323 4.19325 13.9774M9.26866 0.750244C10.8259 1.11238 12.2162 2.00213 13.212 3.27382C14.2078 4.54551 14.7501 6.12378 14.7501 7.75024C14.7501 9.3767 14.2078 10.955 13.212 12.2267C12.2162 13.4984 10.8259 14.3881 9.26866 14.7502M1.88974 11.8121C1.46248 11.18 1.13798 10.482 0.928701 9.74489M0.750122 6.55394C0.875441 5.79627 1.11668 5.07849 1.45504 4.42052L1.58741 4.17727M3.71312 1.83171C4.44597 1.31801 5.26811 0.950998 6.13569 0.750244'
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
