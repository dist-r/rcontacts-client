import { FaTimes, FaExclamationTriangle } from 'react-icons/fa';

export default function ModalPopUp({ message, onClose }: { message: string, onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur flex justify-center items-center z-50">
      <div className="bg-white border-2 border-yellow-500 rounded-lg shadow-lg w-96 p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <FaTimes />
        </button>
        <div className="flex justify-center items-center mb-4">
          <FaExclamationTriangle className="text-yellow-500 text-4xl" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-600">Warning</h2>
        <p className="text-center text-gray-700 mb-6">{message}</p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors shadow-md"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}