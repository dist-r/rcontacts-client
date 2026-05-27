import { Link, useNavigate } from 'react-router';
import { FaHome, FaArrowLeft, FaQuestionCircle } from 'react-icons/fa';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-hidden font-sans">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-[#61dafb]/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-[#3178c6]/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-lg w-full mx-4 bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-[0_0_50px_rgba(97,218,251,0.15)] p-8 md:p-12 text-center border border-slate-800/80">
        <div className="flex flex-col items-center gap-6">
          {/* Animated Graphic */}
          <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-slate-800/80 text-[#61dafb] shadow-[0_0_20px_rgba(97,218,251,0.3)] border border-slate-700/50 animate-bounce">
            <FaQuestionCircle className="w-12 h-12 text-[#61dafb]" />
            {/* Spinning ring around the icon */}
            <div className="absolute -inset-1 rounded-full border-2 border-dashed border-[#61dafb]/40 animate-[spin_15s_linear_infinite]"></div>
          </div>

          <div className="space-y-2">
            <h1 className="text-7xl md:text-8xl font-black tracking-wider bg-clip-text text-transparent bg-linear-to-r from-[#61dafb] via-[#3178c6] to-[#61dafb] bg-[length:200%_auto] animate-[shiny_4s_linear_infinite] select-none">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Page Not Found
            </h2>
            <p className="text-base text-slate-400 max-w-sm mx-auto leading-relaxed">
              Upsss! The route you are looking for does not exist, or the page has been moved to a new address.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="w-full flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-850 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold rounded-xl border border-slate-700/85 hover:border-slate-650 shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <FaArrowLeft className="w-4 h-4" />
              Go Back
            </button>
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-[#61dafb] to-[#3178c6] hover:from-[#21b4d6] hover:to-[#255ba1] text-white font-bold rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(97,218,251,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FaHome className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Styled shiny text custom styling inside jsx */}
      <style>{`
        @keyframes shiny {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
}