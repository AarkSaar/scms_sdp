import React from 'react';

/**
 * AddOutline — auto-generated from SVG
 */
export default function AddOutline({
  width,
  height,
  strokeWidth = 1.02857,
  strokeColor = 'currentColor',
  fillColor = 'none',
  className,
  ...props
}) {
  // viewBox: 0 0 11 11 -> aspectRatio = 11/11
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
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      role='img'
      aria-hidden={className ? 'false' : 'true'}
      {...props}
    >
      <path
        d='M4.20388 1C3.83621 1 3.53814 1.29807 3.53814 1.66574V3.53818H1.66574C1.29807 3.53818 1 3.83623 1 4.20392V6.36758C1 6.73526 1.29807 7.03333 1.66574 7.03333H3.53814V8.90569C3.53814 9.27336 3.83621 9.57143 4.20388 9.57143H6.36754C6.73522 9.57143 7.03329 9.27336 7.03329 8.90569V7.03333H8.90569C9.27336 7.03333 9.57143 6.73526 9.57143 6.36758V4.20392C9.57143 3.83623 9.27336 3.53818 8.90569 3.53818H7.03329V1.66574C7.03329 1.29807 6.73522 1 6.36754 1H4.20388Z'
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
        fill={fillColor}
      />
    </svg>
  );
}
