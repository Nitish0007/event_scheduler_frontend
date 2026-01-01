import axios from 'axios';
import { serverConfig } from '../config/serverConfig';

const base_url = serverConfig.api_host || 'http://localhost:3000/api/v1/';

const api = axios.create({
  baseURL: base_url,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request Interceptor: Auto-attach tokens
api.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem("_es_user");
    if (user) {
      try {
        const parsedUser = JSON.parse(user).state.user;
        if (parsedUser.token) {
          config.headers.Authorization = `Bearer ${parsedUser.token}`;
        }
      } catch (e) {
        console.error("Error parsing user token", e);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Global Error Handling
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle 401 Unauthorized globally
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem("_es_user");
//       window.location.href = '/login'; 
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
