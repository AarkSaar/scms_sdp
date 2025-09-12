import React from "react";

/**
 * More — auto-generated from SVG
 * Props:
 *  - width, height (numbers) — if only one provided, the other will be computed to keep aspect ratio.
 *  - strokeWidth (number)
 *  - strokeColor (string)
 *  - fillColor (string)
 *  - className (string)
 */
export default function More({
  width,
  height,
  strokeWidth = 2,
  strokeColor = "currentColor",
  fillColor = "none",
  className,
}) {
  // original viewBox: 0 0 11 3
  const aspectRatio = 11 / 3;

  let computedWidth = 11;
  let computedHeight = 3;

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
      viewBox="0 0 11 3"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden={className ? "false" : "true"}
    >
      <path d="M5.28571 2.07143C5.58158 2.07143 5.82143 1.83158 5.82143 1.53571C5.82143 1.23985 5.58158 1 5.28571 1C4.98985 1 4.75 1.23985 4.75 1.53571C4.75 1.83158 4.98985 2.07143 5.28571 2.07143Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.03571 2.07143C9.33158 2.07143 9.57143 1.83158 9.57143 1.53571C9.57143 1.23985 9.33158 1 9.03571 1C8.73985 1 8.5 1.23985 8.5 1.53571C8.5 1.83158 8.73985 2.07143 9.03571 2.07143Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.53571 2.07143C1.83158 2.07143 2.07143 1.83158 2.07143 1.53571C2.07143 1.23985 1.83158 1 1.53571 1C1.23985 1 1 1.23985 1 1.53571C1 1.83158 1.23985 2.07143 1.53571 2.07143Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
