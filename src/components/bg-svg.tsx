import React from "react";

function BgSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 800"
      className="fixed inset-0 z-0 pointer-events-none h-full scale-75 md:scale-150 "
    >
      <defs>
        <filter
          id="bbblurry-filter"
          x="-100%"
          y="-100%"
          width="400%"
          height="400%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feGaussianBlur
            stdDeviation="83"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            edgeMode="none"
            result="blur"
          ></feGaussianBlur>
        </filter>
      </defs>
      <g filter="url(#bbblurry-filter)">
        <ellipse
          rx="150"
          ry="150"
          cx="224.22569093078766"
          cy="520.4987347855628"
          fill="#b3b6d990"
        ></ellipse>
        <ellipse
          rx="150"
          ry="150"
          cx="341.7625824072619"
          cy="496.1481743191188"
          fill="hsla(235, 30%, 77%, 0.56)"
        ></ellipse>
        <ellipse
          rx="150"
          ry="150"
          cx="363.8905361134231"
          cy="228.03467898074558"
          fill="hsla(235, 50%, 62%, 0.56)"
        ></ellipse>
      </g>
    </svg>
  );
}

export default BgSVG;
