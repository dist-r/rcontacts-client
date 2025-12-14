'use client';

import { useState } from 'react';
import { createContact, updateContact, deleteContact } from '../../lib/contact/actions';
import ModalAddContact from './ModalAddContact';
import ModalEditContact from './ModalEditContact';
import ModalDeleteContact from './ModalDeleteContact';
import { FaEdit, FaTrash, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function ContactList({ initialContacts }) {
  const [contacts, setContacts] = useState(initialContacts);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(null);
  const [openModalDelete, setOpenModalDelete] = useState(null);

  const handleAdd = async (formData) => {
    try {
      await createContact(formData);
      // Refresh page to get updated contacts
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleEdit = async (formData) => {
    try {
      await updateContact(formData);
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteContact(id);
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Contacts</h2>
        <button
          onClick={() => setOpenModalAdd(true)}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Contact
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact) => (
          <div key={contact.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{contact.name}</h3>
            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-2 text-gray-400" />
              <span>{contact.email}</span>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="mr-2 text-gray-400" />
              <span>{contact.phone}</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setOpenModalEdit(contact)}
                className="bg-yellow-600 hover:bg-yellow-700 text-white py-1 px-3 rounded text-sm"
              >
                <FaEdit className="inline mr-1" /> Edit
              </button>
              <button
                onClick={() => setOpenModalDelete(contact)}
                className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded text-sm"
              >
                <FaTrash className="inline mr-1" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {openModalAdd && (
        <ModalAddContact
          onClose={() => setOpenModalAdd(false)}
          onSubmit={handleAdd}
        />
      )}

      {openModalEdit && (
        <ModalEditContact
          contact={openModalEdit}
          onClose={() => setOpenModalEdit(null)}
          onSubmit={handleEdit}
        />
      )}

      {openModalDelete && (
        <ModalDeleteContact
          contact={openModalDelete}
          onClose={() => setOpenModalDelete(null)}
          onConfirm={() => handleDelete(openModalDelete.id)}
        />
      )}
    </div>
  );
}