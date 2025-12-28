import base_api from "./base_api";

const crudService = {
  create: async (path, payload) => {
    try {
      const response = await base_api.post(path, payload);
      return response;
    }catch (error) {
      console.log("Error while creating: ", error);
      throw error;
    }
  },

  index: async (path, params) => {
    try {
      const response = await base_api.get(path, { params });
      return response;
    }catch (error) {
      console.log("Error while indexing: ", error);
      throw error;
    }
  },

  update: async (path, payload) => {
    try {
      const response = await base_api.put(path, payload);
      return response;
    }catch (error) {
      console.log("Error while updating: ", error);
      throw error;
    }
  },

  delete: async (path, id) => {
    try {
      const response = await base_api.delete(`${path}/${id}`);
      return response;
    }catch (error) {
      console.log("Error while deleting: ", error);
      throw error;
    }
  }
}

export default crudService;