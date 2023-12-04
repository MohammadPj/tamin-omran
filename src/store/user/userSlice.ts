import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "~/store/store";
import { PaletteMode } from "@mui/material";

export interface UserState {
  token?: string;
}

const initialState: UserState = {};

export const UserSlice = createSlice<UserState, SliceCaseReducers<UserState>>({
  name: "user",
  initialState,
  reducers: {
   setToken: (state, action) => {
     console.log('run', action.payload)
     state.token = action.payload
   }
  },
});

export const useUser = () => useSelector((state: RootState) => state.common);

export const { setToken } = UserSlice.actions;
export default UserSlice.reducer;
