import React from 'react';

/**
 * MailFill — auto-generated from SVG
 */
export default function MailFill({ width, height, fillColor = '#8E8E8E', className, ...props }) {
  // Original viewBox: 0 0 12 10 -> aspectRatio = 12/10
  const aspectRatio = 12 / 10;
  let computedWidth = 12;
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
      viewBox='0 0 12 10'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      role='img'
      aria-hidden={className ? 'false' : 'true'}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.8 10C1.32261 10 0.864773 9.80246 0.527208 9.45083C0.189642 9.09919 0 8.62228 0 8.125V1.875C0 1.37772 0.189642 0.900805 0.527208 0.549175C0.864773 0.197544 1.32261 0 1.8 0H10.2C10.6774 0 11.1352 0.197544 11.4728 0.549175C11.8104 0.900805 12 1.37772 12 1.875V8.125C12 8.62228 11.8104 9.09919 11.4728 9.45083C11.1352 9.80246 10.6774 10 10.2 10H1.8ZM3.375 2.6375C3.31388 2.58314 3.2429 2.54212 3.16627 2.51688C3.08964 2.49164 3.00892 2.48269 2.92891 2.49057C2.84889 2.49845 2.77122 2.523 2.70048 2.56275C2.62975 2.6025 2.56741 2.65665 2.51715 2.72198C2.4669 2.78731 2.42975 2.8625 2.40793 2.94307C2.3861 3.02364 2.38004 3.10796 2.3901 3.19102C2.40016 3.27408 2.42613 3.35419 2.46649 3.42659C2.50684 3.499 2.56074 3.56222 2.625 3.6125L4.875 5.48813C5.19425 5.75438 5.59103 5.89945 6 5.89945C6.40897 5.89945 6.80575 5.75438 7.125 5.48813L9.375 3.61313C9.43654 3.56183 9.48777 3.49841 9.52578 3.42648C9.56379 3.35456 9.58782 3.27554 9.59652 3.19394C9.60521 3.11234 9.59838 3.02976 9.57644 2.95091C9.55449 2.87205 9.51785 2.79848 9.4686 2.73438C9.41935 2.67027 9.35847 2.6169 9.28942 2.57731C9.22038 2.53772 9.14452 2.51268 9.06619 2.50363C8.98785 2.49458 8.90857 2.50168 8.83287 2.52455C8.75717 2.54741 8.68654 2.58558 8.625 2.63688L6.375 4.51188C6.26858 4.60063 6.13632 4.64898 6 4.64898C5.86368 4.64898 5.73142 4.60063 5.625 4.51188L3.375 2.6375Z'
        fill={fillColor}
      />
    </svg>
  );
}
