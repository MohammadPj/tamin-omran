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
const SvgSort = ({
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
      d="M10.75 22V4h-3v18H4l5.25 5.25L14.5 22h-3.75ZM13.75 4h13.5v3h-13.5V4ZM13.75 8.5h10.5v3h-10.5v-3ZM13.75 13h7.5v3h-7.5v-3Z"
    />
    <path fill={primarycolor || "#262262"} d="M13.75 17.5h4.5v3h-4.5v-3Z" />
  </svg>
);
export default SvgSort;
