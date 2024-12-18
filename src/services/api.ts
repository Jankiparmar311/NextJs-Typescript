import axios, {
    AxiosInstance,
    AxiosResponse,
    AxiosError,
    AxiosHeaders,
    InternalAxiosRequestConfig,
  } from "axios";
  import conf from "../conf/conf";
  import Cookies, { cookieKeys } from "./cookies";
  
  const API_URL = `${conf.APIUrl}/api`;
  
  class Axios {
    axios: AxiosInstance;
  
    constructor(baseURL: string) {
      this.axios = axios.create({ baseURL });
  
      this.axios.interceptors.request.use(this._requestMiddleware);
      this.axios.interceptors.response.use(
        this._responseMiddleware,
        this._responseErr
      );
    }
  
    // Request Interceptor
    _requestMiddleware = (req: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      const token = Cookies.get<string>(cookieKeys.TOKEN);

      if (token) {
        req.headers = new AxiosHeaders(req.headers);
        req.headers.set(
          "Authorization",
          token.startsWith("Token") ? token : `Bearer ${token}`
        );
      }
    
      return req;
    };
  
    // Response Interceptor
    _responseMiddleware = (response: AxiosResponse): AxiosResponse => {
      const token = response?.data?.data?.token;
      if (token) {
        Cookies.set(cookieKeys?.TOKEN, token);
      }
      return response;
    };
  
    // Error Interceptor
    _responseErr = async (error: AxiosError) => {
      if (error?.response?.status === 401) {
        Cookies?.clear();
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
        return Promise.reject(error);
      }
      return Promise.reject(error);
    };
  }
  
  const axiosNisystAdmin = new Axios(API_URL).axios;
  export { axiosNisystAdmin };
  