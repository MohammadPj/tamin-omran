import { configureStore } from "@reduxjs/toolkit";
import {PostsSlice} from "./posts/postsSlice";
import {CommonSlice, CommonState} from "./common/commonSlice";
import {UserSlice, UserState} from "~/store/user/userSlice";
import storage from "./customStorage";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";

const commonPersistConfig = {
  key: "common",
  storage: storage,
};

const userPersistConfig = {
  key: "user",
  storage: storage,
};

// const rootReducer = combineReducers({
//   posts: postsReducer,
//   common: persistReducer(commonPersistConfig, commonReducer),
// });

export const store = configureStore({
  reducer: {
    posts: PostsSlice.reducer,
    common: persistReducer<CommonState>(commonPersistConfig, CommonSlice.reducer),
    user: persistReducer<UserState>(userPersistConfig, UserSlice.reducer),
  },
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
