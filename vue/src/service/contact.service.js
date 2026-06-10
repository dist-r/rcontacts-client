import {api} from "../api/axiosInstance";

export const createContact = async (name , email, phone) => {
  try {
    const response = await api.post('/contacts', {
      name,
      email,
      phone
    },
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
  );
    return response.data.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to create contact');
    } else {
      throw new Error('Network error');
    }
  }
}

export const getContacts = async () => {
  try {
    const response = await api.get('/contacts', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to fetch contacts');
    } else {
      throw new Error('Network error');
    }
  }
}

export const deleteContact = async (contactId) => {
  try {
    const response = await api.delete(`/contacts/${contactId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to delete contact');
    } else {
      throw new Error('Network error');
    }
  }
}

export const updateContact = async (contactId, name, email, phone) => {
  try {
    const response = await api.put(`/contacts/${contactId}`, {
      name,
      email,
      phone
    },
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
  );
    return response.data.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to update contact');
    } else {
      throw new Error('Network error');
    }
  }
}
