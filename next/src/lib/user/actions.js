'use server';

import { cookies } from 'next/headers';
import { api } from '../api';

export async function getProfile() {
  const token = (await cookies()).get('token')?.value;
  if (!token) throw new Error('Unauthorized');

  // Uncomment below when backend is ready
  try {
    const res = await api.get('/users/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch profile');
  }

  // Mock data
  /*
  return { id: '1', name: 'Test User', email: 'test@example.com' };
  */
}