declare module "@mui/material/styles" {
  interface TypographyVariants {
    title: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
    body3?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsColorOverrides {
    lime: true;
  }

  interface TypographyPropsVariantOverrides {
    title:true;
    body1:true;
    body2:true;
    body3:true;
  }
}

export const typography = {
  fontFamily: 'vazirmatn',


}
