import { Link } from 'react-router';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#3178c6] text-gray-200 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-lg font-bold mb-4">RContacts</h3>
          <p className="text-gray-400">Your digital rolodex, reimagined.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Navigate</h3>
          <ul>
            <li><Link to="/home" className="text-gray-400 hover:text-[#61dafb]">Home</Link></li>
            <li><Link to="/signup" className="text-gray-400 hover:text-[#61dafb]">Sign Up</Link></li>
            <li><Link to="/signin" className="text-gray-400 hover:text-[#61dafb]">Sign In</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Legal</h3>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-[#61dafb]">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#61dafb]">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-[#61dafb]"><FaGithub size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-[#61dafb]"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-[#61dafb]"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
        <p>&copy; 2025 RContacts. All rights reserved.</p>
      </div>
    </footer>
  );
}