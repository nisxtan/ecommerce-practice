import axios from "axios";

const $axios = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
});

$axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
export default $axios;

$axios.interceptors.request.use(function (config) {
  //do something before request is sent
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
