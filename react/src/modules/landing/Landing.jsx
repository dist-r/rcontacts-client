import { Link } from 'react-router';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdFolder, MdSecurity, MdCloud } from 'react-icons/md';
import reactLogo from '../../assets/react.svg';

const Header = () => (
  <header className="bg-[#20232a] bg-opacity-80 backdrop-blur-lg text-white p-4 shadow-lg fixed w-full top-0 z-20">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center gap-2">
        {/* <img src={reactLogo} className="h-8 w-8 animate-spin-slow" alt="React Logo" /> */}
        <h1 className="text-2xl font-bold tracking-wider">RContacts</h1>
      </div>
      <nav>
        <Link to="/signin" className="text-gray-300 hover:text-white mr-4 transition-colors duration-300">
          <FiLogIn className="inline-block mr-1" />
          Sign In
        </Link>
        <Link to="/signup" className="bg-[#61dafb] hover:bg-[#4fa8d5] text-[#20232a] font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md">
          <FiUserPlus className="inline-block mr-1" />
          Sign Up
        </Link>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section 
    className="h-screen flex flex-col justify-center items-center text-white text-center overflow-hidden relative"
    style={{ background: 'linear-gradient(to bottom right, #20232a, #61dafb)' }}
  >
    {/* <img src={reactLogo} className="absolute w-[60vmin] h-[60vmin] animate-spin-slow opacity-20" alt="React Logo" /> */}
    <div className="z-10">
      <h2 className="text-6xl font-extrabold mb-4 animate-fade-in-down">Welcome to RContacts</h2>
      <p className="text-xl text-gray-300 mb-8 animate-fade-in-up">The seamless solution to manage your professional network.</p>
      <Link to="/signup" className="bg-[#61dafb] hover:bg-[#4fa8d5] text-[#20232a] font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg">
        Get Started For Free
      </Link>
    </div>
  </section>
);

const Features = () => (
  <section className="min-h-screen flex flex-col justify-center bg-[#f0f4f8] py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-16 text-[#20232a]">Why Choose RContacts?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        <div className="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
          <MdFolder className="inline-block mb-4 text-[#61dafb] size-12" />
          <h3 className="text-2xl font-bold mb-4 text-[#20232a]">Smart Organization</h3>
          <p className="text-gray-600">Easily add, edit, and categorize your contacts with a clean, intuitive interface.</p>
        </div>
        <div className="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
          <MdSecurity className="inline-block mb-4 text-[#61dafb] size-12" />
          <h3 className="text-2xl font-bold mb-4 text-[#20232a]">Bank-Level Security</h3>
          <p className="text-gray-600">Your data is encrypted and stored securely, because your privacy is our priority.</p>
        </div>
        <div className="p-8 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
          <MdCloud className="inline-block mb-4 text-[#61dafb] size-12" />
          <h3 className="text-2xl font-bold mb-4 text-[#20232a]">Always Accessible</h3>
          <p className="text-gray-600">Access your contacts from any device, anywhere in the world, anytime.</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#20232a] text-white py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left px-4">
      <div>
        <h3 className="text-lg font-bold mb-4">RContacts</h3>
        <p className="text-gray-400">Your digital rolodex, reimagined.</p>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Navigate</h3>
        <ul>
          <li><Link to="/" className="text-gray-400 hover:text-[#61dafb] transition-colors">Home</Link></li>
          <li><Link to="/signup" className="text-gray-400 hover:text-[#61dafb] transition-colors">Sign Up</Link></li>
          <li><Link to="/signin" className="text-gray-400 hover:text-[#61dafb] transition-colors">Sign In</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Legal</h3>
        <ul>
          <li><a href="#" className="text-gray-400 hover:text-[#61dafb] transition-colors">Terms of Service</a></li>
          <li><a href="#" className="text-gray-400 hover:text-[#61dafb] transition-colors">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Connect</h3>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="#" className="text-gray-400 hover:text-[#61dafb] transition-colors"><FaGithub size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-[#61dafb] transition-colors"><FaTwitter size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-[#61dafb] transition-colors"><FaLinkedin size={24} /></a>
        </div>
      </div>
    </div>
    <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
      <p>&copy; 2025 RContacts. All rights reserved.</p>
    </div>
  </footer>
);

function Landing(){
  return (
    <div className="bg-[#f0f4f8]">
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