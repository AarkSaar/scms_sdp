import React from "react";

/**
 * Ball — auto-generated from SVG
 * Props:
 *  - width, height (numbers) — if only one provided, the other will be computed to keep aspect ratio.
 *  - strokeWidth (number)
 *  - strokeColor (string)
 *  - fillColor (string)
 *  - className (string)
 */
export default function Ball({
  width,
  height,
  strokeWidth = 2,
  strokeColor = "currentColor",
  fillColor = "none",
  className,
}) {
  // original viewBox: 0 0 11 11
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
      viewBox="0 0 11 11"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden={className ? "false" : "true"}
    >
      <path d="M3.39862 1.51689C4.49772 2.3506 5.38876 3.42758 6.00184 4.66339C6.61493 5.89919 6.9334 7.26023 6.93228 8.63975C6.93228 8.86708 6.92396 9.09192 6.90731 9.31429M8.64098 2.43441C6.97821 4.02793 4.76329 4.91616 2.46023 4.91304C2.0323 4.91294 1.6049 4.88268 1.18123 4.82248M2.10955 7.9805C3.77365 6.37565 5.99631 5.48033 8.30818 5.4836C8.77952 5.48626 9.25015 5.52062 9.71688 5.58646M1.15588 5.28571C1.15588 5.84852 1.26674 6.40582 1.48211 6.92579C1.69749 7.44575 2.01318 7.91821 2.41114 8.31617C2.80911 8.71414 3.28156 9.02982 3.80153 9.2452C4.32149 9.46057 4.87879 9.57143 5.4416 9.57143C6.00441 9.57143 6.5617 9.46057 7.08167 9.2452C7.60164 9.02982 8.07409 8.71414 8.47205 8.31617C8.87002 7.91821 9.1857 7.44575 9.40108 6.92579C9.61646 6.40582 9.72731 5.84852 9.72731 5.28571C9.72731 4.72291 9.61646 4.16561 9.40108 3.64564C9.1857 3.12568 8.87002 2.65322 8.47205 2.25526C8.07409 1.85729 7.60164 1.54161 7.08167 1.32623C6.5617 1.11085 6.00441 1 5.4416 1C4.87879 1 4.32149 1.11085 3.80153 1.32623C3.28156 1.54161 2.80911 1.85729 2.41114 2.25526C2.01318 2.65322 1.69749 3.12568 1.48211 3.64564C1.26674 4.16561 1.15588 4.72291 1.15588 5.28571Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
