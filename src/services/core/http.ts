import axios from "axios";

export const http = axios.create({
  baseURL: "http://192.168.20.49:5005/api/",
});

http.interceptors.request.use(

  (config: any) => ({
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }),
  (error) => {
    return Promise.reject(error);
  }
);


