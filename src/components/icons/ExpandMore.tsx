// Auto-generated file created by svgr-cli source svg-template.js
// Run yarn icons:create to update
// Do not edit
import * as React from "react";
import type { SVGProps } from "react";

interface Props extends SVGProps<any> {
  primarycolor?: string;
  secondarycolor?: string;
}
const SvgExpandMore = ({ primarycolor, secondarycolor, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <g clipPath="url(#Expand_More_svg__a)">
      <path
        fill={primarycolor || "#262262"}
        d="M12.443 6.442 9 9.877 5.558 6.442 4.5 7.5 9 12l4.5-4.5-1.057-1.058Z"
      />
    </g>
    <defs>
      <clipPath id="Expand_More_svg__a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgExpandMore;
