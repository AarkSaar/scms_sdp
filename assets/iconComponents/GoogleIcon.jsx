import React from 'react';

/**
 * GoogleLogo — auto-generated from provided SVG
 */
export default function GoogleLogo({ width, height, className, ...props }) {
  // original viewBox: 0 0 18 18 -> aspectRatio = 18/18
  const aspectRatio = 18 / 18;
  let computedWidth = 18;
  let computedHeight = 18;

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
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      role='img'
      aria-hidden={className ? 'false' : 'true'}
      {...props}
    >
      <mask
        id='mask0_481_5263'
        type='luminance'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='18'
        height='18'
      >
        <path
          d='M17.8271 7.33029H9.19172V10.7905H14.1537C14.0739 11.2802 13.8948 11.7619 13.6325 12.2012C13.332 12.7045 12.9605 13.0876 12.5797 13.3794C11.4391 14.2535 10.1092 14.4322 9.18569 14.4322C6.85268 14.4322 4.85927 12.9243 4.08759 10.8754C4.05644 10.8011 4.03576 10.7243 4.01058 10.6484C3.84006 10.1269 3.74688 9.5746 3.74688 9.00057C3.74688 8.40317 3.84778 7.8313 4.03175 7.2912C4.75739 5.16106 6.79574 3.57005 9.18737 3.57005C9.66842 3.57005 10.1317 3.62731 10.571 3.74152C11.5749 4.00253 12.2851 4.51659 12.7203 4.92321L15.3459 2.35182C13.7488 0.887375 11.6667 2.21413e-09 9.18301 2.21413e-09C7.19749 -4.27344e-05 5.36438 0.618586 3.8622 1.66409C2.64398 2.51196 1.64487 3.64716 0.970594 4.96557C0.343418 6.188 0 7.54268 0 8.99922C0 10.4558 0.343943 11.8246 0.971121 13.0357V13.0439C1.63357 14.3297 2.60231 15.4367 3.7797 16.2807C4.80828 17.018 6.65263 18 9.18301 18C10.6382 18 11.9278 17.7376 13.0652 17.246C13.8857 16.8913 14.6126 16.4287 15.2708 15.8341C16.1405 15.0485 16.8216 14.0768 17.2864 12.9589C17.7513 11.8409 18 10.5766 18 9.206C18 8.56767 17.9359 7.91941 17.8271 7.33022V7.33029Z'
          fill='white'
        />
      </mask>
      <g mask='url(#mask0_481_5263)'>
        <g filter='url(#filter0_f_481_5263)'>
          <path
            d='M-0.132568 9.06055C-0.123023 10.4942 0.285482 11.9733 0.903823 13.1674V13.1756C1.3506 14.0427 1.96122 14.7277 2.65671 15.4064L6.85727 13.8737C6.06255 13.47 5.94128 13.2227 5.3716 12.7713C4.78943 12.1843 4.35554 11.5103 4.08532 10.7201H4.07444L4.08532 10.7119C3.90755 10.1901 3.89002 9.6362 3.88346 9.06055H-0.132568Z'
            fill='url(#paint0_radial_481_5263)'
          />
        </g>
        <g filter='url(#filter1_f_481_5263)'>
          <path
            d='M9.19156 -0.0654297C8.77638 1.39317 8.93513 2.81097 9.19156 3.63591C9.671 3.63626 10.1329 3.69341 10.5708 3.80727C11.5748 4.06828 12.2849 4.58236 12.72 4.98898L15.4129 2.35189C13.8176 0.889194 11.8978 -0.0631251 9.19156 -0.0654297Z'
            fill='url(#paint1_radial_481_5263)'
          />
        </g>
        <g filter='url(#filter2_f_481_5263)'>
          <path
            d='M9.18225 -0.0771484C7.14577 -0.0771925 5.2656 0.557318 3.72486 1.62966C3.15279 2.02783 2.6278 2.48777 2.16034 2.99924C2.03788 4.14814 3.07708 5.56025 5.13502 5.54856C6.13352 4.38707 7.61029 3.63559 9.25393 3.63559C9.25543 3.63559 9.25689 3.63572 9.25839 3.63572L9.19126 -0.0768856C9.18823 -0.0768876 9.18529 -0.0771484 9.18225 -0.0771484Z'
            fill='url(#paint2_radial_481_5263)'
          />
        </g>
        <g filter='url(#filter3_f_481_5263)'>
          <path
            d='M15.9041 9.4761L14.0864 10.7248C14.0066 11.2145 13.8274 11.6963 13.5651 12.1355C13.2646 12.6388 12.8931 13.022 12.5123 13.3138C11.374 14.186 10.0477 14.3656 9.12442 14.3663C8.17009 15.9918 8.00278 16.8059 9.19154 18.1177C10.6625 18.1167 11.9666 17.8511 13.1169 17.3539C13.9484 16.9944 14.6851 16.5256 15.3521 15.9231C16.2334 15.127 16.9237 14.1422 17.3948 13.0092C17.866 11.8762 18.1179 10.5951 18.1179 9.20605L15.9041 9.4761Z'
            fill='url(#paint3_radial_481_5263)'
          />
        </g>
        <g filter='url(#filter4_f_481_5263)'>
          <path
            d='M9.05737 7.19873V10.9219H17.8028C17.8797 10.412 18.1341 9.75216 18.1341 9.20593C18.1341 8.5676 18.07 7.78791 17.9613 7.19873H9.05737Z'
            fill='#3086FF'
          />
        </g>
        <g filter='url(#filter5_f_481_5263)'>
          <path
            d='M2.20283 2.86768C1.66315 3.45816 1.2021 4.11908 0.836535 4.83386C0.20937 6.05629 -0.134033 7.54242 -0.134033 8.99897C-0.134033 9.01949 -0.132334 9.03957 -0.132197 9.06007C0.145555 9.59262 3.70445 9.49064 3.88383 9.06007C3.88361 9.03998 3.88134 9.02039 3.88134 9.00025C3.88134 8.40284 3.98227 7.96251 4.16624 7.42241C4.39318 6.75621 4.74853 6.14272 5.20293 5.61415C5.30593 5.48265 5.58068 5.19994 5.66084 5.03036C5.69138 4.96577 5.60541 4.92952 5.6006 4.90678C5.59522 4.88136 5.47996 4.9018 5.45413 4.88286C5.37214 4.82272 5.20978 4.79132 5.11119 4.7634C4.90046 4.70373 4.55122 4.57215 4.35724 4.43575C3.74408 4.00459 2.78719 3.48957 2.20283 2.86768Z'
            fill='url(#paint4_radial_481_5263)'
          />
        </g>
        <g filter='url(#filter6_f_481_5263)'>
          <path
            d='M4.36977 4.90961C5.79163 5.77091 6.20053 4.47487 7.14586 4.06931L5.50142 0.65918C4.89651 0.913425 4.32498 1.2293 3.79469 1.59838C3.00276 2.14956 2.30341 2.82217 1.72571 3.5876L4.36977 4.90961Z'
            fill='url(#paint5_radial_481_5263)'
          />
        </g>
        <g filter='url(#filter7_f_481_5263)'>
          <path
            d='M4.94883 13.6101C3.04017 14.2991 2.74136 14.3238 2.56567 15.5067C2.90141 15.8343 3.26214 16.1374 3.64546 16.4122C4.67404 17.1495 6.65259 18.1314 9.18297 18.1314C9.18594 18.1314 9.18878 18.1312 9.19175 18.1312V14.3006C9.18984 14.3006 9.18764 14.3007 9.18572 14.3007C8.23818 14.3007 7.48101 14.0519 6.70466 13.6191C6.51325 13.5124 6.16597 13.7989 5.98944 13.6708C5.74596 13.4941 5.16001 13.823 4.94883 13.6101Z'
            fill='url(#paint6_radial_481_5263)'
          />
        </g>
        <g opacity='0.5' filter='url(#filter8_f_481_5263)'>
          <path
            d='M8.07336 14.1797V18.0646C8.42741 18.106 8.79586 18.1312 9.18239 18.1312C9.56986 18.1312 9.94472 18.1113 10.309 18.0747V14.2059C9.90078 14.2757 9.51632 14.3005 9.18514 14.3005C8.80371 14.3005 8.43278 14.2561 8.07336 14.1797Z'
            fill='url(#paint7_linear_481_5263)'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_f_481_5263'
          x='-0.602648'
          y='8.59047'
          width='7.93003'
          height='7.28586'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='0.23504' result='effect1_foregroundBlur_481_5263' />
        </filter>
        <filter
          id='filter1_f_481_5263'
          x='8.4662'
          y='-0.535509'
          width='7.41684'
          height='5.99436'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='0.23504' result='effect1_foregroundBlur_481_5263' />
        </filter>
        <filter
          id='filter2_f_481_5263'
          x='1.68056'
          y='-0.547228'
          width='8.04795'
          height='6.56614'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='0.23504' result='effect1_foregroundBlur_481_5263' />
        </filter>
        <filter
          id='filter3_f_481_5263'
          x='7.8838'
          y='8.73598'
          width='10.7042'
          height='9.85178'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='0.23504' result='effect1_foregroundBlur_481_5263' />
        </filter>
        <filter
          id='filter4_f_481_5263'
          x='8.58729'
          y='6.72865'
          width='10.0168'
          height='4.6633'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='0.23504' result='effect1_foregroundBlur_481_5263' />
        </filter>
        <filter
          id='filter5_f_481_5263'
          x='-0.604113'
          y='2.3976'
          width='6.74155'
          height='7.49485'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='0.23504' result='effect1_foregroundBlur_481_5263' />
        </filter>
        <filter
          id='filter6_f_481_5263'
          x='-1.57914'
          y='-2.64567'
          width='12.0299'
          height='11.1497'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='1.65243' result='effect1_foregroundBlur_481_5263' />
        </filter>
        <filter
          id='filter7_f_481_5263'
          x='2.09559'
          y='13.1246'
          width='7.56626'
          height='5.47678'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='0.23504' result='effect1_foregroundBlur_481_5263' />
        </filter>
        <filter
          id='filter8_f_481_5263'
          x='7.60328'
          y='13.7096'
          width='3.17575'
          height='4.89182'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='0.23504' result='effect1_foregroundBlur_481_5263' />
        </filter>

        <radialGradient
          id='paint0_radial_481_5263'
          cx='0'
          cy='0'
          r='1'
          gradientTransform='matrix(-0.374041 -8.96393 13.4483 -0.537918 6.77318 15.2714)'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.141612' stopColor='#1ABD4D' />
          <stop offset='0.247515' stopColor='#6EC30D' />
          <stop offset='0.311547' stopColor='#8AC502' />
          <stop offset='0.366013' stopColor='#A2C600' />
          <stop offset='0.445673' stopColor='#C8C903' />
          <stop offset='0.540305' stopColor='#EBCB03' />
          <stop offset='0.615636' stopColor='#F7CD07' />
          <stop offset='0.699345' stopColor='#FDCD04' />
          <stop offset='0.771242' stopColor='#FDCE05' />
          <stop offset='0.860566' stopColor='#FFCE0A' />
        </radialGradient>

        <radialGradient
          id='paint1_radial_481_5263'
          cx='0'
          cy='0'
          r='1'
          gradientTransform='matrix(6.35225 -1.52668e-05 -8.92834e-06 8.03195 15.161 4.79817)'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.408458' stopColor='#FB4E5A' />
          <stop offset='1' stopColor='#FF4540' />
        </radialGradient>

        <radialGradient
          id='paint2_radial_481_5263'
          cx='0'
          cy='0'
          r='1'
          gradientTransform='matrix(-8.89996 4.82619 6.68907 11.8245 11.6917 -1.2398)'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.231273' stopColor='#FF4541' />
          <stop offset='0.311547' stopColor='#FF4540' />
          <stop offset='0.457516' stopColor='#FF4640' />
          <stop offset='0.540305' stopColor='#FF473F' />
          <stop offset='0.699346' stopColor='#FF5138' />
          <stop offset='0.771242' stopColor='#FF5B33' />
          <stop offset='0.860566' stopColor='#FF6C29' />
          <stop offset='1' stopColor='#FF8C18' />
        </radialGradient>

        <radialGradient
          id='paint3_radial_481_5263'
          cx='0'
          cy='0'
          r='1'
          gradientTransform='matrix(-16.1403 -20.6285 -7.77723 5.83314 9.32386 16.9527)'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.131546' stopColor='#0CBA65' />
          <stop offset='0.209784' stopColor='#0BB86D' />
          <stop offset='0.297297' stopColor='#09B479' />
          <stop offset='0.396257' stopColor='#08AD93' />
          <stop offset='0.477124' stopColor='#0AA6A9' />
          <stop offset='0.568425' stopColor='#0D9CC6' />
          <stop offset='0.667385' stopColor='#1893DD' />
          <stop offset='0.768727' stopColor='#258BF1' />
          <stop offset='0.858506' stopColor='#3086FF' />
        </radialGradient>

        <radialGradient
          id='paint4_radial_481_5263'
          cx='0'
          cy='0'
          r='1'
          gradientTransform='matrix(-1.14221 9.63913 13.6126 1.54626 8.40329 1.62277)'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.366013' stopColor='#FF4E3A' />
          <stop offset='0.457516' stopColor='#FF8A1B' />
          <stop offset='0.540305' stopColor='#FFA312' />
          <stop offset='0.615636' stopColor='#FFB60C' />
          <stop offset='0.771242' stopColor='#FFCD0A' />
          <stop offset='0.860566' stopColor='#FECF0A' />
          <stop offset='0.915033' stopColor='#FECF08' />
          <stop offset='1' stopColor='#FDCD01' />
        </radialGradient>

        <radialGradient
          id='paint5_radial_481_5263'
          cx='0'
          cy='0'
          r='1'
          gradientTransform='matrix(-3.30159 3.57508 -10.2992 -9.11745 6.7964 1.52307)'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.315904' stopColor='#FF4C3C' />
          <stop offset='0.603818' stopColor='#FF692C' />
          <stop offset='0.726837' stopColor='#FF7825' />
          <stop offset='0.884534' stopColor='#FF8D1B' />
          <stop offset='1' stopColor='#FF9F13' />
        </radialGradient>

        <radialGradient
          id='paint6_radial_481_5263'
          cx='0'
          cy='0'
          r='1'
          gradientTransform='matrix(-8.89996 -4.82619 6.68907 -11.8245 11.6922 19.2394)'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.231273' stopColor='#0FBC5F' />
          <stop offset='0.311547' stopColor='#0FBC5F' />
          <stop offset='0.366013' stopColor='#0FBC5E' />
          <stop offset='0.457516' stopColor='#0FBC5D' />
          <stop offset='0.540305' stopColor='#12BC58' />
          <stop offset='0.699346' stopColor='#28BF3C' />
          <stop offset='0.771242' stopColor='#38C02B' />
          <stop offset='0.860566' stopColor='#52C218' />
          <stop offset='0.915033' stopColor='#67C30F' />
          <stop offset='1' stopColor='#86C504' />
        </radialGradient>

        <linearGradient
          id='paint7_linear_481_5263'
          x1='8.07336'
          y1='16.1554'
          x2='10.309'
          y2='16.1554'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#0FBC5C' />
          <stop offset='1' stopColor='#0CBA65' />
        </linearGradient>
      </defs>
    </svg>
  );
}
