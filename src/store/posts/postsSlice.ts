import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {RootState} from "@/store/store";

interface IInitial {
  posts: any[]
}

const initialState: IInitial = {
  posts: ['1']
}

const postsSlice = createSlice<IInitial, SliceCaseReducers<IInitial>>({
  name: "backoffice-orders",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
  },
})

export const usePosts = (): IInitial => useSelector((state: RootState) => state.posts)
export const { setPosts } = postsSlice.actions
export default postsSlice.reducer