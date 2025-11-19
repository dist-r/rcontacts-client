import { FaEdit, FaTrash } from "react-icons/fa";

function getInitials(name) {
  if (!name) return "";
  const nameParts = name.split(" ");
  if (nameParts.length === 1) {
    return nameParts[0].charAt(0).toUpperCase();
  }
  return (
    nameParts[0].charAt(0).toUpperCase() +
    nameParts[nameParts.length - 1].charAt(0).toUpperCase()
  );
}

function ContactCard({ contact, onEdit, onDelete }) {
  const initials = getInitials(contact.name);
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 flex justify-between items-center border-l-4 border-blue-500">
      <div className="flex items-center">
        <div className="w-10 h-10 mr-4 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {initials}
        </div>
        <div>
          <p className="text-lg font-semibold text-white">{contact.name}</p>
          <p className="text-gray-300">{contact.email}</p>
          <p className="text-gray-300">{contact.phone}</p>
        </div>
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