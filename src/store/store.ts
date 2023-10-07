import {combineReducers, configureStore} from "@reduxjs/toolkit";
import postsReducer from "@/store/posts/postsSlice"
import commonReducer from "@/store/common/commonSlice"
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";


export const store = configureStore({
  reducer: {
    posts: postsReducer,
    common: commonReducer
  },
  // devTools: process.env.NODE_ENV !== "production",
  devTools: !import.meta.env.PROD,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
