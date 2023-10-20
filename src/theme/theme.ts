import "./palette/palette.d.ts";

import { createTheme } from "@mui/material";
import { MuiCssBaseline } from "./components/mui-css-baseline";
import { darkPalette } from "~/theme/palette/dark/darkPalette";
import { lightPalette } from "~/theme/palette/light/lightPalette";
import { typography } from "./components/Typography/index";
import { MuiTextField } from "~/theme/components/TextField/TextField";
import { MuiAlert } from "~/theme/components/Alert/Alert";
import { MuiButton } from "~/theme/components/Button/MuiButton";
import { MuiChip } from "~/theme/components/Chip/MuiChip";
import { MuiTab } from "~/theme/components/Tabs/Tab/MuiTab";
import { MuiPagination } from "~/theme/components/Pagination/MuiPagination";
import { MuiPaginationItem } from "~/theme/components/Pagination/MuiPaginationItem";
import { MuiCheckbox } from "~/theme/components/Checkbox/Checkbox";
import { MuiSelect } from "~/theme/components/Select/MuiSelect";
import { MuiIconButton } from "~/theme/components/IconButton/MuiIconButon";
import { MuiOutlinedInput } from "~/theme/components/TextField/MuiOutlinedInput";
import { MuiMenu } from "~/theme/components/menu/MuiMenu";
import { MuiFilledInput } from "~/theme/components/TextField/MuiFilledInput";
import { MuiCard } from "~/theme/components/Card/MuiCard";
import {MuiInputLabel} from "~/theme/components/InputLabel/MuiInputLabel";
import {MuiTypography} from "~/theme/components/Typography/MuiTypography";
import {MuiRadio} from "~/theme/components/Radio/MuiRadio";
import {MuiSwitch} from "~/theme/components/switch/MuiSwitch";
import {MuiContainer} from "~/theme/components/Container/MuiContainer";
import {MuiSkeleton} from "~/theme/components/Skeleton/MuiSkeleton";
import {MuiAccordion} from "~/theme/components/accordion/MuiAccodrion";

type PaletteMode = "light" | "dark";

const getDesignTokens = (mode: PaletteMode) => ({
  mode,
  ...(mode === "light" ? lightPalette : darkPalette),
});

const customTheme = (mode: PaletteMode, isRtl?: boolean) =>
  createTheme({
    direction: isRtl ? "rtl" : "ltr",
    palette: getDesignTokens(mode),
    spacing: 4,
    typography,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    components: {
      MuiAccordion,
      MuiContainer,
      MuiSkeleton,
      MuiCssBaseline,
      MuiTextField,
      MuiOutlinedInput,
      MuiFilledInput,
      MuiAlert,
      MuiButton,
      MuiChip,
      MuiTab,
      MuiPagination,
      MuiPaginationItem,
      MuiCheckbox,
      MuiSelect,
      MuiSwitch,
      MuiIconButton,
      MuiMenu,
      MuiCard,
      MuiTypography,
      MuiInputLabel,
      MuiRadio,
    },
  });

export default customTheme;
