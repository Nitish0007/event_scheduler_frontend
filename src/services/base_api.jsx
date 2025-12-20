import axios from 'axios';

// Create a scalable axios instance
// You can switch the baseURL based on environment variables (VITE_API_URL)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Auto-attach tokens
api.interceptors.request.use(
  (config) => {
    // Check if we have a token in sessionStorage (or localStorage)
    // Make sure matches where you store it in your Login component
    const user = sessionStorage.getItem("_es_user");
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
      sessionStorage.removeItem("_es_user");
      // Optional: Redirect to login
      // window.location.href = '/login'; 
    }
    return Promise.reject(error);
  }
);

export default api;
