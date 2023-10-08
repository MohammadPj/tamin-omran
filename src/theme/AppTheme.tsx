import React, { FC, ReactNode, useMemo } from "react";
import {ThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import customTheme from "./theme";
import {useCommon} from "@/store/common/commonSlice";

const cacheRtl = createCache({
  key: "rtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const cacheLtr = createCache({
  key: "ltr",
});

interface AppThemeProps {
  children: ReactNode;
}

const AppTheme: FC<AppThemeProps> = ({ children }) => {

  const {themeMode, isRtl} = useCommon()

  const theme = React.useMemo(
    () => customTheme(themeMode, true),
    [themeMode]
  );

  const cacheValue = useMemo(() => (isRtl ? cacheRtl : cacheLtr), [isRtl]);

  return (
    <CacheProvider value={cacheValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};

export default AppTheme;
