import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "../../../services/cookies";
import { axiosNisystAdmin } from "../../../services/api";
import { LOGIN, LOGOUT, VERIFY_AUTH } from "../../../services/url";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const token = Cookies.get("token") || "";

interface loginState {
  isAuth: boolean;
  loading: boolean;
  token: string;
  error: string | null;
  user: object | null;
}

const initialState: loginState = {
  isAuth: !!token,
  loading: false,
  token: "",
  error: "",
  user: null,
};

interface LoginPayload {
  email: string;
  password: string;
  deviceToken: string;
  platform: string;
  appVersion: string;
  osVersion: string;
  model: string;
}

interface LoginResponse {
  data: {
    token: string;
    userId: number;
    isSuccess: boolean;
  };
}

interface OtpPayload {
  authenticationCode: string;
  userId: string;
}

interface OtpResponse {
  data: {
    token: string;
    [key: string]: unknown;
  };
}

interface ThunkAPI {
  rejectValue: string;
}

interface LogoutResponse {
  isSuccess: boolean;
}

export const getLogin = createAsyncThunk<LoginResponse, LoginPayload, ThunkAPI>(
  "authentication/LoginThunk",
  async (payload, thunkAPI) => {
    try {
      const res = await axiosNisystAdmin.post(LOGIN, payload);
      Cookies.set("user", res?.data?.data);
      Cookies.set("userId", res?.data?.data?.userId);
      return res.data as LoginResponse; // Ensure correct return type
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

export const verifyOtp = createAsyncThunk<OtpResponse, OtpPayload, ThunkAPI>(
  "authentication/OtpThunk",
  async (payload, thunkAPI) => {
    try {
      const res = await axiosNisystAdmin.post(VERIFY_AUTH, payload);
      Cookies.set("user", res?.data?.data);
      return res.data as OtpResponse;
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

export const logout = createAsyncThunk<LogoutResponse, void, ThunkAPI>(
  "authentication/logout",
  async (_, thunkAPI) => {
    try {
      const res = await axiosNisystAdmin.get(LOGOUT);
      return res.data as LogoutResponse;
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
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLogin.pending, (state) => {
        state.loading = true;
        state.isAuth = false;
      })
      .addCase(
        getLogin.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.loading = false;
          state.isAuth = false;
          state.token = action.payload.data.token;
          state.user = null;
        }
      )
      .addCase(getLogin.rejected, (state) => {
        state.loading = false;
        state.isAuth = false;
      });

    builder
      .addCase(verifyOtp.pending, (state) => {
        state.loading = false;
      })
      .addCase(
        verifyOtp.fulfilled,
        (state, action: PayloadAction<OtpResponse>) => {
          state.loading = false;
          state.token = action.payload.data.token;
          state.isAuth = true;
          state.user = action.payload.data;
        }
      )
      .addCase(verifyOtp.rejected, (state) => {
        state.loading = false;
        state.isAuth = false;
      });
  },
});
export default loginSlice.reducer;
export const { setIsAuth } = loginSlice.actions;
