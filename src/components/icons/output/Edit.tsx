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
const SvgEdit = ({
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
    {...props}
  >
    <path d="M18.414 2a.995.995 0 0 0-.707.293L16 4l4 4 1.707-1.707a.999.999 0 0 0 0-1.414l-2.586-2.586A.996.996 0 0 0 18.414 2zM14.5 5.5 3 17v4h4L18.5 9.5l-4-4z" />
  </svg>
);
export default SvgEdit;
