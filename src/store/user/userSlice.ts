import {createSlice, PayloadAction, SliceCaseReducers} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "~/store/store";
import {IUser} from "~/types/user";

export interface UserState {
  token?: string;
  userInfo?: IUser
}

const initialState: UserState = {};

export const UserSlice = createSlice<UserState, SliceCaseReducers<UserState>>({
  name: "user",
  initialState,
  reducers: {
   setToken: (state, action) => {
     state.token = action.payload
   },
    setUserInfo: (state, action: PayloadAction<IUser>) => {
      state.userInfo = action.payload
    }
  },
});

export const useUser = () => useSelector((state: RootState) => state.user);

export const { setToken, setUserInfo } = UserSlice.actions;
export default UserSlice.reducer;
