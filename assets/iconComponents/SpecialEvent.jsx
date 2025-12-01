import React from 'react';

/**
 * SpecialEvent — auto-generated from SVG
 * Icon type: stroke
 * 
 * Props:
 *  - width, height (numbers) — if only one provided, computed to keep aspect ratio
 *  - strokeWidth (number) — default: 2
 *  - strokeColor (string) — default: "currentColor"
 *  - fillColor (string) — default: "none"
 *  - className (string) — for Tailwind classes (text-* for color, w-* h-* for size)
 */
export default function SpecialEvent({
  width,
  height,
  strokeWidth = 2,
  strokeColor = 'currentColor',
  fillColor = 'none',
  className,
  ...props
}) {
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden="true"
      {...props}
    >
      <path d="M1.97111 1.98901C1.79624 1.98901 1.62853 2.05848 1.50488 2.18213C1.38123 2.30578 1.31177 2.47348 1.31177 2.64835V8.91209C1.31177 9.08694 1.38123 9.25468 1.50488 9.37831C1.62853 9.50193 1.79624 9.57143 1.97111 9.57143H9.22385C9.39871 9.57143 9.56645 9.50193 9.69007 9.37831C9.8137 9.25468 9.8832 9.08694 9.8832 8.91209V2.64835C9.8832 2.47348 9.8137 2.30578 9.69007 2.18213C9.56645 2.05848 9.39871 1.98901 9.22385 1.98901H7.90517M3.28979 1V2.97802M7.90517 1V2.97802M3.28979 1.98901H6.58649M5.76147 3.73785L6.31308 4.8475C6.32542 4.87556 6.34498 4.89985 6.36977 4.91787C6.39457 4.93591 6.4237 4.94704 6.4542 4.95012L7.67928 5.13613C7.71429 5.14069 7.74733 5.15512 7.77443 5.17775C7.80159 5.20038 7.8217 5.23025 7.83245 5.26389C7.8432 5.29753 7.84418 5.33354 7.83522 5.36771C7.82632 5.40188 7.80779 5.43279 7.78194 5.45683L6.87753 6.31633C6.86404 6.34205 6.857 6.37067 6.857 6.39971C6.857 6.42876 6.86404 6.45737 6.87753 6.4831L7.05071 7.7018C7.0581 7.73701 7.05511 7.7736 7.0421 7.80716C7.0291 7.84072 7.00664 7.8698 6.97744 7.89084C6.94825 7.91187 6.91357 7.924 6.87762 7.92578C6.84167 7.92749 6.80599 7.91873 6.77491 7.90059L5.6845 7.32334C5.65628 7.31061 5.62568 7.30402 5.59471 7.30402C5.56374 7.30402 5.53313 7.31061 5.50491 7.32334L4.41451 7.90059C4.38342 7.91873 4.34774 7.92749 4.31179 7.92578C4.27584 7.924 4.24117 7.91187 4.21197 7.89084C4.18277 7.8698 4.16031 7.84072 4.14731 7.80716C4.1343 7.7736 4.13131 7.73701 4.1387 7.7018L4.34395 6.4831C4.35278 6.45481 4.35447 6.42478 4.34888 6.39568C4.34328 6.36658 4.33057 6.33932 4.31188 6.31633L3.40749 5.45042C3.3835 5.42612 3.36666 5.39569 3.35882 5.36245C3.35098 5.32922 3.35245 5.29447 3.36304 5.262C3.37364 5.22954 3.39297 5.20063 3.41891 5.17843C3.44486 5.15623 3.47641 5.14159 3.51011 5.13613L4.73522 4.95653C4.76571 4.95345 4.79485 4.94232 4.81964 4.92429C4.84443 4.90626 4.86399 4.88197 4.87632 4.85391L5.42794 3.74427C5.4427 3.71286 5.46595 3.6862 5.49507 3.66731C5.52419 3.64843 5.55801 3.63806 5.59271 3.6374C5.62742 3.63673 5.66161 3.64578 5.69143 3.66354C5.72125 3.68129 5.74552 3.70703 5.76147 3.73785Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
