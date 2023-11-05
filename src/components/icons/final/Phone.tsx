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
const SvgPhone = ({
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
      d="M21.5 18.5c-1.5 1.5-1.5 3-3 3s-3-1.5-4.5-3-3-3-3-4.5 1.5-1.5 3-3-3-6-4.5-6S5 9.5 5 9.5c0 3 3.082 9.082 6 12 2.918 2.918 9 6 12 6 0 0 4.5-3 4.5-4.5s-4.5-6-6-4.5Z"
    />
  </svg>
);
export default SvgPhone;
