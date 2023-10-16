import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {RootState} from "~/store/store";

interface IInitial {
  posts: string[]
}

const initialState: IInitial = {
  posts: ['1']
}

export const PostsSlice = createSlice<IInitial, SliceCaseReducers<IInitial>>({
  name: "backoffice-orders",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
  },
})

export const usePosts = (): IInitial => useSelector((state: RootState) => state.posts)
export const { setPosts } = PostsSlice.actions
export default PostsSlice.reducer