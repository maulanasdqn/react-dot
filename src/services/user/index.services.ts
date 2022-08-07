import ApiService from "../api/index.services";
import { UserDto } from "../../utilities/dto/users.dto";
import { handleError } from "../../utilities/helper";

const UsersService = {
  fetchUser: async function () {
    const requestData = {
      method: "get",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      url: "/users/",
    };

    try {
      const response = await ApiService.customRequest(requestData);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  retrieveUser: async function (id: number) {
    const requestData = {
      method: "get",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      url: `/users/${id}`,
    };

    try {
      const response = await ApiService.customRequest(requestData);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  retrieveMe: async function () {
    const usersData = {
      method: "get",
      headers: { "Content-Type": "application/json" },
      url: "/users/me/",
    };

    try {
      const res = await ApiService.customRequest(usersData);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  updateUsers: async function (payload: UserDto) {
    const { id } = payload;
    const usersData = {
      method: "put",
      headers: { "Content-Type": "application/json" },
      url: `/users/update/${id}`,
      data: payload,
    };

    try {
      const res = await ApiService.customRequest(usersData);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  updateMe: async function (payload: UserDto) {
    const usersData = {
      method: "put",
      headers: { "Content-Type": "application/json" },
      url: `/users/me`,
      data: payload,
    };

    try {
      const res = await ApiService.customRequest(usersData);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  deleteUsers: async function (id: number) {
    const usersData = {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      url: `/users/${id}`,
    };

    try {
      const res = await ApiService.customRequest(usersData);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};
export { UsersService };
