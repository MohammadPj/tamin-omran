import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import { ChipProps, ChipClasses } from "@mui/material";

type TMuiChip =
  | {
      defaultProps?: Partial<ChipProps<"div">> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof ChipClasses,
              "MuiChip",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiChip: TMuiChip = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
      },
      height: "auto",
      fontSize: 14,
      borderRadius: 2,
    }),
  },
};
