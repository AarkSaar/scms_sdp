import React from 'react';

/**
 * LockFill — auto-generated from SVG
 * Icon type: fill
 * 
 * Props:
 *  - width, height (numbers) — if only one provided, computed to keep aspect ratio
 *  - strokeWidth (number) — default: 1.5
 *  - strokeColor (string) — default: "none"
 *  - fillColor (string) — default: "currentColor"
 *  - className (string) — for Tailwind classes (text-* for color, w-* h-* for size)
 */
export default function LockFill({
  width,
  height,
  strokeWidth = 1.5,
  strokeColor = 'none',
  fillColor = 'currentColor',
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
      <path d="M1.01303 12C0.777312 12 0.57555 11.9161 0.407741 11.7481C0.239835 11.5803 0.155884 11.3786 0.155884 11.1429V4.94286C0.155884 4.70714 0.239835 4.50534 0.407741 4.33743C0.57555 4.16963 0.777312 4.08571 1.01303 4.08571H2.01303V2.71429C2.01303 1.96333 2.27783 1.32324 2.80746 0.794C3.33697 0.264666 3.97746 0 4.72888 0C5.48023 0 6.12017 0.264666 6.64874 0.794C7.17731 1.32324 7.4416 1.96333 7.4416 2.71429V4.08571H8.4416C8.67731 4.08571 8.87911 4.16963 9.04703 4.33743C9.21483 4.50534 9.29874 4.70714 9.29874 4.94286V11.1429C9.29874 11.3786 9.21483 11.5803 9.04703 11.7481C8.87911 11.9161 8.67731 12 8.4416 12H1.01303ZM4.72974 9.14286C5.03288 9.14286 5.2916 9.03794 5.50588 8.82814C5.72017 8.61834 5.82731 8.36609 5.82731 8.07143C5.82731 7.78571 5.71937 7.5262 5.50346 7.29286C5.28754 7.05951 5.02803 6.94286 4.72488 6.94286C4.42174 6.94286 4.16303 7.05951 3.94874 7.29286C3.73446 7.5262 3.62731 7.78809 3.62731 8.07857C3.62731 8.36906 3.73526 8.61906 3.95117 8.82857C4.16708 9.03809 4.4266 9.14286 4.72974 9.14286ZM2.87017 4.08571H6.58446V2.71429C6.58446 2.19838 6.40408 1.75991 6.04331 1.39886C5.68254 1.03771 5.24446 0.857143 4.72903 0.857143C4.2136 0.857143 3.77494 1.03771 3.41303 1.39886C3.05111 1.75991 2.87017 2.19838 2.87017 2.71429V4.08571Z" fill={fillColor}/>
    </svg>
  );
}
