import {combineReducers, configureStore} from "@reduxjs/toolkit";
import postsReducer from "~/store/posts/postsSlice"
import commonReducer from "~/store/common/commonSlice"
import storage from "./customStorage";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, persistReducer,
} from "redux-persist";

const commonPersistConfig = {
  key: "auth",
  storage: storage,
};

const rootReducer = combineReducers({
  posts: postsReducer,
  common: persistReducer(commonPersistConfig, commonReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV !== "production",
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
