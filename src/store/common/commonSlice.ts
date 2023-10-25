import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "~/store/store";
import { PaletteMode } from "@mui/material";

export interface CommonState {
  themeMode: PaletteMode;
  isRtl: boolean;
  locales: {
    lang: 'fa' | 'en',
    country: 'IR' | "US"
  }
}

const initialState: CommonState = {
  themeMode: "light",
  isRtl: true,
  locales: {
    lang: 'fa',
    country: 'IR'
  }
};

export const CommonSlice = createSlice<
  CommonState,
  SliceCaseReducers<CommonState>
>({
  name: "common",
  initialState,
  reducers: {
    changeThemeMode: (state) => {
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
    },
    setLocales: (state, action) => {
      console.log('run')
      state.locales = action.payload
    },
  },
});

export const useCommon = () =>
  useSelector((state: RootState) => state.common);

export const { changeThemeMode, setLocales } = CommonSlice.actions;
export default CommonSlice.reducer;
