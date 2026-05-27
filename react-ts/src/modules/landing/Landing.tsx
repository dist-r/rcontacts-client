import { Link } from 'react-router';
import Footer from '../../shared/Footer';
import { FaSignInAlt, FaUserPlus, FaFolderOpen, FaShieldAlt, FaGlobe, FaCode, FaDatabase, FaBolt } from 'react-icons/fa';

export default function Landing() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans overflow-hidden">
      {/* Fixed Glassmorphism Header */}
      <header className="bg-slate-950/70 backdrop-blur-md text-white p-4 border-b border-slate-900 fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 relative group">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                alt="React Logo" 
                className="w-8 h-8 animate-[spin_20s_linear_infinite] group-hover:scale-110 transition-transform" 
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" 
                alt="TypeScript Logo" 
                className="w-7 h-7 rounded-md shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform" 
              />
              {/* Glowing aura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#61dafb]/20 to-[#3178c6]/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <h1 className="text-xl md:text-2xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-[#61dafb] select-none">
              RContacts
            </h1>
          </div>
          <nav className="flex items-center space-x-3">
            <Link 
              to="/signin" 
              className="px-4 py-2 text-slate-350 hover:text-white hover:bg-slate-900 rounded-xl transition-all duration-300 text-sm font-semibold flex items-center gap-1.5"
            >
              <FaSignInAlt className="text-xs" />
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="bg-linear-to-r from-[#61dafb] to-[#3178c6] hover:from-[#21b4d6] hover:to-[#255ba1] text-white font-bold py-2 px-4 rounded-xl text-sm transition-all duration-300 shadow-md shadow-[#61dafb]/10 hover:shadow-[#61dafb]/20 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
            >
              <FaUserPlus className="text-xs" />
              Sign Up
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative pt-16">
        {/* Dynamic Neon Background Glows */}
        <div className="absolute top-20 left-10 md:left-1/4 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-cyan-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute top-80 right-10 md:right-1/4 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-blue-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2.5s' }}></div>

        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 relative z-10 pt-16 md:pt-24">
          <div className="container mx-auto max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-[#61dafb] text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#61dafb] animate-ping"></span>
              Built for React & TypeScript Ecosystems
            </div>

            <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-6 leading-tight select-none">
              A Elegant Contact Manager <br className="hidden md:inline" />
              For <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#61dafb] via-[#3178c6] to-cyan-300 font-extrabold bg-[length:200%_auto] animate-[shiny_5s_linear_infinite]">Developers</span>
            </h2>

            <p className="text-base md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience type-safe contact organization built with React 19, high-performance API caches, and clean cyberpunk layouts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link 
                to="/signup" 
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 bg-gradient-to-r from-[#61dafb] to-[#3178c6] hover:from-[#21b4d6] hover:to-[#255ba1] text-white font-bold rounded-xl text-md transition-all duration-300 shadow-xl shadow-[#61dafb]/15 hover:shadow-[#61dafb]/25 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Get Started For Free
              </Link>
              <Link 
                to="/signin" 
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-semibold rounded-xl text-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Sign In to Account
              </Link>
            </div>

            {/* Interactive Cyber Mockup Preview */}
            <div className="relative mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-3 md:p-4 shadow-[0_0_50px_rgba(97,218,251,0.08)] transform hover:scale-[1.01] transition-transform duration-500 group">
              {/* Glow border line on top */}
              <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#61dafb] to-transparent"></div>
              
              <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-900">
                {/* Terminal / Window Title Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-900">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  </div>
                  <div className="text-xs font-mono text-slate-500 tracking-wider flex items-center gap-1.5">
                    <FaCode className="text-[#61dafb]" />
                    src/types/contact.ts
                  </div>
                  <span className="text-[10px] bg-slate-800 text-[#61dafb] px-2 py-0.5 rounded font-bold uppercase">v19.2</span>
                </div>

                {/* Mockup Split Panel */}
                <div className="grid grid-cols-1 md:grid-cols-2 text-left">
                  {/* Left Side: Code block preview */}
                  <div className="p-4 md:p-6 bg-slate-950 font-mono text-xs text-slate-400 border-b md:border-b-0 md:border-r border-slate-900 select-none overflow-x-auto">
                    <div className="text-slate-500 mb-2">// Fully type-safe application structures</div>
                    <div>
                      <span className="text-[#3178c6]">export interface</span> <span className="text-[#61dafb]">Contact</span> &#123;
                    </div>
                    <div className="pl-4">
                      id: <span className="text-amber-400">string</span>;
                    </div>
                    <div className="pl-4">
                      name: <span className="text-amber-400">string</span>;
                    </div>
                    <div className="pl-4">
                      email: <span className="text-amber-400">string</span>;
                    </div>
                    <div className="pl-4">
                      phone: <span className="text-amber-400">string</span>;
                    </div>
                    <div>&#125;</div>

                    <div className="mt-6 text-slate-500 mb-2">// Fetch cache hook via TanStack query</div>
                    <div>
                      <span className="text-purple-400">const</span> &#123; contacts, isLoading &#125; = <span className="text-blue-400">useContacts</span>();
                    </div>
                  </div>

                  {/* Right Side: Visual App Mockup */}
                  <div className="p-6 bg-slate-900/40 relative flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-bold text-white">Contacts (3)</h4>
                        <span className="text-[10px] text-[#61dafb] bg-[#61dafb]/10 px-2 py-0.5 rounded-full font-bold">Sync Active</span>
                      </div>
                      
                      {/* Search Mockup */}
                      <div className="w-full bg-slate-950/80 border border-slate-800 rounded-lg py-1.5 px-3 text-xs text-slate-500 mb-4 flex items-center">
                        Search contacts...
                      </div>

                      {/* Contact Cards Mockup */}
                      <div className="space-y-2">
                        <div className="p-3 bg-slate-900 border border-slate-800/80 rounded-lg flex items-center justify-between">
                          <div>
                            <div className="text-xs font-bold text-white">Rizki Ramadhan</div>
                            <div className="text-[10px] text-slate-500">rizki@contacts.com</div>
                          </div>
                          <span className="text-[9px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700">Mobile</span>
                        </div>
                        <div className="p-3 bg-slate-900/60 border border-slate-800/40 rounded-lg flex items-center justify-between opacity-75">
                          <div>
                            <div className="text-xs font-bold text-white">Alice Johnson</div>
                            <div className="text-[10px] text-slate-500">alice@developer.com</div>
                          </div>
                          <span className="text-[9px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-750">Work</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section (Features Grid) */}
        <section className="py-24 bg-slate-950 border-t border-slate-900/50 relative z-10">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h3 className="text-xs font-semibold text-[#61dafb] tracking-widest uppercase mb-3">Enterprise Standard</h3>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-16 tracking-tight">
              Designed For High-Speed Workflows
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* Feature 1 */}
              <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-[#61dafb]/30 hover:shadow-[0_0_30px_rgba(97,218,251,0.05)] transform hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-[#61dafb] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaFolderOpen className="text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Smart Organization</h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Add, update, or search your professional network dynamically using instant queries and a clean single-page dashboard.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-[#3178c6]/30 hover:shadow-[0_0_30px_rgba(49,120,198,0.05)] transform hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-[#3178c6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaShieldAlt className="text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">TypeScript Type-Safety</h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Enforces complete static compilation verification at dev time to protect and validate incoming payload operations.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.05)] transform hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaGlobe className="text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Global Sync State</h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Never suffer state lag. Access robust cache invalidation networks to ensure instantaneous updates on any client viewport.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Showcase */}
        <section className="py-20 border-t border-slate-900/50 bg-slate-900/10 relative z-10">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h3 className="text-xs font-semibold text-slate-500 tracking-wider uppercase mb-8">Powering the Application</h3>
            
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 opacity-75 hover:opacity-100 transition-opacity">
              <div className="px-5 py-2.5 bg-slate-900/60 border border-slate-800/80 rounded-xl flex items-center gap-2 hover:border-slate-700 transition-colors shadow">
                <FaCode className="text-[#61dafb] text-sm" />
                <span className="text-xs font-semibold font-mono text-slate-350">React 19.2</span>
              </div>
              <div className="px-5 py-2.5 bg-slate-900/60 border border-slate-800/80 rounded-xl flex items-center gap-2 hover:border-slate-700 transition-colors shadow">
                <FaDatabase className="text-[#3178c6] text-sm" />
                <span className="text-xs font-semibold font-mono text-slate-350">TypeScript 5.9</span>
              </div>
              <div className="px-5 py-2.5 bg-slate-900/60 border border-slate-800/80 rounded-xl flex items-center gap-2 hover:border-slate-700 transition-colors shadow">
                <FaBolt className="text-[#61dafb] text-sm" />
                <span className="text-xs font-semibold font-mono text-slate-350">Tailwind v4</span>
              </div>
              <div className="px-5 py-2.5 bg-slate-900/60 border border-slate-800/80 rounded-xl flex items-center gap-2 hover:border-slate-700 transition-colors shadow">
                <FaCode className="text-rose-400 text-sm" />
                <span className="text-xs font-semibold font-mono text-slate-350">TanStack Query</span>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic CTA Banner */}
        <section className="py-24 relative z-10 px-4">
          <div className="container mx-auto max-w-4xl bg-linear-to-r from-slate-900 via-indigo-950/20 to-slate-900 border border-slate-850 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Glowing bubble within CTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 max-w-xl mx-auto space-y-6">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Ready to organize your network?
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                Join developer networks globally using RContacts. Setup is entirely free, quick, and built for modern speeds.
              </p>
              <div className="pt-4">
                <Link 
                  to="/signup" 
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-linear-to-r from-[#61dafb] to-[#3178c6] hover:from-[#21b4d6] hover:to-[#255ba1] text-white font-bold rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(97,218,251,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Create Your Free Account
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes shiny {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
}