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
      backgroundColor: 'background.2',
      '&:hover': {
        backgroundColor: "background.2"

      },
      '&.Mui-focused': { background: 'background.2', },
      "& input": {
        ...(ownerState.size === "small"
          ? {
            padding: 8,
          }
          : ownerState.size === "medium"
            ? { padding: 16 }
            : { padding: 20 }),
      },
    }),
  },
};
