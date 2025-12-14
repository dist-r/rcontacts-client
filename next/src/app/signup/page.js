'use client';

import { useState } from 'react';
import Link from 'next/link';
import { register } from '../../lib/auth/actions';
import ModalPopUp from '../../shared/ModalPopUp';
import { FaUsers } from 'react-icons/fa';

export default function SignUp() {
  const [signUpData, setSignUpData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [popUp, setPopup] = useState({
    message: '',
    status: false
  });

  const [isRegistering, setIsRegistering] = useState(false);
  const [registerError, setRegisterError] = useState(null);

  const onChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegisterError(null);
    if (signUpData.username.trim() === '' || signUpData.name.trim() === '' || signUpData.email.trim() === '' || signUpData.password.trim() === '' || signUpData.confirmPassword.trim() === '') {
      setPopup({ status: true, message: 'Please fill in all fields!' });
      return;
    }
    if (signUpData.password !== signUpData.confirmPassword) {
      setPopup({ status: true, message: 'Passwords do not match!' });
      return;
    }
    setIsRegistering(true);
    try {
      await register(new FormData(e.target));
    } catch (error) {
      setRegisterError(error);
    } finally {
      setIsRegistering(false);
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
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-800 mb-2">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-800
                   focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="johndoe"
            value={signUpData.username}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-800 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-800
                   focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="John Doe"
            value={signUpData.name}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-800
                   focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="jhondoe@gmail.com"
            value={signUpData.email}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-800 mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-800
                   focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Enter your password"
            value={signUpData.password}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-800 mb-2">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-800
                   focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Confirm your password"
            value={signUpData.confirmPassword}
            onChange={onChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-lg
                 hover:bg-gray-900 transition-colors shadow-md"
          disabled={isRegistering}
        >
          Sign Up
        </button>
        {registerError && <div className="mt-4 text-center text-red-500">{registerError.message}</div>}
        {isRegistering && <div className="mt-4 text-center text-gray-800">Registering...</div>}
        <p className="mt-4 text-center text-gray-600">
          Already have an account? <Link href="/signin" className="text-gray-800">Sign In</Link>
        </p>
      </form>
    </section>
  );
}