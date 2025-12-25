import axios from 'axios';
import { serverConfig } from '../config/serverConfig';

const base_url = serverConfig.api_host || 'http://localhost:3000';
const storedToken = localStorage.getItem("_es_user") || "";
console.log(storedToken);
const token = storedToken ? `Bearer ${JSON.parse(storedToken).token}` : "";
const api = axios.create({
  baseURL: base_url,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': token
  },
});

// Request Interceptor: Auto-attach tokens
api.interceptors.request.use(
  (config) => {
    // Check if we have a token in sessionStorage (or localStorage)
    // Make sure matches where you store it in your Login component
    const user = localStorage.getItem("_es_user");
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        // Assuming your backend expects 'Bearer <token>'
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
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized globally
    if (error.response && error.response.status === 401) {
      // Clear invalid token
      localStorage.removeItem("_es_user");
      // Optional: Redirect to login
      // window.location.href = '/login'; 
    }
    return Promise.reject(error);
  }
);

export default api;
