import axiosInstance from "../api/axiosInstance";

export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Login failed');
    } else {
      throw new Error('Network error');
    }
  }
}

export const register = async (username, name, email, password) => {
  try {
    const response = await axiosInstance.post('/auth/register', { username, name, email, password });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Registration failed');
    } else {
      throw new Error('Network error');
    }
  }
}