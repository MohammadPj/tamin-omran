import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import { SelectProps, SelectClasses } from "@mui/material";

type TMuiSelect =
  | {
      defaultProps?: Partial<SelectProps<unknown>> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof SelectClasses,
              "MuiSelect",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiSelect: TMuiSelect = {
  defaultProps: {
    MenuProps: {
      PaperProps: {
        sx: { mt: 3, boxShadow: "0px 0px 10px rgba(94, 129, 233, 0.2)" },
      },
      transformOrigin: { horizontal: "center", vertical: "top" },
    },
  },

  styleOverrides: {
    outlined: {
      "&.Mui-disabled:hover ~ fieldset ": {
        borderColor: "#BDBDBD",
      },
    },
    root: ({theme}) => ({
      borderRadius: 4,
      '&::before': { display: 'none' },
      '&::after': { display: 'none' },
    }),
    filled: ({ theme }) => ({
      overflow: 'hidden',
      padding: "12px 12px 12px 16px",
      color: theme.palette.text.primary,
      "~:before": {
        border: "none",
      },
      "& svg": {
        fill: "white",
      },
      "& ~ input": {
        padding: "8px 12px 8px 16px",
      },
      "& .MuiSelect-root:before": {},
    }),

    select: ({ theme }) => ({
      backgroundColor: theme.palette.background["4"],
      height: 14,
      minHeight: 14,
    }),
  },
};
