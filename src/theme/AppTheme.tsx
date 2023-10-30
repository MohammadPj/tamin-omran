"use client";

// React
import * as React from "react";
import { FC } from "react";

// Emotion Cache
import createCache from "@emotion/cache";

// Next SSR insert Html
import { useServerInsertedHTML } from "next/navigation";

// Emotion/react
import { CacheProvider as DefaultCacheProvider } from "@emotion/react";

interface Props {
  children: React.ReactNode;
  CacheProvider?: (props: {
    value: EmotionCache;
    children: React.ReactNode;
  }) => React.JSX.Element | null;
}

import type {
  EmotionCache,
} from "@emotion/cache";
import { ThemeProvider } from "@mui/material";
import {prefixer} from "stylis";
import rtlPlugin from 'stylis-plugin-rtl';
import customTheme from "~/theme/theme";
import {useCommon} from "~/store/common/commonSlice";

const AppTheme: FC<Props> = ({
  CacheProvider = DefaultCacheProvider,
  children,
}) => {

  const { themeMode, lang, isRtl } = useCommon();

  const cacheRtl = {
    key: 'rtl',
    prepend: true,
    stylisPlugins: [prefixer, rtlPlugin]
  };

  const  cacheLtr = {
    key: 'ltr',
    prepend: true,
  }

  const theme = React.useMemo(
    () => customTheme(themeMode, lang ),
    [themeMode, lang]
  );


  const [registry] = React.useState(() => {
    const cache = createCache(isRtl ? cacheRtl : cacheLtr);

    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: { name: string; isGlobal: boolean }[] = [];
    cache.insert = (...args) => {
      const [selector, serialized] = args;
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push({
          name: serialized.name,
          isGlobal: !selector,
        });
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const inserted = registry.flush();
    if (inserted.length === 0) {
      return null;
    }
    let styles = "";
    let dataEmotionAttribute = registry.cache.key;

    const globals: {
      name: string;
      style: string;
    }[] = [];

    inserted.forEach(({ name, isGlobal }) => {
      const style = registry.cache.inserted[name];

      if (typeof style !== "boolean") {
        if (isGlobal) {
          globals.push({ name, style });
        } else {
          styles += style;
          dataEmotionAttribute += ` ${name}`;
        }
      }
    });

    return (
      <React.Fragment>
        {globals.map(({ name, style }) => (
          <style
            key={name}
            data-emotion={`${registry.cache.key}-global ${name}`}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style }}
          />
        ))}
        {styles && (
          <style
            data-emotion={dataEmotionAttribute}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: styles }}
          />
        )}
      </React.Fragment>
    );
  });

  return (
    <CacheProvider value={registry.cache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};

export default AppTheme;
