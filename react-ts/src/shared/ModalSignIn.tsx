import { useNavigate } from "react-router";

interface ModalSignInProps {
  errorMessage?: string;
  showModal?: boolean;
}

export default function ModalSignIn({ errorMessage, showModal = true }: ModalSignInProps) {
  const navigate = useNavigate();

  if (!showModal) return null;

  return(
    <div className="fixed inset-0 bg-transparent backdrop-blur flex justify-center items-center z-50">
      <div className="bg-gray-800 border-2 border-[#61dafb] rounded-lg shadow-lg w-80 p-6 text-center text-white">
        <h2 className="text-2xl font-bold text-[#61dafb] mb-4">Sign In Required</h2>
        <p className="mb-4">Sign in to access this feature.</p>
        <button
          className="bg-[#61dafb] text-white px-4 py-2 rounded hover:bg-[#21b4d6]"
          onClick={() => navigate("/signin")}
        >
          Go to Sign In
        </button>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </div>
    </div>
  )
}