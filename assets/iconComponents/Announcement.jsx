import React from "react";

/**
 * Announcement — auto-generated from SVG
 * Props:
 *  - width, height (numbers) — if only one provided, the other will be computed to keep aspect ratio.
 *  - strokeWidth (number)
 *  - strokeColor (string)
 *  - fillColor (string)
 *  - className (string)
 */
export default function Announcement({
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
      <path d="M5.62846 3.11285L8.20507 7.57561M8.07015 7.34117L1.71858 8.816L1.31177 8.11135L5.76482 3.34816M3.10028 8.4948L3.45002 9.10054C3.5769 9.31801 3.78496 9.47618 4.02845 9.54023C4.27192 9.60422 4.53088 9.56895 4.74833 9.44205C4.96579 9.31521 5.12394 9.10715 5.18799 8.86363C5.25204 8.62017 5.21674 8.36122 5.08986 8.14374L5.03385 8.04676M5.80368 1.83723V1M9.01139 5.04503H9.84862M1.75926 5.04503H2.59649M2.94309 2.18476L3.5351 2.77677M8.07195 2.77669L8.66393 2.18468" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
