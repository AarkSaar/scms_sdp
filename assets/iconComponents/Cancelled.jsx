import React from 'react';

/**
 * Cancelled — auto-generated from SVG
 */
export default function Cancelled({
  width,
  height,
  strokeWidth = 1.28571,
  strokeColor = 'currentColor',
  fillColor = 'none',
  className,
  ...props
}) {
  // viewBox: 0 0 14 14
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
        d='M5.6162 13C5.03186 12.865 4.47066 12.6418 3.95125 12.3376M8.3016 1C9.63635 1.31041 10.8281 2.07305 11.6816 3.16307C12.5352 4.25308 13 5.60589 13 7C13 8.39411 12.5352 9.74691 11.6816 10.8369C10.8281 11.927 9.63635 12.6896 8.3016 13M1.97681 10.4816C1.6106 9.93982 1.33245 9.34153 1.15307 8.70969M1 5.97459C1.10742 5.32517 1.31419 4.70992 1.60421 4.14595L1.71767 3.93745M3.53972 1.92697C4.16787 1.48666 4.87256 1.17207 5.6162 1M8.3016 8.36721L5.6162 5.63279M5.6162 8.36721L8.3016 5.63279'
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
        fill={fillColor}
      />
    </svg>
  );
}
