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
const SvgArrowCircleUp = ({
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
      d="M4 16c0 6.627 5.373 12 12 12s12-5.373 12-12S22.627 4 16 4 4 9.373 4 16Zm21.75 0A9.75 9.75 0 0 1 16 25.75 9.75 9.75 0 0 1 6.25 16 9.75 9.75 0 0 1 16 6.25 9.75 9.75 0 0 1 25.75 16Z"
    />
    <path
      fill={primarycolor || "#262262"}
      d="m20.564 19.686 2.122-2.122L16 10.88l-6.686 6.685 2.121 2.122L16 15.12l4.564 4.565Z"
    />
  </svg>
);
export default SvgArrowCircleUp;
