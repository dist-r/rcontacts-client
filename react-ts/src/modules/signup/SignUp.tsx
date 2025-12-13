import { useAuth } from "../../hooks/useAuth"
import { useState } from "react";
import ModalPopUp from "../../shared/ModalPopUp";
import { Link } from "react-router";

export default function SignUp (){

  const {register: signUp, isRegistering, registerError} = useAuth();

  const [popUp, setPopup] = useState({
    message: "",
    status: false
  });

  const [signUpData, setSignUpData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signUpData.username.trim() === "" || signUpData.name.trim() === "" || signUpData.email.trim() === "" || signUpData.password.trim() === "" || signUpData.confirmPassword.trim() === "") {
      setPopup({status: true, message: "Please fill in all fields!"});
      return;
    }
    if (signUpData.password !== signUpData.confirmPassword) {
      setPopup({status: true, message: "Passwords do not match!"});
      return;
    }
    signUp({
      username: signUpData.username,
      name: signUpData.name,
      email: signUpData.email,
      password: signUpData.password
    });
  }
  
  return (
    <section className="h-screen flex justify-center items-center bg-slate-800">
      <form
        className="w-96 p-6 border bg-white border-gray-300 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center items-center mb-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" className="w-8 h-8 mr-2" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript Logo" className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-[#3178c6]">Sign Up</h2>

        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-[#3178c6] mb-2">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[#3178c6]
                   focus:outline-none focus:ring-2 focus:ring-[#3178c6]"
            placeholder="johndoe"
            value={signUpData.username}
            onChange={onChange}
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-[#3178c6] mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[#3178c6]
                   focus:outline-none focus:ring-2 focus:ring-[#3178c6]"
            placeholder="John Doe"
            value={signUpData.name}
            onChange={onChange}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-[#3178c6] mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[#3178c6]
                   focus:outline-none focus:ring-2 focus:ring-[#3178c6]"
            placeholder="jhondoe@gmail.com"
            value={signUpData.email}
            onChange={onChange}
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-[#3178c6] mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[#3178c6]
                   focus:outline-none focus:ring-2 focus:ring-[#3178c6]"
            placeholder="********"
            value={signUpData.password}
            onChange={onChange}
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-[#3178c6] mb-2">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[#3178c6]
                   focus:outline-none focus:ring-2 focus:ring-[#3178c6]"
            placeholder="********"
            value={signUpData.confirmPassword}
            onChange={onChange}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#3178c6] text-white py-2 rounded-lg 
                 hover:bg-[#2b5a9e] transition-colors shadow-md"
          disabled={isRegistering}
        >
          Sign Up
        </button>
        {isRegistering && <div className="mt-4 text-center text-[#3178c6]">Registering...</div>}
        {registerError && <div className="mt-4 text-center text-red-500">{registerError.message}</div>}
        <p className="mt-4 text-center text-gray-600">
          Already have an account? <Link to="/signin" className="text-[#3178c6]">Sign In</Link>
        </p>
      </form>
      {popUp.status && <ModalPopUp message={popUp.message} onClose={() => setPopup({status: false, message: ""})} />}
    </section>
  )
}