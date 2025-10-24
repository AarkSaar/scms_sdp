import React from 'react';

/**
 * SendIcon — auto-generated from SVG
 */
export default function SendIcon({
  width,
  height,
  strokeWidth = 1.26316,
  strokeColor = 'currentColor',
  fillColor = 'none',
  className,
  ...props
}) {
  // viewBox: 0 0 14 13 -> aspectRatio = 14/13
  const aspectRatio = 14 / 13;
  let computedWidth = 14;
  let computedHeight = 13;

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
      viewBox='0 0 14 13'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      role='img'
      aria-hidden={className ? 'false' : 'true'}
      {...props}
    >
      <path
        d='M2.52633 6.3158L0.631592 0.631592L12.6316 6.3158M2.52633 6.3158L0.631592 12L12.6316 6.3158M2.52633 6.3158H12.6316'
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
        fill={fillColor}
      />
    </svg>
  );
}
