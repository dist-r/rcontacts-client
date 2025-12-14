'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { api } from '../api';

export async function login(formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  // Uncomment below when backend is ready
  try {
    const res = await api.post('/auth/login', { email, password });
    // console.log('Login response:', res.data); // Debug log
    const { token } = res.data;

    // console.log('Setting cookie...'); // Debug log
    // Set cookie
    (await cookies()).set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });
    console.log('Cookie set, redirecting...'); // Debug log
  } catch (error) {
    console.log('Login error:', error); // Debug log
    console.log('Error response:', error.response?.data); // Debug log
    throw new Error(error.response?.data?.message || 'Login failed');
  }

  redirect('/home');

  // Mock response for testing
  /*
  if (email === 'test@example.com' && password === 'password') {
    const token = 'mock-token';

    // Set cookie
    (await cookies()).set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    redirect('/home');
  } else {
    throw new Error('Invalid credentials');
  }
  */
}

export async function register(formData) {
  const username = formData.get('username');
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  // Uncomment below when backend is ready
  try {
    const res = await api.post('/auth/register', { username, name, email, password });
    const { token } = res.data;

    (await cookies()).set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }

  redirect('/signin');

  // Mock response for testing
  /*
  const token = 'mock-token';

  (await cookies()).set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });

  redirect('/signin');
  */
}

export async function logout() {
  (await cookies()).delete('token');
  redirect('/signin');
}