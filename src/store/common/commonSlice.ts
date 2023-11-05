import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "~/store/store";
import { PaletteMode } from "@mui/material";

export interface CommonState {
  themeMode: PaletteMode;
  lang: "fa" | "en";
  isRtl: boolean
}

const initialState: CommonState = {
  themeMode: "light",
  lang: "fa",
  isRtl: true
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
    setLang: (state, action) => {
      state.isRtl = action.payload === 'fa'
      state.lang = action.payload;
    },
  },
});

export const useCommon = () => useSelector((state: RootState) => state.common);

export const { changeThemeMode, setLang } = CommonSlice.actions;
export default CommonSlice.reducer;
