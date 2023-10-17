import { OverridesStyleRules } from "@mui/material/styles/overrides";
import {
  FilledInputProps,
  FilledInputClasses,
} from "@mui/material/FilledInput";
import { Theme } from "@mui/material/styles";

type TMuiFilledInput =
  | {
    defaultProps?: Partial<FilledInputProps> | undefined;
    styleOverrides?:
    | Partial<
      OverridesStyleRules<
        keyof FilledInputClasses,
        "MuiFilledInput",
        Omit<Theme, "components">
      >
    >
    | undefined;
    variants?: [] | undefined;
  }
  | undefined;

export const MuiFilledInput: TMuiFilledInput = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      backgroundColor: 'grey.1',
      '&:hover': {
        backgroundColor: "grey.1"

      },
      '&.Mui-focused': { background: 'grey.1', },

    }),
  },
};
