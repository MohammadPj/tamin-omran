import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import {TabProps, TabClasses} from "@mui/material";

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
      // boxShadow: "0px 0px 10px rgba(94, 129, 233, 0.2)",
      color: theme.palette.gray[100],
      fontSize: 12
    }),
  },
};
