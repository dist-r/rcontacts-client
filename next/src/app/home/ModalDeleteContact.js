'use client';

import { FaTimes, FaExclamationTriangle } from 'react-icons/fa';

export default function ModalDeleteContact({ contact, onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur flex justify-center items-center z-50">
      <div className="bg-linear-to-br from-gray-800 to-black p-6 rounded-lg shadow-lg w-96 text-white relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-white">
          <FaTimes />
        </button>
        <div className="flex justify-center items-center mb-4">
          <FaExclamationTriangle className="text-red-400 text-4xl" />
        </div>
        <h3 className="text-2xl font-bold mb-6 text-center text-white">Delete Contact</h3>
        <p className="text-center text-gray-300 mb-4">Are you sure you want to delete this contact?</p>
        <div className="bg-gray-700 p-4 rounded-lg mb-6">
          <p className="text-gray-200"><strong>Name:</strong> {contact.name}</p>
          <p className="text-gray-200"><strong>Email:</strong> {contact.email}</p>
          <p className="text-gray-200"><strong>Phone:</strong> {contact.phone}</p>
        </div>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors shadow-md"
          >
            Confirm Delete
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors shadow-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}