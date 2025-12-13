import { api } from "../api/api";

export const createContact = async (name: string, email: string, phone: string) => {
  try {
    const res = await api.post(
      "/contacts",
      { name, email, phone },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return res.data;
  } catch (error : any) {
    if (error.response) {
      throw new Error(error.response.data.message || "Terjadi kesalahan server");
    } else if (error.request) {
      throw new Error("Server tidak merespon");
    } else {
      throw new Error(error.message);
    }
  }
};


export const getContacts = async () => {
  try {
    const res = await api.get("/contacts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return res.data;
  } catch (error : any) {
    if (error.response) throw new Error(error.response.data.message || "Terjadi kesalahan server");
    else if (error.request) throw new Error("Server tidak merespon");
    else throw new Error(error.message);
  }
};

export const updateContact = async (id: string, name: string, email: string, phone: string) => {
  try {
    const res = await api.put(
      `/contacts/${id}`,
      { name, email, phone },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return res.data;
  } catch (error : any) {
    if(error.response) throw new Error(error.response.data.message || "Terjadi kesalahan server");
    else if (error.request) throw new Error("Server tidak merespon");
    else throw new Error(error.message)
  }
}

export const deleteContact = async (id: string) => {
  try {
    const res = await api.delete(`/contacts/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    return res.data;
  } catch (error : any) {
    if(error.response) throw new Error(error.response.data.message || "Terjadi kesalahan server");
    else if(error.request) throw new Error("Server tidak merespon");
    else throw new Error(error.message);
  }
}
