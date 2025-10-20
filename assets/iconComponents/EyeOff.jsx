import React from 'react';

/**
 * EyeOff — auto-generated from SVG
 */
export default function EyeOff({
  width,
  height,
  strokeWidth = 2,
  strokeColor = 'currentColor',
  fillColor = 'none',
  className,
  ...props
}) {
  // viewBox: 0 0 22 22 -> aspectRatio = 22/22
  const aspectRatio = 22 / 22;
  let computedWidth = 22;
  let computedHeight = 22;

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
      viewBox='0 0 22 22'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      role='img'
      aria-hidden={className ? 'false' : 'true'}
      {...props}
    >
      <path
        d='M9.73351 4.076C12.0629 3.7984 14.4191 4.29082 16.4424 5.47805C18.4656 6.66528 20.0447 8.48208 20.9385 10.651C21.0218 10.8755 21.0218 11.1225 20.9385 11.347C20.571 12.238 20.0853 13.0755 19.4945 13.837M13.0845 13.158C12.5187 13.7045 11.7609 14.0069 10.9743 14C10.1877 13.9932 9.43527 13.6777 8.87905 13.1215C8.32282 12.5652 8.00732 11.8128 8.00048 11.0262C7.99365 10.2396 8.29603 9.48181 8.84251 8.916M16.4795 16.499C15.153 17.2848 13.673 17.776 12.1399 17.9394C10.6068 18.1028 9.05646 17.9345 7.59414 17.4459C6.13182 16.9573 4.7917 16.1599 3.66472 15.1077C2.53773 14.0556 1.65026 12.7734 1.06251 11.348C0.979165 11.1235 0.979165 10.8765 1.06251 10.652C1.94914 8.50186 3.50918 6.69725 5.50851 5.509M1.00051 1L21.0005 21'
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
        fill={fillColor}
      />
    </svg>
  );
}
