import React from 'react';

/**
 * LockIcon — auto-generated from SVG
 */
export default function LockIcon({ width, height, fillColor = '#8E8E8E', className, ...props }) {
  // Original viewBox: 0 0 12 14 -> aspectRatio = 12/14
  const aspectRatio = 12 / 14;
  let computedWidth = 12;
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
      viewBox='0 0 12 14'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      role='img'
      aria-hidden={className ? 'false' : 'true'}
      {...props}
    >
      <path
        d='M1.125 14C0.815625 14 0.550811 13.9021 0.330563 13.7062C0.110186 13.5104 0 13.275 0 13V5.76667C0 5.49167 0.110186 5.25623 0.330563 5.06033C0.550811 4.86457 0.815625 4.76667 1.125 4.76667H2.4375V3.16667C2.4375 2.29056 2.78505 1.54378 3.48019 0.926333C4.17518 0.308777 5.01581 0 6.00206 0C6.9882 0 7.82813 0.308777 8.52188 0.926333C9.21563 1.54378 9.5625 2.29056 9.5625 3.16667V4.76667H10.875C11.1844 4.76667 11.4492 4.86457 11.6696 5.06033C11.8899 5.25623 12 5.49167 12 5.76667V13C12 13.275 11.8899 13.5104 11.6696 13.7062C11.4492 13.9021 11.1844 14 10.875 14H1.125ZM6.00319 10.6667C6.40106 10.6667 6.74063 10.5443 7.02188 10.2995C7.30313 10.0547 7.44375 9.76043 7.44375 9.41667C7.44375 9.08333 7.30207 8.78057 7.01869 8.50833C6.7353 8.2361 6.39469 8.1 5.99681 8.1C5.59894 8.1 5.25937 8.2361 4.97812 8.50833C4.69687 8.78057 4.55625 9.0861 4.55625 9.425C4.55625 9.7639 4.69793 10.0556 4.98131 10.3C5.2647 10.5444 5.60531 10.6667 6.00319 10.6667ZM3.5625 4.76667H8.4375V3.16667C8.4375 2.56478 8.20076 2.05322 7.72725 1.632C7.25374 1.21067 6.67875 1 6.00225 1C5.32575 1 4.75001 1.21067 4.275 1.632C3.79999 2.05322 3.5625 2.56478 3.5625 3.16667V4.76667Z'
        fill={fillColor}
      />
    </svg>
  );
}
