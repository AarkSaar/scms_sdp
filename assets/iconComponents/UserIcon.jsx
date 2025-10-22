import React from 'react';

/**
 * UserFill — auto-generated from SVG
 */
export default function UserFill({ width, height, fillColor = '#000000', className, ...props }) {
  // Original viewBox: 0 0 11 14 -> aspectRatio = 11/14
  const aspectRatio = 11 / 14;
  let computedWidth = 11;
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
      viewBox='0 0 11 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      role='img'
      aria-hidden={className ? 'false' : 'true'}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.49941 3C2.49941 2.20435 2.81548 1.44129 3.37809 0.87868C3.9407 0.31607 4.70376 0 5.49941 0C6.29506 0 7.05812 0.31607 7.62073 0.87868C8.18334 1.44129 8.49941 2.20435 8.49941 3C8.49941 3.79565 8.18334 4.55871 7.62073 5.12132C7.05812 5.68393 6.29506 6 5.49941 6C4.70376 6 3.9407 5.68393 3.37809 5.12132C2.81548 4.55871 2.49941 3.79565 2.49941 3ZM7.96025e-05 12.4033C0.0225598 10.9596 0.61184 9.5827 1.64072 8.56972C2.6696 7.55674 4.05555 6.98897 5.49941 6.98897C6.94327 6.98897 8.32923 7.55674 9.35811 8.56972C10.387 9.5827 10.9763 10.9596 10.9987 12.4033C11.0005 12.5005 10.9738 12.5961 10.9221 12.6784C10.8704 12.7607 10.7958 12.8261 10.7074 12.8667C9.07353 13.6158 7.29685 14.0024 5.49941 14C3.64208 14 1.87741 13.5947 0.291413 12.8667C0.20307 12.8261 0.128463 12.7607 0.0767209 12.6784C0.0249788 12.5961 -0.00165456 12.5005 7.96025e-05 12.4033Z'
        fill={fillColor}
      />
    </svg>
  );
}
