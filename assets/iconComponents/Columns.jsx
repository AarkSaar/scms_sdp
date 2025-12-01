import React from 'react';

/**
 * Columns — auto-generated from SVG
 * Icon type: stroke
 * 
 * Props:
 *  - width, height (numbers) — if only one provided, computed to keep aspect ratio
 *  - strokeWidth (number) — default: 2
 *  - strokeColor (string) — default: "currentColor"
 *  - fillColor (string) — default: "none"
 *  - className (string) — for Tailwind classes (text-* for color, w-* h-* for size)
 */
export default function Columns({
  width,
  height,
  strokeWidth = 2,
  strokeColor = 'currentColor',
  fillColor = 'none',
  className,
  ...props
}) {
  const aspectRatio = 10 / 12;

  let computedWidth = 10;
  let computedHeight = 12;

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
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden="true"
      {...props}
    >
      <path d="M1.48889 0.666992H2.82288C3.19081 0.667168 3.48872 0.965076 3.48889 1.33301V10.667C3.48872 11.0349 3.19081 11.3328 2.82288 11.333H1.48889C1.12096 11.3328 0.823052 11.0349 0.822876 10.667V1.33301C0.823052 0.965076 1.12096 0.667168 1.48889 0.666992ZM6.82288 0.666992H8.15588C8.52396 0.666992 8.8227 0.964968 8.82288 1.33301V10.667C8.8227 11.035 8.52396 11.333 8.15588 11.333H6.82288C6.45479 11.333 6.15606 11.035 6.15588 10.667V1.33301C6.15606 0.964968 6.45479 0.666992 6.82288 0.666992Z" stroke={strokeColor} strokeWidth={strokeWidth}/>
    </svg>
  );
}
