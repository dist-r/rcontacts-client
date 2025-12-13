import {api} from "../api/api";

export const login = async (email: string, password: string) => {
  try {
    const res = await api.post("/auth/login", { email, password });
    return res.data;
  } catch (error: any) {
    if(error.response) {
      throw new Error(error.response.data.message)
    }
    throw new Error("Something went wrong")
  }
};

export const register = async (username: string, name: string, email: string, password: string) => {
  try {
    const res = await api.post("/auth/register", { username, name, email, password });
    return res.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong");
    }
  }
};
