import SignInForm from '../../components/SigInForm';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router';

function SignIn() {
  const { login, isLoggingIn } = useAuth();

  const handleSignIn = ({ email, password }) => {
    login({ email, password });
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-8">
        <SignInForm onSubmit={handleSignIn} isLoggingIn={isLoggingIn} />
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;