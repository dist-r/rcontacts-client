import { api } from "../api/api";

export const getProfile = async (token: string) => {
  try {
    const res = await api.get("/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error : any) {
    if (error.response) throw new Error(error.response.data?.message || "Server error");
    else if (error.request) throw new Error("Server tidak merespon");
    else throw new Error(error.message);
  }
};
