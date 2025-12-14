'use client';

import { useState } from 'react';
import Link from 'next/link';
import { login } from '../../lib/auth/actions';
import ModalPopUp from '../../shared/ModalPopUp';
import { FaUsers } from 'react-icons/fa';

export default function SignIn() {
  const [signInData, setSignInData] = useState({
    email: '',
    password: ''
  });

  const [popUp, setPopup] = useState({
    message: '',
    status: false
  });

  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState(null);

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
      setPopup({ status: true, message: 'Please fill in all fields!' });
      return;
    }
    setIsLoggingIn(true);
    try {
      await login(new FormData(e.target));
    } catch (error) {
      setLoginError(error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <section className="h-screen flex justify-center items-center bg-linear-to-br from-gray-800 to-black">
      {popUp.status && <ModalPopUp message={popUp.message} onClose={() => setPopup({ status: false, message: '' })} />}
      <form
        className="w-96 p-6 border bg-white border-gray-300 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center items-center mb-4">
          <FaUsers className="w-8 h-8 text-gray-800" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-800
                   focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Enter your email"
            value={signInData.email}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-800 mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-800
                   focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Enter your password"
            value={signInData.password}
            onChange={onChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-lg
                 hover:bg-gray-900 transition-colors shadow-md"
          disabled={isLoggingIn}
        >
          Sign In
        </button>
        {loginError && <div className="mt-4 text-center text-red-500">{loginError.message}</div>}
        {isLoggingIn && <div className="mt-4 text-center text-gray-800">Logging in...</div>}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <Link href="/signup" className="text-gray-800">Sign Up</Link>
        </p>
      </form>
    </section>
  );
}