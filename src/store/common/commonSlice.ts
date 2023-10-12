import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "~/store/store";
import { PaletteMode } from "@mui/material";

export interface CommonState {
  themeMode: PaletteMode;
  serverError?: string | null;
  isRtl: boolean
}

const initialState: CommonState = {
  themeMode: "light",
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
  },
});

export const useCommon = (): CommonState =>
  useSelector((state: RootState) => state.common);

export const { changeThemeMode } = CommonSlice.actions;

export default CommonSlice.reducer
