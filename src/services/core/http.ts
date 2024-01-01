import axios from "axios";
import { store } from "~/store/store";

export const baseURL =
  process?.env?.NEXT_PUBLIC_BASE_URL || "https://taminomranqateh.com/api";

export const baseImageUrl =
  process?.env?.NEXT_PUBLIC_BASE_Image_URL || "https://taminomranqateh.com/";

export const http = axios.create({
  baseURL,
});

http.interceptors.request.use(
  (config: any) => ({
    ...config,
    headers: {
      ...config.headers,
      "x-auth-token": store.getState().user.token,
      Accept: "application/json",
      "Content-Type": config?.headers?.["Content-Type"] || "application/json",
    },
  }),

  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (res): any => res.data,

  (error) => {
    return Promise.reject(error);
  }
);
