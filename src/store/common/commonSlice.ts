import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "~/store/store";
import { PaletteMode } from "@mui/material";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface CommonState {
  themeMode: PaletteMode;
  serverError?: string | null
}

const initialState: CommonState = {
  themeMode: 'dark'
};

export const CommonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
      state.isRtl = state.rtlLanguages.includes(state.lang || "");
    },
    changeThemeMode: (state) => {
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
    },
    setDefaultError: (state, action) => {
      state.defaultError = action.payload
    },
    changeShowAlertBar: (state, action) => {
      state.showAlertBar = action.payload.show
      state.alertBarMessage = action.payload.message || ""
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setServerError: (state, action) => {
      state.serverError = action.payload
    }
  },
});

export const useCommon = (): CommonState => useSelector((state: RootState) => state.common);
export const { setLang, changeThemeMode, setDefaultError, changeShowAlertBar, setLoading, setServerError } = CommonSlice.actions;
export default persistReducer({key: "common", version: 1, storage}, CommonSlice.reducer)
