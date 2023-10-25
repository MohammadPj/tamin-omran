"use client";
import React, { FC } from "react";
import { Provider } from "react-redux";
import { store } from "~/store/store";
import AppTheme from "~/theme/AppTheme";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistStore } from "redux-persist";
import { SnackbarProvider } from "notistack";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { useTheme } from "@mui/material";
import {setLocales} from "~/store/common/commonSlice";

interface Props {
  children: React.ReactNode;
  lang?: string;
  country?: string
}

persistStore(store);

const client = new QueryClient();

const RootLayoutClient: FC<Props> = ({ children, lang, country }) => {
  const theme = useTheme();

  store.dispatch(setLocales({
    lang: lang,
    country: country?.toUpperCase()
  }));

  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <SnackbarProvider
          style={{ fontFamily: "iran-sans", direction: "rtl" }}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <AppTheme>
            <CssBaseline />
            <div
              dir={"rtl"}
              style={{
                background: "#F0F0F0",
                minHeight: "100vh",
                fontFamily: "vazirmatn",
              }}
            >
              {children}
            </div>

            <ProgressBar
              height="4px"
              color={theme.palette.warning.main}
              options={{ showSpinner: true }}
              shallowRouting
            />

            <ReactQueryDevtools initialIsOpen={false} />
          </AppTheme>
        </SnackbarProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default RootLayoutClient;
