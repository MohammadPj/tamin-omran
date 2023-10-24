import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "~/store/store";
import { PaletteMode } from "@mui/material";

export interface CommonState {
  themeMode: PaletteMode;
  isRtl: boolean;
  lang: 'fa' | 'en'
}

const initialState: CommonState = {
  themeMode: "light",
  isRtl: true,
  lang: 'fa'
};

if (typeof window !== "undefined") {
  // Client-side-only code
  console.log('window ', window)
}

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
    setLanguage: (state, action) => {
      state.themeMode = action.payload
    },
  },
});

export const useCommon = () =>
  useSelector((state: RootState) => state.common);

export const { changeThemeMode, setLanguage } = CommonSlice.actions;
export default CommonSlice.reducer;
