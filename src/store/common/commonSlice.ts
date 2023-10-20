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
  },
});

export const useCommon = () =>
  useSelector((state: RootState) => state.common);

export const { changeThemeMode } = CommonSlice.actions;
export default CommonSlice.reducer;
