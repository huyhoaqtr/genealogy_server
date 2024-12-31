import envConfig from "@/config/environment";
import axios from "axios";

const baseURL = envConfig.API_URL;
export const isServer = () => typeof window === "undefined";

const axiosInstance = axios.create({
  timeout: 30000,
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    if (!isServer()) {
      config.headers.Authorization = `Bearer `;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  async (response) => {
    if (response.config.url === "/auth/logout") {
      //logout
    }
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      //logout
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
