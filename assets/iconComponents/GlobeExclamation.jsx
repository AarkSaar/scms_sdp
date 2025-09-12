// assets/iconComponents/GlobeExclamation.jsx
import React from 'react';

/**
 * GlobeExclamation
 *
 * Props:
 *  - width, height (numbers) — if only one provided, the other is computed preserving aspect ratio
 *  - strokeWidth (number)
 *  - strokeColor (string)
 *  - fillColor (string)
 *  - className (string) — applied to the <svg>
 *
 * Default visuals match the original SVG.
 */
export default function GlobeExclamation({
  width,
  height,
  strokeWidth = 1.2,
  strokeColor = '#8E8E8E',
  fillColor = '#8E8E8E',
  className,
}) {
  // original viewBox: "0 0 13 13"
  const vbw = 13;
  const vbh = 13;
  const aspectRatio = vbw / vbh;

  let computedWidth = vbw;
  let computedHeight = vbh;

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
      viewBox='0 0 13 13'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      role='img'
      aria-hidden={className ? 'false' : 'true'}
    >
      <g clipPath='url(#clip0_118_6804)'>
        <path
          d='M6.31177 0.0732422C9.59131 0.0734231 12.2511 2.73218 12.2513 6.01172C12.2512 7.44239 11.7446 8.75492 10.9016 9.78027V7.0459H10.9876C11.0609 6.71297 11.1008 6.36667 11.1009 6.01172C11.1008 5.65668 11.0609 5.31055 10.9876 4.97754H10.5306C10.2317 4.61468 9.77933 4.38281 9.27271 4.38281C8.6436 4.3829 8.09867 4.74036 7.82739 5.2627C7.81583 5.16734 7.80347 5.07218 7.78833 4.97754H4.83618C4.78173 5.31799 4.74927 5.66356 4.74146 6.01172C4.74926 6.35986 4.78175 6.70546 4.83618 7.0459H7.6438V10.5752C7.63475 10.5893 7.62656 10.6041 7.61743 10.6182C7.62634 10.6156 7.63491 10.6119 7.6438 10.6094V11.4404C7.6438 11.5601 7.65738 11.6767 7.68189 11.7891C7.24185 11.8931 6.78355 11.9511 6.31177 11.9512C3.03222 11.951 0.373456 9.29128 0.373291 6.01172C0.373477 2.73218 3.03223 0.0734278 6.31177 0.0732422ZM2.05103 8.19629C2.65138 9.36488 3.71774 10.2536 5.00513 10.6182C4.5198 9.86979 4.1529 9.05283 3.91431 8.19629H2.05103ZM5.1145 8.19629C5.38061 9.01603 5.78338 9.78925 6.31177 10.4795C6.84034 9.78908 7.24386 9.01627 7.51001 8.19629H5.1145ZM1.63599 4.97754C1.56266 5.31055 1.52371 5.65668 1.52368 6.01172C1.52371 6.36661 1.56272 6.71301 1.63599 7.0459H3.67505C3.62835 6.70878 3.59922 6.36774 3.59204 6.02441C3.59188 6.01653 3.59188 6.0079 3.59204 6C3.59921 5.65633 3.62829 5.31499 3.67505 4.97754H1.63599ZM5.00513 1.4043C3.71732 1.76886 2.65139 2.65911 2.05103 3.82812H3.91333C4.15204 2.97084 4.51928 2.15323 5.00513 1.4043ZM6.31177 1.54297C5.78286 2.23365 5.38074 3.00774 5.1145 3.82812H7.51001C7.24378 3.00771 6.8407 2.23368 6.31177 1.54297ZM7.61743 1.4043C8.10345 2.15338 8.47243 2.97063 8.71118 3.82812H10.5735C9.97296 2.6587 8.9058 1.76867 7.61743 1.4043Z'
          fill={fillColor}
        />
        <path
          d='M9.31177 6V9M9.31177 12H9.31927'
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>

      <defs>
        <clipPath id='clip0_118_6804'>
          <rect width='12' height='13' fill='white' transform='translate(0.311768)' />
        </clipPath>
      </defs>
    </svg>
  );
}
