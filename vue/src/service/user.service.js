import axiosInstance from "../api/axiosInstance";

export const getUserProfile = async () => {
  try {
    const response = await axiosInstance.get('/users/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to fetch user profile');
    } else {
      throw new Error('Network error');
    }
  }
}