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
  fontFamily: 'iran-sans',

  h1: {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '41px',
    color: '#1B262C',
    fontFamily: "iran-sans",
  },

  h2: {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '29px',
    color: '#4A4A4A',
    fontFamily: "iran-sans",
  },

  h3: {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '26px',
    color: '#4A4A4A',
    fontFamily: "iran-sans",
  },

  h4: {
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '23px',
    color: '#4A4A4A',
    fontFamily: "iran-sans",
  },
  title: {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '23px',
    color: '#4A4A4A',
    fontFamily: "iran-sans",
  },

  body1: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '23px',
    color: '#4A4A4A',
    fontFamily: "iran-sans",
  },
  body2: {
    fontWeight: 400,
    fontSize: '10px',
    lineHeight: '20px',
    color: '#4A4A4A',
    fontFamily: "iran-sans",
  },
  body3: {
    fontWeight: 400,
    fontSize: '8px',
    lineHeight: '17px',
    color: '#4A4A4A',
    fontFamily: "iran-sans",
  },
}
