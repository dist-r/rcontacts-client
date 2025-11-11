import { useEffect } from "react";
import SignInForm from "../../components/SigInForm";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import { getProfile } from "../../service/user";

function SignIn() {
  const { login, isLoggingIn, loginError } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = ({ email, password }) => {
    login({ email, password });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(!token)return;
    const verifyToken = async () => {
      try {
        await getProfile(token);
        navigate("/home");
      } catch (error) {
        localStorage.removeItem("token");
      }
    }
    if(token){
      verifyToken();
    }
  })

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-8">
        <SignInForm onSubmit={handleSignIn} isLoggingIn={isLoggingIn} />
        {loginError && (
          <p className="text-center text-sm text-red-600">{loginError.message}</p>
        )}
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
