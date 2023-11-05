// Auto-generated file created by svgr-cli source svg-template.js
// Run yarn icons:create to update
// Do not edit
import * as React from "react";
import type { SVGProps } from "react";
interface Props extends SVGProps<any> {
  primarycolor?: string;
  secondarycolor?: string;
  isRtl?: boolean;
  style?: React.CSSProperties;
}
const SvgMines = ({
  primarycolor,
  secondarycolor,
  isRtl,
  style,
  ...props
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    style={
      isRtl
        ? {
            ...style,
          }
        : {
            transform: "scaleX(-1)",
            ...style,
          }
    }
    viewBox={'0 0 32 32'}
    {...props}
  >
    <path
      fill={primarycolor || "#262262"}
      d="M4 13.75v4.5c0 .414.336.75.75.75h22.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75H4.75a.75.75 0 0 0-.75.75Z"
    />
  </svg>
);
export default SvgMines;
