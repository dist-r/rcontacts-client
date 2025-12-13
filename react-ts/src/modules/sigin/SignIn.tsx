import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router";
import ModalPopUp from "../../shared/ModalPopUp";
// import { useEffect } from "react";
export default function SignIn(){
  const [signInData, setSignInData] = useState({
    email: "",
    password: ""
  });

  const [popUp, setPopup] = useState({
    message: "",
    status: false
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value
    });
  }
  
  const { login: signIn , isLoggingIn, loginError} = useAuth();

  // useEffect(() => {
  //   if (loginError) {
  //     setPopup({ status: true, message: loginError.message });
  //   }
  // }, [loginError]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signInData.email.trim() === "" || signInData.password.trim() === "") {
      setPopup({ status: true, message: "Please fill in all fields!" });
      return;
    }
    signIn(signInData);
  }

  return(
    <section className="h-screen flex justify-center items-center bg-slate-800">
      {popUp.status && <ModalPopUp message={popUp.message} onClose={() => setPopup({status: false, message: ""})} />}
      <form
        className="w-96 p-6 border bg-white border-gray-300 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center items-center mb-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" className="w-8 h-8 mr-2" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript Logo" className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-[#3178c6]">Sign In</h2>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-[#3178c6] mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[#3178c6]
                   focus:outline-none focus:ring-2 focus:ring-[#3178c6]"
            placeholder="Enter your email"
            value={signInData.email}
            onChange={onChange}
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-[#3178c6] mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[#3178c6]
                   focus:outline-none focus:ring-2 focus:ring-[#3178c6]"
            placeholder="Enter your password"
            value={signInData.password}
            onChange={onChange}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#3178c6] text-white py-2 rounded-lg 
                 hover:bg-[#2b5a9e] transition-colors shadow-md"
          disabled={isLoggingIn}
        >
          Sign In
        </button>
        {loginError && <div className="mt-4 text-center text-red-500">{loginError.message}</div>}
        {isLoggingIn && <div className="mt-4 text-center text-[#3178c6]">Logging in...</div>}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <Link to="/signup" className="text-[#3178c6]">Sign Up</Link>
        </p>
      </form>
    </section>
  )
}