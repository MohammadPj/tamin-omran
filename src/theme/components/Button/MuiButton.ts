import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import {ButtonProps, ButtonClasses} from "@mui/material";

type TMuiButton =
  | {
      defaultProps?: Partial<ButtonProps<"button", {}>> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof ButtonClasses,
              "MuiButton",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiButton: TMuiButton = {
  defaultProps: {disableElevation: true, variant: 'contained'},
  styleOverrides: {
    root: ({ownerState , theme}) => ({
      borderRadius: theme.shape.borderRadius * 2.5,
      minWidth: 140,
      minHeight: 37
    }),
  },
}
