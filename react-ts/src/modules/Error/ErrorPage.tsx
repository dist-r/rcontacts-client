import { useState } from 'react';
import { useRouteError, Link } from 'react-router';
import { FaExclamationTriangle, FaSync, FaTrashAlt, FaHome, FaChevronDown, FaChevronUp, FaTerminal } from 'react-icons/fa';

export default function ErrorPage() {
  const error = useRouteError();
  const [showDetails, setShowDetails] = useState(false);

  let errorMessage = "An unexpected error occurred.";
  let errorStatus = "500";
  let errorStack = "";

  if (error && typeof error === 'object') {
    if ('statusText' in error && typeof error.statusText === 'string') {
      errorMessage = error.statusText;
    } else if ('message' in error && typeof error.message === 'string') {
      errorMessage = error.message;
    }

    if ('status' in error) {
      errorStatus = String(error.status);
    }

    if ('stack' in error && typeof error.stack === 'string') {
      errorStack = error.stack;
    }
  } else if (typeof error === 'string') {
    errorMessage = error;
  }

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleClearAndRetry = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
    } catch (e) {
      console.error("Failed to clear storage:", e);
    }
    window.location.href = '/';
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-rose-950/30 overflow-hidden font-sans p-4">
      {/* Background soft blurs */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '3s' }}></div>

      <div className="relative max-w-2xl w-full bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-[0_0_50px_rgba(239,68,68,0.15)] p-8 md:p-12 border border-slate-800/80">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Animated Warning Icon */}
          <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-rose-500/10 text-rose-500 shadow-[0_0_30px_rgba(239,68,68,0.2)] border border-rose-500/30 animate-pulse">
            <FaExclamationTriangle className="w-10 h-10" />
            <div className="absolute inset-0 rounded-full border-2 border-rose-500/20 animate-ping" style={{ animationDuration: '3s' }}></div>
          </div>

          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-widest rounded-full">
              System Error {errorStatus}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight pt-2">
              Something went wrong
            </h1>
            <p className="text-slate-400 max-w-md mx-auto leading-relaxed text-sm md:text-base">
              The application encountered an unexpected error and could not proceed. We apologize for the inconvenience.
            </p>
          </div>

          {/* Quick Error Message Display */}
          <div className="w-full max-w-md px-4 py-3 bg-slate-950/50 border border-slate-800/60 rounded-xl text-slate-350 text-sm font-mono break-all select-all text-slate-900">
            <span className="text-rose-400 font-semibold">Error:</span> {errorMessage}
          </div>

          {/* Collapsible Technical Details */}
          <div className="w-full">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="inline-flex items-center gap-2 text-xs md:text-sm text-slate-400 hover:text-white transition-colors cursor-pointer select-none bg-slate-800/40 hover:bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-800"
            >
              <FaTerminal className="w-3.5 h-3.5 text-[#61dafb]" />
              <span>{showDetails ? "Hide Technical Details" : "Show Technical Details"}</span>
              {showDetails ? <FaChevronUp className="w-3 h-3 ml-1" /> : <FaChevronDown className="w-3 h-3 ml-1" />}
            </button>

            {showDetails && (
              <div className="mt-4 text-left w-full bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/70"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/70"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/70"></span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Diagnostics Console</span>
                </div>
                <div className="p-4 overflow-x-auto font-mono text-xs text-rose-350 max-h-60 space-y-2 select-text custom-scrollbar">
                  <div>
                    <span className="text-slate-500 font-semibold">[Type]:</span> React Router Boundary Error
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold">[Status]:</span> {errorStatus}
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold">[Message]:</span> {errorMessage}
                  </div>
                  {errorStack && (
                    <div className="pt-2 border-t border-slate-900">
                      <span className="text-slate-500 font-semibold block mb-1">[Stack Trace]:</span>
                      <pre className="whitespace-pre text-slate-450 leading-relaxed text-[11px] font-mono">{errorStack}</pre>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Recovery Actions Grid */}
          <div className="w-full max-w-md grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <button
              onClick={handleRefresh}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-850 hover:bg-slate-850 border border-slate-700/80 hover:border-slate-600 text-slate-200 hover:text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <FaSync className="w-3.5 h-3.5" />
              Refresh
            </button>
            <button
              onClick={handleClearAndRetry}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-rose-950/20 hover:bg-rose-950/40 border border-rose-900/40 hover:border-rose-800/80 text-rose-300 hover:text-rose-200 font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              title="Clears all cache, local tokens, and routes back home"
            >
              <FaTrashAlt className="w-3.5 h-3.5" />
              Clear & Retry
            </button>
            <Link
              to="/"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-[#61dafb] to-[#3178c6] hover:from-[#21b4d6] hover:to-[#255ba1] text-white font-bold rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(97,218,251,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FaHome className="w-3.5 h-3.5" />
              Home
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #020617;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      `}</style>
    </div>
  );
}