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
const SvgFilter = ({
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
      d="M14.5 7.5v-.375c0-.62-.507-1.125-1.125-1.125h-3.75C9.005 6 8.5 6.505 8.5 7.125V7.5H4v3h4.5v.375c0 .618.505 1.125 1.125 1.125h3.75a1.13 1.13 0 0 0 1.125-1.125V10.5H28v-3H14.5Zm-4.5 3v-3h3v3h-3Zm13.5 4.125a1.13 1.13 0 0 0-1.125-1.125h-3.75a1.13 1.13 0 0 0-1.125 1.125V15H4v3h13.5v.375a1.13 1.13 0 0 0 1.125 1.125h3.75a1.13 1.13 0 0 0 1.125-1.125V18H28v-3h-4.5v-.375ZM19 18v-3h3v3h-3Zm-4.5 4.125A1.13 1.13 0 0 0 13.375 21h-3.75c-.62 0-1.125.507-1.125 1.125v.375H4v3h4.5v.375c0 .618.505 1.125 1.125 1.125h3.75a1.13 1.13 0 0 0 1.125-1.125V25.5H28v-3H14.5v-.375ZM10 25.5v-3h3v3h-3Z"
    />
  </svg>
);
export default SvgFilter;
