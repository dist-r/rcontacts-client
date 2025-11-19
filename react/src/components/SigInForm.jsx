import { useUser } from '../hooks/useUser';
import { useState } from 'react';
import { FaReact } from 'react-icons/fa';

function SignInForm({ onSubmit, isLoggingIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <FaReact className="text-4xl text-blue-500 mx-auto mb-2" />
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-500">Sign In</h2>
      
      <div className="mb-4">
        <label className="block text-blue-500 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-500 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-blue-500 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="*********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
          disabled={isLoggingIn}
        >
          {isLoggingIn ? 'Signing In...' : 'Sign In'}
        </button>
      </div>
    </form>
  );
}

export default SignInForm;