'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { api } from '../api';

async function getToken() {
  return (await cookies()).get('token')?.value;
}

export async function getContacts() {
  const token = await getToken();
  if (!token) throw new Error('Unauthorized');

  // Uncomment below when backend is ready
  try {
    const res = await api.get('/contacts', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch contacts');
  }

  // Mock data for testing
  /*
  return [
    { id: '1', name: 'John Doe', email: 'john@example.com', phone: '123456789' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', phone: '987654321' },
  ];
  */
}

export async function createContact(formData) {
  const token = await getToken();
  if (!token) throw new Error('Unauthorized');

  // Uncomment below when backend is ready
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');

  try {
    await api.post('/contacts', { name, email, phone }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    revalidatePath('/home');
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create contact');
  }

  // Mock success
  /*
  revalidatePath('/home');
  */
}

export async function updateContact(formData) {
  const token = await getToken();
  if (!token) throw new Error('Unauthorized');

  // Uncomment below when backend is ready
  const id = formData.get('id');
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');

  try {
    await api.put(`/contacts/${id}`, { name, email, phone }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    revalidatePath('/home');
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update contact');
  }

  // Mock success
  /*
  revalidatePath('/home');
  */
}

export async function deleteContact(id) {
  const token = await getToken();
  if (!token) throw new Error('Unauthorized');

  // Uncomment below when backend is ready
  try {
    await api.delete(`/contacts/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    revalidatePath('/home');
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete contact');
  }

  // Mock success
  /*
  revalidatePath('/home');
  */
}