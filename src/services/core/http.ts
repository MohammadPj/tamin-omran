import axios from "axios";
import {store} from "~/store/store";

export const http = axios.create({
  baseURL: "http://localhost:4000/api/",
});

http.interceptors.request.use(

  (config: any) => ({
    ...config,
    headers: {
      ...config.headers,
      "x-auth-token": store.getState().user.token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }),

  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(

  (res: any) => res.data,

  (error) => {
    return Promise.reject(error);
  }
);


