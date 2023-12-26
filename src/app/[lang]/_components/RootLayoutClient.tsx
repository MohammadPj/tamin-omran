"use client";
import React, { FC, useEffect } from "react";
import {Provider, useDispatch} from "react-redux";
import { store } from "~/store/store";
import AppTheme from "~/theme/AppTheme";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistStore } from "redux-persist";
import { SnackbarProvider } from "notistack";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import {Box, useTheme} from "@mui/material";
import { setLang } from "~/store/common/commonSlice";

interface Props {
  children: React.ReactNode;
  lang?: string;
  country?: string;
}

persistStore(store);

const client = new QueryClient();

const RootLayoutClient: FC<Props> = ({ children, lang }) => {
  const theme = useTheme();
  store.dispatch(setLang(lang))

  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <SnackbarProvider
          style={{ fontFamily: "iran-sans", direction: "rtl" }}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <AppTheme>
            <CssBaseline />
            <Box
              dir={lang === 'fa' ? 'rtl' : 'ltr'}
              sx={{
                minHeight: "100vh",
                fontFamily: "vazirmatn",
              }}
            >
              {children}
            </Box>

            <ProgressBar
              height="4px"
              color={theme.palette.warning.main}
              options={{ showSpinner: true }}
              shallowRouting
            />

            {/*<ReactQueryDevtools initialIsOpen={false} />*/}
          </AppTheme>
        </SnackbarProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default RootLayoutClient;
