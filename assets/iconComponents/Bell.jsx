import React from "react";

/**
 * Bell — auto-generated from SVG
 * Props:
 *  - width, height (numbers) — if only one provided, the other will be computed to keep aspect ratio.
 *  - strokeWidth (number)
 *  - strokeColor (string)
 *  - fillColor (string)
 *  - className (string)
 */
export default function Bell({
  width,
  height,
  strokeWidth = 2,
  strokeColor = "currentColor",
  fillColor = "none",
  className,
}) {
  // original viewBox: 0 0 12 13
  const aspectRatio = 12 / 13;

  let computedWidth = 12;
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
      viewBox="0 0 12 13"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden={className ? "false" : "true"}
    >
      <path d="M4.85055 11.022C4.93884 11.1826 5.06863 11.3165 5.22637 11.4098C5.38411 11.5031 5.564 11.5523 5.74725 11.5523C5.93051 11.5523 6.1104 11.5031 6.26814 11.4098C6.42587 11.3165 6.55567 11.1826 6.64396 11.022M2.58242 4.16483C2.58242 3.32547 2.91585 2.52048 3.50938 1.92696C4.1029 1.33344 4.90789 1 5.74725 1C6.58662 1 7.39161 1.33344 7.98513 1.92696C8.57865 2.52048 8.91209 3.32547 8.91209 4.16483C8.91209 7.85714 10.4945 8.91209 10.4945 8.91209H1C1 8.91209 2.58242 7.85714 2.58242 4.16483Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
