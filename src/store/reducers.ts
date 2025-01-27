import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "@/app/login/slice/loginSlice";
import postReducer from "@/app/post/slice/postSlice";

const reducer = combineReducers({
  login: loginReducer,
  post: postReducer,
});

export default reducer;
