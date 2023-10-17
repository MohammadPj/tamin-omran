import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import { SkeletonClasses, SkeletonProps } from "@mui/material";

type TMuiSkeleton =
  | {
  defaultProps?: Partial<SkeletonProps<"div">> | undefined;
  styleOverrides?:
    | Partial<
    OverridesStyleRules<
      keyof SkeletonClasses,
      "MuiSkeleton",
      Omit<Theme, "components">
      >
    >
    | undefined;
  variants?: [] | undefined;
}
  | undefined;

export const MuiSkeleton: TMuiSkeleton = {
  styleOverrides: {
    rectangular: {
      borderRadius: 4
    }
  },
};
