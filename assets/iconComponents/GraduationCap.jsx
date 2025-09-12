import React from "react";

/**
 * GraduationCap — auto-generated from SVG
 * Props:
 *  - width, height (numbers) — if only one provided, the other will be computed to keep aspect ratio.
 *  - strokeWidth (number)
 *  - strokeColor (string)
 *  - fillColor (string)
 *  - className (string)
 */
export default function GraduationCap({
  width,
  height,
  strokeWidth = 2,
  strokeColor = "currentColor",
  fillColor = "none",
  className,
}) {
  // original viewBox: 0 0 11 10
  const aspectRatio = 11 / 10;

  let computedWidth = 11;
  let computedHeight = 10;

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
      viewBox="0 0 11 10"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden={className ? "false" : "true"}
    >
      <path d="M9.57143 3.35692V5.49977M2.28571 4.64263V6.83906C2.28571 8.08963 4.29743 8.71406 5.28571 8.71406C6.274 8.71406 8.28571 8.08963 8.28571 6.83906V4.64263M6.23586 1.21406C5.93894 1.07312 5.61438 1 5.28571 1C4.95704 1 4.63249 1.07312 4.33557 1.21406L1.468 2.55849C0.844 2.85077 0.844 3.86306 1.468 4.15535L4.33514 5.49977C4.63212 5.64078 4.95675 5.71394 5.2855 5.71394C5.61425 5.71394 5.93888 5.64078 6.23586 5.49977L9.10343 4.15535C9.72743 3.86306 9.72743 2.85077 9.10343 2.55849L6.23586 1.21406Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
