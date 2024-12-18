import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "@/app/login/slice/loginSlice"

const reducer = combineReducers({
    login: loginReducer
})

export default reducer