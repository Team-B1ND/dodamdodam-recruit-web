import axios from "axios";
import config from "../../config/config.json";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/constant";
import Token from "../token/Token";
import { requestInterceptor, responseErrorInterceptor } from "./interceptors";

export const customAxios = axios.create({
  baseURL: config.DODAM_SERVER,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.get(ACCESS_TOKEN_KEY)}`,
  },
});

customAxios.interceptors.request.use(requestInterceptor);
customAxios.interceptors.response.use(
  (config) => config,
  responseErrorInterceptor
);
