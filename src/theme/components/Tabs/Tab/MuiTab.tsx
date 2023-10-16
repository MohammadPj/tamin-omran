import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import { TabProps, TabClasses } from "@mui/material";

type TMuiTab =
  | {
      defaultProps?: Partial<TabProps<"div", {}>> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof TabClasses,
              "MuiTab",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiTab: TMuiTab = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      color: theme.palette.primary.main,
      fontSize: 12,
    }),
  },
};
