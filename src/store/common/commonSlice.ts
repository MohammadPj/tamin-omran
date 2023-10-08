import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "~/store/store";
import { PaletteMode } from "@mui/material";
import { persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface CommonState {
  themeMode: PaletteMode;
  serverError?: string | null;
  isRtl: boolean
}

const initialState: CommonState = {
  themeMode: "dark",
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
