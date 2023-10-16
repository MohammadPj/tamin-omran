import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import { TypographyClasses, TypographyProps } from "@mui/material/Typography";

type TMuiTypography =
  | {
      defaultProps?: Partial<TypographyProps<"span", {}>> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof TypographyClasses,
              "MuiTypography",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiTypography: TMuiTypography = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      ...(theme.palette.mode === "dark" && {
        color: "#F2F2F2",
      }),
    }),
  },
};
