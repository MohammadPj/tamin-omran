import React, { Suspense } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import {store} from "@/store/store";
import AppTheme from "@/theme/AppTheme";

const persistor = persistStore(store);
const client = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      // staleTime: 10000
    },
  },
});

const RootLayout = ({ children }) => {
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SnackbarProvider
            style={{ fontFamily: "iran-sans", direction: "rtl" }}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <AppTheme>
              {children}

              <ReactQueryDevtools initialIsOpen={false} />

              <CssBaseline />
            </AppTheme>
          </SnackbarProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default RootLayout;
