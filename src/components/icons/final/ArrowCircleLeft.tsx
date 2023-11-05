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
const SvgArrowCircleLeft = ({
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
      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Zm0-21.75A9.75 9.75 0 0 1 25.75 16 9.75 9.75 0 0 1 16 25.75 9.75 9.75 0 0 1 6.25 16 9.75 9.75 0 0 1 16 6.25Z"
    />
    <path
      fill={primarycolor || "#262262"}
      d="m19.686 11.435-2.122-2.12L10.88 16l6.685 6.686 2.122-2.122L15.12 16l4.565-4.565Z"
    />
  </svg>
);
export default SvgArrowCircleLeft;
