// components/IconComponents/LogoIcon.jsx
import React from 'react';

export default function LogoIcon({ width = 30, height = 30, className = '', ...props }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <rect x='1.31177' y='1' width='28' height='28' rx='8.4' fill='#0A0A0A' />
      <rect
        x='1.31177'
        y='1'
        width='28'
        height='28'
        rx='8.4'
        stroke='#3F3F3F'
        strokeWidth='0.75'
        strokeLinecap='round'
      />
      <path
        d='M15.3055 10V15M15.3055 20H15.318'
        stroke='url(#paint0_linear_118_6826)'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <defs>
        <linearGradient
          id='paint0_linear_118_6826'
          x1='15.3118'
          y1='10'
          x2='15.3118'
          y2='20'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FD84F1' />
          <stop offset='1' stopColor='#3BD3EF' />
        </linearGradient>
      </defs>
    </svg>
  );
}
