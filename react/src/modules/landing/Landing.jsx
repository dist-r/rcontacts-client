import { Link } from 'react-router';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Header = () => (
  <header className="bg-gray-900 bg-opacity-75 backdrop-blur-md text-white p-4 shadow-md fixed w-full top-0 z-10">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wider">RContacts</h1>
      <nav>
        <Link to="/signin" className="text-gray-300 hover:text-white mr-4 transition-colors duration-300">
          <FiLogIn className="inline-block mr-1" />
          Sign In
        </Link>
        <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
          <FiUserPlus className="inline-block mr-1" />
          Sign Up
        </Link>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white text-center">
    <div className="container mx-auto">
      <h2 className="text-6xl font-extrabold mb-4 animate-fade-in-down">Welcome to RContacts</h2>
      <p className="text-xl text-gray-300 mb-8 animate-fade-in-up">The seamless solution to manage your professional network.</p>
      <Link to="/signup" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg">
        Get Started For Free
      </Link>
    </div>
  </section>
);

const Features = () => (
  <section className="min-h-screen flex flex-col justify-center bg-gray-100 py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-16">Why Choose RContacts?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Smart Organization</h3>
          <p className="text-gray-600">Easily add, edit, and categorize your contacts with a clean, intuitive interface.</p>
        </div>
        <div className="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Bank-Level Security</h3>
          <p className="text-gray-600">Your data is encrypted and stored securely, because your privacy is our priority.</p>
        </div>
        <div className="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Always Accessible</h3>
          <p className="text-gray-600">Access your contacts from any device, anywhere in the world, anytime.</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
      <div>
        <h3 className="text-lg font-bold mb-4">RContacts</h3>
        <p className="text-gray-400">Your digital rolodex, reimagined.</p>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Navigate</h3>
        <ul>
          <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
          <li><Link to="/signup" className="text-gray-400 hover:text-white">Sign Up</Link></li>
          <li><Link to="/signin" className="text-gray-400 hover:text-white">Sign In</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Legal</h3>
        <ul>
          <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Connect</h3>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="#" className="text-gray-400 hover:text-white"><FaGithub size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
        </div>
      </div>
    </div>
    <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
      <p>&copy; 2025 RContacts. All rights reserved.</p>
    </div>
  </footer>
);

function Landing(){
  return (
    <div className="bg-gray-100">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default Landing;