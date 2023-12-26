import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { OutlinedInputProps, OutlinedInputClasses } from "@mui/material";
import { Theme } from "@mui/material/styles";

type TMuiOutlinedInput =
  | {
      defaultProps?: Partial<OutlinedInputProps> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof OutlinedInputClasses,
              "MuiOutlinedInput",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiOutlinedInput: TMuiOutlinedInput = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      borderRadius: 4,
      overflow: "hidden",

      "& .MuiInputBase-root.Mui-disabled": {
        color: "rgba(35,32,32,0.6)", // (default alpha is 0.38)
      },
      "& .MuiOutlinedInput-input": {
        background: "white",
        paddingTop: 14,
        paddingBottom: 14,
        "&.Mui-disabled": {
          WebkitTextFillColor: theme.palette.grey.main,
        },
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.grey["3"],
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.grey["3"],
      },
      "&.Mui-focused ": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.grey["3"],
          borderWidth: 1,
        },
      },
      "&.Mui-error ": {
        boxShadow: "0px 0px 10px rgba(94, 129, 233, 0.2)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.error["100"],
          borderWidth: 1,
        },
      },
    }),
  },
};
