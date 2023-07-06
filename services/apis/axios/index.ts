import axios from "axios";

import baseURL from "./api.baseUrl";

const _axios = axios.create({
  baseURL,
  headers: {
    "X-RapidAPI-Key": "486906e9b3msha6fa29d5d084d65p1cdef0jsn1208bc330539",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
});

const handleError = (error: any) => {
  return Promise.reject(error);
};

_axios.interceptors.request.use((config) => {
  return config;
}, handleError);

export default _axios;
