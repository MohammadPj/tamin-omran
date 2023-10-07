import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {RootState} from "@/store/store";

interface IInitial {
  posts: any[]
}

const initialState: IInitial = {
  posts: ['1']
}

const postsSlice = createSlice({
  name: "backoffice-orders",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.orders = action.payload
    },
  },
})

export const usePosts = (): IInitial => useSelector((state: RootState) => state.posts)
export const { setPosts } = postsSlice.actions
export default postsSlice.reducer