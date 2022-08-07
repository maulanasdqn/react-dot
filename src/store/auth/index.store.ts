import { atom } from "recoil";
import { TokenService } from "../../services/token/index.services";

export const useAuthStore = atom({
  key: "auth-store",
  default: {
    isAuthenticated: false,
    accessToken: TokenService.getToken(),
    refreshToken: TokenService.getRefreshToken(),
  },
});
