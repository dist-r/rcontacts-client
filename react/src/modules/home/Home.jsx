import { useContacts } from "../../hooks/useContacts";
import { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import ContactCard from "../../components/ContactCard";
import ContactModal from "../../components/ContactModal";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router";
import ReactLogo from "../../assets/react.svg";

function Home() {
  const { logout, error } = useUser();
  const navigate = useNavigate();
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

  useEffect(() => {
    if (error) {
      localStorage.removeItem("token");
      navigate("/signin");
    }
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src={ReactLogo} alt="React Logo" className="w-8 h-8 mr-2" />
            <h1 className="text-2xl font-bold">R-Contacts</h1>
          </div>
          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="bg-gray-800">
        <div className="container mx-auto p-6 text-center">
          <img
            src={ReactLogo}
            alt="React Logo"
            className="w-24 h-24 mx-auto mb-4 animate-spin"
            style={{ animationDuration: '10s' }}
          />
          <h2 className="text-4xl font-bold mb-2">Welcome to R-Contacts</h2>
          <p className="text-lg">
            A contact management app built with React.
          </p>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="w-1/2">
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full p-2 border rounded-md bg-gray-700 text-white"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={handleAddClick}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <FaUserPlus className="mr-2" /> Add Contact
          </button>
        </div>

        {isLoadingContacts ? (
          <p>Loading contacts...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContacts?.length > 0 ? (
              filteredContacts.map((contact) => (
                <ContactCard
                  key={contact.id}
                  contact={contact}
                  onEdit={() => handleEditClick(contact)}
                  onDelete={() => handleDeleteClick(contact.id)}
                />
              ))
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

export default Home;