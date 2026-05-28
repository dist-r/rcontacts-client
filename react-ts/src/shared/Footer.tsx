import { Link } from 'react-router';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-450 border-t border-slate-900 py-16 font-sans relative z-10">
      <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        <div className="space-y-4">
          <h3 className="text-xl font-extrabold text-white tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-[#61dafb]">
            RContacts
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Your dynamic digital rolodex, designed with elite developer features and high speeds.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Navigate</h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link to="/home" className="text-slate-550 hover:text-[#61dafb] transition-colors duration-300">
                Home Dashboard
              </Link>
            </li>
            <li>
              <Link to="/signup" className="text-slate-550 hover:text-[#61dafb] transition-colors duration-300">
                Register Free
              </Link>
            </li>
            <li>
              <Link to="/signin" className="text-slate-550 hover:text-[#61dafb] transition-colors duration-300">
                Portal Login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Legal Framework</h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <a href="#" className="text-slate-550 hover:text-[#61dafb] transition-colors duration-300">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-550 hover:text-[#61dafb] transition-colors duration-300">
                Privacy Protocol
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Developer Network</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a 
              href="#" 
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#61dafb] hover:border-[#61dafb]/40 transition-all duration-300 shadow-sm"
              title="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a 
              href="#" 
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#61dafb] hover:border-[#61dafb]/40 transition-all duration-300 shadow-sm"
              title="Twitter"
            >
              <FaTwitter size={16} />
            </a>
            <a 
              href="#" 
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#61dafb] hover:border-[#61dafb]/40 transition-all duration-300 shadow-sm"
              title="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-slate-900/60 pt-8 text-center text-[10px] text-slate-650 font-mono">
        <p>&copy; {new Date().getFullYear()} RContacts. Synthesized for modern developer flows.</p>
      </div>
    </footer>
  );
}