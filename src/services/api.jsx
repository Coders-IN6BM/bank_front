import axios from "axios";

const apiClient = axios.create({
baseURL: "http://localhost:3001/bank/v1",
  timeout: 5000,
  httpsAgent: false,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const convertCurrency = async (formData) => {
  try {
      return await apiClient.post('/converter/convertDivisa', formData)
  } catch (error) {
      return{
          error: true,
          message: error.message
      }
  }
}

export const loginUser = async (credentials) => {
  try {
    const response = await apiClient.post('/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  } catch (error) {
    return {
      error: true,
      message: error.response?.data?.message || error.message
    };
  }
};