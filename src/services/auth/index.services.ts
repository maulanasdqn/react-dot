import ApiService from "../api/index.services";
import { TokenService } from "../token/index.services";
import { LoginTypes } from "../../utilities/types/login.types";
import { RegisterType } from "../../utilities/types/register.types";
import { getErrorMessage, handleError } from "../../utilities/helper";
import qs from "qs";

const AuthService = {
  login: async function (payload: LoginTypes) {
    const { email, password } = payload;
    try {
      const requestData = {
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: "auth/local/login",
        data: qs.stringify({
          email,
          password,
        }),
      };

      const response = await ApiService.customRequest(requestData);
      TokenService.saveToken(response.data.access_token);
      TokenService.saveRefreshToken(response.data.refresh_token);
      ApiService.setHeader();
      return response.data.access_token;
    } catch (error) {
      throw handleError(error);
    }
  },

  refreshToken: async function () {
    const refreshToken = TokenService.getRefreshToken();

    const requestData = {
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      url: "/auth/refresh",
      data: {
        refresh_token: refreshToken,
      },
    };

    try {
      const response = await ApiService.customRequest(requestData);
      TokenService.saveToken(response.data.access_token);
      TokenService.saveRefreshToken(response.data.refresh_token);
      ApiService.setHeader();
      return response.data.access_token;
    } catch (error) {
      throw handleError(error);
    }
  },

  logout() {
    window.localStorage.clear();
    ApiService.removeHeader();
  },

  register: async function (payload: RegisterType) {
    const { email, password, fullname, grade, studentId } = payload;
    const registerData = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      url: "/auth/local/register",
      data: qs.stringify({
        email,
        password,
        fullname,
        grade,
        student_id: studentId,
      }),
    };

    try {
      return await ApiService.customRequest(registerData);
    } catch (error) {
      throw getErrorMessage(error);
    }
  },
};
export { AuthService };
