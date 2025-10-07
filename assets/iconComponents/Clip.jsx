import React from "react";

/**
 * Clip — auto-generated from SVG
 * Props:
 *  - width, height (numbers) — if only one provided, the other will be computed to keep aspect ratio.
 *  - strokeWidth (number)
 *  - strokeColor (string)
 *  - fillColor (string)
 *  - className (string)
 */
export default function Clip({
  width,
  height,
  strokeWidth = 2,
  strokeColor = "currentColor",
  fillColor = "none",
  className,
}) {
  // original viewBox: 0 0 16 16
  const aspectRatio = 16 / 16;

  let computedWidth = 16;
  let computedHeight = 16;

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
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden={className ? "false" : "true"}
    >
      <path d="M14.6109 7.3339L8.17595 13.7688C7.38763 14.5571 6.31843 15 5.20358 15C4.08872 15 3.01952 14.5571 2.2312 13.7688C1.44288 12.9805 1 11.9113 1 10.7964C1 9.68157 1.44288 8.61237 2.2312 7.82405L8.23197 1.82328C8.75752 1.2968 9.47069 1.00066 10.2146 1C10.9585 0.999345 11.6722 1.29423 12.1986 1.81977C12.7251 2.34532 13.0213 3.05849 13.0219 3.80239C13.0226 4.54628 12.7277 5.25997 12.2021 5.78645L6.18737 11.7872C5.92459 12.05 5.56819 12.1976 5.19657 12.1976C4.82495 12.1976 4.46856 12.05 4.20578 11.7872C3.94301 11.5244 3.79538 11.168 3.79538 10.7964C3.79538 10.4248 3.94301 10.0684 4.20578 9.80563L10.1505 3.86788" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
