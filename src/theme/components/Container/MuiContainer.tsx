import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import { ContainerProps, ContainerClasses } from "@mui/material";

type TMuiContainer =
  | {
      defaultProps?: Partial<ContainerProps<"div">> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof ContainerClasses,
              "MuiContainer",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiContainer: TMuiContainer = {
  styleOverrides: { maxWidthLg: { maxWidth: "1300px !important" } },
};
