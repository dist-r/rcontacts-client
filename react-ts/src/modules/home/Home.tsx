import { useEffect } from "react"
import { useUser } from "../../hooks/useUser";
import ModalSignIn from "../../shared/ModalSignIn";
import { useState } from "react";
import { useContacts } from "../../hooks/useContact";
import ModalDeleteContact from "./parts/ModalDeleteContact";
import ModalAddContact from "./parts/ModalAddContact";
import ModalEditContact from "./parts/ModalEditContact";
import { FaEdit, FaTrash, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useAuth } from "../../hooks/useAuth";

export default function Home() {
  const [popUpSignIn, setPopUpSignIn] = useState(false);
  const [openModalAddContact, setOpenModalAddContact] = useState(false);
  const [openModalDeleteContact, setOpenModalDeleteContact] = useState<
  {id: string, name: string, email: string, phone: string} | null>(null);
  const [openModalEditContact, setOpenModalEditContact] = useState<{id: string, name: string, email: string, phone: string} | null>(null);
  const { error } = useUser();
  const { logout } = useAuth();
  const {
    contacts,
    isLoading,
    error: contactError,
  } = useContacts();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token || error) {
      setPopUpSignIn(true);
    } else {
      setPopUpSignIn(false);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" className="w-8 h-8 mr-2" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript Logo" className="w-8 h-8 mr-2" />
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
      <main className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Your Contacts</h2>
          <button
            onClick={() => setOpenModalAddContact(true)}
            className="bg-[#61dafb] hover:bg-[#21b4d6] text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            <i className="fas fa-plus mr-2"></i>Add Contact
          </button>
        </div>
        {popUpSignIn && <ModalSignIn />}
        {openModalAddContact && <ModalAddContact onClose={() => setOpenModalAddContact(false)} />}
        {openModalDeleteContact && <ModalDeleteContact
          id={openModalDeleteContact.id}
          name={openModalDeleteContact.name}
          email={openModalDeleteContact.email}
          phone={openModalDeleteContact.phone}
          onClose={() => setOpenModalDeleteContact(null)}
          />}
        {openModalEditContact && <ModalEditContact
          id={openModalEditContact.id}
          name={openModalEditContact.name}
          email={openModalEditContact.email}
          phone={openModalEditContact.phone}
          onClose={() => setOpenModalEditContact(null)}
          />}

        {isLoading && <p className="text-center text-gray-400">Loading contacts...</p>}
        {contactError && <p className="text-center text-red-500">Error loading contacts: {contactError.message}</p>}
        {contacts && contacts.length === 0 && <p className="text-center text-gray-400">No contacts found.</p>}
        {contacts && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map((contact: {id: string, name: string, email: string, phone: string}) => (
              <div key={contact.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
                <p className="text-gray-400 mb-1 flex items-center"><FaEnvelope className="mr-2 text-gray-400" />{contact.email}</p>
                <p className="text-gray-400 mb-4 flex items-center"><FaPhone className="mr-2 text-gray-400" />{contact.phone}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setOpenModalEditContact(contact)}
                    className="bg-[#3178c6] hover:bg-[#2b5a9e] text-white py-1 px-3 rounded transition-colors duration-300 flex items-center"
                  >
                    <FaEdit className="mr-1" />
                    Edit
                  </button>
                  <button
                    onClick={() => setOpenModalDeleteContact(contact)}
                    className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded transition-colors duration-300 flex items-center"
                  >
                    <FaTrash className="mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}