'use client';

import { useState } from 'react';
import { login } from '../lib/auth/actions';
import { FaTimes, FaUsers } from 'react-icons/fa';

export default function ModalSignIn({ errorMessage, showModal = true }) {
  const [signInData, setSignInData] = useState({
    email: '',
    password: ''
  });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState(null);

  if (!showModal) return null;

  const onChange = (e) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError(null);
    if (signInData.email.trim() === '' || signInData.password.trim() === '') {
      setLoginError('Please fill in all fields!');
      return;
    }
    setIsLoggingIn(true);
    try {
      await login(new FormData(e.target));
      // If successful, reload the page to update state
      window.location.reload();
    } catch (error) {
      setLoginError(error.message || 'Login failed');
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur flex justify-center items-center z-50">
      <div className="bg-linear-to-br from-gray-800 to-black p-6 rounded-lg shadow-lg w-96 text-white relative">
        <button onClick={() => window.location.href = '/'} className="absolute top-2 right-2 text-gray-400 hover:text-white">
          <FaTimes />
        </button>
        <div className="flex justify-center items-center mb-4">
          <FaUsers className="text-white text-4xl" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign In Required</h2>
        <p className="text-center text-gray-300 mb-4">Please sign in to access this feature.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={signInData.email}
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={signInData.password}
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors shadow-md disabled:opacity-50"
          >
            {isLoggingIn ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        {loginError && <p className="text-red-400 mt-4 text-center">{loginError}</p>}
        {errorMessage && <p className="text-red-400 mt-2 text-center">{errorMessage}</p>}
      </div>
    </div>
  );
}