import Link from 'next/link';
import Footer from '../shared/Footer';
import { FaSignInAlt, FaUserPlus, FaFolderOpen, FaShieldAlt, FaGlobe, FaUsers } from 'react-icons/fa';

export default function Landing() {
  return (
    <div className="bg-linear-to-br from-gray-100 to-gray-300 min-h-screen">
      <header className="bg-linear-to-r from-gray-800 to-black text-white p-4 shadow-md fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <FaUsers className="w-8 h-8 mr-2 text-white" />
            <h1 className="text-2xl font-bold tracking-wider">RContacts</h1>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/signin" className="bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center border border-white/30">
              <FaSignInAlt className="mr-1" />
              Sign In
            </Link>
            <Link href="/signup" className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 flex items-center">
              <FaUserPlus className="mr-1" />
              Sign Up
            </Link>
          </nav>
        </div>
      </header>
      <main>
        <section className="h-screen flex flex-col justify-center items-center bg-linear-to-br from-gray-800 to-black text-white text-center pt-16">
          <div className="container mx-auto">
            <h2 className="text-6xl font-extrabold mb-4">Welcome to RContacts</h2>
            <p className="text-xl text-gray-300 mb-8">The seamless solution to manage your professional network.</p>
            <Link href="/signup" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg">
              Get Started For Free
            </Link>
          </div>
        </section>

        <section className="min-h-screen flex flex-col justify-center bg-linear-to-br from-gray-100 to-gray-300 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16 text-gray-800">Why Choose RContacts?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <FaFolderOpen className="text-gray-600 text-5xl mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Smart Organization</h3>
                <p className="text-gray-600">Easily add, edit, and categorize your contacts with a clean, intuitive interface.</p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <FaShieldAlt className="text-gray-600 text-5xl mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Bank-Level Security</h3>
                <p className="text-gray-600">Your data is encrypted and stored securely, because your privacy is our priority.</p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <FaGlobe className="text-gray-600 text-5xl mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Always Accessible</h3>
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
