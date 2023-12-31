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
const SvgDelete = ({
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
    viewBox="0 0 32 32"
    fill={primarycolor}
    {...props}
  >
    <path d="M10.807 2c-.517 0-1.011.204-1.377.57L9 3H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-5l-.43-.43A1.943 1.943 0 0 0 13.193 2h-2.386zM4.365 7l1.528 13.264c.132.99.984 1.736 1.982 1.736h8.248c.998 0 1.851-.745 1.984-1.744L19.635 7H4.365z" />
  </svg>
);
export default SvgDelete;
