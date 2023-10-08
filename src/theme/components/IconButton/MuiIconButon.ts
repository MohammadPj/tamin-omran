import { ComponentsOverrides } from "@mui/material/styles/overrides";
import {
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from "@mui/material/styles";

type TMuiIconButton = {
  defaultProps?: ComponentsProps["MuiIconButton"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiIconButton"];
  variants?: ComponentsVariants["MuiIconButton"];
};

export const MuiIconButton: TMuiIconButton = {
  styleOverrides: {
    root: {
      borderRadius: 10,
    },
  },
};
