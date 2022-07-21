import axios from "axios";
import { camelizeKeys, decamelizeKeys } from "humps";

const http = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

http.interceptors.request.use((request) =>
  request.data ? { ...request, data: decamelizeKeys(request.data) } : request
);

http.interceptors.response.use(
  (response) => ({ ...response, data: camelizeKeys(response.data) }),
  (e) => {
    if (e.response.status === 419) {
      window.location.href = "/login";
      localStorage.clear();
    } else return Promise.reject(e);
  }
);

export default http;
