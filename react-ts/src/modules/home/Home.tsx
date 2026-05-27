import { useEffect } from "react"
import { useUser } from "../../hooks/useUser";
import ModalSignIn from "../../shared/ModalSignIn";
import { useState } from "react";
import { useContacts } from "../../hooks/useContact";
import ModalDeleteContact from "./parts/ModalDeleteContact";
import ModalAddContact from "./parts/ModalAddContact";
import ModalEditContact from "./parts/ModalEditContact";
import { FaEdit, FaTrash, FaEnvelope, FaPhone, FaPlus, FaSignOutAlt } from 'react-icons/fa';
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-900 fixed w-full top-0 z-40">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 relative group">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                alt="React Logo" 
                className="w-7 h-7 animate-[spin_20s_linear_infinite]" 
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" 
                alt="TypeScript Logo" 
                className="w-6 h-6 rounded shadow-md shadow-blue-500/10" 
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-[#61dafb]/15 to-[#3178c6]/15 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <h1 className="text-xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-[#61dafb] select-none">
              R-Contacts
            </h1>
          </div>
          <button
            onClick={logout}
            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-950/30 hover:bg-rose-950/50 border border-rose-900/40 hover:border-rose-800/60 text-rose-300 hover:text-rose-200 text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer"
          >
            <FaSignOutAlt className="w-3.5 h-3.5" />
            Logout
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Your Contacts</h2>
            <p className="text-xs text-slate-500 font-mono">
              {contacts ? `${contacts.length} record(s) loaded` : 'loading...'}
            </p>
          </div>
          <button
            onClick={() => setOpenModalAddContact(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#61dafb] to-[#3178c6] hover:from-[#21b4d6] hover:to-[#255ba1] text-white font-bold rounded-xl text-sm transition-all duration-300 shadow-md shadow-[#61dafb]/10 hover:shadow-[#61dafb]/20 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <FaPlus className="w-3 h-3" />
            Add Contact
          </button>
        </div>

        {/* Modals */}
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

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="text-sm font-mono text-[#61dafb] animate-pulse">[status]: fetching contact records...</div>
          </div>
        )}

        {/* Error State */}
        {contactError && (
          <div className="max-w-md mx-auto px-4 py-3 bg-red-950/20 border border-red-900/40 text-red-400 text-xs font-mono rounded-xl text-center">
            [error]: {contactError.message}
          </div>
        )}

        {/* Empty State */}
        {contacts && contacts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
              <FaPhone className="text-2xl text-slate-600" />
            </div>
            <p className="text-sm text-slate-500 font-mono">No contacts found. Add your first contact.</p>
          </div>
        )}

        {/* Contact Grid */}
        {contacts && contacts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {contacts.map((contact: {id: string, name: string, email: string, phone: string}) => (
              <div 
                key={contact.id} 
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 hover:border-[#61dafb]/30 p-6 rounded-2xl shadow-md hover:shadow-[0_0_25px_rgba(97,218,251,0.06)] transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#61dafb]/20 to-[#3178c6]/20 border border-slate-800 flex items-center justify-center text-[#61dafb] font-bold text-sm">
                      {contact.name.charAt(0).toUpperCase()}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#61dafb] transition-colors duration-300">{contact.name}</h3>
                  </div>
                </div>

                <div className="space-y-2 mb-5">
                  <p className="text-xs text-slate-400 flex items-center gap-2">
                    <FaEnvelope className="w-3 h-3 text-slate-600" />
                    {contact.email}
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-2">
                    <FaPhone className="w-3 h-3 text-slate-600" />
                    {contact.phone}
                  </p>
                </div>

                <div className="flex gap-2 pt-3 border-t border-slate-800/60">
                  <button
                    onClick={() => setOpenModalEditContact(contact)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-850 hover:bg-[#3178c6]/20 border border-slate-800 hover:border-[#3178c6]/40 text-slate-300 hover:text-[#61dafb] text-xs font-semibold rounded-lg transition-all duration-300 cursor-pointer"
                  >
                    <FaEdit className="w-3 h-3" />
                    Edit
                  </button>
                  <button
                    onClick={() => setOpenModalDeleteContact(contact)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-rose-950/15 hover:bg-rose-950/30 border border-rose-900/30 hover:border-rose-800/50 text-rose-400 hover:text-rose-300 text-xs font-semibold rounded-lg transition-all duration-300 cursor-pointer"
                  >
                    <FaTrash className="w-3 h-3" />
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