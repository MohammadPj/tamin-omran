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
const SvgInstagram = ({
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
    viewBox="0 0 50 50"
    fill={primarycolor}
    {...props}
  >
    <path d="M16 3C8.832 3 3 8.832 3 16v18c0 7.168 5.832 13 13 13h18c7.168 0 13-5.832 13-13V16c0-7.168-5.832-13-13-13H16zm0 2h18c6.086 0 11 4.914 11 11v18c0 6.086-4.914 11-11 11H16C9.914 45 5 40.086 5 34V16C5 9.914 9.914 5 16 5zm21 6a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm-12 3c-6.063 0-11 4.937-11 11s4.937 11 11 11 11-4.937 11-11-4.937-11-11-11zm0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9z" />
  </svg>
);
export default SvgInstagram;
