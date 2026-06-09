import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router";
import ModalPopUp from "../../shared/ModalPopUp";
import { FaSignInAlt, FaLock, FaEnvelope } from 'react-icons/fa';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signInData.email.trim() === "" || signInData.password.trim() === "") {
      setPopup({ status: true, message: "Please fill in all fields!" });
      return;
    }
    signIn(signInData);
  }

  return (
    <section className="min-h-screen flex justify-center items-center bg-linear-to-br from-slate-955 via-slate-900 to-indigo-950 font-sans p-4 relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      {popUp.status && <ModalPopUp message={popUp.message} onClose={() => setPopup({status: false, message: ""})} />}
      
      <div className="relative w-full max-w-md bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl shadow-[0_0_50px_rgba(97,218,251,0.1)] p-8 md:p-10 animate-in fade-in duration-300">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Logo header */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center justify-center gap-2 bg-slate-950 border border-slate-800 px-4 py-2.5 rounded-2xl relative shadow-inner group">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                alt="React Logo" 
                className="w-7 h-7 animate-[spin_20s_linear_infinite]" 
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" 
                alt="TypeScript Logo" 
                className="w-6 h-6 rounded shadow-md shadow-blue-500/10" 
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-[#61dafb]/15 to-[#3178c6]/15 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="space-y-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Sign In</h2>
              <p className="text-[10px] text-slate-500 font-mono">rcontacts://client/auth/login</p>
            </div>
          </div>

          {/* Email field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-600">
                <FaEnvelope className="w-3.5 h-3.5" />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full pl-10 pr-4 py-3 bg-slate-955/70 border border-slate-850 focus:border-[#61dafb] focus:ring-1 focus:ring-[#61dafb] text-slate-200 placeholder:text-slate-600 rounded-xl text-sm transition-all duration-300 outline-none"
                placeholder="developer@domain.com"
                value={signInData.email}
                onChange={onChange}
              />
            </div>
          </div>

          {/* Password field */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Password Key
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-600">
                <FaLock className="w-3.5 h-3.5" />
              </span>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full pl-10 pr-4 py-3 bg-slate-955/70 border border-slate-850 focus:border-[#61dafb] focus:ring-1 focus:ring-[#61dafb] text-slate-200 placeholder:text-slate-600 rounded-xl text-sm transition-all duration-300 outline-none"
                placeholder="••••••••••••"
                value={signInData.password}
                onChange={onChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-[#61dafb] to-[#3178c6] hover:from-[#21b4d6] hover:to-[#255ba1] text-white font-bold rounded-xl text-sm transition-all duration-300 shadow-md shadow-[#61dafb]/10 hover:shadow-[#61dafb]/20 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
            disabled={isLoggingIn}
          >
            <FaSignInAlt className="text-xs animate-pulse" />
            {isLoggingIn ? 'Logging in...' : 'Authenticate'}
          </button>

          {/* Status logs */}
          {loginError && (
            <div className="px-4 py-2.5 bg-red-950/20 border border-red-900/40 text-red-400 text-xs font-mono rounded-lg text-center">
              [error]: {loginError.message}
            </div>
          )}
          {isLoggingIn && (
            <div className="text-center text-[10px] font-mono text-[#61dafb] animate-pulse">
              [status]: transmitting credentials...
            </div>
          )}

          {/* Redirection */}
          <div className="pt-2 text-center text-xs text-slate-500">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#61dafb] hover:underline font-semibold">
              Register Free
            </Link>
          </div>

        </form>
      </div>
    </section>
  );
}