import base_api from "./base_api";

export const authService = {
  login: async (role, data) => {
    try {
      const payload = { "user": data }
      const response = await base_api.post(`${role}s/sign_in`, payload);
      return response;
    }catch (error) {
      console.log("Error while logging in: ", error);
      throw error;
    }
  },

  signup: async (role, data) => {
    try {
      const payload = { "user": data }
      const response = await base_api.post(`${ role}s/sign_up`, payload);
      return response;
    }catch (error) {
      console.log("Error while signing up: ", error);
      throw error;
    }
  }
}

export default authService;
