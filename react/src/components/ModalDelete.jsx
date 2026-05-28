import { FaExclamationTriangle, FaTrash } from "react-icons/fa";

function getInitials(name) {
  if (!name) return "";
  const nameParts = name.trim().split(/\s+/);
  if (nameParts.length === 1) {
    return nameParts[0].charAt(0).toUpperCase();
  }
  return (
    nameParts[0].charAt(0).toUpperCase() +
    nameParts[nameParts.length - 1].charAt(0).toUpperCase()
  );
}

function ModalDelete({ data, isOpen, onCancel, onDelete, isDeleting }) {
  if (!isOpen || !data) {
    return null;
  }

  const initials = getInitials(data.name);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300"
        onClick={isDeleting ? undefined : onCancel}
      />
      
      {/* Modal Card */}
      <div className="bg-gray-800 border border-gray-700/50 rounded-2xl shadow-2xl w-full max-w-md transform overflow-hidden transition-all duration-300 scale-100 z-10 flex flex-col">
        {/* Decorative Top Accent */}
        <div className="h-1.5 bg-gradient-to-r from-red-500 via-rose-600 to-red-500 w-full" />
        
        <div className="p-6 md:p-8 flex flex-col items-center text-center">
          {/* Animated Warning Emblem */}
          <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center text-red-500 mb-5 animate-pulse">
            <FaExclamationTriangle className="w-8 h-8" />
          </div>
          
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
            Hapus Kontak?
          </h3>
          
          {/* Warning Message */}
          <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
            Apakah Anda yakin ingin menghapus kontak ini? Tindakan ini tidak dapat dibatalkan.
          </p>

          {/* Target Contact Display Card */}
          <div className="w-full bg-gray-900/40 border border-gray-700/40 rounded-xl p-4 mb-6 flex items-center text-left hover:bg-gray-900/60 transition-colors duration-200">
            <div className="w-11 h-11 mr-4 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-md shadow-red-500/25">
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm md:text-base font-semibold text-white truncate">{data.name}</p>
              {data.email && <p className="text-xs text-gray-400 truncate mt-0.5">{data.email}</p>}
              {data.phone && <p className="text-xs text-gray-400 truncate mt-0.5">{data.phone}</p>}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 w-full">
            <button
              type="button"
              onClick={onCancel}
              disabled={isDeleting}
              className="flex-1 bg-gray-700/65 hover:bg-gray-700 text-gray-200 font-semibold py-3 px-4 rounded-xl border border-gray-600/45 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-center text-sm md:text-base"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={onDelete}
              disabled={isDeleting}
              className="flex-1 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-red-600/15 hover:shadow-red-600/25 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-center text-sm md:text-base"
            >
              {isDeleting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Menghapus...</span>
                </>
              ) : (
                <>
                  <FaTrash className="w-3.5 h-3.5" />
                  <span>Hapus</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;