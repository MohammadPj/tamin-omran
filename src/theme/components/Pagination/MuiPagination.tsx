import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import { PaginationProps, PaginationClasses } from "@mui/material";
import {getDeviceType} from "~/helpers/methods";

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

const device = getDeviceType()
export const MuiPagination: TMuiPagination = {
  defaultProps: {
    size: device === "Mobile" ? "small" : "medium",
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
