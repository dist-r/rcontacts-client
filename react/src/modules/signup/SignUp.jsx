import SignUpForm from '../../components/SignUpForm';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router';

function SignUp() {
  const { register, isRegistering , registerError, isRegisteringError} = useAuth();

  const handleSignUp = ({ username, name, email, password }) => {
    register({ username, name, email, password });
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-8">
        <SignUpForm onSubmit={handleSignUp} isRegistering={isRegistering} />
        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in
          </Link>
        </p>
        {registerError && (
          <p className="text-center text-sm text-red-600">{registerError.message}</p>
        )}
      </div>
    </div>
  );
}

export default SignUp;