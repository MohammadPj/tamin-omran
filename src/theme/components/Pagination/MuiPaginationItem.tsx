import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { PaginationItemProps, PaginationItemClasses } from "@mui/material";
import {Theme} from "@mui/material/styles";

type TMuiPaginationItem =
  | {
      defaultProps?: Partial<PaginationItemProps<"div">> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof PaginationItemClasses,
              "MuiPaginationItem",
              Omit<Theme, "components">
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
      margin: 0,
    }),
    outlined: ({ ownerState, theme }) => ({
      background: theme.palette.background["1"],
      fontWeight: 700,
      color: theme.palette.primary.main,
      borderColor: theme.palette.grey["2"],
      '&.Mui-selected': {
        background: theme.palette.background["1"],
        border: '1px solid',
        borderColor: theme.palette.primary.main,
      }
    }),
    ellipsis: ({theme}) => ({
      height: '100%',
      maxHeight: 32,
      borderRadius: 4,
      border: '1px solid',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: theme.palette.grey["2"],
    }),
    icon: {
      transform: "scaleX(-1)"
    }
  },
};
