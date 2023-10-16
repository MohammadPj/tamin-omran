import "@mui/material/styles/createPalette";
interface IColor {
  main?: string;
  1: string;
  2: string;
  3: string;
  4: string;
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {}

  // allow configuration using `createTheme`
  interface PaletteOptions {}

  interface PaletteColor {
    100?: string;
    75?: string;
    50?: string;
    25?: string;
  }
  interface TypeBackground {
    main: string;
    1: string;
    2: string;
    3: string;
    4: string;
  }
  interface TypeText extends IColor {}
}

declare module "@mui/material/styles/index" {
  interface Color extends IColor {}
}
