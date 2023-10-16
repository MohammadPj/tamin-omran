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
    icon: ({ theme }) => ({
      top: "43%",
      right: 13,
      "&.Mui-disabled path": { stroke: theme.palette.primary.back },
      stroke: '#524d4d'
    }),
    outlined: {
      "&.Mui-disabled:hover ~ fieldset ": {
        borderColor: "#BDBDBD",
      },
    },
    filled: ({ theme }) => ({
      background: "#727CF4",
      borderRadius: 8,
      padding: "8px 12px 8px 16px",
      color: theme.palette.text.primary,
      "& svg": {
        fill: "white",
      },
      "& ~ input": {
        padding: "8px 12px 8px 16px",
      },
      "& .MuiSelect-root:before": {
        display: "none",
      },
    }),
    iconFilled: {
      "& path": {
        stroke: "white",
      },
    },
    select: ({ theme }) => ({
      backgroundColor: theme.palette.background["4"],
      height: 14,
      minHeight: 14
    }),
  },
};
