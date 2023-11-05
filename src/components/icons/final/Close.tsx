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
const SvgClose = ({
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
    {...props}
  >
    <path
      fill={primarycolor || "#262262"}
      d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4Zm0 21.75A9.75 9.75 0 0 1 6.25 16 9.75 9.75 0 0 1 16 6.25 9.75 9.75 0 0 1 25.75 16 9.75 9.75 0 0 1 16 25.75Z"
    />
    <path
      fill={primarycolor || "#262262"}
      d="M19.75 10 16 13.75 12.25 10 10 12.25 13.75 16 10 19.75 12.25 22 16 18.25 19.75 22 22 19.75 18.25 16 22 12.25 19.75 10Z"
    />
  </svg>
);
export default SvgClose;
