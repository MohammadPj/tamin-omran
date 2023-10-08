import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import { AlertClasses, AlertProps } from "@mui/material/Alert";

type TMuiAlert =
  | {
      defaultProps?: Partial<AlertProps> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof AlertClasses,
              "MuiAlert",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: any[] | undefined;
    }
  | undefined;

export const MuiAlert: TMuiAlert = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      ...(ownerState.severity === "error" && {
        backgroundColor: " #F9D2CE",
      }),
      borderRadius: 10,
      paddingTop: 4,
      paddingBottom: 4,
      "& .MuiAlert-message": {
        fontSize: 12,
        fontWeight: 500,
        color: theme.palette.gray["100"]
      },
    }),
  },
};
