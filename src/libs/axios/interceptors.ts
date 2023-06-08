import { AxiosError, InternalAxiosRequestConfig } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/constant";
import Token from "../token/Token";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { customAxios } from "./customAxios";
import TokenRepositoryImpl from "../../repositories/token/TokenRepositoryImpl";

export const requestInterceptor = async (
  config: InternalAxiosRequestConfig
) => {
  if (
    Token.get(ACCESS_TOKEN_KEY) !== undefined &&
    Token.get(REFRESH_TOKEN_KEY) !== undefined
  ) {
    config.headers[REQUEST_TOKEN_KEY] = `Bearer ${Token.get(ACCESS_TOKEN_KEY)}`;
  } else {
    B1ndToast.showError("토큰이 존재하지 않습니다.");
    window.location.href = "/teacher";
  }

  return config;
};

export const responseErrorInterceptor = async (error: AxiosError) => {
  if (error.response) {
    const {
      response: { status },
    } = error;

    const usingAccessToken = Token.get(ACCESS_TOKEN_KEY);
    const usingRefreshToken = Token.get(REFRESH_TOKEN_KEY);

    if (
      usingAccessToken !== undefined &&
      usingRefreshToken !== undefined &&
      status === 401
    ) {
      try {
        const { data: newAccessToken } = await TokenRepositoryImpl.postRefresh({
          token: usingRefreshToken,
        });

        Token.set(ACCESS_TOKEN_KEY, newAccessToken);
        customAxios.defaults.headers.common[
          REQUEST_TOKEN_KEY
        ] = `Bearer ${newAccessToken}`;
      } catch (error) {
        B1ndToast.showError("세션이 만료 되었습니다.");
        window.location.href = "/teacher";
      }
    }
  }

  return Promise.reject(error);
};
