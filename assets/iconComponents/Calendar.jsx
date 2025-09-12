import React from "react";

/**
 * Calendar — auto-generated from SVG
 * Props:
 *  - width, height (numbers) — if only one provided, the other will be computed to keep aspect ratio.
 *  - strokeWidth (number)
 *  - strokeColor (string)
 *  - fillColor (string)
 *  - className (string)
 */
export default function Calendar({
  width,
  height,
  strokeWidth = 2,
  strokeColor = "currentColor",
  fillColor = "none",
  className,
}) {
  // original viewBox: 0 0 11 12
  const aspectRatio = 11 / 12;

  let computedWidth = 11;
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
      viewBox="0 0 11 12"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden={className ? "false" : "true"}
    >
      <path d="M3.57143 1V3.05714M7.68571 1V3.05714M1 5.11429H10.2571M3.57143 7.17143H3.57657M5.62857 7.17143H5.63371M7.68571 7.17143H7.69086M3.57143 9.22857H3.57657M5.62857 9.22857H5.63371M7.68571 9.22857H7.69086M2.02857 2.02857H9.22857C9.79664 2.02857 10.2571 2.48908 10.2571 3.05714V10.2571C10.2571 10.8252 9.79664 11.2857 9.22857 11.2857H2.02857C1.46051 11.2857 1 10.8252 1 10.2571V3.05714C1 2.48908 1.46051 2.02857 2.02857 2.02857Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
