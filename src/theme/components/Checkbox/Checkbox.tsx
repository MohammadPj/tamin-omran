import {
  ComponentsOverrides,
} from "@mui/material/styles/overrides";
import {
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from "@mui/material/styles";

type TMuiCheckbox = {
  defaultProps?: ComponentsProps["MuiCheckbox"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiCheckbox"];
  variants?: ComponentsVariants["MuiCheckbox"];
};

export const MuiCheckbox: TMuiCheckbox = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      color: theme.palette.primary.main,
    }),
  },
};
