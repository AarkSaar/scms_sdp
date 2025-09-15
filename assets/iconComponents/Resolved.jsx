import React from 'react';

/**
 * Resolved — auto-generated from SVG
 */
export default function Resolved({
  width,
  height,
  strokeWidth = 1.28571,
  strokeColor = 'currentColor',
  fillColor = 'none',
  className,
  ...props
}) {
  // viewBox 0 0 14 14
  const aspectRatio = 14 / 14;
  let computedWidth = 14;
  let computedHeight = 14;

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
      viewBox='0 0 14 14'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      role='img'
      aria-hidden={className ? 'false' : 'true'}
      {...props}
    >
      <path
        d='M5.92797 13C5.34363 12.865 4.78243 12.6418 4.26302 12.3376M8.61337 1C9.94812 1.31041 11.1398 2.07305 11.9934 3.16307C12.8469 4.25308 13.3118 5.60589 13.3118 7C13.3118 8.39411 12.8469 9.74692 11.9934 10.8369C11.1398 11.927 9.94812 12.6896 8.61337 13M2.28858 10.4816C1.92236 9.93982 1.64422 9.34153 1.46484 8.7097M1.31177 5.97459C1.41918 5.32517 1.62596 4.70992 1.91598 4.14595L2.02944 3.93745M3.85148 1.92697C4.47964 1.48666 5.18433 1.17207 5.92797 1M5.25662 7L6.59932 8.36721L9.28472 5.63279'
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
        fill={fillColor}
      />
    </svg>
  );
}
