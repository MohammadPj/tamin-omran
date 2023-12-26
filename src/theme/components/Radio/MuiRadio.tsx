import {
  OverridesStyleRules,
} from "@mui/material/styles/overrides";
import {
  Theme,
} from "@mui/material/styles";
import {RadioProps, RadioClasses} from "@mui/material/Radio";

type TMuiRadio =
  | {
      defaultProps?: Partial<RadioProps> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof RadioClasses,
              "MuiRadio",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiRadio: TMuiRadio = {
  styleOverrides: {
    root:({theme}) => ({
      padding: 0,
      marginRight: 4,
      '& svg': {
        width: 18,
        height: 18,
        fill: theme.palette.secondary.main
      }
    }),
  }
}
