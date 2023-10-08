import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { PaginationItemProps, PaginationItemClasses } from "@mui/material";

type TMuiPaginationItem =
  | {
      defaultProps?: Partial<PaginationItemProps<"div", {}>> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof PaginationItemClasses,
              "MuiPaginationItem",
              Omit<any, any>
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiPaginationItem: TMuiPaginationItem = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      fontSize: "10px",
      fontWeight: 300,
      minWidth: 18,
      height: 18,
      "&.Mui-selected": {
        fontSize: "12px",
        fontWeight: 700
      },
    }),
  },
};
