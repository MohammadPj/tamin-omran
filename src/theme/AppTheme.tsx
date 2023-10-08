"use client";

import React, { FC } from "react";
import { ThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import customTheme from "./theme";
import { useCommon } from "@/store/common/commonSlice";

// const cacheRtl = createCache({
//   key: "rtl",
//   stylisPlugins: [prefixer, rtlPlugin],
// });
//
// const cacheLtr = createCache({
//   key: "ltr",
// });

const AppTheme: FC = ({ children }) => {
  const { themeMode, isRtl } = useCommon();

  // const [{ cache, flush }] = React.useState(() => {
  // const cache = isRtl
  //   ? createCache({
  //       key: "rtl",
  //       stylisPlugins: [prefixer, rtlPlugin],
  //     })
  //   : createCache({
  //       key: "ltr",
  //     });

  //   const cache = createCache({key: 'mui'})
  //   cache.compat = true;
  //   const prevInsert = cache.insert;
  //   let inserted: string[] = [];
  //
  //   cache.insert = (...args) => {
  //     const serialized = args[1];
  //     if (cache.inserted[serialized?.name] === undefined) {
  //       inserted.push(serialized?.name);
  //     }
  //     return prevInsert(...args);
  //   };
  //
  //   const flush = () => {
  //     const prevInserted = inserted;
  //     inserted = [];
  //     return prevInserted;
  //   };
  //
  //   return { cache, flush };
  // });
  //
  // useServerInsertedHTML(() => {
  //   const names = flush();
  //   if (names.length === 0) {
  //     return null;
  //   }
  //
  //   let styles = "";
  //
  //   for (const name of names) {
  //     styles += cache.inserted[name];
  //   }
  //   return (
  //     <style
  //       key={cache.key}
  //       data-emotion={`${cache.key} ${names.join(" ")}`}
  //       dangerouslySetInnerHTML={{
  //         __html: styles,
  //       }}
  //     />
  //   );
  // });

  const cache = isRtl
    ? createCache({
        key: "mui-cache",
        stylisPlugins: [prefixer, rtlPlugin],
        prepend: true,
      })
    : createCache({ key: "mui-cache", prepend: true });

  const theme = React.useMemo(
    () => customTheme(themeMode, isRtl),
    [themeMode, isRtl]
  );

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AppTheme;
