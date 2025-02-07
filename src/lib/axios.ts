// import {refreshTokenApi} from 'api/auth';
// import { LOGIN_ROUTE } from "@/constants/routes";
import axios, { InternalAxiosRequestConfig, AxiosRequestConfig } from "axios";
import { BASE_URL } from "../constants/environment";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
} from "@/services/utils/appStorage";

const appAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": true,
    crossorigin: true,
  },
});

// Add a request interceptor
appAxios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken();
    if (token) {
      if (config.headers) config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return error;
  }
);

appAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalRequest = err.config;
    const refreshToken = await getRefreshToken();
    const config: AxiosRequestConfig = {
      headers: {
        "X-REFRESH": refreshToken!,
      },
    };

    if (err.response.status === 401 && !originalRequest._retry) {
      if (window)
        if (err.response.status === 401 && !originalRequest._retry) {
          // window.location.href = LOGIN_ROUTE
          // originalRequest._retry = true;
          // const data = await appAxios.patch("/auth", {}, config);

          // if (data && data.data) {
          //   if (data.data.accessToken)  setAccessToken(data.data.accessToken);
          // }
          originalRequest._retry = true;
          const refreshToken = getRefreshToken();
          const data = await appAxios.post("/auth/refresh-tokenization", {
            refreshToken,
          });
          if (data && data.data) {
            if (data.data.accessToken) setAccessToken(data.data.accessToken);
          }
        }
      return appAxios(originalRequest);
    }
    return Promise.reject(err);
  }
);
export default appAxios;
