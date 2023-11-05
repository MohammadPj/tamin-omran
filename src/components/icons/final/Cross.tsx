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
const SvgCross = ({
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
      d="m27.781 23.281-7.28-7.28 7.28-7.282a.754.754 0 0 0 0-1.06l-3.44-3.44a.748.748 0 0 0-1.06 0l-7.28 7.281-7.282-7.28a.751.751 0 0 0-1.06 0l-3.44 3.439a.748.748 0 0 0 0 1.06L11.5 16l-7.28 7.281a.751.751 0 0 0 0 1.06l3.439 3.44a.748.748 0 0 0 1.06 0L16 20.501l7.281 7.28a.751.751 0 0 0 1.06 0l3.44-3.44a.748.748 0 0 0 0-1.06Z"
    />
  </svg>
);
export default SvgCross;
