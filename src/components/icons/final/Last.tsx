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
const SvgLast = ({
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
      d="M7 25V7h3v8.25l7.5-7.5v7.5l7.5-7.5v16.5l-7.5-7.5v7.5l-7.5-7.5V25H7Z"
    />
  </svg>
);
export default SvgLast;
