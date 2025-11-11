import { FaEdit, FaTrash } from "react-icons/fa";

function ContactCard({ contact, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex justify-between items-center">
      <div>
        <p className="text-lg font-semibold">{contact.name}</p>
        <p className="text-gray-600">{contact.email}</p>
        <p className="text-gray-600">{contact.phone}</p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => onEdit(contact)}
          className="text-blue-500 hover:text-blue-700"
        >
          <FaEdit size={20} />
        </button>
        <button
          onClick={() => onDelete(contact.id)}
          className="text-red-500 hover:text-red-700"
        >
          <FaTrash size={20} />
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
