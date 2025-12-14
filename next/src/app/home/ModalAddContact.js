'use client';

import { FaTimes, FaUsers } from 'react-icons/fa';

export default function ModalAddContact({ onClose, onSubmit }) {
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur flex justify-center items-center z-50">
      <div className="bg-linear-to-br from-gray-800 to-black p-6 rounded-lg shadow-lg w-96 text-white relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-white">
          <FaTimes />
        </button>
        <div className="flex justify-center items-center mb-4">
          <FaUsers className="text-white text-4xl" />
        </div>
        <h3 className="text-2xl font-bold mb-6 text-center text-white">Add Contact</h3>
        <form action={onSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white
                     focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white
                     focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-300 mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white
                     focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          <div className="flex space-x-2">
            <button
              type="submit"
              className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors shadow-md"
            >
              Add
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors shadow-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}