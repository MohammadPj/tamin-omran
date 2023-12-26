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
const SvgEye = ({
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
      fill={primarycolor || "black"}
      d="M16 8c-5.233 0-9.771 3.048-12 7.5 2.229 4.452 6.767 7.5 12 7.5s9.771-3.048 12-7.5C25.771 11.048 21.233 8 16 8Zm5.918 3.978c1.41.9 2.605 2.104 3.502 3.522a11.39 11.39 0 0 1-3.503 3.522 10.988 10.988 0 0 1-11.833 0A11.423 11.423 0 0 1 6.582 15.5a11.39 11.39 0 0 1 3.78-3.693 6 6 0 1 0 11.277 0c.093.056.186.113.277.171h.002ZM16 13.25a2.25 2.25 0 1 1-4.502-.002A2.25 2.25 0 0 1 16 13.25Z"
    />
  </svg>
);
export default SvgEye;
