import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaUserPlus, FaUserEdit, FaSave } from "react-icons/fa";

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

  // Determine design tokens based on mode (Add vs Edit)
  const isEditMode = !!contact;
  const gradientHeader = isEditMode
    ? "from-blue-500 via-indigo-600 to-blue-500"
    : "from-green-500 via-emerald-600 to-green-500";
  const focusBorderRing = isEditMode
    ? "focus:border-blue-500/80 focus:ring-blue-500/20"
    : "focus:border-green-500/80 focus:ring-green-500/20";
  const btnGradient = isEditMode
    ? "from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-600/15 hover:shadow-blue-600/25"
    : "from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 shadow-green-600/15 hover:shadow-green-600/25";
  const iconThemeColor = isEditMode ? "text-blue-500" : "text-green-500";
  const iconBgColor = isEditMode ? "bg-blue-500/10 border-blue-500/20" : "bg-green-500/10 border-green-500/20";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300"
        onClick={isSaving ? undefined : onClose}
      />
      
      {/* Modal Card */}
      <div className="bg-gray-800 border border-gray-700/50 rounded-2xl shadow-2xl w-full max-w-md transform overflow-hidden transition-all duration-300 scale-100 z-10 flex flex-col">
        {/* Decorative Top Accent */}
        <div className={`h-1.5 bg-gradient-to-r ${gradientHeader} w-full`} />
        
        <div className="p-6 md:p-8">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className={`w-14 h-14 ${iconBgColor} border rounded-full flex items-center justify-center ${iconThemeColor} mb-4 shadow-sm`}>
              {isEditMode ? <FaUserEdit className="w-6 h-6" /> : <FaUserPlus className="w-6 h-6" />}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {isEditMode ? "Edit Kontak" : "Tambah Kontak Baru"}
            </h3>
            <p className="text-gray-400 text-xs md:text-sm mt-1 leading-relaxed">
              {isEditMode ? "Perbarui informasi kontak di bawah ini dengan benar." : "Silakan isi detail data kontak baru secara lengkap."}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Input Name */}
            <div>
              <label className="block text-gray-400 text-xs font-semibold mb-1.5 uppercase tracking-wider" htmlFor="name">
                Nama Lengkap <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500">
                  <FaUser className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nama lengkap kontak..."
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 bg-gray-900/40 border border-gray-700/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 ${focusBorderRing}`}
                  required
                />
              </div>
            </div>

            {/* Input Email */}
            <div>
              <label className="block text-gray-400 text-xs font-semibold mb-1.5 uppercase tracking-wider" htmlFor="email">
                Alamat Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500">
                  <FaEnvelope className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="alamat@email.com..."
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 bg-gray-900/40 border border-gray-700/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 ${focusBorderRing}`}
                />
              </div>
            </div>

            {/* Input Phone */}
            <div>
              <label className="block text-gray-400 text-xs font-semibold mb-1.5 uppercase tracking-wider" htmlFor="phone">
                Nomor Telepon <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500">
                  <FaPhone className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Contoh: 08123456789..."
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 bg-gray-900/40 border border-gray-700/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 ${focusBorderRing}`}
                  required
                />
              </div>
            </div>

            {/* Actions Buttons */}
            <div className="flex gap-4 pt-3">
              <button
                type="button"
                onClick={onClose}
                disabled={isSaving}
                className="flex-1 bg-gray-700/65 hover:bg-gray-700 text-gray-200 font-semibold py-3 px-4 rounded-xl border border-gray-600/45 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-center text-sm md:text-base"
              >
                Batal
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className={`flex-1 bg-gradient-to-r ${btnGradient} text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-center text-sm md:text-base`}
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Menyimpan...</span>
                  </>
                ) : (
                  <>
                    <FaSave className="w-3.5 h-3.5" />
                    <span>{isEditMode ? "Perbarui" : "Simpan"}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
