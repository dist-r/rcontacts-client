function ModalPopUp({ children, isOpen, onClick }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/30 backdrop-blur-xs animate-fade-in">
      <div className="absolute inset-0 -z-10" onClick={onClick} />

      <div className="w-full max-w-lg bg-white/80 backdrop-blur-md border border-white/50 p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden animate-slide-down">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500" />
        <button
          onClick={onClick}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-150 p-1.5 rounded-lg hover:bg-black/5"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mt-2 mb-6">
          {children}
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClick}
            className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalPopUp;