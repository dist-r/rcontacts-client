import { useState } from "react";
import { useContacts } from "../../../hooks/useContact";
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaPlus } from 'react-icons/fa';

export default function ModalAddContact({onClose}: {onClose: () => void}) {
  const {addContact, isAdding, addError} = useContacts();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleAddContact = () => {
    if (data.name.trim() === "" || data.email.trim() === "" || data.phone.trim() === "") {
      return;
    }
    addContact({name: data.name, email: data.email, phone: data.phone});
    if(!addError){
      onClose();
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }
  
  return (
    <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-[0_0_40px_rgba(97,218,251,0.1)] w-full max-w-md p-8 relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-slate-850 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-500 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <FaTimes className="w-3 h-3" />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center mb-6">
          <div className="flex items-center justify-center gap-2 bg-slate-950 border border-slate-800 px-4 py-2.5 rounded-2xl">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" className="w-6 h-6 animate-[spin_20s_linear_infinite]" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript Logo" className="w-5 h-5 rounded" />
          </div>
          <h2 className="text-xl font-extrabold text-white tracking-tight">Add Contact</h2>
        </div>

        {/* Name */}
        <div className="space-y-2 mb-4">
          <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Name</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-600"><FaUser className="w-3.5 h-3.5" /></span>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full pl-10 pr-4 py-3 bg-slate-950/70 border border-slate-850 focus:border-[#61dafb] focus:ring-1 focus:ring-[#61dafb] text-slate-200 placeholder:text-slate-600 rounded-xl text-sm transition-all duration-300 outline-none"
              placeholder="Enter name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2 mb-4">
          <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Email</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-600"><FaEnvelope className="w-3.5 h-3.5" /></span>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full pl-10 pr-4 py-3 bg-slate-950/70 border border-slate-850 focus:border-[#61dafb] focus:ring-1 focus:ring-[#61dafb] text-slate-200 placeholder:text-slate-600 rounded-xl text-sm transition-all duration-300 outline-none"
              placeholder="Enter email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-2 mb-6">
          <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-600"><FaPhone className="w-3.5 h-3.5" /></span>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full pl-10 pr-4 py-3 bg-slate-950/70 border border-slate-850 focus:border-[#61dafb] focus:ring-1 focus:ring-[#61dafb] text-slate-200 placeholder:text-slate-600 rounded-xl text-sm transition-all duration-300 outline-none"
              placeholder="Enter phone"
              value={data.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleAddContact}
            className="flex-1 py-3 bg-gradient-to-r from-[#61dafb] to-[#3178c6] hover:from-[#21b4d6] hover:to-[#255ba1] text-white font-bold rounded-xl text-sm transition-all duration-300 shadow-md shadow-[#61dafb]/10 flex items-center justify-center gap-2 cursor-pointer"
            disabled={isAdding}
          >
            <FaPlus className="w-3 h-3" />
            {isAdding ? 'Adding...' : 'Add Contact'}
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-slate-850 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold rounded-xl text-sm transition-all duration-300 cursor-pointer"
          >
            Cancel
          </button>
        </div>
        {addError && (
          <div className="mt-4 px-4 py-2.5 bg-red-950/20 border border-red-900/40 text-red-400 text-xs font-mono rounded-lg text-center">
            [error]: {addError.message}
          </div>
        )}
      </div>
    </div>
  )
}