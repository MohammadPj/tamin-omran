"use client";
import React, { FC } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import { store } from "@/store/store";
import AppTheme from "@/theme/AppTheme";
import { Box } from "@mui/material";

persistStore(store);

const client = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      // staleTime: 10000
    },
  },
});

interface Props {
  children: React.ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <SnackbarProvider
          style={{ fontFamily: "iran-sans", direction: "rtl" }}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <AppTheme>
            <CssBaseline />
            <Box dir={"rtl"} bgcolor={"#F0F0F0"} minHeight={"100vh"}>
              {children}
            </Box>

            <ReactQueryDevtools initialIsOpen={false} />

          </AppTheme>
        </SnackbarProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default RootLayout;
