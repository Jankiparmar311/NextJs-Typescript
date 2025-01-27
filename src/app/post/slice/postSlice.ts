import { GET_ALL_POSTS } from "@/services/url";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

interface InitialState {
  posts: object[] | null;
  loading: boolean;
}

const initialState: InitialState = {
  posts: null,
  loading: false,
};

interface ThunkAPI {
  rejectValue: string;
}

interface PostResponse {
  data: object[];
}

export const getPosts = createAsyncThunk<PostResponse, void, ThunkAPI>(
  "post/postThunk",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(GET_ALL_POSTS);

      return res as PostResponse; // Ensure correct return type
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data?.message || "Error occurred");
        return thunkAPI.rejectWithValue(
          err.response?.data?.statusCode || "UNKNOWN_ERROR"
        );
      }
      toast.error("An unexpected error occurred");
      return thunkAPI.rejectWithValue("UNKNOWN_ERROR");
    }
  }
);
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = true;
    },
    addPost: (state, action: PayloadAction<object>) => {
      if (state.posts) {
        state.posts.push(action.payload);
      } else {
        state.posts = [action.payload];
      }
    },
    editPost: (state, action: PayloadAction<{ updatedPost: object }>) => {
      const updatedPost = action.payload;
      if (state.posts) {
        const index = state.posts.findIndex(
          (i) => (i as any).id === updatedPost?.id
        );
        state.posts[index] = { ...state.posts[index], ...updatedPost };
      }
    },
    deletePost: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      if (state.posts) {
        state.posts = state.posts.filter((i) => (i as any).id !== postId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
        state.posts = null;
      })
      .addCase(
        getPosts.fulfilled,
        (state, action: PayloadAction<PostResponse>) => {
          state.loading = true;
          state.posts = action.payload.data;
        }
      )
      .addCase(getPosts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default postSlice.reducer;

export const { setLoading, addPost, editPost, deletePost } = postSlice.actions;
