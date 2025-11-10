import { useAuth } from "../../hooks/useAuth";
import { useContacts } from "../../service/useContacts";
import { useState } from "react";
import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";

function Home() {
  const { logout } = useAuth();
  const {
    contacts,
    isLoadingContacts,
    addContact,
    isAddingContact,
    editContact,
    isEditingContact,
    removeContact,
  } = useContacts();
  const [searchTerm, setSearchTerm] = useState("");
  const [editingContact, setEditingContact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredContacts = contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddClick = () => {
    setEditingContact(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (contact) => {
    setEditingContact(contact);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      removeContact(id);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingContact(null);
  };

  const handleSaveContact = (contactData) => {
    if (editingContact) {
      editContact({ id: editingContact.id, ...contactData });
    } else {
      addContact(contactData);
    }
    handleModalClose();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">R-Contacts</h1>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="w-1/2">
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full p-2 border rounded-md"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={handleAddClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <FaUserPlus className="mr-2" /> Add Contact
          </button>
        </div>

        {isLoadingContacts ? (
          <p>Loading contacts...</p>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            {filteredContacts?.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {filteredContacts.map((contact) => (
                  <li key={contact.id} className="py-4 flex justify-between items-center">
                    <div>
                      <p className="text-lg font-semibold">{contact.name}</p>
                      <p className="text-gray-600">{contact.email}</p>
                      <p className="text-gray-600">{contact.phone}</p>
                    </div>
                    <div className="flex gap-4">
                      <button onClick={() => handleEditClick(contact)} className="text-blue-500 hover:text-blue-700">
                        <FaEdit size={20} />
                      </button>
                      <button onClick={() => handleDeleteClick(contact.id)} className="text-red-500 hover:text-red-700">
                        <FaTrash size={20} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No contacts found.</p>
            )}
          </div>
        )}
      </div>

      {isModalOpen && (
        <ContactModal
          contact={editingContact}
          onClose={handleModalClose}
          onSave={handleSaveContact}
          isSaving={isAddingContact || isEditingContact}
        />
      )}
    </div>
  );
}

function ContactModal({ contact, onClose, onSave, isSaving }) {
  const [formData, setFormData] = useState({
    name: contact?.name || "",
    email: contact?.email || "",
    phone: contact?.phone || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">{contact ? "Edit Contact" : "Add New Contact"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="flex justify-end gap-4">
            <button type="button" onClick={onClose} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={isSaving}>
              {isSaving ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
