import { useContacts } from "../../../hooks/useContact"
import { useState } from "react";
import { FaTimes } from 'react-icons/fa';

type ModalEditContactProps = {
  id: string;
  name: string;
  email: string;
  phone: string;
  onClose: () => void;
}

export default function ModalEditContact({id, name, email, phone, onClose}: ModalEditContactProps) {

  const {editContact, isEditing, editError} = useContacts();
  const [editData, setEditData] = useState({
    name,
    email,
    phone,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = () => {
    if (editData.name.trim() === "" || editData.email.trim() === "" || editData.phone.trim() === "") {
      return;
    }
    editContact({id, name: editData.name, email: editData.email, phone: editData.phone});
    if(!editError){
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur flex justify-center items-center z-50">
      <div className="bg-white border-2 border-[#61dafb] rounded-lg shadow-lg w-96 p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <FaTimes />
        </button>
        <div className="flex justify-center items-center mb-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" className="w-8 h-8 mr-2" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript Logo" className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-[#3178c6]">Edit Contact</h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-[#3178c6] mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[#3178c6]
                   focus:outline-none focus:ring-2 focus:ring-[#61dafb]"
            placeholder="Enter name"
            value={editData.name}
            onChange={handleChange}
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
                   focus:outline-none focus:ring-2 focus:ring-[#61dafb]"
            placeholder="Enter email"
            value={editData.email}
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div className="mb-6">
          <label htmlFor="phone" className="block text-[#3178c6] mb-2">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[#3178c6]
                   focus:outline-none focus:ring-2 focus:ring-[#61dafb]"
            placeholder="Enter phone"
            value={editData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-[#61dafb] text-white py-2 rounded-lg hover:bg-[#21b4d6] transition-colors shadow-md"
            disabled={isEditing}
          >
            {isEditing ? 'Saving...' : 'Save Changes'}
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors shadow-md"
          >
            Cancel
          </button>
        </div>
        {editError && <p className="mt-4 text-center text-red-500">{editError.message}</p>}
      </div>
    </div>
  )
}