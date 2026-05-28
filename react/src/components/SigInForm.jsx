import { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import ModalPopUp from './ModalPopUp';

function SignInForm({ onSubmit, isLoggingIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage('Please fill in all fields');
      setIsOpen(true)
      return;
    }
    onSubmit({ email, password });
  };

  return (<>
    <ModalPopUp isOpen={isOpen} onClick={() => setIsOpen(false)}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500 border border-amber-100">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-800">Perhatian</h3>
          <p className="text-sm text-slate-600 mt-1 leading-relaxed">{message}</p>
        </div>
      </div>
    </ModalPopUp>
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
        // required
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
        // required
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
  </>
  );
}

export default SignInForm;