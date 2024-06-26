import React from "react";

const PrevButton = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_333_3382)">
        <rect width="30" height="30" rx="15" fill="black" fill-opacity="0.21" />
        <path
          d="M16.5 19.5L12 15L16.5 10.5"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_333_3382"
          x="-4"
          y="-4"
          width="38"
          height="38"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_333_3382"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_333_3382"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default PrevButton;
