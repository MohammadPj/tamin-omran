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
const SvgInfo = ({
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
      d="M16 6.25a9.683 9.683 0 0 0-6.894 2.856A9.691 9.691 0 0 0 6.25 16a9.683 9.683 0 0 0 2.856 6.894A9.691 9.691 0 0 0 16 25.75a9.683 9.683 0 0 0 6.894-2.856A9.691 9.691 0 0 0 25.75 16a9.683 9.683 0 0 0-2.856-6.894A9.691 9.691 0 0 0 16 6.25ZM16 4c6.627 0 12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4Zm-1.5 16.5h3v3h-3v-3Zm0-12h3v9h-3v-9Z"
    />
  </svg>
);
export default SvgInfo;
