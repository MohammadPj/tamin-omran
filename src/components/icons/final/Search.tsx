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
const SvgSearch = ({
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
      d="m27.256 24.422-5.685-4.834c-.588-.53-1.216-.771-1.724-.748A8.96 8.96 0 0 0 22 13a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 8.96 8.96 0 0 0 5.84-2.152c-.024.507.218 1.135.748 1.723l4.834 5.685c.828.92 2.18.997 3.005.172.825-.825.747-2.178-.172-3.004l.001-.002ZM13 18.998a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z"
    />
  </svg>
);
export default SvgSearch;
