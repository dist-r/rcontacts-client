import { useContacts } from "../../../hooks/useContact"
import { FaTimes, FaExclamationTriangle } from 'react-icons/fa';

export default function ModalDeleteContact({id, name, email, phone, onClose}: {id: string, name: string, email: string, phone: string, onClose: () => void}) {
  
  const {removeContact, isRemoving, removeError} = useContacts();
  const handleDelete = () => {
    removeContact(id);
    if(!removeError){
      onClose();
    }
  }
    
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur flex justify-center items-center z-50">
      <div className="bg-white border-2 border-red-500 rounded-lg shadow-lg w-96 p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <FaTimes />
        </button>
        <div className="flex justify-center items-center mb-4">
          <FaExclamationTriangle className="text-red-500 text-4xl" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">Delete Contact</h2>
        <p className="text-center text-gray-700 mb-4">Are you sure you want to delete this contact?</p>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p className="text-gray-800"><strong>Name:</strong> {name}</p>
          <p className="text-gray-800"><strong>Email:</strong> {email}</p>
          <p className="text-gray-800"><strong>Phone:</strong> {phone}</p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={handleDelete}
            className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors shadow-md"
            disabled={isRemoving}
          >
            {isRemoving ? 'Deleting...' : 'Confirm Delete'}
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors shadow-md"
          >
            Cancel
          </button>
        </div>
        {removeError && <p className="mt-4 text-center text-red-500">{removeError.message}</p>}
      </div>
    </div>
  )
}