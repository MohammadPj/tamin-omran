import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import { PaginationProps, PaginationClasses } from "@mui/material";

type TMuiPagination =
  | {
      defaultProps?: Partial<PaginationProps> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof PaginationClasses,
              "MuiPagination",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiPagination: TMuiPagination = {
  defaultProps: {
    color: "primary",
    dir: "ltr",
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      display: "flex",
      justifyContent: "center",
    }),
    ul: {
      gap: 8,
      '& >li': {
        height: '100%'
      }
    }
  },
};
