import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import { CardProps, CardClasses } from "@mui/material";

type TMuiCard =
    | {
        defaultProps?: Partial<CardProps<"div", {}>> | undefined;
        styleOverrides?:
        | Partial<
            OverridesStyleRules<
                keyof CardClasses,
                "MuiCard",
                Omit<Theme, "components">
            >
        >
        | undefined;
        variants?: [] | undefined;
    }
    | undefined;

export const MuiCard: TMuiCard = {
    styleOverrides: {
        root: ({ theme }) => ({
            ...(theme.palette.mode === "dark" && {
                backgroundImage: "none",
                boxShadow:"none !important"
            })
        })
    },
};
