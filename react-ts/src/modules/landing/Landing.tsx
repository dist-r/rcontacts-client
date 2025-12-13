import { Link } from 'react-router';
import Footer from '../../shared/Footer';
import { FaSignInAlt, FaUserPlus, FaFolderOpen, FaShieldAlt, FaGlobe } from 'react-icons/fa';

export default function Landing() {
  return (
    <div className="bg-[#f0f4f8]">
      <header className="bg-linear-to-br from-[#61dafb] to-[#3178c6] bg-opacity-90 backdrop-blur-md text-white p-4 shadow-md fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" className="w-8 h-8 mr-2" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript Logo" className="w-8 h-8 mr-2" />
            <h1 className="text-2xl font-bold tracking-wider">RContacts</h1>
          </div>
          <nav className="flex items-center space-x-4">
            <Link to="/signin" className="bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center border border-white/30">
              <FaSignInAlt className="mr-1" />
              Sign In
            </Link>
            <Link to="/signup" className="bg-white hover:bg-gray-100 text-[#3178c6] font-bold py-2 px-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 flex items-center">
              <FaUserPlus className="mr-1" />
              Sign Up
            </Link>
          </nav>
        </div>
      </header>
      <main>
        <section className="h-screen flex flex-col justify-center items-center bg-linear-to-br from-[#61dafb] to-[#3178c6] text-white text-center pt-16">
          <div className="container mx-auto">
            <h2 className="text-6xl font-extrabold mb-4 animate-fade-in-down">Welcome to RContacts</h2>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in-up">The seamless solution to manage your professional network.</p>
            <Link to="/signup" className="bg-[#61dafb] hover:bg-[#21b4d6] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg">
              Get Started For Free
            </Link>
          </div>
        </section>

        <section className="min-h-screen flex flex-col justify-center bg-[#f0f4f8] py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16 text-[#3178c6]">Why Choose RContacts?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <FaFolderOpen className="text-[#61dafb] text-5xl mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-[#3178c6]">Smart Organization</h3>
                <p className="text-gray-600">Easily add, edit, and categorize your contacts with a clean, intuitive interface.</p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <FaShieldAlt className="text-[#61dafb] text-5xl mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-[#3178c6]">Bank-Level Security</h3>
                <p className="text-gray-600">Your data is encrypted and stored securely, because your privacy is our priority.</p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <FaGlobe className="text-[#61dafb] text-5xl mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-[#3178c6]">Always Accessible</h3>
                <p className="text-gray-600">Access your contacts from any device, anywhere in the world, anytime.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}