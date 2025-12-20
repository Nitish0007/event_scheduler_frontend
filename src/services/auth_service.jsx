import base_api from "./base_api";

export const authService = {
  login: async (data) => {
    try {
      const response = await base_api.post("/login", data);
      return response.data;
    }catch (error) {
      console.log("Error while logging in: ", error);
      throw error;
    }
  },

  signup: async (data) => {
    try {
      const response = await base_api.post("/signup", data);
      return response.data;
    }catch (error) {
      console.log("Error while signing up: ", error);
      throw error;
    }
  }
}